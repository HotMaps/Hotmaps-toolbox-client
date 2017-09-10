
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


import {geoserverUrl, clickAccuracy} from '../../shared/data.service'

import {LoaderService } from '../../shared/services/loader.service';

import {Location} from '../../shared/location/location';
import {Logger} from '../../shared/services/logger.service';
import {Properties} from './geojson.class';
import {Feature} from './geojson.class'

import {GeojsonClass} from './geojson.class'
import {ToasterService} from '../../shared/services/toaster.service';

import {APIService} from '../../shared/services/api.service';
import Layer = L.Layer;
import LatLng = L.LatLng;


@Injectable()
export class LayersService extends APIService {

  private wwtpPoints: any;
  private popup = L.popup();
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }

  getDetailLayerPoint(action: string , latlng: LatLng, map): any {
    if (this.wwtpPoints) {

      const bbox = latlng.toBounds(clickAccuracy).toBBoxString();
      const url = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms?SERVICE=WMS&VERSION=1.1.1' +
        '&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:'
        + action + '&STYLES&LAYERS=hotmaps:wwtp&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
        '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
      console.log('url ' + url)
      return this.http.get(url).map((res: Response) => res.json() as GeojsonClass).subscribe(res => this.addPopup(map, res, latlng), err => this.handleError.bind(this));
    }
  }
  addLayerWithAction(action: string, map: any ) {
    if (this.wwtpPoints) {
      this.removeWWTPlayer(map)
    } else {this.wwtpPoints = L.tileLayer.wms(geoserverUrl, {
      layers: 'hotmaps:' + action,
      format: 'image/png',
      transparent: true,
      version: '1.3.0',
    }).addTo(map);
    }
  }
  removeWWTPlayer(map: any ) {

    if (this.wwtpPoints) {
      this.logger.log('LayersService/removeWWTPlayer');
      map.removeLayer(this.popup);
      map.removeLayer(this.wwtpPoints);
      delete this.wwtpPoints;
      this.logger.log('this.wwtpPoints =' + this.wwtpPoints);
    }
  }
  addPopup(map, res: GeojsonClass, latlng: LatLng) {


    const gid = res.features[0].properties.gid;
    const capacity = res.features[0].properties.capacity;
    const power = res.features[0].properties.power;
    const date = res.features[0].properties.date;
    const unit = res.features[0].properties.unit;
    this.popup.setLatLng(latlng)
      .setContent('<h3>WWTP selected</h3><ul>' +
        '<li>gid: ' + gid + '</li><li>Date: ' + date + '</li><li>Capacity: ' + capacity + '</li>' +
        '<li>power: ' + power + ' ' + unit + '</li>' +
        '</ul>')
      .openOn(map);
    this.logger.log('LayersService/addPopup/popup/added');

  }
}
