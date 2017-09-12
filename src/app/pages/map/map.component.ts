import {Component, ViewChild, OnInit, AfterContentInit , OnDestroy} from '@angular/core';

import {ToolbarComponent} from '../toolbar/toolbar.component';
import {SearchBarComponent} from '../searchbar/searchbar.component';
import {basemap} from './basemap'
import {GeocodingService} from '../../shared/services/geocoding.service';
import {Map} from 'leaflet';
import {MapService} from '../../shared/services/map.service';
import {LoaderService} from '../../shared/services/loader.service';
import {Logger} from '../../shared/services/logger.service';
import {Control} from 'leaflet-measure'
import {RightSideComponent} from '../../features/side-panel/right-side-panel/index';
import {LeftSideComponent} from '../../features/side-panel/left-side-panel/index';
import { SidePanelService} from '../../features/side-panel/side-panel.service';
import 'leaflet-draw';
import Polyline = L.Polyline;
import Created = L.DrawEvents.Created;
import { navigationButtons } from '../nav/nav-buttons.data';
import { NavigationButton } from '../nav/navigation.class';

@Component({
  selector: 'htm-map',
  templateUrl: './map.component.html',
  styles: [ require<any>('./map.component.less') ],

})

export class MapComponent implements OnInit , AfterContentInit , OnDestroy {
  private navButtons: NavigationButton[] = navigationButtons;
  private map: Map;
  @ViewChild(ToolbarComponent) toolbarComponent: ToolbarComponent;
  @ViewChild(SearchBarComponent) searchBarComponent: SearchBarComponent;
  // management of initial status of sidebar
  openRightSidebar = false;
  openLeftSidebar = false;

  @ViewChild(RightSideComponent) rightPanelComponent: RightSideComponent;
  @ViewChild(LeftSideComponent) leftPanelComponent: LeftSideComponent;

  constructor(private mapService: MapService, private geocoder: GeocodingService,
              private logger: Logger,  private panelService: SidePanelService,
) {}

  ngAfterContentInit(): void {
    this.logger.log('MapComponent/AfterViewInit');
    this.logger.log('MapComponent/AfterViewInit/mapService val:: ' + this.mapService.getMap());
    this.notifySidePanelComponent();
    this.leftPanelComponent.setTitle('DATA INTERACTIONS');
    // this.mapService.getGridTest();
  }
  ngOnDestroy() {
    this.logger.log('MapComponent/ngOnDestroy');
    this.map.remove()
  }

  toggleExpandedState(buttonClicked: NavigationButton) {

    console.log('left:' + this.panelService.leftPanelStatus.getValue() + ',button:' + buttonClicked.stateOpen);
    buttonClicked.stateOpen = !buttonClicked.stateOpen;
    if (buttonClicked.buttonFunction === 'left') {
      this.leftPanelComponent.toggleExpandedState();
      this.leftPanelComponent.setTitle(buttonClicked.title);
    }else if (buttonClicked.buttonFunction  === 'right') {
      this.panelService.rightPanelexpandedCollapsed();
      this.rightPanelComponent.setTitle(buttonClicked.title);
    }else if (buttonClicked.buttonFunction  === 'selection') {
      this.toggleControls();
    }
  }
  // manage the click or sidebar
  /* toggleRightExpandedState(title: any) {
    this.panelService.rightPanelexpandedCollapsed();
    this.rightPanelComponent.setTitle(title);
  }

  toggleLeftExpandedState(title: any) {
    this.panelService.leftPanelexpandedCollapsed();
    this.leftPanelComponent.setTitle(title);
  } */

  notifySidePanelComponent() {
    this.panelService.rightPanelStatus.subscribe((val: boolean) => {
      if (this.openRightSidebar === false) {
        this.openRightSidebar = true;
      } else {
        this.rightPanelComponent.toggleExpandedState();
        this.openRightSidebar = val;

      }
    });

    this.panelService.leftPanelStatus.subscribe((val: boolean) => {
      if (this.openLeftSidebar === false) {
        this.openLeftSidebar = true;
      } else {
        this.leftPanelComponent.toggleExpandedState();
        this.openLeftSidebar = val;

      }
    });
  }
  ngOnInit() {
    this.logger.log('MapComponent/ngOnInit');
    // mapService get an instance of the maps and ca work on it
    this.mapService.setupMapservice(this.createMap(basemap));
    this.logger.log('MapComponent/ngOnInit/map service intance must be initialize: ' + this.mapService.getMap());
    this.initializeNavigator();
    this.map.invalidateSize();



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
    let self = this;

    this.logger.log('MapComponent/createMap/mapService val:: ' + this.mapService.getMap());
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

    L.Map = L.Map.extend({
      openPopup: function(popup) {
        this.closePopup();
        this._popup = popup;
        self.logger.log('MapComponent/popup ' + popup);
        return this.addLayer(popup).fire('popupopen', {
          popup: this._popup
        });
      }
    });
    L.Control = L.Control.extend({
      delete: function(popup) {
        this._popup = popup;
        return this.addLayer(popup).fire('popupDelete', {
          popup: this._popup
        });
      }
    });

    L.control.scale().addTo(this.map);
    // L.control.measure(measureOption).addTo(this.map);
    //this.mapService.addDrawerControl(this.map);
    return this.map;
  }
  toggleControls() {
    this.mapService.toggleControl(this.map);
  }
  showControls() {
    this.mapService.addDrawerControl(this.map);
  }
  getMap(): Map {
    return this.map;
  }


}
