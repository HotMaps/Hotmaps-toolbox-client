/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Map} from 'leaflet';
import {Popup} from 'leaflet';

import {Logger} from '../../shared/services/logger.service';
import {OnInit, OnDestroy} from '@angular/core';

import {basemap} from '../../pages/map/basemap';

import {Payload} from '../../features/population/payload.class';

import {Population} from '../../features/population/population.class';

import {LayersService} from '../../features/layers/services/layers.service';
import {PopulationService} from '../../features/population/services/population.service';
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
export class SelectionToolService implements OnInit, OnDestroy {


  private baseMaps: any;
  private map: any;
  private editableLayers = new L.FeatureGroup();
  private options;
  private drawControl;
  private isDrawControl = false;

  constructor(private logger: Logger, private loaderService: LoaderService,
                private helper: Helper) {
    logger.log('MapService/constructor()');
    this.baseMaps = basemap;
  }

  ngOnInit(): void {
    this.logger.log('MapService/ngOnInit()');
    this.retriveMapEvent();
  }
  setMap(map: any) {
    this.map = map;
  }
  getMap(): Map {
    return this.map;
  }
  ngOnDestroy(): void {
    this.logger.log('MapService/ngOnDestroy()');
  }

  retriveMapEvent(): void {
    this.logger.log('MapService/retriveMapEvent');
    const self = this;
    this.map.on(L.Draw.Event.CREATED , function (e) {
      const event: Created = <Created>e;
      self.editableLayers.clearLayers();
      //self.mapService.removeVtlayer();
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
    //this.mapService.getPopulation(locations, layer);
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
