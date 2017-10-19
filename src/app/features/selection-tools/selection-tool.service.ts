
/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';

import {Map} from 'leaflet';

import {Logger} from '../../shared/services/logger.service';
import {Payload} from '../../features/population/payload.class';
import {Population} from '../../features/population/population.class';
import {LayersService} from '../../features/layers/services/layers.service';
import {PopulationService} from '../../features/population/services/population.service';
import {SidePanelService} from '../../features/side-panel/side-panel.service';
import {SelectionToolButtonStateService} from './selection-tool-button-state.service';
import {LoaderService} from '../../shared/services/loader.service';

import {Location} from '../../shared/class/location/location';
import {Helper} from '../../shared/helper'

import {NavigationBarService} from '../../pages/nav/navigation-bar.service'
import Created = L.DrawEvents.Created;


import Layer = L.Layer;
import Edited = L.DrawEvents.Edited;


import { Dictionary } from './../../shared/class/dictionary.class';
import { PayloadStat } from './../summary-result/mock/payload.class';
import { SummaryResultService } from './../summary-result/summary-result.service';
import {constant_year, constant_year_sp_wwtp} from '../../shared/data.service';


@Injectable()
export class SelectionToolService {


  private baseMaps: any;
  private isActivate: boolean;
  private editableLayers = new L.FeatureGroup();
  private currentLayer;
  private options;
  private initialStateSelectionTool = false;
  private drawControl;
  private isDrawControl = false;
  private selectionTooLayer: any;
  private layerArray: Dictionary;
  private containerPopup: any;
  private popupTitle: any;
  private cancelBtn: any;
  private validationBtn: any;
  constructor(private logger: Logger, private loaderService: LoaderService, private helper: Helper,
     private sidePanelService: SidePanelService,
    private navigationBarService: NavigationBarService,
    private selectionToolButtonStateService: SelectionToolButtonStateService,
    private summaryResultService: SummaryResultService,
    private layerService: LayersService) {

  }


  getIsActivate(): boolean {
    return this.isActivate;
  }

  notifyLoaderService(map: any) {
    this.selectionToolButtonStateService.status.subscribe((val: boolean) => {
      if (this.initialStateSelectionTool) {
        this.toggleControl(map);
      }else {
        this.initialStateSelectionTool = true;
      }
    });
  }
  setMap(map: any) {
    this.notifyLoaderService(map);
    this.retriveMapEvent(map);
  }

  setHTMLContent(el, str): any {
    el.innerHTML = str;
  }

  createElementLeafletButtons() {
    this.containerPopup = L.DomUtil.create('div');
    this.popupTitle = L.DomUtil.create('h5', '', this.containerPopup);
    this.cancelBtn = L.DomUtil.create('button', 'uk-button uk-button-danger uk-button-small uk-width-2-2', this.containerPopup);
    this.validationBtn = L.DomUtil.create('button', 'uk-button uk-button-primary uk-button-small uk-width-2-2', this.containerPopup);
  }

  createButtons(title) {
    this.createElementLeafletButtons();
    this.setHTMLContent(this.popupTitle, title);
    this.setHTMLContent(this.cancelBtn, 'Cancel');
    this.setHTMLContent(this.validationBtn, 'Validation');
  }

  loadPopup(map: any, layer: Layer, latlng, type) {
    this.logger.log('SelectionToolService/loadPopup');
    // Create elements with leaflet utility - validation & Cancel buttons + title
    this.createButtons(type);
    if (type === 'click') {
      map.openPopup(this.containerPopup, latlng);
    }else {
      this.currentLayer.bindPopup(this.containerPopup, { closeOnClick: false }).openPopup();
    }

    // Set event bind on cancel button from popup
    L.DomEvent.on(this.cancelBtn , 'click', () => {
      if (type === 'click') {
        map.closePopup();
      }else {
        this.clearAll();
      }
    });


    // Set event bind on validation button from popup
    L.DomEvent.on(this.validationBtn, 'click', () => {
      if (type === 'click') {
        this.layerService.getDetailInfoClick(latlng).then(() => {
          map.closePopup();
        });
      }else if (this.currentLayer instanceof L.Circle) {
        this.getStatisticsFromLayer(this.getLocationsFromCicle(this.currentLayer), this.layerService.getLayerArray().keys(), map)
      } else {
        this.getStatisticsFromLayer(this.getLocationsFromPolygon(this.currentLayer), this.layerService.getLayerArray().keys(), map)
      }
    });
  }

