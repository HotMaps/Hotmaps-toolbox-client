/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Map} from 'leaflet';
import {Popup} from 'leaflet';

import {Logger} from '../../shared/services/logger.service';
import {OnInit, OnDestroy} from '@angular/core';



import {Payload} from '../../features/population/payload.class';

import {Population} from '../../features/population/population.class';

import {LayersService} from '../../features/layers/services/layers.service';
import {PopulationService} from '../../features/population/services/population.service';
import {SidePanelService} from '../../features/side-panel/side-panel.service';
import {LoaderService} from '../../shared/services/loader.service';
import {MapService} from '../../shared/services/map.service';
import {Location} from '../../shared/class/location/location';
import {Helper} from '../../shared/helper'
import Created = L.DrawEvents.Created;

import Polygon = L.Polygon;

import Circle = L.Circle;
import Rectangle = L.Rectangle;
import Layer = L.Layer;
import Edited = L.DrawEvents.Edited;



@Injectable()
export class SelectionToolService {


  private baseMaps: any;
  private isActivate: boolean;
  private editableLayers = new L.FeatureGroup();
  private options;
  private drawControl;
  private isDrawControl = false;
  private selectionTooLayer: any;
  constructor(private logger: Logger, private loaderService: LoaderService,
                private helper: Helper, private populationService: PopulationService , private sidePanelService: SidePanelService ) {
    logger.log('SelectionToolService/constructor()');
  }


  getIsActivate(): boolean {
    return this.isActivate;
  }
  setMap(map: any) {
    this.logger.log('SelectionToolService/setMap()');
    this.retriveMapEvent(map);
  }
  retriveMapEvent(map: any): void {
    this.logger.log('MapService/retriveMapEvent');
    const self = this;
    map.on(L.Draw.Event.CREATED , function (e) {
      const event: Created = <Created>e;
      // Clear the map before to show the new selection
      self.editableLayers.clearLayers();
      self.removeVtlayer(map);
      const type = event.layerType,
        layer = event.layer;
      self.manageEditOrCreateLayer(layer, map);
    });

    map.on(L.Draw.Event.EDITED , function (e) {
      const event: Edited = <Edited>e;
      event.layers.eachLayer(function (layer: Layer) {
        const lay: Layer = layer;
        self.manageEditOrCreateLayer(layer, map);
      });
    });

    map.on(L.Draw.Event.DRAWSTART , function (e) {
      self.isActivate = true;
      self.logger.log('SelectionToolService/DRAWSTART');

    });

    map.on(L.Draw.Event.DRAWSTOP , function (e) {
      self.isActivate = false;
      self.logger.log('SelectionToolService/DRAWSTOP');

    });

    map.on(L.Draw.Event.EDITSTART , function (e) {
      self.logger.log('SelectionToolService/EDITSTART');
      self.isActivate = true;

    });

    map.on(L.Draw.Event.EDITSTOP , function (e) {
      self.isActivate = false;
      self.logger.log('SelectionToolService/EDITSTOP');
    });
  }
  manageEditOrCreateLayer(layer: Layer, map: any) {
    if (layer instanceof L.Circle) {
      this.getPopulation(this.getLocationsFromCicle(layer), layer, map);
    } else  {
      this.getPopulation(this.getLocationsFromPolygon(layer), layer, map);
    };
    this.editableLayers.addLayer(layer);
  };
  getLocationsFromPolygon(layer): Location[] {
    const rectangle: any = <any>layer;
    const latlng = rectangle.getLatLngs()[0];
    const locations: Location[] = this.helper.convertLatLongToLocation(latlng);
    return locations
  }

  getLocationsFromCicle(layer): Location[] {
    const circle: any = <any>layer;
    const origin = circle.getLatLng(); // center of drawn circle
    const radius = circle.getRadius(); // radius of drawn circle
    const polys = this.helper.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
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
  retriveAndAddLayer(population: Population, layer: Layer, map: any) {
    this.logger.log('MapService/retriveAndAddLayer');
    this.showlayer(JSON.parse(population.geometries), map);
    const populationValue = population.sum_density;
    function foo() {
      alert('foo');
    }
    layer.bindPopup('<h3>Area selected</h3><ul>' +
      '<li>Population: ' + populationValue + '</li><li>Nuts: ' + population.nuts_level + '</li><li>Year: ' + population.year + '</li>' +
      '<br><button id="btnDelete">Clear All</button><button id="btnValidate">Validate</button></ul>').openPopup();

    document.getElementById ('btnDelete').addEventListener ('click', deleteSelectedArea, false);
    document.getElementById ('btnValidate').addEventListener ('click', validateSelectedArea, false);
    const self = this;
    function deleteSelectedArea(zEvent) {
      self.removeVtlayer(map);
      self.editableLayers.clearLayers();
    }
    function validateSelectedArea(zEvent) {
      self.sidePanelService.rightPanelexpandedCollapsed();
    }
  }

  showlayer(geometrie: any, map: any) {

    this.logger.log('MapService/showlayer');
    this.removeVtlayer(map);
    this.logger.log('MapService/showlayer/layerWilladde');
    this.selectionTooLayer = L.vectorGrid.slicer(geometrie);
    this.selectionTooLayer.addTo(map);
    this.loaderService.display(false);
  }
  removeVtlayer(map: any) {
    if (this.selectionTooLayer) {
      this.logger.log('MapService/removelayer');
      map.removeLayer(this.selectionTooLayer);
      delete this.selectionTooLayer;
    }
  }
  // population feature
  // population feature
  getPopulation(locations: Location[], layer: Layer, map: any) {
    this.loaderService.display(true);
    this.logger.log('MapService/getPopulation');
    const payload: Payload = {
      nuts_level: 3,
      year: 2015,
      points: locations,
    }
    this.logger.log('MapService/payload ' +  JSON.stringify(payload) );
    this.populationService.getPopulationWithPayloads(payload).then(population  => this.retriveAndAddLayer(population, layer, map));
  }

  addDrawerControl(map: Map) {
    map.addLayer(this.editableLayers);
    this.options = {
      position: 'topleft',
      draw: {
        polyline: false,
        polygon: {
          allowIntersection: false, // Restricts shapes to simple polygons
          drawError: {
            color: '#e1e100', // Color the shape will turn when intersects
            message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
          },
          shapeOptions: {
            color: '#bada55'
          }
        },
        circle: true,  // Turns off this drawing tool
        rectangle: {
          tooltip : {
            start : 'dede',
          },
          shapeOptions: {
            clickable: false
          }
        },
        marker: false,
      },
      edit: {
        toolbar: {
          actions: {
            save: {
              title: 'Validate__',
              text: 'Validate__'
            },
          },
        },
        featureGroup: this.editableLayers, // REQUIRED!!
        remove: true
      }
    };
    this.drawControl = new L.Control.Draw(this.options);
    map.addControl(this.drawControl);

  }
  toggleControl(map: any) {
    if (this.isDrawControl) {
      map.removeControl(this.drawControl)
      this.isDrawControl = false;
    }else {
      this.addDrawerControl(map);
      this.isDrawControl = true;
    }
  }
}
