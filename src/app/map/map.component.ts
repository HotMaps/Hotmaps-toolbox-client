import {Component, ViewChild, OnInit, AfterContentInit ,OnDestroy} from '@angular/core';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {NavigatorComponent} from '../navigator/navigator.component';
import {isDevMode} from '@angular/core';

import {GeocodingService} from './services/geocoding.service';
import {MapService} from './services/map.service';
import { LoaderService } from '../shared/services/loader.service';
import {Logger} from '../shared/services/logger.service';
import {ModulesServiceService} from './modules-service/modules-service.service';
import { ModulesService } from './modules-service/modules-service';
import { basemap} from './basemap'
import {Map} from 'leaflet';


@Component({
  selector: 'htm-map',
  templateUrl: './map.component.html',
  styles: [ require<any>('./map.component.less') ],
  providers: []
})

export class MapComponent implements OnInit , AfterContentInit , OnDestroy{

  map: Map;
  @ViewChild(ToolbarComponent) toolbarComponent: ToolbarComponent;
  @ViewChild(NavigatorComponent) navigatorComponent: NavigatorComponent;

  constructor(private mapService: MapService, private geocoder: GeocodingService,
              private logger: Logger, private modulesService: ModulesServiceService, private loaderService: LoaderService,
  ) {


  }
  ngAfterContentInit(): void {
   this.logger.log('MapComponent/AfterViewInit');
    this.logger.log('MapComponent/AfterViewInit/mapService val:: ' + this.mapService.map);
    this.map.on('measurestart', function () {
      if (isDevMode() === true) {
        console.log('MapComponent/measurestart');
      }
    });
    this.map.on('measurefinish', function (evt) {
      if (isDevMode() === true) {
        console.log('MapComponent/measurefinish');
      }
      writeResults(evt, this.modulesService);
    });
    function writeResults (results: any, modulesService: ModulesServiceService) {
      // let service: ModulesService = {id: 99, name: 'get Population'};
      // modulesService.getModulesServicesWithNewService(service);
      if (isDevMode() === true) {
        console.log(JSON.stringify({
          area: results.area,
          areaDisplay: results.areaDisplay,
          lastCoord: results.lastCoord,
          length: results.length,
          lengthDisplay: results.lengthDisplay,
          pointCount: results.pointCount,
          points: results.points
        }, null, 2));
        alert(JSON.stringify({
          pointCount: results.pointCount,
          points: results.points
        }, null, 2));
      };
    }
    this.logger.log('MapComponent/AfterViewInit/this.geocoder val:: ' + this.geocoder);
    this.geocoder.getCurrentLocation()
      .subscribe(
        location => {
          this.logger.log('MapComponent/AfterViewInit/this.geocoder.getCurrentLocation()/ location val:: ' + location);
          this.map.panTo([location.latitude, location.longitude]); },
        err => {console.error(err);
        }
      );
  }
  ngOnDestroy() {
    this.logger.log('MapComponent/ngOnDestroy');
    this.map.remove()
  }

  ngOnInit() {
    this.logger.log('MapComponent/ngOnInit');
    // setup  the map from leaflet
    this.mapService.map = this.createMap(basemap.Esri);

    const districtLayer = L.tileLayer.wms('http://osgis.astun.co.uk/geoserver/gwc/service/wms?', {
      layers: 'osgb:district_borough_unitary_region',
      tiled: true,
      format: 'image/png',
      transparent: true,
      maxZoom: 14,
      minZoom: 0,
      continuousWorld: true
    }).addTo(this.map);
    this.logger.log('MapComponent/ngOnInit/mapService val: ' + this.mapService.map);
    this.initializeToolbar();
    this.initializeNavigator();


  }
  initializeToolbar(): void {
    this.toolbarComponent.Initialize();
  }
  initializeNavigator(): void {
    this.navigatorComponent.Initialize();

  }
  createMap(basemap: any): Map {
    this.logger.log('MapComponent/createMap/mapService val:: ' + this.mapService.map);
    const option =  {
      zoomControl: false,
      center: L.latLng(47.1, 7.0833),
      zoom: 15,
      minZoom: 4,
      maxZoom: 17,
      layers: [basemap]
    }
    this.map = L.map('map', option);
    L.control.zoom({ position: 'topleft' }).addTo(this.map);
    const measureOption = { localization: 'en', primaryLengthUnit: 'kilometers', secondaryLengthUnit: 'miles' ,
      activeColor: '#ABE67E', primaryAreaUnit: 'hectares', completedColor: '#C8F2BE',
      popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] }}
    L.control.layers(this.mapService.baseMaps).addTo(this.map);
    L.control.scale().addTo(this.map);
    L.control.measure(measureOption).addTo(this.map);
      return this.map;
  }

  getMap(): Map {
    return this.mapService.map;
  }


}
