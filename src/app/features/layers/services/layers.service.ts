
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
import {NavigationBarService} from '../../../pages/nav/service';
import {BusinessInterfaceRenderService} from '../../../shared/business/business.service';

@Injectable()
export class LayersService extends APIService {
  private layers = new L.FeatureGroup();
  private current_nuts_level = '0';

  private layersArray: Dictionary = new Dictionary([
    {
      key: defaultLayer , value: L.tileLayer.wms(geoserverUrl,
      {
        layers: 'hotmaps:' + defaultLayer + '_ha' +  '_' + constant_year,
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
              private panelService: SidePanelService,
              private navBarService: NavigationBarService,
              private businessInterfaceRenderService: BusinessInterfaceRenderService) {
    super(http, logger, loaderService, toasterService);
  }
  getLayerArray(): Dictionary {
    return this.layersArray;
  }
  setCurrentNutsLevel(nutsLevel: string) {
    this.current_nuts_level = this.businessInterfaceRenderService.convertNutsToApiName(nutsLevel);
  }
  setupDefaultLayer() {
    const layer = this.layersArray.value(defaultLayer);
    this.logger.log(layer.toString())
    this.layers.addLayer(layer);
  }


  handleClickHectare(data: any) {
    this.logger.log(JSON.stringify(data));
    this.panelService.setPoiData(data);
    this.panelService.openRightPanel();
    this.navBarService.enableButton('load_result');
    this.loaderService.display(false);
  }

  getIsReadyToShowFeatureInfo(): boolean {
    let readyToShow = false;
    if (this.layersArray.keys().length > 0) {
      readyToShow = true
    }
    return readyToShow;
  }
  addLayerWithOrder(map: any, layer: any) {
    this.layers.addLayer(<Layer> layer);
    this.logger.log(layer);
    this.logger.log(this.layers.getLayers().toString())
  }

  showOrRemoveLayer(action: string, map: any, order: number) {
    this.logger.log('didUptateLayer');
    if (!this.layersArray.containsKey(action)) {
      this.addLayerWithAction(action, map, order);
    } else {
      this.removelayer(action, map);
    }
    map.fireEvent('didUpdateLayers', this.layersArray)
  }

  addLayerWithAction(action: string, map: any, order: number) {
    let layer;
    if (action === wwtpLayerName) {
      layer = L.tileLayer.wms(geoserverUrl, {
        layers: 'hotmaps:' + action ,
        format: 'image/png',
        transparent: true,
        version: '1.3.0',
       // cql_filter : 'stat_levl_ = ' + nuts_level + '',
        srs: 'EPSG:4326',
        zIndex: order
      })
    }else {
      // layer in Ha with date
     layer = L.tileLayer.wms(geoserverUrl, {
      layers: 'hotmaps:' + action + '_ha' + '_' + constant_year ,
      format: 'image/png',
      transparent: true,
      version: '1.3.0',
      srs: 'EPSG:4326',
      zIndex: order
    })};
    this.layers.addLayer(layer);
    this.layersArray.add(action, layer);
  }

  removelayer(action: string, map: any) {
    // we get the layer we want to remove
    const layer = this.layersArray.value(action);
    // we remove this layer from map
    this.layers.removeLayer(layer);
    // we destroy the layer
    this.layersArray.remove(action);
  }

  erroxFix(error) {
    this.handleError.bind(this);
    this.loaderService.display(false);
    this.toasterService.showToaster(error);
    console.error('An error occurred', error); // for demo purposes only

  }
  choosePopup(map, res: GeojsonClass, latlng: LatLng, action) {
    if (this.layersArray.containsKey(defaultLayer)) {

      this.addPopupHeatmap(map, res, latlng);
    } else if (action === wwtpLayerName) {
      this.addPopupWWTP(map, res, latlng);
    } else if (action === populationLayerName + '_' + constant_year) {
      this.addPopupHectare(map, res, latlng);
    }
  }
  handlePopulation(map, data: any, latlng: LatLng) {
    const populationSelected = data;
    this.populationService.showPopulationSelectedLayer(populationSelected, map, latlng, this.popup);
    this.loaderService.display(false);

  }
  selectAreaWithNuts(map, data: any, latlng: LatLng) {
    const populationSelected = data;
    this.populationService.showPopulationSelectedLayer(populationSelected, map, latlng, this.popup);
    this.loaderService.display(false);

  }

  addPopupHectare(map, data: GeojsonClass, latlng: LatLng)  {
    this.loaderService.display(false);
    const population_density = data.features[0].properties.population_density;
    this.logger.log('LayersService/addPopupHectare/population_density  ' + population_density);
    this.popup.setLatLng(latlng)
      .setContent(
        '<h5>Population</h5> <ul class="uk-list uk-list-divider">' +
        ' <li>Population density: ' + this.helper.round(population_density)  + ' ' + unit_population + '</li> </ul>')
      .openOn(map);
  }

  addPopupHeatmap(map, data: GeojsonClass, latlng: LatLng) {
    this.loaderService.display(false);
    const heat_density = data.features[0].properties.heat_density;
    this.popup.setLatLng(latlng)
      .setContent(
        '<h5>Heat map</h5> <ul class="uk-list uk-list-divider">' +
        ' <li>Heat demand: ' + this.helper.round(heat_density)  + ' ' + unit_heat_density + '</li> </ul>')
      .openOn(map);
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
  }


}
