import { Observable } from 'rxjs/Rx';

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Dictionary } from '../../../shared/class/dictionary.class'
import { geoserverUrl, clickAccuracy, defaultLayer } from '../../../shared/data.service'

import { LoaderService } from '../../../shared/services/loader.service';

import { Location } from '../../../shared/location/location';
import { Logger } from '../../../shared/services/logger.service';
import { Properties } from '../class/geojson.class';
import { Feature } from '../class/geojson.class'

import { GeojsonClass } from '../class/geojson.class'
import { ToasterService } from '../../../shared/services/toaster.service';

import { APIService } from '../../../shared/services/api.service';
import Layer = L.Layer;
import LatLng = L.LatLng;

import { PopupService } from './../../popup/popup.service';
import { DataLayerRequest } from './../../../shared/services/mock/mock-layer.data';

@Injectable()
export class LayersService extends APIService {
  private keys: any[];
  private layersArray: Dictionary = new Dictionary([
    {
      key: defaultLayer, value: L.tileLayer.wms(geoserverUrl,
        {
          layers: 'hotmaps:' + defaultLayer,
          format: 'image/png', transparent: true, version: '1.3.0',
        })
    },

  ]);
  constructor(
    http: Http,
    logger: Logger,
    loaderService: LoaderService,
    toasterService: ToasterService,
    private popupService: PopupService) {
    super(http, logger, loaderService, toasterService);

  }

  getDetailLayerPoint(action: string, latlng: LatLng, map): any {
    if (this.layersArray.containsKey(defaultLayer)) { action = defaultLayer }
    /* const bbox = latlng.toBounds(clickAccuracy).toBBoxString();
    const url = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms?SERVICE=WMS&VERSION=1.1.1' +
      '&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:'
      + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
      '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
    console.log('url ' + url);
    return this.GET(url).map((res: Response) => res.json() as GeojsonClass)
      .subscribe(res => this.addPopup(map, res, latlng), err => this.erroxFix(err));*/
    this.addPopup(map, DataLayerRequest, latlng, action);
    console.log('bino');
  }
  refreshLayersOnMap(map: any) {
    const layers = this.layersArray.keys();
    for (let i = 0; i < layers.length; i++) {
      const layer: Layer = <Layer>this.layersArray.value(layers[i]);
      layer.addTo(map);
    }
  }
  showOrRemoveLayer(action: string, map: any) {
    this.logger.log('LayersService/this.layersArray. ' + this.layersArray.keys());
    this.logger.log('LayersService/action. ' + action);
    if (!this.layersArray.containsKey(action)) {
      this.logger.log('LayersService/addLayerWithAction');
      this.addLayerWithAction(action, map);
    } else {
      this.logger.log('LayersService/removelayer');
      this.removelayer(action, map);
    }
  }
  addLayerWithAction(action: string, map: any) {
    const layer = L.tileLayer.wms(geoserverUrl, {
      layers: 'hotmaps:' + action,
      format: 'image/png',
      transparent: true,
      version: '1.3.0',
    })
    this.layersArray.add(action, layer)
    this.refreshLayersOnMap(map);
  }

  removelayer(action: string, map: any) {
    // we get the layer we want to remove
    const layer = this.layersArray.value(action);
    // we remove this layer from map
    map.removeLayer(layer);
    // we destroy the layer
    this.layersArray.remove(action);
    this.refreshLayersOnMap(map);


  }
  erroxFix(error) {
    this.handleError.bind(this);
    this.loaderService.display(false);
    this.toasterService.showToaster(error);
    this.logger.log('LayerServices/handleError');
    console.error('An error occurred', error); // for demo purposes only

  }

  addPopup(map, res: GeojsonClass, latlng: LatLng, action) {
    console.log(this.keys, res, latlng, this.keys);
    this.popupService.setTitle(action);
    this.popupService.setData(res);
    this.popupService.setLatLng(latlng);
    this.popupService.setKeys(Object.keys(res.features[0].properties));
  }

  /*addPopupHeatmap(map, res: GeojsonClass, latlng: LatLng) {
    this.loaderService.display(false);
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

  }*/
}
