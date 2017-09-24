
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {Dictionary} from '../../../shared/class/dictionary.class'
import {geoserverUrl, clickAccuracy, defaultLayer, unit_capacity} from '../../../shared/data.service'

import {LoaderService } from '../../../shared/services/loader.service';

import {Location} from '../../../shared/class/location/location.class';
import {Logger} from '../../../shared/services/logger.service';
import {Properties} from '../class/geojson.class';
import {Feature} from '../class/geojson.class'

import {GeojsonClass} from '../class/geojson.class'
import {ToasterService} from '../../../shared/services/toaster.service';

import {APIService} from '../../../shared/services/api.service';
import {Helper} from '../../../shared/helper';
import Layer = L.Layer;
import LatLng = L.LatLng;

import { PopupService } from './../../popup/popup.service';
import { DataLayerRequest } from './../../../shared/services/mock/mock-layer.data';
import { PopupFactory } from './../../popup/popup.class';
import { PopupValidationService } from './../../popup/validation/popup-validation.service';
import { DataHeatDemand } from './../../../shared/services/mock/data-heat-demand';

@Injectable()
export class LayersService extends APIService {


  private layersArray: Dictionary = new Dictionary([
    {
      key: defaultLayer, value: L.tileLayer.wms(geoserverUrl,
      {
        layers: 'hotmaps:' + defaultLayer,
        format: 'image/png', transparent: true, version: '1.3.0',
      })
    },

  ]);
  private popup = L.popup();

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService, private popupFactory: PopupFactory, private helper: Helper) {
    super(http, logger, loaderService, toasterService);
  }

  getDetailLayerPoint(action: string, latlng: LatLng, map): any {
    if (this.layersArray.containsKey(defaultLayer)) {
      action = defaultLayer}
    const bbox = latlng.toBounds(clickAccuracy).toBBoxString();
    const url = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms?SERVICE=WMS&VERSION=1.1.1' +
      '&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:'
      + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
      '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
    console.log('url ' + url);
    return this.GET(url).map((res: Response) => res.json() as GeojsonClass)
      .subscribe(res => this.choosePopup(map, res, latlng, action), err => this.erroxFix(err));

  }

  getIsReadyToShowFeatureInfo(): boolean {
    let readyToShow = false;
    if (this.layersArray.keys().length > 0) {
      readyToShow = true
    }
    this.logger.log('layer length = ' + this.layersArray.keys().length);
    this.logger.log('readyToShow = ' + readyToShow)
    return readyToShow;
  }

  refreshLayersOnMap(map: any) {
    const layers = this.layersArray.keys();
    for (let i = 0; i < layers.length; i++) {
      const layer: Layer = <Layer> this.layersArray.value(layers[i]);
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


  choosePopup(map, res: GeojsonClass, latlng: LatLng, action) {
    if (this.layersArray.containsKey(defaultLayer)) {
      this.addPopupHeatmap(map, res, latlng);
    } else {
      this.addPopupWWTP(map, res, latlng);
    }
  }

  addPopup(map, res: GeojsonClass, latlng: LatLng, action) {
    this.popupFactory.popHeatService.showPopup(true, res, latlng, action);
  }
  addPopupHeatmap(map, data: GeojsonClass, latlng: LatLng) {
    this.loaderService.display(false);
    const heat_density = data.features[0].properties.heat_density;
    this.popup.setLatLng(latlng)
      .setContent(
        '<h5>heat map</h5> <ul class="uk-list uk-list-divider">' +
        ' <li>Heat demand: ' + this.helper.round(heat_density)  + '</li> </ul>')
      .openOn(map);
    this.logger.log('LayersService/addPopup/popup/added');
  }

  addPopupWWTP(map, data: any, latlng: LatLng) {
    this.loaderService.display(false);
    const capacity = data.features[0].properties.capacity;
    const power = data.features[0].properties.power;
    const date = data.features[0].properties.date.split('Z')[0];
    const unit = data.features[0].properties.unit;
    this.popup.setLatLng(latlng).setContent('<h5>waste water treatment plants</h5> <ul class="uk-list uk-list-divider">' +
      '<li>Capacity: ' + capacity + ' ' + unit_capacity + '</li><li>Power: ' + this.helper.round(power) + ' ' + unit + '</li>' +
         '<li>Reference date: ' + date + '</li></ul>').openOn(map);
    this.logger.log('LayersService/addPopup/popup/added');
  }


}
