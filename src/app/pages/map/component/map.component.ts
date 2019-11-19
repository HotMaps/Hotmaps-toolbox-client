import { TopSideComponent } from './../../../features/side-panel/top-side-panel/top-side-panel.component';
import { map_options, eu_logo_path, eu_logo_height } from './../../../shared/data.service';
import {Component, ViewChild, OnInit, AfterContentInit , OnDestroy} from '@angular/core';
import { Map, Layer } from 'leaflet';
import 'leaflet-draw'
import {Geocoder} from 'leaflet-control-geocoder'
declare const L: any;



import { basemap } from '../basemap'
import { LeftSideComponent, SidePanelService, RightSideComponent } from '../../../features/side-panel';
import { Logger } from '../../../shared';
import { MapService } from '../map.service';
import { SearchBarComponent } from '../../searchbar';
import { SelectionToolButtonStateService, SelectionToolService } from 'app/features/selection-tools';
import { InteractionService } from 'app/shared/services/interaction.service';
import { Location } from '../../../shared/class/location/location';

import {geoserverUrl} from '../../../shared/data.service';
import { UploadService } from 'app/shared/services/upload.service';
@Component({
  selector: 'htm-map',
  templateUrl: './map.component.html',
  styles: [ require<any>('./map.component.less') ],

})

export class MapComponent implements OnInit , AfterContentInit , OnDestroy {
  isSelectionToolVisible = false;
  selectionToolShow = false;

  folderPanelShow = false;
  savePanelShow = false;
  
  private nutsIds: string[];
  private locationsSelection: Location[];
  private areas: Layer[];
  private map: Map;
  private layers;
  private scaleLevel;
  private cmRunned;
  private personnalLayers;
  private selectionSurface=0;
  @ViewChild(SearchBarComponent) searchBarComponent: SearchBarComponent;

  // management of initial status of sidebar
  openRightSidebar = false;
  openRightToggleExpanded = false;
  openLeftSidebar = false;
  openTopSidebar = false;
  // declaration of the left and right sidebar
  @ViewChild(RightSideComponent) rightPanelComponent: RightSideComponent;
  @ViewChild(LeftSideComponent) leftPanelComponent: LeftSideComponent;
  @ViewChild(TopSideComponent) topSideComponent: TopSideComponent;
  private zoomlevel;

  constructor(private mapService: MapService, private logger: Logger,
    private panelService: SidePanelService, private uploadService: UploadService,
    private selectionToolButtonStateService: SelectionToolButtonStateService,
    private selectionToolService: SelectionToolService,
    private interactionService: InteractionService
  ) {
  }

  ngAfterContentInit(): void {
    this.notifySubscription();
    this.leftPanelComponent.setTitle('Layers');
    this.rightPanelComponent.setTitle('Results');
    this.topSideComponent.setTitle('Feedback');
    // this.mapService.getGridTest();
  }
  ngOnDestroy() {
    this.map.remove();
  }
  notifySubscription() {
    if (this.uploadService.getActivePersonalLayers) {
      this.uploadService.getActivePersonalLayers().subscribe((lay) => {
        this.personnalLayers = Object.assign({}, lay);
      });
    }
    this.selectionToolService.getSelectionSurface().subscribe(surface => {
      this.selectionSurface = surface;
    })
    if (this.mapService.getScaleValueSubject() !== null) {
      this.mapService.getScaleValueSubject().subscribe((scaleLevel) => {
        this.scaleLevel = this.mapService.getNutsBusiness(scaleLevel);
        this.mapService.setLayersSubject();
      });
    }
    this.interactionService.getCMRunned().subscribe((value) => {
      this.cmRunned = value
      if (value !== null) {
        this.interactionService.openRightPanel()
      }

    })
    if (this.mapService.getLayerArray() !== null) {
      this.mapService.getLayerArray().subscribe((data) => {
        this.layers = data;
      });
    }
    this.selectionToolService.areasSubject.subscribe((areas) => {
      this.areas = areas;
    })
    this.selectionToolService.nutsIdsSubject.subscribe((data) => {
      this.nutsIds = data;
    });
    this.selectionToolService.locationsSubject.subscribe((data) => {
      this.locationsSelection = data;
    });
    this.panelService.rightToggleExpandedStatus.subscribe((val: boolean) => {
      if (this.openRightToggleExpanded === false) {
        this.openRightToggleExpanded = true;
      } else {
        this.rightPanelComponent.toggleExpandedState();
        this.openRightSidebar = val;
      }
    });
    if (this.mapService.getZoomLevel() !== null) {
      this.mapService.getZoomLevel().subscribe((zoomlevel) => {
        this.zoomlevel = zoomlevel;
      });
    }
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
        this.selectionToolShow = true;
      }else {
        this.interactionService.disableStateOpenWithFunction('selection')
        this.selectionToolShow = false;
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
    this.panelService.folderPanelStatus.subscribe((val: boolean) => {
      this.folderPanelShow = val;
    });

    this.panelService.savePanelStatus.subscribe((val: boolean) => {
      this.savePanelShow = val;
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
    const self = this;
    this.map = L.map('map', map_options);
    var eu_logo = L.control({ position: 'bottomright', onAdd:()=>{ } });
    eu_logo.onAdd = function(){
        var div = L.DomUtil.create('div', 'eu_logo');
        div.style = 'background:rgba(255, 255, 255, 0.7); padding:5px'
        div.innerHTML= "<div style='float: right;height: "+eu_logo_height+"px;'><img src='"+eu_logo_path+"' style='height:100%' /></div><div style='float:right; width:200px'><span style='font-size: 10px;'> This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No. 723677.</span> </div>";
        return div;
    }
    this.map.addControl(eu_logo)
    L.control.zoom({ position: 'topright' });
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
