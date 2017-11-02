import { wwtp_data } from './../mock/wwtp.data';

import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {Dictionary} from '../../../shared/class/dictionary.class'
import {
  geoserverUrl, clickAccuracy, defaultLayer, unit_capacity, unit_heat_density, populationLayerName,
  nuts_level, geoserverGetFeatureInfoUrl, wwtpLayerName, business_name_wwtp, constant_year, idDefaultLayer,
  unit_population, idWwtpLayer, zoomLevelDetectChange
} from '../../../shared/data.service'

import {LoaderService } from '../../../shared/services/loader.service';


import {Logger} from '../../../shared/services/logger.service';
import { Map } from 'leaflet';


import {GeojsonClass} from '../class/geojson.class'
import {ToasterService} from '../../../shared/services/toaster.service';
import { proj3035 } from './../../../shared/data.service';

import {APIService} from '../../../shared/services/api.service';
import {Helper} from '../../../shared/helper';
import Layer = L.Layer;
import LatLng = L.LatLng;

import * as proj4x from 'proj4';
const proj4 = (proj4x as any).default;

import {PopulationService} from '../../population/services/population.service';

@Injectable()
export class LayersService extends APIService {
  private layers = new L.FeatureGroup();
  private zoom_layerGroup: L.LayerGroup;

  private layersArray: Dictionary = new Dictionary([
    {
      key: defaultLayer, value: L.tileLayer.wms(geoserverUrl,
      {
        layers: 'hotmaps:' + defaultLayer + '_' + constant_year,
        format: 'image/png', transparent: true, version: '1.3.0',
        zIndex: idDefaultLayer
      })
    },

  ]);
  private popup = L.popup();

  public getLayers(): any {
    return this.layers;
  }

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
              private populationService: PopulationService, private helper: Helper) {
    super(http, logger, loaderService, toasterService);
  }
  getLayerArray(): Dictionary {
    return this.layersArray;
  }

  setupDefaultLayer() {
    const layer = this.layersArray.value(defaultLayer);
    this.logger.log(layer.toString())
    this.layers.addLayer(layer);
  }

  getDetailLayerPoint(action: string, latlng: LatLng, map): any {
    const bbox = latlng.toBounds(clickAccuracy).toBBoxString();
    if (this.layersArray.containsKey(defaultLayer)) {
      action = defaultLayer + '_' + constant_year;
    }else if (this.layersArray.containsKey(populationLayerName)) {
      action = populationLayerName + '_' + constant_year;
    }
    const url = geoserverGetFeatureInfoUrl
      + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
      '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
    console.log('url ' + url);
    return this.http.get(url).map((res: Response) => res.json() as GeojsonClass)
      .subscribe(res => this.choosePopup(map, res, latlng, action), err => this.erroxFix(err));

  }

  getIsReadyToShowFeatureInfo(): boolean {
    let readyToShow = false;
    if (this.layersArray.keys().length > 0) {
      readyToShow = true
    }
    return readyToShow;
  }

  showOrRemoveLayer(action: string, map: any, order: number) {
    this.logger.log('didUptateLayer');
    if (!this.layersArray.containsKey(action)) {
      this.logger.log('this.layersArray doesnt contain ' + action);
      this.addLayerWithAction(action, map, order);
    } else {
      this.logger.log('this.layersArray contain ' + action);
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
      layers: 'hotmaps:' + action + '_' + constant_year ,
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
  setupZoomLayerGroup(map) {
    this.zoom_layerGroup = new L.LayerGroup();
    this.zoom_layerGroup.addTo(map);
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
  showLayerDependingZoom(action, map, zoomLevel: number) {
    const mapZoomLevel = map.getZoom();
    this.logger.log('mapZoomLevel ' + mapZoomLevel + ', zoomLevel ' + zoomLevel);
    if (this.layersArray.containsKey(action) === true) {
      if (mapZoomLevel >= zoomLevel) {
        const layer = this.layersArray.value(action);
        this.layers.removeLayer(layer);
        this.showWwtpWithMarker(map);
      } else if (mapZoomLevel < zoomLevel) {
        if (!this.layersArray.containsKey(action)) {
          this.addLayerWithAction(action, map, zoomLevel);
        } else {
          const layer = this.layersArray.value(action);
          this.layers.addLayer(layer);
        }
        this.removeWwtpWithMarker(map);
      }
    }else {
      this.removeWwtpWithMarker(map);
    }
  }

  transformLatLngToEpsg(latlng: L.LatLng, epsgString: String) {
    return proj4(epsgString).forward([latlng.lng, latlng.lat]);
  }

  getTranformedBoundingBox(map: Map, epsgString): number[] {
    const coordinate = [];
    const bound = map.getBounds();
    const northEastTransformed = this.transformLatLngToEpsg(bound.getNorthEast(), epsgString);
    const southWestTransformed  = this.transformLatLngToEpsg(bound.getSouthWest(), epsgString);
    coordinate.push(southWestTransformed[1], southWestTransformed[0]);
    coordinate.push(northEastTransformed[1], northEastTransformed[0]);
    return coordinate;
  }

  showWwtpWithMarker(map: Map) {
    this.logger.log('showWwtpWithMarker');
    const epsg = '3035';
    const coordinate = this.getTranformedBoundingBox(map, proj3035);
    const url = geoserverUrl + '?service=wfs' +
      '&version=2.0.0' +
      '&request=GetFeature' +
      '&typeNames=hotmaps:' + wwtpLayerName + '_' + constant_year +
      '&srsName=EPSG:' + epsg +
      '&bbox=' + coordinate.toString() +
      '&outputFormat=application/json';
    this.logger.log(coordinate.toString());
    this.logger.log(url);
    Promise.resolve(wwtp_data).then((data) => {
      data.features.forEach(element => {
        const point = element.geometry.coordinates
        const pointProj = proj4(proj3035).inverse([point[0], point[1]]);
        const marker = L.marker(L.latLng(pointProj[1], pointProj[0]), {
          icon: L.icon({
            iconUrl: '../../assets/leaflet-images/marker-icon.png',
            iconSize: [28, 40],
            iconAnchor: [14, 20]
          })
        });
        this.zoom_layerGroup.addLayer(marker);
      });
    }).then(() => this.zoom_layerGroup.addTo(map));
    /* this.GET(url).toPromise().then((data) => { */
    /* Promise.resolve(wwtp_data).then((data) => { */
  }

  removeWwtpWithMarker(map: Map) {
    this.logger.log('removeWwtpWithMarker');
    this.zoom_layerGroup.removeFrom(map);
  }
}
