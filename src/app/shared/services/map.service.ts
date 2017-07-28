/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Map} from 'leaflet';
import {Popup} from 'leaflet';


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
import {forEach} from "@angular/router/src/utils/collection";




@Injectable()
export class MapService implements OnInit, OnDestroy {
  private map: Map;
  private currentPopup: Popup;
  private baseMaps: any;
  private vtLayer: any;
  private gridLayer: any;
  private layers: any = [];

  constructor(private http: Http, private logger: Logger, private loaderService: LoaderService,
              private populationService: PopulationService, private gridService: GridService) {
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

  toggleAirPortLayer() {
    this.logger.log('MapService/toggleAirPortLayer');
   if (this.vtLayer) {
     this.logger.log('MapService/toggleAirPortLayer/remove vtLayer');
      this.map.removeLayer(this.vtLayer);
      delete this.vtLayer;
    } else {
     this.logger.log('MapService/toggleAirPortLayer/add vtLayer');
      this.http.get('https://rawgit.com/haoliangyu/angular2-leaflet-starter/master/public/data/airports.geojson')
        .map(res => res.json())
        .subscribe(result => {
          this.vtLayer = L.vectorGrid.slicer(result);
          this.vtLayer.addTo(this.map);
        });
    }
  }
  setupMapservice(map: Map) {
    this.logger.log('MapService/setupMapservice');
    this.map = map;
    this.retriveMapEvent();
  }
  retriveMapEvent(): void {
    this.logger.log('MapService/retriveMapEvent');
    let self = this;
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
      } else {
        // remove grid
        self.removeGridLayer();
      }*/

    });
    this.map.on ('measurestart', function () {
      self.logger.log('MapComponent/measurestart' + self.layers.length);
      self.removeVtlayer();
     /* self.map.eachLayer(function (layer) {
        self.map.removeLayer(layer);
      });*/


   /*   for ( let i = 0; i < self.layers.length; i++) {
        self.logger.log('MapComponent/measurestart' + self.layers[i]);
        self.map.removeLayer(self.layers[i])
      }*/

    });
    this.map.on('measurefinish', function (evt) {

      writeResults(evt);
    });
    this.map.on('LayersControlEvent', function() {
      self.logger.log('LayersControlEvent');
    });

    this.map.on('layeradd', function(e) {
      self.logger.log('MapService/layeradd-----' + e);

     // self.layers.push(e.target.layers);
    });
    this.map.on('popupclose', function(e) {
     /* self.logger.log('MapService/popupclose-----' + e);
      if (!self.currentPopup) {
        self.removeVtlayer();
      }*/
      ///self.removeVtlayer();
    });
    this.map.on('popupopen', function(e) {
      const html: HTMLDivElement =  e.target._popup.getContent();

      self.currentPopup = e.target._popup;


      self.logger.log('html id dd ' +  html.align);
      self.logger.log('firstElementChild  ' + html.firstElementChild);
      self.logger.log('lastChild  ' + html.lastChild);


      e.target._popup.setContent(html);
      self.logger.log('popupopen  ' +  e.target._popup);
    });

    this.map.on('popupDelete', function(e) {

      self.logger.log('popupDelete  ');

    });
    this.map.on('overlayadd', onOverlayAdd);
    function onOverlayAdd(e) {
      self.logger.log('overlayadd');

    }
    function writeResults (results: any) {
      self.logger.log('MapService/ngAfterContentInit/writeResults');
      let locations =  [];
      for (let _i = 0; _i < results.points.length; _i++) {
        const lat = results.points[_i].lat;
        const lng = results.points[_i].lng;
        const loc: Location = {
          lat: lat,
          lng: lng
        };
        locations.push(loc);
      }
      self.logger.log('locations ' +  JSON.stringify(locations) );
      self.logger.log('MapComponent/ngAfterContentInit/writeResults/results.points= ' + results.points);
      if (locations.length === 0) {
        self.logger.log('locations empty' );
        return;
      }
      self.getPopulation(locations);
    }
  }
  // population feature
  getPopulation(locations: Location[]) {
    this.loaderService.display(true);
    this.logger.log('MapService/getPopulation');
    const payload: Payload = {
      nuts_level: 3,
      year: 2015,
      points: locations,
    }
    this.logger.log('MapService/payload ' +  JSON.stringify(payload) );
    this.populationService.getPopulationWithPayloads(payload).then(population  => this.retriveAndAddLayer(population));
  }
  retriveAndAddLayer(population: Population) {
    this.logger.log('MapService/retriveAndAddLayer');
    this.showlayer(JSON.parse(population.geometries));
    const populationValue = population.sum_density;
    const html: HTMLDivElement = <HTMLDivElement> this.currentPopup.getContent();
    this.logger.log('html content ' +  html);
    this.logger.log('html content innerHTML' +  html.innerHTML);
    this.currentPopup.setContent(html);
    alert('population: ' + population.sum_density);
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
    this.logger.log('MapService/getGridTest');
    this.gridService.getGridTest();
  }
  proj84To3035(grid: any) {
   // proj4.defs('urn:ogc:def:crs:EPSG::26915', '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs');
    this.gridLayer = L.geoJSON(grid);
  }
  getGrid(locations: Location[]) {
    this.loaderService.display(true);
    this.logger.log('MapService/getGrid');
    const payload: PayloadGrid = {
      points: locations,
    }
    this.logger.log('MapService/payload ' +  JSON.stringify(payload) );
    this.gridService.getGridWithPayloads(payload).then(grid  => this.retriveAndAddGridLayer(grid) );
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
    this.showGridlayer(grid);
    this.loaderService.display(false);
  }
  showGridlayer(grid: GeoJSONGeoJsonObject) {
    this.logger.log('MapService/showlayer');
    this.removeGridLayer();



// or
    // var weirdProjgeojson = TransformGeojson.from(wgs84geojson,sr);
    //  proj4.defs('urn:ogc:def:crs:EPSG::3035', '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs');
    // this.logger.log('MapService/showGridlayer/Proj val' + Proj);
    // this.gridLayer = L.Proj.geoJson(grid);
    // this.gridLayer = L

    this.gridLayer.addTo(this.map);
    this.loaderService.display(false);
  }



}
