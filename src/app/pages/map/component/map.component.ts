import { TopSideComponent } from './../../../features/side-panel/top-side-panel/top-side-panel.component';
import { map_options } from './../../../shared/data.service';
import {Component, ViewChild, OnInit, AfterContentInit , OnDestroy} from '@angular/core';
import { Map} from 'leaflet';
import 'leaflet-draw'

import { basemap } from '../basemap'
import { LeftSideComponent, SidePanelService, RightSideComponent } from '../../../features/side-panel';
import { Logger } from '../../../shared';
import { MapService } from '../map.service';
import { SearchBarComponent } from '../../searchbar';
import { SelectionToolButtonStateService } from 'app/features/selection-tools';
import { InteractionService } from 'app/shared/services/interaction.service';

@Component({
  selector: 'htm-map',
  templateUrl: './map.component.html',
  styles: [ require<any>('./map.component.less') ],

})

export class MapComponent implements OnInit , AfterContentInit , OnDestroy {
  isSelectionToolVisible = false;
  showHide = false;
  private nutsIds: string[];
  private map: Map;
  private layers;
  @ViewChild(SearchBarComponent) searchBarComponent: SearchBarComponent;
  // management of initial status of sidebar
  openRightSidebar = false;
  openRightToggleExpanded = false;
  openLeftSidebar = false;
  openTopSidebar = false;
  // declaration of the left and right sidebar
  @ViewChild(RightSideComponent) rightPanelComponent: RightSideComponent;
  @ViewChild(LeftSideComponent) leftPanelComponent: LeftSideComponent;
  @ViewChild(TopSideComponent) topSideComponent: TopSideComponent
  private zoomlevel;

  constructor(private mapService: MapService, private logger: Logger,
    private panelService: SidePanelService,
    private selectionToolButtonStateService: SelectionToolButtonStateService,
    private interactionService: InteractionService) {}

  ngAfterContentInit(): void {
    this.notifySubscription();
    this.leftPanelComponent.setTitle('Layers');
    this.rightPanelComponent.setTitle('Load Result');
    this.topSideComponent.setTitle('Feedback');
    // this.mapService.getGridTest();
  }
  ngOnDestroy() {
    this.map.remove();
  }
  notifySubscription() {
    this.mapService.getScaleValueSubject().subscribe(() => {
      this.mapService.setLayersSubject();
    });
    this.mapService.getLayerArray().subscribe((data) => {
      this.layers = data;
    })
    this.mapService.getSubscribtionNutsIds().subscribe((data) => {
      this.nutsIds = data;
    })
    this.panelService.summaryResultDataStatus.subscribe((data) => {
      this.rightPanelComponent.setSummaryResult(data);
    });
    this.panelService.heatLoadResultStatus.subscribe((data) => {
      this.rightPanelComponent.setHeatLoadResult(data);
    });
    this.panelService.poiData.subscribe((data) => {
      this.rightPanelComponent.setPoiData(data);
    });

    this.panelService.rightToggleExpandedStatus.subscribe((val: boolean) => {
      if (this.openRightToggleExpanded === false) {
        this.openRightToggleExpanded = true;
      } else {
        this.rightPanelComponent.toggleExpandedState();
        this.openRightSidebar = val;
      }
    });
    /*this.mapService.getZoomLevel().subscribe((zoomlevel) => {
      this.zoomlevel = zoomlevel;
    })*/
    this.panelService.topPanelStatus.subscribe((val: boolean) => {
      if (this.openTopSidebar === false) {
        this.openTopSidebar = true;
      } else {
        this.topSideComponent.toggleExpandedState();
        this.openTopSidebar = val;
      }
    });
    this.selectionToolButtonStateService.status.subscribe((val: Boolean) => {
      this.logger.log('mapComponent/selectionTool: ' + val)
      if (val) {
        this.interactionService.enableStateOpenWithFunction('selection')
        this.showHide = true;
      }else {
        this.interactionService.disableStateOpenWithFunction('selection')
        this.showHide = false;
      }
    });
    this.panelService.rightPanelStatus.subscribe((val: boolean) => {
      this.openRightSidebar = val;
      this.rightPanelComponent.display(val);
    });
    this.panelService.leftPanelStatus.subscribe((val: boolean) => {
      this.openLeftSidebar = val;
      this.leftPanelComponent.display(val);
    });
  }
  ngOnInit() {
    // mapService get an instance of the maps and can work on it
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
    this.map = L.map('map', map_options);
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
    // this.mapService.addDrawerControl(this.map);
    return this.map;
  }
  /*showControls() {
    this.mapService.addDrawControls();
  }*/
  getMap(): Map {
    return this.map;
  }
}
