import { Dictionary } from './../../../shared/class/dictionary.class';
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { wwtp_data } from './../mock/wwtp.data';

import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'proj4leaflet';
import 'proj4';

import {
  geoserverUrl, clickAccuracy, defaultLayer, unit_capacity, unit_heat_density, populationLayerName,
  nuts_level, geoserverGetFeatureInfoUrl, wwtpLayerName, business_name_wwtp, constant_year, idDefaultLayer,
  unit_population, zoomLevelDetectChange, formatImage
} from '../../../shared/data.service'

import {Helper, LoaderService, Logger, APIService, proj3035, ToasterService, BusinessInterfaceRenderService  } from '../../../shared';
import {GeojsonClass} from '../class/geojson.class'
import Layer = L.Layer;
import LatLng = L.LatLng;

import * as proj4x from 'proj4';
const proj4 = (proj4x as any).default;




@Injectable()
export class LayersService extends APIService {

  // Improvement of coding style :
  // place private members after public members, alphabetized
  private layers = new L.FeatureGroup();
  private zoom_layerGroup: L.LayerGroup;
  private current_nuts_level = '0';
  private heatmapOption = {
    layers: 'hotmaps:' + defaultLayer,
    format: formatImage, transparent: true, version: '1.3.0',
    zIndex: idDefaultLayer
  };

  private layersArray: Dictionary = new Dictionary([
    {
      key: defaultLayer , value: this.getTilayer( this.heatmapOption, this.loaderService)
    },

  ]);

  private popup = L.popup();

  // Improvement of coding style :
  // put constructor in top of all methods
  public getLayers(): any {
    return this.layers;
  }

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
              // private interactionService: InteractionService,
              // private populationService: PopulationService,
              private helper: Helper,
              private businessInterfaceRenderService: BusinessInterfaceRenderService
            ) {
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
    /* this.interactionService.setSummaryResultData(data)
    this.interactionService.openRightPanel();
    this.interactionService.enableButtonWithId('load_result') */
    // this.interactionService.enableDisplayLoader()
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
    map.fireEvent('didUpdateLayers', this.layersArray);
  }
  addLayerWithAction(action: string, map: any, order: number) {
    this.logger.log('action' + action);
    let layer;
      const option = {
        layers: 'hotmaps:' + action ,
        format: formatImage,
        transparent: true,
        version: '1.3.0',
        srs: 'EPSG:4326',
        zIndex: 1
      }
    layer = this.getTilayer(option, this.loaderService);
    this.layers.addLayer(layer);
    this.layersArray.add(action, layer);
  }

  getTilayer(option: any, loader): any {
    const wms_request = L.tileLayer.wms(geoserverUrl, option);
    wms_request.on('load', function() {
      // loader.display(false)
    });
    wms_request.on('tileunload', function() {  });
    wms_request.on('tileloadstart', function() {
      // loader.display(true)
    });
    wms_request.on('tileerror', function() {
      // loader.display(false)
      });
    wms_request.on('loading', function() {  });
    return wms_request;
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
  /* handlePopulation(map, data: any, latlng: LatLng) {
    const populationSelected = data;
    this.populationService.showPopulationSelectedLayer(populationSelected, map, latlng, this.popup);
    this.loaderService.display(false);

  } */
  /* selectAreaWithNuts(map, data: any, latlng: LatLng) {
    const populationSelected = data;
    this.populationService.showPopulationSelectedLayer(populationSelected, map, latlng, this.popup);
    this.loaderService.display(false);
  } */

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

  getTranformedBoundingBox(map: any, epsgString): number[] {
    const coordinate = [];
    const bound = map.getBounds();
    const northEastTransformed = this.transformLatLngToEpsg(bound.getNorthEast(), epsgString);
    const southWestTransformed  = this.transformLatLngToEpsg(bound.getSouthWest(), epsgString);
    coordinate.push(southWestTransformed[1], southWestTransformed[0]);
    coordinate.push(northEastTransformed[1], northEastTransformed[0]);
    return coordinate;
  }

  showWwtpWithMarker(map: any) {
    this.logger.log('showWwtpWithMarker');
    const epsg = '3035';
    const coordinate = this.getTranformedBoundingBox(map, proj3035);
    const url = geoserverUrl + '?service=wfs' +
      '&version=2.0.0' +
      '&request=GetFeature' +
      '&typeNames=hotmaps:' + wwtpLayerName +
      '&srsName=EPSG:' + epsg +
      '&bbox=' + coordinate.toString() +
      '&outputFormat=application/json';
    this.logger.log(coordinate.toString());
    this.logger.log(url);
    return Promise.resolve(wwtp_data).then((res) => {
      this.addPOIToMapRegular(res, map)
  });
    /* this.http.get(url).map((data: Response) => data.json() as any)
        .subscribe(res => this.addPOIToMap(res, map), err => this.handleError.bind(this)); */
    /* Promise.resolve(wwtp_data).then((data) => { */
  }
  addPOIToMap(data, map) {
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
    } );
    this.zoom_layerGroup.addTo(map);
  }

  addPOIToMapRegular(data, map) {
    proj4.defs('urn:ogc:def:crs:EPSG::3035', proj3035);
    // this.zoom_layerGroup =  L.Proj.geoJson(data)


    function onEachFeature(feature, layer) {
      if (feature.properties) {
        layer.setIcon(L.icon({
          iconUrl: '../../assets/leaflet-images/marker-icon.png',
          iconSize: [28, 40],
          iconAnchor: [14, 20]
        }));
      }
    }
    this.zoom_layerGroup = L.Proj.geoJson(data, {
      onEachFeature: onEachFeature
    }).addTo(map);

    this.zoom_layerGroup.addTo(map);
  }

  removeWwtpWithMarker(map: any) {
    this.logger.log('removeWwtpWithMarker');
    this.zoom_layerGroup.removeFrom(map);
  }
}
