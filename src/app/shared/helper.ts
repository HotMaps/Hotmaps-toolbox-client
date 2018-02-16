import {Injectable} from '@angular/core';
import {Logger} from './services';
import {Location} from './class';
import { DecimalPipe } from '@angular/common';
import {proj3035, round_value} from './data.service';
import { MONTHNAME } from 'app/shared/class/month.data';
import {GeojsonClass} from '../features/layers/class/geojson.class';
import { DatasetChart } from 'app/features/chart/chart';
import * as proj4x from 'proj4';
import { Point, toPoint } from 'proj4';
import * as contain from '@turf/boolean-contains';

const proj4 = (proj4x as any).default;


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
      const loc =  latlng[n].lat + ' ' + latlng[n].lng + ','
      locations = locations + loc;
      n++;
    } while (!this.isNullOrUndefined(latlng[n]));

    const loc =  latlng[0].lat + ' ' + latlng[0].lng
    locations = locations + loc;
    return locations;
  }

  convertPostGisLatLongToLocationString(latlng): string {
    let n = 0;
    let locations = '';
    do {
      const loc =  latlng[n].lng + ' ' + latlng[n].lat + ','
      locations = locations + loc;
      n++;
    } while (!this.isNullOrUndefined(latlng[n]));

    const loc =  latlng[0].lng + ' ' + latlng[0].lat
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
    arrLatlng.forEach(function(latlng) {
        coords.push( [latlng.lng, latlng.lat]);
      },
      this);
    return coords;
  }

  round(num: string): string {
    if (this.isNullOrUndefined(num) === true) { return num};
    return this.decimalPipe.transform(num, round_value );
  }
   formatDataLoadProfil(data) {
    const formattedValues = [];
    const labels = [];
    const DataValues = [];
    data.values.map((value) => {
      labels.push(this.getMonthString(this.getDate(value).getMonth(), 1));
      DataValues.push(Math.round(value.max))
    });
    formattedValues.push(labels, DataValues);
    return formattedValues;
  }
  private getDate(heatload: any): Date {
    const date = new Date(heatload.year + '-' + heatload.month + '-01');
    return date;

  }
  getMonthString(numberOfMonth, index) {
    const month = MONTHNAME.filter(m => m.id === numberOfMonth + index)[0];
    return month.month;
  }

  getLocationsFromPolygon(layer): Location[] {
    const rectangle: any = <any>layer;
    const latlng = rectangle.getLatLngs()[0];
    const locations: Location[] = this.convertLatLongToLocation(latlng);
    this.logger.log('locations [] ' + locations );
    return locations
  }

  getLocationsFromGeoJsonLayer(layer): Location[] {
    const geojsonLayer: any = <any>layer;
    const geoJson: GeojsonClass = geojsonLayer.toGeoJSON();
    this.logger.log('geoJson latlng ' +  geoJson.features[0].geometry.coordinates );
    const latlng: number[] = geoJson.features[0].geometry.coordinates;

    const locations: Location[] = this.convertListLatLongToLocation(latlng);
    this.logger.log('locations [] ' + locations );
    return locations
  }

  transformLatLngToEpsg(latlng: L.LatLng, epsgString: String) {
    return proj4(epsgString).forward([latlng.lng, latlng.lat]);
  }
  transformLatLngToEpsg3035(latlng: L.LatLng, ) {
    return proj4(proj3035).forward([latlng.lng, latlng.lat]);
  }

  getTranformedBoundingBox(map: any, epsgString): number[] {
    const coordinate = [];
    const bound = map.getBounds();
    const northEastTransformed = this.transformLatLngToEpsg(bound.getNorthEast(), epsgString);
    const southWestTransformed  = this.transformLatLngToEpsg(bound.getSouthWest(), epsgString);
    coordinate.push(southWestTransformed[1], southWestTransformed[0]);
    coordinate.push(northEastTransformed[1], northEastTransformed[0]);
    return coordinate;
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

  checkIntersect(l1, l2) {
    var intersects = false;
    for (var i = 0; i <= l1.coordinates.length - 2; ++i) {
        for (var j = 0; j <= l2.coordinates.length - 2; ++j) {
            var a1Latlon = L.latLng(l1.coordinates[i][1], l1.coordinates[i][0]),
                a2Latlon = L.latLng(l1.coordinates[i + 1][1], l1.coordinates[i + 1][0]),
                b1Latlon = L.latLng(l2.coordinates[j][1], l2.coordinates[j][0]),
                b2Latlon = L.latLng(l2.coordinates[j + 1][1], l2.coordinates[j + 1][0]),
                a1 = L.Projection.SphericalMercator.project(a1Latlon),
                a2 = L.Projection.SphericalMercator.project(a2Latlon),
                b1 = L.Projection.SphericalMercator.project(b1Latlon),
                b2 = L.Projection.SphericalMercator.project(b2Latlon),
                ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
                ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
                u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
            if (u_b != 0) {
                var ua = ua_t / u_b,
                    ub = ub_t / u_b;
                if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                    intersects=true;
                }
            }
        }
    }

    return intersects;
  }
  lineify(inputGeom) {
    var outputLines = {
        "type": "GeometryCollection",
            "geometries": []
    }
    switch (inputGeom.type) {
        case "GeometryCollection":
            for (var i in inputGeom.geometries) {
                var geomLines = this.lineify(inputGeom.geometries[i]);
                if (geomLines) {
                    for (var j in geomLines.geometries) {
                        outputLines.geometries.push(geomLines.geometries[j]);
                    }
                } else {
                    outputLines = null;
                }
            }
            break;
        case "Feature":
            var geomLines = this.lineify(inputGeom.geometry);
            if (geomLines) {
                for (var j in geomLines.geometries) {
                    outputLines.geometries.push(geomLines.geometries[j]);
                }
            } else {
                outputLines = null;
            }
            break;
        case "FeatureCollection":
            for (var i in inputGeom.features) {
                var geomLines = this.lineify(inputGeom.features[i].geometry);
                if (geomLines) {
                    for (var j in geomLines.geometries) {
                        outputLines.geometries.push(geomLines.geometries[j]);
                    }
                } else {
                    outputLines = null;
                }
            }
            break;
        case "LineString":
            outputLines.geometries.push(inputGeom);
            break;
        case "MultiLineString":
        case "Polygon":
            for (var i in inputGeom.coordinates) {
                outputLines.geometries.push({
                    "type": "LineString",
                        "coordinates": inputGeom.coordinates[i]
                });
            }
            break;
        case "MultiPolygon":
            for (var i in inputGeom.coordinates) {
                for (var j in inputGeom.coordinates[i]) {
                    outputLines.geometries.push({
                        "type": "LineString",
                            "coordinates": inputGeom.coordinates[i][j]
                    });
                }
            }
            break;
        default:
            outputLines = null;
    }
    return outputLines;
}
  controlDrawedLayer(baseLayer, drawLayer) {
    // console.log(baseLayer, drawLayer)
    let drawJson;
    if (drawLayer instanceof L.Circle) {
      drawJson = {
        "type": "Feature", "properties": {}, "geometry": {
          "type": "Polygon", "coordinates": this.getLocationsFromCicle(drawLayer)
        }
      }
    } else {
      drawJson = drawLayer.toGeoJSON()
    }
    console.log(drawJson)
    var baseJson = baseLayer.toGeoJSON(),
    baseLines = this.lineify(baseJson),
    drawLines = this.lineify(drawJson),
    pointCrossed = false
    baseJson.features.map((feature) => {
      if (this.testSpatial(feature, drawJson) === true) {
        pointCrossed = true;
      }
    })
    if (baseLines && drawLines) {
        for (var i in drawLines.geometries) {
            for (var j in baseLines.geometries) {
              if (pointCrossed === true) { return pointCrossed };
              console.log(baseLines.geometries[j], drawLines.geometries[i])
              pointCrossed = this.checkIntersect(drawLines.geometries[i], baseLines.geometries[j]);
            }
        }
    }
    return pointCrossed;
  }
  testSpatial(baseJson, drawJson) {
    return contain.default(drawJson, baseJson)
  }

  createDurationCurveLabels(array){
    for (var i = 0; i <= 8760; ++i) {
        array[i] = i;
    }
    return array;
  }
}


