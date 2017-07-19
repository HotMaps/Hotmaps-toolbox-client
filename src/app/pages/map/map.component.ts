import {Component, ViewChild, OnInit, AfterContentInit , OnDestroy} from '@angular/core';

import {ToolbarComponent} from '../toolbar/toolbar.component';
import {SearchBarComponent} from '../searchbar/searchbar.component';
import {basemap} from './basemap'
import {GeocodingService} from '../../shared/services/geocoding.service';
import {Map} from 'leaflet';
import {MapService} from '../../shared/services/map.service';
import {LoaderService} from '../../shared/services/loader.service';
import {Logger} from '../../shared/services/logger.service';

@Component({
  selector: 'htm-map',
  templateUrl: './map.component.html',
  styles: [ require<any>('./map.component.less') ],
  providers: []
})

export class MapComponent implements OnInit , AfterContentInit , OnDestroy {

  map: Map;
  @ViewChild(ToolbarComponent) toolbarComponent: ToolbarComponent;
  @ViewChild(SearchBarComponent) searchBarComponent: SearchBarComponent;

  constructor(private mapService: MapService, private geocoder: GeocodingService,
              private logger: Logger, private loaderService: LoaderService,
) {}

  ngAfterContentInit(): void {
    this.logger.log('MapComponent/AfterViewInit');
    this.logger.log('MapComponent/AfterViewInit/mapService val:: ' + this.mapService.map);
  }
  ngOnDestroy() {
    this.logger.log('MapComponent/ngOnDestroy');
    this.map.remove()
  }
  setupGridWithCellSize(cellsize: number, map: Map) {

    // make a new VirtualGrid

  }

  ngOnInit() {
    this.logger.log('MapComponent/ngOnInit');
    // mapService get an instance of the maps and ca work on it
    this.mapService.setupMapservice(this.createMap(basemap));
    this.logger.log('MapComponent/ngOnInit/map service intance must be initialize: ' + this.mapService.map);
    this.initializeNavigator();



  }

  initializeToolbar(): void {
    this.toolbarComponent.Initialize();
  }
  initializeNavigator(): void {
    this.searchBarComponent.Initialize();
  }
  // main method create and display map (main purpose of this component)
  createMap(basemap: any): Map {
    // setup  the map from leaflet
    this.logger.log('MapComponent/createMap/mapService val:: ' + this.mapService.map);
    const option =  {
      zoomControl: false,
      center: L.latLng(47.1, 7.0833),
      zoom: 5,
      minZoom: 4,
      maxZoom: 17,
      layers: [basemap.Esri, basemap.Hybrid]
    }
    this.map = L.map('map', option);
    L.control.zoom({ position: 'topright' }).addTo(this.map);
    const measureOption = { localization: 'en', position: 'topleft', primaryLengthUnit: 'kilometers', secondaryLengthUnit: 'miles' ,
      activeColor: '#ABE67E', primaryAreaUnit: 'hectares', completedColor: '#C8F2BE',
      popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] }}
    // L.control.layers(this.mapService.baseMaps).addTo(this.map);
    L.control.scale().addTo(this.map);
    L.control.measure(measureOption).addTo(this.map);
    this.setupGridWithCellSize(100, this.map)
      return this.map;
  }

  getMap(): Map {
    return this.map;
  }


}
