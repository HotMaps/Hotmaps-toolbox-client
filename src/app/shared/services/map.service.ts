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
import {GridService} from '../../features/grid/services/grid.service';
import {Payload} from '../../features/population/payload.class';
import {PayloadGrid} from '../../features/grid/payload.grid.class';
import {Population} from '../../features/population/population.class';
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







@Injectable()
export class MapService implements OnInit, OnDestroy {
  private map: Map;
  private currentPopup: Popup;
  private baseMaps: any;
  private vtLayer: any;
  private gridLayer: any;
  private layers: any = [];
  private editableLayers = new L.FeatureGroup();

  constructor(private http: Http, private logger: Logger, private loaderService: LoaderService,
              private populationService: PopulationService/*, private gridService: GridService*/, private helper: Helper) {
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
  }
  retriveMapEvent(): void {
    this.logger.log('MapService/retriveMapEvent');
    const self = this;
    this.map.on('zoomend', function() {
      self.logger.log('MapService/zoomend');
    });
    this.map.on('zoomstart', function(event)
    {

      self.logger.log('MapService/zoomstart');
     /* if (event.target._animateToZoom) {
        //add grid
        self.logger.log('MapService/zoomstart val' + self.map.getZoom());

        const zoomValue: number = <number>self.map.getZoom();
        const maxValue = 10;
        self.logger.log('MapService/zoomValue)  zoomstart val' + zoomValue );
        if (zoomValue > maxValue) {
          self.logger.log('MapService/zoomValue)  zoomstart val ' + zoomValue );
          self.logger.log('MapService/this.map.getEast() ' + self.map.getBounds().getNorthEast());
          self.logger.log('MapService/this.map.getNorth() ' + self.map.getBounds().getNorthWest());
          self.logger.log('MapService/this.map.getSouth() ' + self.map.getBounds().getSouthEast());
          self.logger.log('MapService/this.map.getWest() ' + self.map.getBounds().getSouthWest());

          const locations: Location [] = [{
            lat: self.map.getBounds().getNorthEast().lat,
            lng: self.map.getBounds().getNorthEast().lng
          }, {
            lat: self.map.getBounds().getNorthWest().lat,
            lng: self.map.getBounds().getNorthWest().lng
          }, {
            lat: self.map.getBounds().getSouthEast().lat,
            lng: self.map.getBounds().getSouthEast().lng
          }, {
            lat: self.map.getBounds().getSouthWest().lat,
            lng: self.map.getBounds().getSouthWest().lng
          }];

          self.logger.log('locations ' +  JSON.stringify(locations) );

          if (locations.length === 0) {
            self.logger.log('locations empty' );
            return;
          }
          self.getGrid(locations);
          // 4 coordinate bound of the screen
        }
      }else {
        // remove grid
        self.removeGridLayer();
      } */

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
        self.logger.log('circle getLatLng' + circle.getLatLng());
        // self.logger.log('circle getBounds' + circle.getBounds());
        self.logger.log('circle getBounds' + circle.getRadius());
        layer.bindPopup('A popup!');
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
        };
      });
      const type = event.layers[0].type,
        layer = event.layers[0].layer;
      self.logger.log(event.layers[0].type);
      self.logger.log(event.layers[0].layer);
      if (type === 'rectangle') {
        self.logger.log('rectangle');
        const rectangle: Rectangle = <Rectangle>event.layers[0].layer;
        const latlng = rectangle.getLatLngs()[0];
        const locations: Location[] = self.helper.convertLatLongToLocation(latlng);
        self.logger.logJson(locations);
        self.getPopulation(locations, layer);
      } else if (type === 'polygon') {
        const polygon: Polygon = <Polygon>event.layers[0].layer;
        const latlng = polygon.getLatLngs()[0];
        const locations: Location[] = self.helper.convertLatLongToLocation(latlng);
        self.logger.logJson(locations);
        self.getPopulation(locations, layer);

      } else if (type === 'circle') {
        self.logger.log('circle')
        const circle: Circle = <Circle>event.layers[0].layer;
        self.logger.log('circle getLatLng' + circle.getLatLng());
        // self.logger.log('circle getBounds' + circle.getBounds());
        self.logger.log('circle getBounds' + circle.getRadius());
        layer.bindPopup('A popup!');
      }

