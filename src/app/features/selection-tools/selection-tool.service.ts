
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

import {NavigationBarService} from '../../pages/nav/service/navigation-bar.service'
import Created = L.DrawEvents.Created;


import Layer = L.Layer;
import Edited = L.DrawEvents.Edited;


import { Dictionary } from './../../shared/class/dictionary.class';
import { PayloadStat } from './../summary-result/mock/payload.class';
import { SummaryResultService } from './../summary-result/summary-result.service';
import {
  constant_year, constant_year_sp_wwtp, hectare, initial_scale_value, nuts3,
  wwtpLayerName
} from '../../shared/data.service';
import {GeojsonClass} from "../layers/class/geojson.class";
import {BusinessInterfaceRenderService} from "../../shared/business/business.service";
import {SummaryResultClass} from "../summary-result/summary-result.class";
import { InteractionService } from 'app/shared/services/interaction.service';


@Injectable()
export class SelectionToolService {



  private isActivate: boolean;
  private editableLayers = new L.FeatureGroup();
  private currentLayer;
  private options;
  private initialStateSelectionTool = false;
  private drawControl;
  private isDrawControl = false;
  private selectionTooLayer: any;
  private containerPopup: any;
  private popupTitle: any;
  private cancelBtn: any;
  private validationBtn: any;
  private scaleValue = initial_scale_value;
  private validationBtnSelection: any;
  private validationBtnClick: any;
  private areaNutsSelectedLayer: any;
  constructor(private logger: Logger, private loaderService: LoaderService, private helper: Helper,
    private sidePanelService: SidePanelService,
    private selectionToolButtonStateService: SelectionToolButtonStateService,
    private summaryResultService: SummaryResultService, private businessInterfaceRenderService: BusinessInterfaceRenderService,
    private layerService: LayersService, private interractionService: InteractionService) {

  }

  setScaleValue(scaleValue: string) {
    this.scaleValue = scaleValue;
  }

