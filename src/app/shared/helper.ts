import { Injectable } from '@angular/core';
import { Logger } from './services';
import { Location } from './class';
import { DecimalPipe } from '@angular/common';
import { round_value } from './data.service';
import { Stock2, HeatLoadResult } from 'app/features/heat-load/graphical-view/shared';
import { MONTHNAME } from 'app/shared/class/month.data';
import { GeojsonClass } from '../features/layers/class/geojson.class';

@Injectable()
export class Helper {
  private monthData = MONTHNAME;
  constructor(private logger: Logger, private decimalPipe: DecimalPipe) {
  }

  // check if unfined or not
  isNullOrUndefined(x: any) {
    let result = false;
    if (x == null) {
      result = true;
    }

    if (x === null) {
      result = true;
    }
    if (typeof x === 'undefined') {
      result = true;
    }
    return result;
  }

  // convert getlatLong() form path leaflet to array of location[]
  convertLatLongToLocation(latlng): Location[] {
    let n = 0;
    const locations = [];
    do {
      const loc: Location = {
        lat: latlng[n].lat,
        lng: latlng[n].lng
      };
      locations.push(loc);
      n++;
    } while (!this.isNullOrUndefined(latlng[n]));

    return locations;
  }

  convertListLatLongToLocation(latlngArray): Location[] {
    const locations = [];
    const latlng = latlngArray[0][0];
    for (let i = 0; i < latlng.length; i++) {
      const loc: Location = {
        lat: latlng[i][1],
        lng: latlng[i][0]
      };
      locations.push(loc);
    }
    return locations;
  }
  convertLatLongToLocationString(latlng): string {
    let n = 0;
    let locations = '';
    do {
      const loc = latlng[n].lat + ' ' + latlng[n].lng + ','
      locations = locations + loc;
      n++;
    } while (!this.isNullOrUndefined(latlng[n]));

    const loc = latlng[0].lat + ' ' + latlng[0].lng
    locations = locations + loc;
    return locations;
  }

  createGeodesicPolygon(origin, radius, sides, rotation) {

    var latlon = origin; //leaflet equivalent
    var angle;
    var new_lonlat, geom_point;
    var points = [];

    for (var i = 0; i < sides; i++) {
      angle = (i * 360 / sides) + rotation;
      new_lonlat = this.destinationVincenty(latlon, angle, radius);
      geom_point = L.latLng(new_lonlat.lng, new_lonlat.lat);

      points.push(geom_point);
    }

    return points;

  }

