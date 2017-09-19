/**
 * Created by lesly on 27.05.17.
 */


import Circle = L.Circle;
import Created = L.DrawEvents.Created;
import Edited = L.DrawEvents.Edited;
import {Injectable} from '@angular/core';
import Layer = L.Layer;
import {Map} from 'leaflet';
import { MouseEvent} from 'leaflet';
import {OnInit, OnDestroy} from '@angular/core';
import {Popup} from 'leaflet';
import Polygon = L.Polygon;
import Rectangle = L.Rectangle;

import {basemap} from '../../pages/map/basemap';
import {Helper} from '../helper'
import {LayersService} from '../../features/layers/services/layers.service';
import {Logger} from './logger.service';
import {LoaderService} from './loader.service';
import {Location} from '../class/location/location';
import {Payload} from '../../features/population/payload.class';
import {Population} from '../../features/population/population.class';
import {PopulationService} from '../../features/population/services/population.service';
import {SelectionToolService} from '../../features/selection-tools/selection-tool.service';


@Injectable()
export class MapService implements OnInit, OnDestroy {
  private map: Map;
  private baseMaps: any;
  private vtLayer: any;
  private editableLayers = new L.FeatureGroup();
  constructor(private logger: Logger, private loaderService: LoaderService, private selectionToolService: SelectionToolService,
              private populationService: PopulationService, private layersService: LayersService, private helper: Helper) {
    logger.log('MapService/constructor()');
    this.baseMaps = basemap;
  }

  ngOnInit(): void {
    this.logger.log('MapService/ngOnInit()');
  }
  getMap(): Map {
    return this.map;
  }
  ngOnDestroy(): void {
    this.logger.log('MapService/ngOnDestroy()');
  }
  disableMouseEvent(elementId: string) {
  }
  setupMapservice(map: Map) {
    this.logger.log('MapService/setupMapservice');
    // set the map to the services that needs to get an instance
    this.map = map;
    this.selectionToolService.setMap(map);
    this.retriveMapEvent();

    this.layersService.refreshLayersOnMap(map)
  }
  retriveMapEvent(): void {
    this.logger.log('MapService/retriveMapEvent');
    const self = this;
    this.map.on('click', function(e: MouseEvent) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        self.layersService.getDetailLayerPoint('wwtp', e.latlng, self.map);

    });
    this.map.on('zoomend', function() {
      self.logger.log('MapService/zoomend');
    });

    this.map.on('zoomstart', function(event)
    {

    });
    this.map.on ('measurestart', function () {

    });
    this.map.on('measurefinish', function (evt) {
    });
    this.map.on('LayersControlEvent', function() {
      self.logger.log('LayersControlEvent');
    });

    this.map.on('layeradd', function(e) {
      // self.logger.log('MapService/layeradd-----' + e);

    });
    this.map.on('popupclose', function(e) {
    });
    this.map.on('popupopen', function(e) {
      self.logger.log('popupopen  ' +  e.target._popup);
    });

    this.map.on('popupDelete', function(e) {

      self.logger.log('popupDelete  ');

    });
    this.map.on('overlayadd', onOverlayAdd);
    function onOverlayAdd(e) {
      self.logger.log('overlayadd');

    }
  }
  // population feature
  getPopulation(locations: Location[], layer: Layer) {
    this.loaderService.display(true);
    this.logger.log('MapService/getPopulation');
    const payload: Payload = {
      nuts_level: 3,
      year: 2015,
      points: locations,
    }
    this.logger.log('MapService/payload ' +  JSON.stringify(payload) );
    this.populationService.getPopulationWithPayloads(payload).then(population  => this.retriveAndAddLayer(population, layer));
  }


  showOrRemoveLayer(action: string) {
    this.layersService.showOrRemoveLayer(action, this.map);
  }

  retriveAndAddLayer(population: Population, layer: Layer) {
    this.logger.log('MapService/retriveAndAddLayer');
    this.showlayer(JSON.parse(population.geometries));
    const populationValue = population.sum_density;
    function foo() {
      alert('foo');
    }
    layer.bindPopup('<h3>Area selected</h3><ul>' +
      '<li>Population: ' + populationValue + '</li><li>Nuts: ' + population.nuts_level + '</li><li>Year: ' + population.year + '</li>' +
      '<br><button id="btnDelete">Clear All</button></ul>').openPopup();

    document.getElementById ('btnDelete').addEventListener ('click', deleteSelectedArea, false);
    const self = this;
    function deleteSelectedArea(zEvent) {
      self.removeVtlayer();
      self.editableLayers.clearLayers();
    }
  }

  showlayer(geometrie: any) {

    this.logger.log('MapService/showlayer');
    this.removeVtlayer();
    this.logger.log('MapService/showlayer/layerWilladde');
    this.vtLayer = L.vectorGrid.slicer(geometrie);
    this.vtLayer.addTo(this.map);
    this.loaderService.display(false);
  }
  removeVtlayer() {
    if (this.vtLayer) {
      this.logger.log('MapService/removelayer');
      this.map.removeLayer(this.vtLayer);
      delete this.vtLayer;
    }
  }

  addDrawerControl(map: Map) {
    this.selectionToolService.addDrawerControl(map)

  }

  toggleControl() {
    this.selectionToolService.toggleControl();
  }
}