  retriveMapEvent(map: any): void {
    const self = this;
    map.on(L.Draw.Event.CREATED, function (e) {
      console.log('created', e.type);

      const event: Created = <Created>e;
      const type = event.layerType,
      layer: any = event.layer;
      self.currentLayer = layer
      self.isActivate = false;
      // Clear the map before to show the new selection
      self.editableLayers.clearLayers();
      self.removeVtlayer(map);
      self.manageEditOrCreateLayer(self.currentLayer, map);
    });

    map.on(L.Draw.Event.EDITED, function (e) {
      console.log('EDITED', e.type);
      const event: Edited = <Edited>e;
      event.layers.eachLayer(function (layer: Layer) {
        const lay: Layer = layer;
        self.manageEditOrCreateLayer(layer, map);
      });
    });
    map.on(L.Draw.Event.DRAWSTART, function (e) {
      self.isActivate = true;
    });
    map.on(L.Draw.Event.DRAWSTOP, function (e) {
    });
    map.on(L.Draw.Event.EDITSTART, function (e) {
      self.isActivate = true;
    });

    map.on(L.Draw.Event.EDITSTOP, function (e) {
      self.isActivate = false;
    });
  }


  manageEditOrCreateLayer(layer: any, map: any) {
    this.isActivate = true;
    // we finich create the layer we go in edition mode
    this.currentLayer.editing.enable();

    this.editableLayers.addLayer(this.currentLayer);
    this.loadPopup(map, this.currentLayer, null, 'selection')
    // then we launch the validate popup
  }

  getLocationsFromPolygon(layer): Location[] {
    const rectangle: any = <any>layer;
    const latlng = rectangle.getLatLngs()[0];
    const locations: Location[] = this.helper.convertLatLongToLocation(latlng);
    return locations;
  }

  getLocationsFromCicle(layer): Location[] {
    const circle: any = <any>layer;
    const origin = circle.getLatLng(); // center of drawn circle
    const radius = circle.getRadius(); // radius of drawn circle
    const polys = this.helper.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
    const locations = [];
    for (let i = 0; i < polys.length; i++) {
      const loc: Location = {
        lat: polys[i].lat,
        lng: polys[i].lng
      };
      locations.push(loc);
    }
    return locations
  }

  retriveAndAddLayer(population: Population, layer: any, map: any) {
    this.loaderService.display(false);
    this.navigationBarService.enableButton('load_result');
    layer.editing.disable();
    this.sidePanelService.openRightPanel();
  }

  showlayer(geometrie: any, map: any) {
    this.removeVtlayer(map);
    this.selectionTooLayer = L.vectorGrid.slicer(geometrie);
    this.selectionTooLayer.addTo(map);
    this.loaderService.display(false);
  }

  clearAll() {
    this.navigationBarService.disableButton('load_result');
    this.currentLayer.editing.disable();
    this.editableLayers.clearLayers();
    this.sidePanelService.closeRightPanel();
  }

  removeVtlayer(map: any) {
    if (this.selectionTooLayer) {
      this.navigationBarService.disableButton('load_result');
      map.removeLayer(this.selectionTooLayer);
      delete this.selectionTooLayer;
    }
  }

  // Summary result show result
  getStatisticsFromLayer(locations: Location[], layers: string[], map: any) {
    // this.sidePanelService.closeRightPanel();
    this.loaderService.display(true);
    const payload: PayloadStat = { layers: layers, year: constant_year, points: locations }
    this.summaryResultService.getSummaryResultWithPayload(payload).then(result => {
      this.displaySummaryResult(result);
    });
  }

  displaySummaryResult(result) {
    console.log('displaySummaryResult' + result);
    this.sidePanelService.openRightPanel();
    this.sidePanelService.setSummaryResultData(result);
    this.navigationBarService.enableButton('load_result');
    this.currentLayer.editing.disable();
    this.currentLayer.closePopup();
    this.loaderService.display(false);
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
      featureGroup: this.editableLayers, // allow editing/deleting of features in this group
        edit: false, // disable the edit tool (since we are doing editing ourselves)
        remove: false
    },
    };
    this.drawControl = new L.Control.Draw(this.options);
    map.addControl(this.drawControl);

  }

  toggleControl(map: any) {
    if (this.isDrawControl) {
      map.removeControl(this.drawControl)
      this.isDrawControl = false;
    } else {
      this.addDrawerControl(map);
      this.isDrawControl = true;
    }
  }
}