  isLayerInMap(): boolean {
    let hasLayer = false;
    if (this.editableLayers.getLayers().length > 0) {
      hasLayer = true;
    }
    return hasLayer;
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
  onDrawCreated(e){

  }
  createButtons(type) {
    this.logger.log('SelectionToolService/createButtons');
    this.containerPopup = L.DomUtil.create('div');
    this.popupTitle = L.DomUtil.create('h5', '', this.containerPopup);
    this.cancelBtn = L.DomUtil.create('button', 'uk-button uk-button-danger uk-button-small uk-width-2-2', this.containerPopup);
    this.setHTMLContent(this.popupTitle, 'Area Selected');
    this.setHTMLContent(this.cancelBtn, 'Cancel');
    if (type === 'click') {
      this.validationBtnClick = L.DomUtil.create('button', 'uk-button uk-button-primary uk-button-small uk-width-2-2', this.containerPopup);
      this.setHTMLContent(this.validationBtnClick, 'Validation');
    }else {
      this.validationBtnSelection =
          L.DomUtil.create('button', 'uk-button uk-button-primary uk-button-small uk-width-2-2', this.containerPopup);
      this.setHTMLContent(this.validationBtnSelection, 'Validation');
    }
  }

  loadPopup(map: any, layer: Layer) {
    this.logger.log('SelectionToolService/loadPopup');

    // Create elements with leaflet utility - validation & Cancel buttons + title
    this.createButtons('selection');
    this.currentLayer.bindPopup(this.containerPopup, { closeOnClick: false }).openPopup();

    // Set event bind on popup's buttons
    L.DomEvent.on(this.cancelBtn , 'click', () => {
      this.clearAll(map);
    });

    // Set event bind on popup's buttons
    L.DomEvent.on(this.validationBtnSelection, 'click', () => {
      const layerNameArray = []
      for (let i = 0; i < this.layerService.getLayerArray().keys().length; i++) {
        if (this.layerService.getLayerArray().keys()[i] !== wwtpLayerName) {
          this.logger.log('array ' + this.layerService.getLayerArray().keys()[i]
            + this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue) )
          this.logger.log('loadPopup/this.scaleValue' + this.scaleValue);
          layerNameArray.push(this.layerService.getLayerArray().keys()[i] + this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue) );
        } else {
          layerNameArray.push(this.layerService.getLayerArray().keys()[i]);
        }
      }
      if (this.currentLayer instanceof L.Circle) {
        this.getStatisticsFromLayer(this.getLocationsFromCicle(this.currentLayer), layerNameArray, map)
      } else  if (this.currentLayer instanceof L.Polygon) {
        this.getStatisticsFromLayer(this.getLocationsFromPolygon(this.currentLayer), layerNameArray, map)
      } else {
        this.logger.log('unknown form');

        const layerNutsArray = [];

        for (let i = 0; i < this.layerService.getLayerArray().keys().length; i++) {
          if (this.layerService.getLayerArray().keys()[i] !== wwtpLayerName) {
            this.logger.log('array ' + this.layerService.getLayerArray().keys()[i]
              + this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue) )
            layerNutsArray.push(this.layerService.getLayerArray().keys()[i] + '_ha' );
          } else {
            layerNutsArray.push(this.layerService.getLayerArray().keys()[i]);
          }
        }
        this.getStatisticsFromLayer(this.getLocationsFromGeoJsonLayer(this.currentLayer), layerNutsArray, map)

      }
    });
  }

  enableNavigationService( map: any) {
    this.interractionService.enableButtonWithId('selection');
    this.addDrawerControl(map);
  }
  layerCreatedClick(layer, map) {
    this.logger.log('SelectionToolService/layerCreatedClick');
    this.currentLayer = layer
    this.editableLayers.clearLayers();
    this.editableLayers.addLayer(this.currentLayer);
    this.editableLayers.addTo(map);
    this.loadPopup(map, this.currentLayer);
    this.enableNavigationService(map);

  }

  retriveMapEvent(map: any): void {
    const self = this;
    map.on(L.Draw.Event.CREATED, function (e) {
      console.log('created', e.type);

      const event: Created = <Created>e;
      const type = event.layerType,
      layer: any = event.layer;
      self.isActivate = false;
      // Clear the map before to show the new selection
      self.editableLayers.clearLayers();
      self.removeVtlayer(map);
      self.removeAreaNuts(map);
      self.manageEditOrCreateLayer(layer, map);
    });

    map.on(L.Draw.Event.EDITED, function (e) {
      console.log('EDITED', e.type);
      const event: Edited = <Edited>e;
      event.layers.eachLayer(function (layer: Layer) {
        const lay: Layer = layer;
        //  self.manageEditOrCreateLayer(layer, map);
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
    map.on(L.Draw.Event.DELETED, function (e) {
      self.clearAll(map);
    });

  }


  manageEditOrCreateLayer(layer: any, map: any) {
    this.currentLayer = layer;
    this.isActivate = true;
    // we finich create the layer we go in edition mode
    if (this.helper.isNullOrUndefined(this.currentLayer.editing) === false) {
      this.currentLayer.editing.enable();
    }
    this.editableLayers.addLayer(this.currentLayer);
    this.loadPopup(map, this.currentLayer)
    // then we launch the validate popup
  }

  getLocationsFromPolygon(layer): Location[] {
    const rectangle: any = <any>layer;
    const latlng = rectangle.getLatLngs()[0];
    const locations: Location[] = this.helper.convertLatLongToLocation(latlng);
    this.logger.log('locations [] ' + locations );
    return locations

  }

  getLocationsFromGeoJsonLayer(layer): Location[] {
    const geojsonLayer: any = <any>layer;
    const geoJson: GeojsonClass = geojsonLayer.toGeoJSON();
    this.logger.log('geoJson latlng ' +  geoJson.features[0].geometry.coordinates );
    const latlng: number[] = geoJson.features[0].geometry.coordinates;

    const locations: Location[] = this.helper.convertListLatLongToLocation(latlng);
    this.logger.log('locations [] ' + locations );
    return locations
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
    this.interractionService.enableButtonWithId('load_result');
    if (this.helper.isNullOrUndefined(layer.editing) === false) {
      layer.editing.disable();
    }
    this.interractionService.openRightPanel();
  }

  showlayer(geometrie: any, map: any) {
    this.removeVtlayer(map);
    this.selectionTooLayer = L.vectorGrid.slicer(geometrie);
    this.selectionTooLayer.addTo(map);
    this.loaderService.display(false);
  }

  clearAll(map: any) {
    if (this.currentLayer) {
      this.interractionService.disableButtonWithId('load_result');
      this.logger.log('layerService/clearAll');
      if (this.helper.isNullOrUndefined(this.currentLayer.editing) === false) {
        this.currentLayer.editing.disable();
      }
      this.editableLayers.clearLayers();
      this.removeVtlayer(map);
      this.removeAreaNuts(map);
      this.interractionService.closeRightPanel();
      }
  }

  removeVtlayer(map: any) {
    if (this.selectionTooLayer) {
      this.interractionService.disableButtonWithId('load_result');
      map.removeLayer(this.selectionTooLayer);
      delete this.selectionTooLayer;
    }
  }
  removeAreaNuts(map) {
    if (this.areaNutsSelectedLayer) {
      map.removeLayer(this.areaNutsSelectedLayer);
      delete this.areaNutsSelectedLayer;
    }
  }

  // Summary result show result
  getStatisticsFromLayer(locations: Location[], layers: string[], map: any) {
    this.logger.log('SelectionToolService/getStatisticsFromLayer');
    // this.sidePanelService.closeRightPanel();
    this.loaderService.display(true);
    const payload: PayloadStat = { layers: layers, year: constant_year, points: locations }
    this.summaryResultService.getSummaryResultWithPayload(payload).then(result => {
      this.displaySummaryResult(result, map);
    });
  }

  openPopup() {
    this.logger.log('SelectionToolService/openPopup');
    this.currentLayer.openPopup();
  }
  displaySummaryResult(result: any, map: any) {
    this.interractionService.openRightPanel();
    this.interractionService.setSummaryResultData(result);
    this.logger.log('displaySummaryResult ' + JSON.stringify(result) );
    this.interractionService.enableButtonWithId('load_result');
    if (this.helper.isNullOrUndefined(this.currentLayer.editing) === false) {
      this.currentLayer.editing.disable();
    }
    this.currentLayer.closePopup();
    this.loaderService.display(false);
    this.drawResult(result, map)

  }

  drawResult(result: SummaryResultClass, map: any) {
    this.logger.log('MapService/selectAreaWithNuts()');
    const geoJson = result.feature_collection;
    // remove the layer if there is one
    this.logger.log('MapService/geometrie()' + geoJson);
    this.removeAreaNuts(map);
    // add the selected area to the map
    // this.areaNutsSelectedLayer = L.vectorGrid.slicer(geometrie);
    // this.areaNutsSelectedLayer.setZIndex(11);
    this.areaNutsSelectedLayer = L.geoJson(geoJson);
    this.areaNutsSelectedLayer.addTo(map);

  }

  addDrawerControl(map: Map) {
    this.interractionService.enableStateOpenWithID('selection');
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
    if (!this.isDrawControl) {
      this.drawControl = new L.Control.Draw(this.options);
      map.addControl(this.drawControl);
      this.isDrawControl = !this.isDrawControl;
    }

  }
  removeControls(map: any) {
    if (this.isDrawControl) {
      map.removeControl(this.drawControl)
      this.isDrawControl = false;
    }
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
