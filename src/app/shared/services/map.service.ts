/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Map} from 'leaflet';
import {Popup} from 'leaflet';

import 'proj4leaflet';
import 'proj4'
import {Logger} from './logger.service';
import {OnInit, OnDestroy} from '@angular/core';

import {basemap} from '../../pages/map/basemap';

import {Payload} from '../../features/population/payload.class';

import {Population} from '../../features/population/population.class';

import {LayersService} from '../../features/layers/layers.service';
import {PopulationService} from '../../features/population/services/population.service';
import {LoaderService} from './loader.service';
import {Location} from '../location/location';
import {Helper} from '../helper'
import Created = L.DrawEvents.Created;

import Polygon = L.Polygon;
import LatLng = L.LatLng;
import Circle = L.Circle;
import Rectangle = L.Rectangle;
import Layer = L.Layer;
import Edited = L.DrawEvents.Edited;
import Point = L.Point;
import { MouseEvent} from 'leaflet';
import CanvasGeojsonLayer = L.CanvasGeojsonLayer;
import Evented = L.Evented;





@Injectable()
export class MapService implements OnInit, OnDestroy {
  private map: Map;
  private currentPopup: Popup;
  private baseMaps: any;
  private vtLayer: any;
  private wwtpPoints: any;
  private gridLayer: any;
  private layers: any = [];
  private editableLayers = new L.FeatureGroup();
  private options;
  private drawControl;
  private isDrawControl = false;

  constructor(private logger: Logger, private loaderService: LoaderService,
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
    this.map = map;
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
    this.map.on(L.Draw.Event.CREATED , function (e) {
      const event: Created = <Created>e;
      self.editableLayers.clearLayers();
      self.removeVtlayer();
      const type = event.layerType,
        layer = event.layer;
      if (type === 'rectangle') {
        self.logger.log('rectangle');
        const rectangle: Rectangle = <Rectangle>event.layer;
        const latlng = rectangle.getLatLngs()[0];
        const locations: Location[] = self.helper.convertLatLongToLocation(latlng);
        self.logger.logJson(locations);
        self.getPopulation(locations, layer);
      } else if (type === 'polygon') {
       const polygon: Polygon = <Polygon>event.layer;
       const latlng = polygon.getLatLngs()[0];
       const locations: Location[] = self.helper.convertLatLongToLocation(latlng);
        self.logger.logJson(locations);
       self.getPopulation(locations, layer);

      } else if (type === 'circle') {
        self.logger.log('circle')
        const circle: Circle = <Circle>event.layer;
        const origin = circle.getLatLng(); // center of drawn circle
        const radius = circle.getRadius(); // radius of drawn circle
        const polys = self.helper.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
        const locations = [];
        for (let i = 0; i < polys.length; i++) {
          const loc: Location = {
            lat: polys[i].lat,
            lng: polys[i].lng
          };
          locations.push(loc);
        }
        self.logger.logJson(locations);
        self.getPopulation(locations, layer);
      }

      self.editableLayers.addLayer(layer);
      console.log(layer.openPopup());
    });

    this.map.on(L.Draw.Event.EDITED , function (e) {
      const event: Edited = <Edited>e;

      event.layers.eachLayer(function (layer: Layer) {
        const lay: Layer = layer;
        self.logger.log('layer ' + layer);
        if (layer instanceof L.Marker) {
          self.logger.log('Marker ');
        }else if (layer instanceof L.Polygon) {
          self.logger.log('Polygon ');
          const polygon: Polygon = <Polygon>layer;
          const latlng = polygon.getLatLngs()[0];
          const locations: Location[] = self.helper.convertLatLongToLocation(latlng);
          self.logger.logJson(locations);
          self.getPopulation(locations, layer);
        }else if (layer instanceof L.Circle) {
          self.logger.log('Circle ');
          const circle: Circle = <Circle>layer;
          self.logger.log('circle getLatLng' + circle.getLatLng());
          // self.logger.log('circle getBounds' + circle.getBounds());
          self.logger.log('circle getBounds' + circle.getRadius());
          const origin = circle.getLatLng(); // center of drawn circle
          const radius = circle.getRadius(); // radius of drawn circle
          const polys = self.helper.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
          const locations = [];
          for (let i = 0; i < polys.length; i++) {
            const loc: Location = {
              lat: polys[i].lat,
              lng: polys[i].lng
            };
            locations.push(loc);
          }
          self.logger.logJson(locations);
          self.getPopulation(locations, layer);
        };
        self.editableLayers.addLayer(layer);
        console.log(layer.openPopup());
      });


    });

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

  toggleControl() {
    if (this.isDrawControl) {
      this.map.removeControl(this.drawControl)
      this.isDrawControl = false;
    }else {
      this.addDrawerControl(this.map);
      this.isDrawControl = true;
    }
  }
}
