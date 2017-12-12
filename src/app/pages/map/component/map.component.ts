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
  private map: Map;

  constructor(private mapService: MapService, private logger: Logger,
    private selectionToolButtonStateService: SelectionToolButtonStateService) {}

  ngAfterContentInit(): void {
    this.notifySubscription();
  }
  ngOnDestroy() {
    this.map.remove();
  }

  notifySubscription() { 
    this.selectionToolButtonStateService.status.subscribe((val: Boolean) => {
      console.log(val + '  SelectionToolButtonStateService')
      if (val) {
        this.mapService.addDrawControls();
      }else {
        this.mapService.removeDrawControls();
      }
    });
  }

  ngOnInit() {
    // mapService get an instance of the maps and ca work on it
    this.mapService.setupMapservice(this.createMap(basemap));
    this.map.invalidateSize();
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
  showControls() {
    this.mapService.addDrawControls();
  }
  getMap(): Map {
    return this.map;
  }
}
