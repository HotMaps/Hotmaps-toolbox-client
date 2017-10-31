import {Component, ViewChild, OnInit, AfterContentInit , OnDestroy} from '@angular/core';
import { Map} from 'leaflet';
import 'leaflet-draw'

import { basemap } from '../basemap'
import { LeftSideComponent, SidePanelService, RightSideComponent } from '../../../features/side-panel';
import { Logger } from '../../../shared';
import { MapService } from '../map.service';
import { SearchBarComponent } from '../../searchbar';

@Component({
  selector: 'htm-map',
  templateUrl: './map.component.html',
  styles: [ require<any>('./map.component.less') ],

})

export class MapComponent implements OnInit , AfterContentInit , OnDestroy {
  private map: Map;
  @ViewChild(SearchBarComponent) searchBarComponent: SearchBarComponent;
  // management of initial status of sidebar
  openRightSidebar = false;
  openRightToggleExpanded = false;
  openLeftSidebar = false;
  // declaration of the left and right sidebar
  @ViewChild(RightSideComponent) rightPanelComponent: RightSideComponent;
  @ViewChild(LeftSideComponent) leftPanelComponent: LeftSideComponent;

  constructor(private mapService: MapService,
              private logger: Logger,  private panelService: SidePanelService,
) {}

  ngAfterContentInit(): void {
    this.notifySidePanelComponent();
    this.leftPanelComponent.setTitle('Layers');
    this.rightPanelComponent.setTitle('Load Result');
    // this.mapService.getGridTest();
  }
  ngOnDestroy() {
    this.map.remove()
  }
  notifySidePanelComponent() {
    this.panelService.summaryResultDataStatus.subscribe((data) => {
      this.rightPanelComponent.setSummaryResult(data);
    });
    this.panelService.poiData.subscribe((data) => {
      this.rightPanelComponent.setPoiData(data);
    });
    this.panelService.rightPanelStatus.subscribe((val: boolean) => {
      if (this.openRightSidebar === false) {
        this.openRightSidebar = true;
      } else {
        this.rightPanelComponent.display(val);
        // this.openRightSidebar = val;
      }
    });
    this.panelService.rightToggleExpandedStatus.subscribe((val: boolean) => {
      if (this.openRightToggleExpanded === false) {
        this.openRightToggleExpanded = true;
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
    // mapService get an instance of the maps and ca work on it
    this.mapService.setupMapservice(this.createMap(basemap));
    this.initializeNavigator();
    this.map.invalidateSize();
  }
  initializeNavigator(): void {
    this.searchBarComponent.Initialize();
  }
  // main method create and display map (main purpose of this component)
  createMap(basemap: any): Map {
    // setup  the map from leaflet
    let self = this;
    const option =  {
      zoomControl: false,
      center: L.latLng( 52.379189, 4.899431),
      zoom: 4,
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
    this.mapService.getSelectionScaleMenu(this.map);
    // L.control.measure(measureOption).addTo(this.map);
    // this.mapService.addDrawerControl(this.map);
    return this.map;
  }
  showControls() {
    this.mapService.addDrawerControl(this.map);
  }
  getMap(): Map {
    return this.map;
  }


}
