
/**
* Created by lesly on 27.05.17.
*/
import { Injectable } from '@angular/core';
import * as proj4x from 'proj4';
const proj4 = (proj4x as any).default;
import { Logger, LoaderService, Helper } from '../../../shared';
import { Location } from '../../../shared/class/location/location';
import * as Leaflet from 'leaflet';
import { map } from 'rxjs/operators';
declare const L: any;

import { hectare, initial_scale_value, maxSurfaceValueCM } from '../../../shared/data.service';
import { BusinessInterfaceRenderService } from '../../../shared/business/business.service';
import { InteractionService } from 'app/shared/services/interaction.service';
import { Subject ,  BehaviorSubject } from 'rxjs';
import { geoserverUrl, lau2name } from '../../../shared';
import { APIService, ToasterService } from '../../../shared/services';
import { SelectionToolUtils } from 'app/features/selection-tools/service/selection-tool-utils.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SelectionToolService extends APIService {
  private nutsIds: Set<string> = new Set;
  private isActivate: boolean;
  private multiSelectionLayers: Leaflet.FeatureGroup = new Leaflet.FeatureGroup();
  private controlMultiLayer: Leaflet.FeatureGroup = new Leaflet.FeatureGroup();
  private currentLayer;
  private scaleValue = initial_scale_value;
  private theDrawer;
  private isDrawer = false;
  private isPolygonDrawer = false;
  private nbNutsSelectedSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private surfaceSubject: BehaviorSubject<number> = new BehaviorSubject(0)
  buttonLoadResultStatus = new BehaviorSubject<boolean>(false);
  buttonClearAll = new BehaviorSubject<boolean>(false);

  nutsIdsSubject = new BehaviorSubject<string[]>([]);
  locationsSubject = new BehaviorSubject<Location[]>([]);
  areasSubject = new BehaviorSubject<Leaflet.Layer[]>([]);
  nbOfLayersSelected: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(http: HttpClient, logger: Logger, loaderService: LoaderService, toasterService: ToasterService, private helper: Helper,
    private businessInterfaceRenderService: BusinessInterfaceRenderService,
    private interactionService: InteractionService, private selectionToolUtils: SelectionToolUtils
    ) {
      super(http, logger, loaderService, toasterService);
    }

    setIsPolygonDrawer(value) {
      this.isPolygonDrawer = value;
    }
    getNutsSelectedSubject(): Subject<number> {
      return this.nbNutsSelectedSubject;
    }
    getSelectionSurface():BehaviorSubject<number> {
      return this.surfaceSubject;
    }
    getMultiSelectionLayers(): any {
      return this.multiSelectionLayers;
    }
    setLoadresultButton(value) {
      this.buttonLoadResultStatus.next(value);
    }
    getControlMultiLayer(): any {
      return this.controlMultiLayer;
    }

    setButtonClearAll(value) {
      this.buttonClearAll.next(value);
    }

    drawCreated(e, myMap, nuts_lvl) {
      const event: Leaflet.DrawEvents.Created = <Leaflet.DrawEvents.Created>e;
      const type = event.layerType,
      layer: any = event.layer;
      let controlIntersectContainsHectar = false;
      this.isActivate = false;
      this.isPolygonDrawer = false;
      let location = '';
      this.logger.log('scale lvl ' + nuts_lvl);

      // enable buttons when layer is created
      if (nuts_lvl === 5) {
        controlIntersectContainsHectar = this.helper.controlDrawedLayer(this.multiSelectionLayers, layer);
        if (!controlIntersectContainsHectar) {
          location = this.helper.convertPostGisLatLongToLocationString(this.helper.getLocationsFromLayer(layer))
          this.drawHectaresLoadingResult(myMap, layer);
        }
      } else {
        location = this.helper.convertLatLongToLocationString(this.helper.getLocationsFromLayer(layer))
      }

      if (nuts_lvl === 4) { // lau2 lvl
        this.getNutID(location, myMap, nuts_lvl, lau2name)
      } else if (nuts_lvl === 5) {} else {
        this.getNutID(location, myMap, nuts_lvl, 'population')
      }
    }

    setScaleValue(scaleValue: string) {
      this.scaleValue = scaleValue;
    }
    getScaleValue(): string {
      return this.scaleValue;
    }

    loadResultNuts(myMap) {
      const layerNameArray = []
      for (let i = 0; i < this.interactionService.getLayerArray().keys().length; i++) {
        layerNameArray.push(this.interactionService.getLayerArray().keys()[i] +
        this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue));
      }
      this.logger.log('layerNameArray ' + layerNameArray);
      this.getStatistics();
      this.setAreas()
    }

    enableNavigationService() {
      this.interactionService.enableButtonWithId('selection');
    }

    removeLayerFromMultiSelectionLayers(layer: any) {
      this.logger.log('SelectionToolService/removeLayerFromMultiSelectionLayers');
      // if the nut
      const self = this
      const id_selection = self.selectionToolUtils.getSelectionIdFromLayer(layer)
      this.nutsIds.delete(id_selection)
      let indexToRemove = 999;
      for (let i = 0; i < this.multiSelectionLayers.getLayers().length; i++) {
        const iDInMultiSelectionLayers = self.selectionToolUtils.getSelectionIdFromLayer(this.multiSelectionLayers.getLayers()[i])
        if (id_selection === iDInMultiSelectionLayers) {
          indexToRemove = i
          break;
        }
      }
      if (indexToRemove !== 999) {
        this.multiSelectionLayers.removeLayer(this.multiSelectionLayers.getLayers()[indexToRemove])
        this.controlMultiLayer.removeLayer(this.controlMultiLayer.getLayers()[indexToRemove])
      }
      this.updateSelectionToolAction();
    }

    containLayer(layer: any): number {
      if (!this.helper.isNullOrUndefined(layer._leaflet_id)){
        if (this.nutsIds.has(this.selectionToolUtils.getIdSelectionFromLayer(layer))){
          return 0;
        } else{return 1;}
      }
      else {return 2;}
    }

    toggleActivateTool(val: boolean) {
      this.isActivate = val;
    }

    clearAll(myMap: any) {
      this.logger.log('Clear all is called from selection tool')
      this.nbOfLayersSelected.next(0);
      // ================
      if (this.isDrawer) {
        this.theDrawer.disable(); // Disable the actual drawer anyway and
        this.isPolygonDrawer = false;
      }
      this.interactionService.disableStateOpenWithFunction('right');
      this.interactionService.disableButtonWithId('load_result');
      this.interactionService.closeRightPanel();
      // remove all layers selected
      this.multiSelectionLayers.clearLayers();
      this.controlMultiLayer.clearLayers();
      this.surfaceSubject.next(0)
      // remove all nutsID selected
      this.nutsIds.clear();
      this.updateSelectionToolAction();
      this.interactionService.deleteCMTask();
      // close opened CM
      // this.interactionService.setStatusCMPanel(false)
    }

    // Summary result show result
    getStatisticsFromLayer(locations: Location[], layers: string[], myMap: any) {
      const self = this;
      self.locationsSubject.next(locations);
      self.getStatistics();
    }

    getStatistics() {
      if(!(this.surfaceSubject.value > maxSurfaceValueCM && this.scaleValue == hectare)) {
        this.interactionService.openRightPanel();
        this.interactionService.enableButtonWithId('load_result');
        this.interactionService.enableStateOpenWithFunction('right');
      } else {
        this.toasterService.showToasterSurfaceCalculDisabled()
      }
    }

    toggleControl(myMap: any) {
      if (this.isDrawer) {
        this.theDrawer.disable(); // Disable the actual drawer
      } else {
        this.isDrawer = true;
      }
    }

    activateClickSelectionTool() {
      if (this.isDrawer) {
        this.getDrawer().disable(); // disable the current drawer before creating a new one
      }
      this.isPolygonDrawer = false;
    }

    activateDrawTool(myMap: Leaflet.DrawMap, tool: string) {

      if (this.isDrawer) {
        this.getDrawer().disable(); // disable the current drawer before creating a new one
      }
      // TODO: Modifier et mettre dans tableau
      switch (tool) {
        case 'rectangle':
        this.theDrawer = new Leaflet.Draw.Rectangle(myMap, <Leaflet.DrawOptions.RectangleOptions>{shapeOptions: {showArea: false}});
        this.isPolygonDrawer = false;
        break;
        case 'circle':
        this.theDrawer = new Leaflet.Draw.Circle(myMap);
        this.isPolygonDrawer = false;
        break;

        case 'polygon':
        this.theDrawer = new Leaflet.Draw.Polygon(myMap);
        this.isPolygonDrawer = true;
        break;
        default:
        break;
      }

      this.theDrawer.enable();
      this.isDrawer = true;
      //this.isPolygonDrawer = true;
    }

    getDrawer() {
      return this.theDrawer;
    }

    getPolygonDrawerState(): boolean {
      return this.isPolygonDrawer;
    }

    getNutID(location, myMap, nuts_lvl, stringLayerType) {
      this.loaderService.display(true);
      this.logger.log('getNutID');
      const epsg = '4326';
      const coordinate = location;
      let url = geoserverUrl + '?service=wfs' +
      '&version=2.0.0' +
      '&request=GetFeature' +
      '&srsName=EPSG:' + epsg +
      '&typeNames=hotmaps:' + stringLayerType +
      '&outputFormat=application/json' +
      '&CQL_FILTER= (WITHIN(geom,polygon((' + coordinate.toString() + '))))'
      ;
      if (nuts_lvl === 4) {} else {
        url += 'AND stat_levl_=' + nuts_lvl + 'AND date=2015-01-01Z'
      }

      this.logger.log(url)
      this.GET(url).pipe(map((res: Response) => res as any))
      .subscribe(res => this.drawResultBeforeLoadingResult(res), err => super.handleError(err));
    }

    updateSelectionToolAction() {
      if (this.nutsIds.size > 0) {
        this.setButtonsSelectionToolState(true);
        this.defineSurface(this.multiSelectionLayers)
      } else {
        // disable buttons after clear
        this.setButtonsSelectionToolState(false);
      }
      this.nbNutsSelectedSubject.next(this.nutsIds.size);
      this.nutsIdsSubject.next(Array.from(this.nutsIds));
    }

    setButtonsSelectionToolState(value) {
      this.setLoadresultButton(value);
      this.setButtonClearAll(value);
    }

    updateSelectionToolActionHectare() {
      if (this.areasSubject.getValue().length > 0) {
        this.setButtonsSelectionToolState(true);
        this.defineSurface(this.controlMultiLayer)
      } else {
        // disable buttons after clear
        this.setButtonsSelectionToolState(false);
      }
    }

    defineSurface(layergroup) {
      var surface=0
      if (this.nutsIds.size > 0 || this.areasSubject.getValue().length > 0) {
        var bounds = layergroup.getBounds()
        var width = bounds.getNorthWest().distanceTo(bounds.getNorthEast())/1000
        var height = bounds.getSouthEast().distanceTo(bounds.getNorthEast())/1000
        var surface = Math.round(width*height);
      }
      if(surface >= maxSurfaceValueCM) {
        this.interactionService.setStatusCMPanel(false)
        if (this.scaleValue == hectare) {
          this.interactionService.disableStateOpenWithFunction('right');
          this.interactionService.disableButtonWithId('load_result');
          this.interactionService.closeRightPanel();
        }
        this.toasterService.showToasterSurfaceCalculDisabled()
      }
      this.surfaceSubject.next(surface);

    }

    setAreas() {
      this.areasSubject.next(this.multiSelectionLayers.getLayers());
    }

    setLayerDependingCircleForControl(layer) {
      let layerInMultiSelection;
      if (layer instanceof Leaflet.Circle) {
        layerInMultiSelection = Leaflet.polygon([this.helper.getLocationsFromCicle(layer)]);
      } else {
        layerInMultiSelection = layer;
      }

      layerInMultiSelection._leaflet_id = layer._leaflet_id;
      return layerInMultiSelection;
    }

    drawHectaresLoadingResult(myMap: Leaflet.Map, layer: any) {
      if (this.multiSelectionLayers.hasLayer(layer) === false) {
        const layerTemp = this.setLayerDependingCircleForControl(layer)
        this.controlMultiLayer.addLayer(layerTemp);
        this.multiSelectionLayers.addLayer(layer);
        this.areasSubject.next(this.multiSelectionLayers.getLayers());
        this.logger.log('result is ' + this.areasSubject.getValue().length);
        this.nbNutsSelectedSubject.next(this.areasSubject.getValue().length);
        this.updateSelectionToolActionHectare();
        this.loaderService.display(false);

        const self = this;
        layer.on('click', function() {
          if (layer.options.fillColor === null) {
            layer.setStyle({
              'fillColor': 'red'
            });
            self.nbOfLayersSelected.next(self.nbOfLayersSelected.value + 1);
          } else {
            layer.setStyle({
              'fillColor': null
            });
            self.nbOfLayersSelected.next(self.nbOfLayersSelected.value - 1);
          }
          /* const self = this;
          if (layer.editing.enabled()) {
            layer.editing.disable();
            self.updateControlLayers(layer);
            myMap.fire('draw:editstop');
          } else {
            layer.editing.enable();
            myMap.fire('draw:editstart');
          } */
        });
      }
    }

    drawResultBeforeLoadingResult(result: any) {
      this.logger.log('result is ' + result);
      this.logger.log('result is ' + result.features);
      /*if (result.features.length === 0) {
        this.toasterService.showToaster('We encountered a problem, there is no data for this area');
      }*/
      if (this.helper.isNullOrUndefined(result) === false) {
        for (const feature of result.features) {
          let selection_id;
          if (this.helper.isNullOrUndefined(feature.properties.nuts_id) === false) {
            selection_id = feature.properties.nuts_id
          } else {
            selection_id = feature.properties.comm_id
          }
          if (this.nutsIds.has(selection_id) === false) {
            this.nutsIds.add(selection_id)
            const areaNutsSelectedLayer = L.geoJson(feature);
            this.multiSelectionLayers.addLayer(areaNutsSelectedLayer);
          }
        }
        const self = this
      }
      this.updateSelectionToolAction();
      this.loaderService.display(false);
    }

    addToMultiSelectionLayers(layer: any) {
      if (this.helper.isNullOrUndefined(layer) === false) {
        const selection_id = this.selectionToolUtils.getSelectionIdFromLayer(layer)
        if (this.nutsIds.has(selection_id) === false) {
          this.nutsIds.add(selection_id)
          this.multiSelectionLayers.addLayer(layer);
          this.updateSelectionToolAction();
        }
      }
    }

    addHectareToMultiSelectionLayers(layer: any) {
      if (this.helper.isNullOrUndefined(layer) === false) {
        this.multiSelectionLayers.addLayer(layer);
      }
    }

    deleteSelectedAreas() {
      this.multiSelectionLayers.getLayers().map((layer: any) => {
        if (layer.options.fillColor === 'red') {
          this.multiSelectionLayers.removeLayer(layer);
          this.controlMultiLayer.removeLayer(layer);
        }
      });
      this.nbOfLayersSelected.next(0);
      this.setAreas();
      this.nbNutsSelectedSubject.next(this.areasSubject.getValue().length);
      this.defineSurface(this.controlMultiLayer)
    }

    drawShapeFromFile(myMap: Leaflet.Map, geoJson: any) {
      geoJson.features.forEach(feature => {
        const geom = feature.geometry;
        if (geom.type == 'MultiPolygon') {
          geom.coordinates.forEach(coord => {
            const poly = Leaflet.polygon(Leaflet.GeoJSON.coordsToLatLngs(coord[0]));
            this.drawHectaresLoadingResult(myMap, poly);
          });
        } else if (geom.type == 'Polygon') {
          const poly = Leaflet.polygon(Leaflet.GeoJSON.coordsToLatLngs(geom.coordinates[0]));
          this.drawHectaresLoadingResult(myMap, poly);
        } else {
          console.log('shape not supported');
        }
      });
    }
  }
