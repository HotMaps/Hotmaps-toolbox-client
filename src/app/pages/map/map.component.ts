import {Component, ViewChild, OnInit, AfterContentInit , OnDestroy} from '@angular/core';
import {isDevMode} from '@angular/core';



import {ToolbarComponent} from '../toolbar/toolbar.component';
import {SearchBarComponent} from '../searchbar/searchbar.component';

import {basemap} from './basemap'
import {GeocodingService} from '../../shared/services/geocoding.service';
import {Map} from 'leaflet';
import {MapService} from '../../shared/services/map.service';
import {ModulesServiceService} from './modules-service/modules-service.service';
import { Location } from '../../features/population/location';
import {LoaderService} from '../../shared/services/loader.service';
import {Logger} from '../../shared/services/logger.service';
import { Payload } from '../../features/population/payload.class';
import { Population } from '../../features/population/population.class';
import { PopulationService } from '../../features/population/services/population.service';




@Component({
  selector: 'htm-map',
  templateUrl: './map.component.html',
  styles: [ require<any>('./map.component.less') ],
  providers: []
})

export class MapComponent implements OnInit , AfterContentInit , OnDestroy {
  population: Population;
  map: Map;
  @ViewChild(ToolbarComponent) toolbarComponent: ToolbarComponent;
  @ViewChild(SearchBarComponent) searchBarComponent: SearchBarComponent;

  constructor(private mapService: MapService, private geocoder: GeocodingService,
              private logger: Logger, private modulesService: ModulesServiceService, private loaderService: LoaderService,
 private populationService: PopulationService) {


  }
  ngAfterContentInit(): void {
    let self = this;
    //for unit test
    this.populationService.getPopulation();
    this.logger.log('MapComponent/AfterViewInit');
    this.logger.log('MapComponent/AfterViewInit/mapService val:: ' + this.mapService.map);
    this.map.on ('measurestart', function () {
      self.logger.log('MapComponent/measurestart');
    });
    this.map.on('measurefinish', function (evt) {
      writeResults(evt);
    });
    function writeResults (results: any) {
      self.logger.log('MapComponent/ngAfterContentInit/writeResults');
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
  ngOnDestroy() {
    this.logger.log('MapComponent/ngOnDestroy');
    this.map.remove()
  }
  ngOnInit() {
    this.logger.log('MapComponent/ngOnInit');
    this.mapService.map = this.createMap(basemap);
    this.logger.log('MapComponent/ngOnInit/mapService val: ' + this.mapService.map);
    this.initializeToolbar();
    this.initializeNavigator();
  }
  getPopulation(locations: Location[]) {
    this.loaderService.display(true);
    this.logger.log('MapComponent/getPopulation');
    const payload: Payload = {
      nuts_level: 3,
      year: 2015,
      points: locations,
    }
    this.logger.log('payload ' +  JSON.stringify(payload) );
    this.populationService.getPopulationWithPayloads(payload).then(population  => this.addlayer(population));
  }
  initializeToolbar(): void {
    this.toolbarComponent.Initialize();
  }
  initializeNavigator(): void {
    this.searchBarComponent.Initialize();
  }
  addlayer(population: Population) {
    this.logger.log('addlayer/Population' + JSON.stringify(JSON.parse(population.geometries)));
    this.mapService.addlayer(JSON.parse(population.geometries));
    this.loaderService.display(false);
    alert('population: ' + population.sum_density);
  }
  createMap(basemap: any): Map {
    // setup  the map from leaflet
    this.logger.log('MapComponent/createMap/mapService val:: ' + this.mapService.map);
    const option =  {
      zoomControl: false,
      center: L.latLng(47.1, 7.0833),
      zoom: 15,
      minZoom: 4,
      maxZoom: 17,
      layers: [basemap.Esri, basemap.Hybrid]
    }
    this.map = L.map('map', option);
    L.control.zoom({ position: 'topright' }).addTo(this.map);
    const measureOption = { localization: 'en', position: 'topleft', primaryLengthUnit: 'kilometers', secondaryLengthUnit: 'miles' ,
      activeColor: '#ABE67E', primaryAreaUnit: 'hectares', completedColor: '#C8F2BE',
      popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] },}
   // L.control.layers(this.mapService.baseMaps).addTo(this.map);
    L.control.scale().addTo(this.map);
    L.control.measure(measureOption).addTo(this.map);
      return this.map;
  }

  getMap(): Map {
    return this.mapService.map;
  }


}