      self.editableLayers.addLayer(layer);
      console.log(layer.openPopup());
    });

    function onOverlayAdd(e) {
      self.logger.log('overlayadd');

    }
  }

  latLngsToCoords(arrLatlng) {
    const self = this;
    const coords = [];
    arrLatlng.forEach(function(latlng) {
        self.logger.log(' Lat =' + latlng.lat);
        self.logger.log(' Lngs =' + latlng.lng);
        coords.push( [latlng.lng, latlng.lat]);
      },
      this);
    return coords;
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
  retriveAndAddLayer(population: Population, layer: Layer) {
    this.logger.log('MapService/retriveAndAddLayer');
    this.showlayer(JSON.parse(population.geometries));
    const populationValue = population.sum_density;
    function foo() {
      alert('foo');
    }
    layer.bindPopup('<h3>Area selected</h3><p>This is	information	about	the	area </p> <ul>' +
      '<li>Population: ' + populationValue + '</li><li>Nuts: ' + population.nuts_level + '</li><li>Year: ' + population.year + '</li>' +
      '<li>Area: </li><br><button id="btnDelete">Delete</button></ul>').openPopup();

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
// grid feature
  getGridTest() {
  /*  this.logger.log('MapService/getGridTest');
    this.gridService.getGridTest();*/
  }
  proj84To3035(grid: any) {
   // proj4.defs('urn:ogc:def:crs:EPSG::26915', '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs');
    this.gridLayer = L.geoJSON(grid);
  }
  getGrid(locations: Location[]) {
  /*  this.loaderService.display(true);
    this.logger.log('MapService/getGrid');
    const payload: PayloadGrid = {
      points: locations,
    }
    this.logger.log('MapService/payload ' +  JSON.stringify(payload) );
    this.gridService.getGridWithPayloads(payload).then(grid  => this.retriveAndAddGridLayer(grid) );*/
  }
  removeGridLayer() {
    if (this.gridLayer) {
      this.logger.log('MapService/removelayer');
      this.map.removeLayer(this.gridLayer);
      delete this.gridLayer;
    }
  }
  retriveAndAddGridLayer(grid: any) {
    this.logger.log('MapService/retriveAndAddLayer');

    // test


    this.showGridlayer(grid);
    this.loaderService.display(false);
  }
  showGridlayer(grid: any) {
    this.logger.log('MapService/showlayer');
    this.removeGridLayer();
    // GeoJSON layer (UTM15)
    proj4.defs('EPSG:26915', '+proj=utm +zone=15 +ellps=GRS80 +datum=NAD83 +units=m +no_defs');

    const geojson = {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [481650, 4980105],
      },
      'properties': {
        'name': 'University of Minnesota'
      },
      'crs': {
        'type': 'name',
        'properties': {
          'name': 'urn:ogc:def:crs:EPSG::26915'
        }
      }
    };

    L.Proj.geoJson(geojson, {
      'pointToLayer': function(feature, latlng) {
        return L.marker(latlng).bindPopup('hello');
      }
    }).addTo(this.map);
// or
    // var weirdProjgeojson = TransformGeojson.from(wgs84geojson,sr);
    this.logger.logJson(grid);
   // proj4.defs('urn:ogc:def:crs:EPSG::3035', '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs');
     this.logger.log('MapService/showGridlayer/Proj val');
   //  this.gridLayer = L.Proj.geoJson(grid);
    // this.gridLayer = L

    this.gridLayer.addTo(this.map);
    this.loaderService.display(false);
  }

  addDrawerControl(map: Map) {
    map.addLayer(this.editableLayers);
    const options = {
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
        circle: false,  // Turns off this drawing tool
        rectangle: {
          shapeOptions: {
            clickable: false
          }
        },
        marker: false,
      },
      edit: {
        featureGroup: this.editableLayers, // REQUIRED!!
        remove: true
      }
    };
    const drawControl = new L.Control.Draw(options);
    map.addControl(drawControl);
  }

}