  destinationVincenty(lonlat, brng, dist) { //rewritten to work with leaflet
    const VincentyConstants = {
      a: 6378137,
      b: 6356752.3142,
      f: 1 / 298.257223563
    };
    let u = L.Util;
    var ct = VincentyConstants;
    var a = ct.a, b = ct.b, f = ct.f;
    var lon1 = lonlat.lng;
    var lat1 = lonlat.lat;
    var s = dist;
    var pi = Math.PI;
    var alpha1 = brng * pi / 180; //converts brng degrees to radius
    var sinAlpha1 = Math.sin(alpha1);
    var cosAlpha1 = Math.cos(alpha1);
    var tanU1 = (1 - f) * Math.tan(lat1 * pi / 180 /* converts lat1 degrees to radius */);
    var cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1)), sinU1 = tanU1 * cosU1;
    var sigma1 = Math.atan2(tanU1, cosAlpha1);
    var sinAlpha = cosU1 * sinAlpha1;
    var cosSqAlpha = 1 - sinAlpha * sinAlpha;
    var uSq = cosSqAlpha * (a * a - b * b) / (b * b);
    var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    var sigma = s / (b * A), sigmaP = 2 * Math.PI;
    while (Math.abs(sigma - sigmaP) > 1e-12) {
      var cos2SigmaM = Math.cos(2 * sigma1 + sigma);
      var sinSigma = Math.sin(sigma);
      var cosSigma = Math.cos(sigma);
      var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
        B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
      sigmaP = sigma;
      sigma = s / (b * A) + deltaSigma;
    }
    var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
    var lat2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1,
      (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp));
    var lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1);
    var C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
    var lam = lambda - (1 - C) * f * sinAlpha *
      (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    var revAz = Math.atan2(sinAlpha, -tmp);  // final bearing
    var lamFunc = lon1 + (lam * 180 / pi); //converts lam radius to degrees
    var lat2a = lat2 * 180 / pi; //converts lat2a radius to degrees

    return L.latLng(lamFunc, lat2a);

  }

  latLngsToCoords(arrLatlng) {
    const self = this;
    const coords = [];
    arrLatlng.forEach(function (latlng) {
      coords.push([latlng.lng, latlng.lat]);
    },
      this);
    return coords;
  }

  round(num: string): string {
    if (this.isNullOrUndefined(num) === true) { return num };
    return this.decimalPipe.transform(num, round_value);
  }
  formatDataLoadProfil(data) {
    console.log(data);
    // const loadProfileData: LoadProfile;
    const formattedValues: HeatLoadResult[] = [];
    const minStockValue: HeatLoadResult = { name: 'Min', series: [] };
    const maxStockValue: HeatLoadResult = { name: 'Max', series: [] };
    const averageStockValue: HeatLoadResult = { name: 'Average', series: [] };
    data.values.map((value) => {
      averageStockValue.series.push(
      {
        name: this.getMonthString(this.getDate(value).getMonth()),
        value: +this.round(value.average)
      });
      maxStockValue.series.push(
        {
          name: this.getMonthString(this.getDate(value).getMonth()),
          value: +this.round(value.max)
        });
      minStockValue.series.push({
        name: this.getMonthString(this.getDate(value).getMonth()),
        value: +this.round(value.min)
      });
    });
    formattedValues.push(maxStockValue);
    formattedValues.push(averageStockValue);
    formattedValues.push(minStockValue);
    console.log('formattedValues');
    console.log(formattedValues);
    return formattedValues;
  }
  private getDate(heatload: any): Date {
    const date = new Date(heatload.year + '-' + heatload.month + '-01');
    return date;

  }
  private getMonthString(numberOfMonth) {
    const month = MONTHNAME.filter(m => m.id === numberOfMonth + 1)[0];
    // console.log(month);
    return month.month;
  }

  getLocationsFromPolygon(layer): Location[] {
    const rectangle: any = <any>layer;
    const latlng = rectangle.getLatLngs()[0];
    const locations: Location[] = this.convertLatLongToLocation(latlng);
    this.logger.log('locations [] ' + locations);
    return locations
  }

  getLocationsFromGeoJsonLayer(layer): Location[] {
    const geojsonLayer: any = <any>layer;
    const geoJson: GeojsonClass = geojsonLayer.toGeoJSON();
    this.logger.log('geoJson latlng ' + geoJson.features[0].geometry.coordinates);
    const latlng: number[] = geoJson.features[0].geometry.coordinates;

    const locations: Location[] = this.convertListLatLongToLocation(latlng);
    this.logger.log('locations [] ' + locations);
    return locations
  }

  getNUTSIDFromGeoJsonLayer(layer): string {
    const geojsonLayer: any = <any>layer;
    const geoJson: GeojsonClass = geojsonLayer.toGeoJSON();
    const nuts_id: string = geoJson.features[0].properties.nuts_id;
    return nuts_id;
  }
  getLAU2IDFromGeoJsonLayer(layer): string {
    const geojsonLayer: any = <any>layer;
    const geoJson: GeojsonClass = geojsonLayer.toGeoJSON();
    const lau2_id: string = geoJson.features[0].properties.comm_id;
    return lau2_id;
  }

  getLocationsFromCicle(layer): Location[] {
    const circle: any = <any>layer;
    const origin = circle.getLatLng(); // center of drawn circle
    const radius = circle.getRadius(); // radius of drawn circle
    const polys = this.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
    const locations = [];
    for (let i = 0; i < polys.length; i++) {
      const loc: Location = {
        lat: polys[i].lat,
        lng: polys[i].lng
      };
      locations.push(loc);
    }
    return locations
  }


}


