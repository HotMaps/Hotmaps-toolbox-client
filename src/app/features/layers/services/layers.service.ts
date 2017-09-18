
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {Dictionary} from '../../../shared/class/dictionary.class'
import {geoserverUrl, clickAccuracy, defaultLayer, layer_wwtp, unit_capacity} from '../../../shared/data.service'

import {LoaderService } from '../../../shared/services/loader.service';

import {Location} from '../../../shared/location/location';
import {Logger} from '../../../shared/services/logger.service';
import {Properties} from '../class/geojson.class';
import {Feature} from '../class/geojson.class'

import {GeojsonClass} from '../class/geojson.class'
import {ToasterService} from '../../../shared/services/toaster.service';
import {Helper} from '../../../shared/helper';
import {APIService} from '../../../shared/services/api.service';
import Layer = L.Layer;
import LatLng = L.LatLng;


@Injectable()
export class LayersService extends APIService {


  private layersArray: Dictionary = new Dictionary([
    { key: defaultLayer, value: L.tileLayer.wms(geoserverUrl,
      {layers: 'hotmaps:' + defaultLayer,
        format: 'image/png', transparent: true, version: '1.3.0', } )},

  ]) ;
  private popup = L.popup();
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService, private helper: Helper) {
    super(http, logger, loaderService, toasterService);
  }

  getDetailLayerPoint(action: string , latlng: LatLng, map): any {
   if (this.layersArray.containsKey(defaultLayer)) { action = defaultLayer}

      const bbox = latlng.toBounds(clickAccuracy).toBBoxString();
      const url = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms?SERVICE=WMS&VERSION=1.1.1' +
        '&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:'
        + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
        '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
      console.log('url ' + url);
      return this.GET(url).map((res: Response) => res.json() as GeojsonClass)
        .subscribe(res => this.addPopup(map, res, latlng), err => this.erroxFix(err));

  }
  refreshLayersOnMap( map: any) {
    const layers = this.layersArray.keys();
    for (let i = 0; i < layers.length; i++) {
      const layer: Layer  = <Layer> this.layersArray.value(layers[i]);
      layer.addTo(map);
    }
  }
  showOrRemoveLayer(action: string, map: any ) {
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
  addLayerWithAction(action: string, map: any ) {
    const layer = L.tileLayer.wms(geoserverUrl, {
      layers: 'hotmaps:' + action,
      format: 'image/png',
      transparent: true,
      version: '1.3.0',
    })
    this.layersArray.add(action, layer)
    this.refreshLayersOnMap(map);
  }

  removelayer(action: string, map: any ) {
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


  addPopupHardCode(map, latlng: LatLng) {
    const resWWTP = JSON.parse('{"type":"FeatureCollection","totalFeatures":"unknown","features":' +
      '[{"type":"Feature","id":"wwtp.26731","geometry":{"type":"Point","coordinates":' +
      '[-0.056,45.6072]},"geometry_name":"geom","properties":{"gid":26731,"capacity":3000,"power":193.333333299999993,' +
      '"unit":"kW","date":"2015-01-01Z","bbox":[-0.056,45.6072,-0.056,45.6072]}}],' +
      '"crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG::4326"}},"bbox":[-0.056,45.6072,-0.056,45.6072]}');

    const gid = resWWTP.features[0].properties.gid;
    const capacity = resWWTP.features[0].properties.capacity;
    const power = resWWTP.features[0].properties.power;
    const date = resWWTP.features[0].properties.date;
    const unit = resWWTP.features[0].properties.unit;
    this.popup.setLatLng(latlng)
      .setContent('<h3>WWTP selected</h3><ul>' +
        '<li>Date: ' + date.split('Z')[0] + '</li><li>Capacity: ' + capacity + ' ' + unit_capacity + '</li>' +
        '<li>power: ' + this.helper.round(power) + ' ' + unit + '</li>' +
        '</ul>')
      .openOn(map);
    this.logger.log('LayersService/addPopup/popup/added');
  }

  addPopup(map, res: GeojsonClass, latlng: LatLng) {

    if (this.layersArray.containsKey(layer_wwtp)) {
        this.loaderService.display(false);
      const gid = res.features[0].properties.gid;
      const capacity = res.features[0].properties.capacity;
      const power = res.features[0].properties.power;
      const date = res.features[0].properties.date;
      const unit = res.features[0].properties.unit;
      this.popup.setLatLng(latlng)
        .setContent('<h3>WWTP selected</h3><ul>' +
          '<li>Date: ' + date.split('Z')[0] + '</li><li>Capacity: ' + capacity + ' ' + unit_capacity + '</li>' +
          '<li>power: ' + this.helper.round(power) + ' ' + unit + '</li>' +
          '</ul>')
        .openOn(map);
      this.logger.log('LayersService/addPopup/popup/added');
      }

  }

  addPopupHeatmap(map, res: GeojsonClass, latlng: LatLng) {
    this.loaderService.display(false);
    const gid = res.features[0].properties.gid;
    const capacity = res.features[0].properties.capacity;
    const power = res.features[0].properties.power;
    const date = res.features[0].properties.date;
    const unit = res.features[0].properties.unit;
    this.popup.setLatLng(latlng)
      .setContent('<h3>WWTP selected</h3><ul>' +
        '<li>gid: ' + gid + '</li><li>Date: ' + date.split('Z')[0] + '</li><li>Capacity: ' + capacity + '</li>' +
        '<li>power: ' + power + ' ' + unit + '</li>' +
        '</ul>')
      .openOn(map);
    this.logger.log('LayersService/addPopup/popup/added');

  }
}
