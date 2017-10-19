import { NavigationBarService } from './../../../pages/nav/navigation-bar.service';
import { SelectionToolButtonStateService } from './../../selection-tools/selection-tool-button-state.service';

import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {Dictionary} from '../../../shared/class/dictionary.class'
import {
  geoserverUrl, clickAccuracy, defaultLayer, unit_capacity, unit_heat_density, populationLayerName,
  nuts_level, geoserverGetFeatureInfoUrl, wwtpLayerName, business_name_wwtp, constant_year, unit_population
} from '../../../shared/data.service'

import {LoaderService } from '../../../shared/services/loader.service';


import {Logger} from '../../../shared/services/logger.service';


import {GeojsonClass} from '../class/geojson.class'
import {ToasterService} from '../../../shared/services/toaster.service';

import {APIService} from '../../../shared/services/api.service';
import {Helper} from '../../../shared/helper';
import Layer = L.Layer;
import LatLng = L.LatLng;



import { poiDataResult } from './../../summary-result/mock/poi-result.data';
import { SidePanelService } from './../../side-panel/side-panel.service';
import {PopulationService} from '../../population/services/population.service';

@Injectable()
export class LayersService extends APIService {
  private layers = new L.FeatureGroup();


  private layersArray: Dictionary = new Dictionary([
    {
      key: defaultLayer, value: L.tileLayer.wms(geoserverUrl,
      {
        layers: 'hotmaps:' + defaultLayer + '_' + constant_year,
        format: 'image/png', transparent: true, version: '1.3.0',
      })
    },

  ]);
  private popup = L.popup();
  public getLayers(): any {
    return this.layers;
  }

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
              private populationService: PopulationService, private helper: Helper,
              private panelService: SidePanelService, private navBarService: NavigationBarService) {
    super(http, logger, loaderService, toasterService);
  }
  getLayerArray(): Dictionary {
    return this.layersArray;
  }
  getDetailLayerPoint(action: string, latlng: LatLng, map): any {
    let bbox = latlng.toBounds(clickAccuracy).toBBoxString();
    if (this.layersArray.containsKey(defaultLayer)) {
      action = defaultLayer + '_' + constant_year;
    }else if (this.layersArray.containsKey(populationLayerName)) {
      action = populationLayerName + '_' + constant_year;
     // bbox = bbox + '&CQL_FILTER=' + 'stat_levl_=' + nuts_level + 'AND ' + 'date=' + constant_year + '-01-01Z';
      // this.handlePopulation(map,  MockPopulation , latlng)
    }

    const url = geoserverGetFeatureInfoUrl
      + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
      '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
    this.logger.log('LayersService/getDetailLayerPoint/url ' + url);
    this.logger.log('LayersService/getDetailLayerPoint/action ' + action);

    // Simulate a server response (Latency)
    // Modify when in prod !!
    return new Promise(resolve => {
      resolve(poiDataResult);
    });

    /*
    return this.http.get(url).map((res: Response) => res.json() as GeojsonClass)
      .subscribe(res => {
        this.choosePopup(map, res, latlng, action);
        this.logger.log(JSON.stringify(res));
      }, err => this.erroxFix(err));
      */

  }
  getDetailInfoClick(latlng) {
    this.loaderService.display(true);
    let action;
    let bbox = latlng.toBounds(clickAccuracy).toBBoxString();
    if (this.layersArray.containsKey(defaultLayer)) {
      action = defaultLayer + '_' + constant_year;
    }else if (this.layersArray.containsKey(populationLayerName)) {
      action = populationLayerName + '_' + constant_year;
     // bbox = bbox + '&CQL_FILTER=' + 'stat_levl_=' + nuts_level + 'AND ' + 'date=' + constant_year + '-01-01Z';
      // this.handlePopulation(map,  MockPopulation , latlng)
    }

    const url = geoserverGetFeatureInfoUrl
      + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
      '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
    this.logger.log('LayersService/getDetailLayerPoint/url ' + url);
    this.logger.log('LayersService/getDetailLayerPoint/action ' + action);


    return new Promise(resolve => {
      setTimeout(() => {
        resolve(poiDataResult);
      }, 1000);
    }).then((data) => {
      this.logger.log(JSON.stringify(data));
      this.panelService.setPoiData(data);
    }).then(() => {
      this.panelService.openRightPanel();
      this.navBarService.enableButton('load_result');
      this.loaderService.display(false);
    }) ;

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
    this.layers.clearLayers();
    const layers = this.layersArray.keys();
    if  (this.layersArray.containsKey(defaultLayer)) {
      const layer: Layer = <Layer> this.layersArray.value(defaultLayer);
      this.layers.addLayer(layer);
    }
    for (let i = 0; i < layers.length; i++) {
      if ( layers[i] !== defaultLayer) {
        const layer: Layer = <Layer> this.layersArray.value(layers[i]);
        this.layers.addLayer(layer);
      }
    }
    map.fireEvent('didUpdateLayer', this.layersArray.keys());
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
    this.logger.log('LayersService/ action = ' + action);
    let layer;
    if (action === wwtpLayerName) {
      layer = L.tileLayer.wms(geoserverUrl, {
        layers: 'hotmaps:' + action ,
        format: 'image/png',
        transparent: true,
        version: '1.3.0',
       // cql_filter : 'stat_levl_ = ' + nuts_level + '',
        srs: 'EPSG:4326',
      })
    }else  {
      // layer in Ha with date
     layer = L.tileLayer.wms(geoserverUrl, {
      layers: 'hotmaps:' + action + '_' + constant_year ,
      format: 'image/png',
      transparent: true,
      version: '1.3.0',
       srs: 'EPSG:4326',
    })};
    this.layersArray.add(action, layer)
    this.refreshLayersOnMap(map);
  }

  removelayer(action: string, map: any) {
    // we get the layer we want to remove
    const layer = this.layersArray.value(action);
    // we remove this layer from map
    this.layers.removeLayer(layer);
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
    this.logger.log('LayersService/choosePopup/action ' + action);
    if (this.layersArray.containsKey(defaultLayer)) {

      this.addPopupHeatmap(map, res, latlng);
    } else if (action === wwtpLayerName) {
      this.addPopupWWTP(map, res, latlng);
    } else if (action === populationLayerName + '_' + constant_year) {
      this.addPopupHectare(map, res, latlng);
    }
  }
  handlePopulation(map, data: any, latlng: LatLng) {
    this.logger.log('LayersService/handlePopulation');
    const populationSelected = data;
    this.logger.log('LayersService/populationSelected ' + populationSelected);
    this.populationService.showPopulationSelectedLayer(populationSelected, map, latlng, this.popup);
    this.loaderService.display(false);

  }

  addPopupHectare(map, data: GeojsonClass, latlng: LatLng)  {
    this.loaderService.display(false);
    this.logger.log('LayersService/addPopupHectare/action ');
    this.logger.log('LayersService/addPopupHectare/data ' + data);
    const population_density = data.features[0].properties.population_density;
    this.logger.log('LayersService/addPopupHectare/population_density  ' + population_density);
    this.popup.setLatLng(latlng)
      .setContent(
        '<h5>Population</h5> <ul class="uk-list uk-list-divider">' +
        ' <li>Population density: ' + this.helper.round(population_density)  + ' ' + unit_population + '</li> </ul>')
      .openOn(map);
    this.logger.log('LayersService/addPopupHectare');
  }

  addPopupHeatmap(map, data: GeojsonClass, latlng: LatLng) {
    this.loaderService.display(false);
    const heat_density = data.features[0].properties.heat_density;
    this.popup.setLatLng(latlng)
      .setContent(
        '<h5>Heat map</h5> <ul class="uk-list uk-list-divider">' +
        ' <li>Heat demand: ' + this.helper.round(heat_density)  + ' ' + unit_heat_density + '</li> </ul>')
      .openOn(map);
    this.logger.log('LayersService/addPopup/popup/added');
  }
  addHeatmapPOI(map, data: GeojsonClass, latlng: LatLng) {
    this.loaderService.display(false);
    const heat_density = data.features[0].properties.heat_density;
    this.popup.setLatLng(latlng)
      .setContent(
        '<h5>Heat map</h5> <ul class="uk-list uk-list-divider">' +
        ' <li>Heat demand: ' + this.helper.round(heat_density)  + ' ' + unit_heat_density + '</li> </ul>')
      .openOn(map);
    this.logger.log('LayersService/addPopup/popup/added');
  }

  addPopupWWTP(map, data: any, latlng: LatLng) {
    this.loaderService.display(false);
    const capacity = data.features[0].properties.capacity;
    const power = data.features[0].properties.power;
    const date = data.features[0].properties.date.split('Z')[0];
    const unit = data.features[0].properties.unit;
    this.popup.setLatLng(latlng).setContent('<h5>' + business_name_wwtp + '</h5> <ul class="uk-list uk-list-divider">' +
      '<li>Capacity: ' + capacity + ' ' + unit_capacity + '</li><li>Power: ' + this.helper.round(power) + ' ' + unit + '</li>' +
         '<li>Reference date: ' + date + '</li></ul>').openOn(map);
    this.logger.log('LayersService/addPopup/popup/added');
  }


}
