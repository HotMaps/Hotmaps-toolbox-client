
/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Map, Layer} from 'leaflet';
import * as proj4x from 'proj4';
const proj4 = (proj4x as any).default;
import {Logger, LoaderService, Helper, nuts3} from '../../shared/';
import {Location} from '../../shared/class/location/location';
import Created = L.DrawEvents.Created;
declare const L: any;



import {PayloadStat, PlayloadStatNuts} from '../summary-result/class/payload.class';
import {
  constant_year, constant_year_sp_wwtp, hectare, initial_scale_value, lau2, nuts2, wwtpLayerName
} from '../../shared/data.service';
import {GeojsonClass} from '../layers/class/geojson.class';
import {BusinessInterfaceRenderService} from '../../shared/business/business.service';
import {SummaryResultClass} from '../summary-result/summary-result.class';
import { InteractionService } from 'app/shared/services/interaction.service';
import { Subject } from 'rxjs/Subject';
import {geoserverUrl, lau2name} from '../../shared';
import {APIService, ToasterService} from '../../shared/services';
import {Http} from '@angular/http';


@Injectable()
export class SelectionToolService extends APIService  {
  private nutsIds = new Set;
  private isActivate: boolean;
  private editableLayers = new L.FeatureGroup();
  private multiSelectionLayers = new L.layerGroup();
  private currentLayer;
  private scaleValue = initial_scale_value;
  private areaNutsSelectedLayer: any;
  private theDrawer;
  private isDrawer = false;
  private isPolygonDrawer = false;
  private nbNutsSelectedSubject: Subject<number> = new Subject<number>();
  private enableLoadResultSubject = new Subject<any>();
  enableLoadResultSubjectObs = this.enableLoadResultSubject.asObservable();
  private disableLoadResultSubject = new Subject<any>();
  disableLoadResultSubjectObs = this.disableLoadResultSubject.asObservable();
  private enableClearAllSubject = new Subject<any>();
  enableClearAllSubjectObs = this.enableClearAllSubject.asObservable();
  private disableClearAllSubject = new Subject<any>();
  disbleClearAllSubjectObs = this.disableClearAllSubject.asObservable();
  // ONLY FOR HECTAR (POPUP)
  private containerPopup: any;
  private popupTitle: any;
  private cancelBtn: any;
  private validationBtn: any;
  private validationBtnSelection: any;
  private validationBtnClick: any;
  // =======================
  constructor(http: Http, logger: Logger,  loaderService: LoaderService, toasterService: ToasterService, private helper: Helper,
    private businessInterfaceRenderService: BusinessInterfaceRenderService,
    private interactionService: InteractionService
  ) {super(http, logger, loaderService, toasterService); }
  // ===============================================================================================================
  // ONLY FOR HECTAR (POPUP)
  createButtons(type) {
    // this.logger.log('SelectionToolService/createButtons');
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
    this.createButtons('selection');
    this.currentLayer.bindPopup(this.containerPopup, { closeOnClick: false }).openPopup();
    // Set event bind on popup's buttons
    L.DomEvent.on(this.cancelBtn , 'click', () => {
      this.clearAll(map);
    });
    // Set event bind on popup's buttons
    L.DomEvent.on(this.validationBtnSelection, 'click', () => {
      this.interactionService.onPopupValidation();
      const layerNameArray = []
      for (let i = 0; i < this.interactionService.getLayerArray().keys().length; i++) {
          layerNameArray.push(this.interactionService.getLayerArray().keys()[i] +
            this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue) );
      }
      this.logger.log('layerNameArray' + layerNameArray);
      if (this.currentLayer instanceof L.Circle) {
        this.getStatisticsFromLayer(this.getLocationsFromCicle(this.currentLayer), layerNameArray, map)
      } else  if (this.currentLayer instanceof L.Polygon) {
        this.getStatisticsFromLayer(this.getLocationsFromPolygon(this.currentLayer), layerNameArray, map)
      }else  if (this.currentLayer instanceof L.latLng) {

        this.getStatisticsFromLayer(this.getLocationsFromPolygon(this.currentLayer), layerNameArray, map)
      } else {
        const layerNutsArray = [];

        for (let i = 0; i < this.interactionService.getLayerArray().keys().length; i++) {
          if (this.interactionService.getLayerArray().keys()[i] !== wwtpLayerName) {
           // this.logger.log('array ' + this.interactionService.getLayerArray().keys()[i]
           //   + this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue) )
            layerNutsArray.push(this.interactionService.getLayerArray().keys()[i] + '_ha' );
          } else {
            layerNutsArray.push(this.interactionService.getLayerArray().keys()[i]);
          }
        }
        this.getStatisticsFromLayer(this.getLocationsFromGeoJsonLayer(this.currentLayer), layerNutsArray, map)

      }
    });
  }
  drawHectareCreated(e, map) {
    const event: Created = <Created>e;
    const type = event.layerType,
    layer: any = event.layer;
    this.isActivate = false;
    // Clear the map before to show the new selection
    this.editableLayers.clearLayers();
    this.manageEditOrCreateLayer(layer, map);
    this.loadPopup(map, layer);
  }
  setIsPolygonDrawer(value) {
    this.isPolygonDrawer = value;
  }
  getNutsSelectedSubject(): Subject<number> {
    return this.nbNutsSelectedSubject;
  }
  getMultiSelectionLayers(): any {
    return this.multiSelectionLayers;
  }
  /**
   * Enable button "Load results"
   */
  enableButtonLoad() {
    this.enableLoadResultSubject.next();
  }
  /**
   * Disable button "Load results"
   */
  disableButtonLoad() {
    this.disableLoadResultSubject.next();
  }
  /**
   * Enable button "Clear all"
   */
  enableButtonClearAll() {
    this.enableClearAllSubject.next();
  }
  /**
   * disable button "Clear all"
   */
  disableButtonClearAll() {
    this.disableClearAllSubject.next();
  }
  drawCreated(e, map, nuts_lvl) {
    const event: Created = <Created>e;
    const type = event.layerType,
    layer: any = event.layer;
    this.isActivate = false;
    this.isPolygonDrawer = false;
    // Clear the map before to show the new selection
    // enable buttons when layer is created
    let location = '';
    if (layer instanceof L.Circle) {
      location = this.helper.convertLatLongToLocationString(this.getLocationsFromCicle(layer))
    } else  if (layer instanceof L.Polygon) {
      location = this.helper.convertLatLongToLocationString(this.getLocationsFromPolygon(layer))
    }else  if (layer instanceof L.latLng) {
      location = this.helper.convertLatLongToLocationString(this.getLocationsFromPolygon(layer))
    } else {
      location = this.helper.convertLatLongToLocationString(this.getLocationsFromGeoJsonLayer(layer))
    }
    this.logger.log('nuts_lvl' + nuts_lvl);
    if (nuts_lvl === 4) { // lau2 lvl
      this.getLau2ID(location, map, nuts_lvl)
    }else {
      this.getNutID(location, map, nuts_lvl)
    }
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

  setHTMLContent(el, str): any {
    el.innerHTML = str;
  }


  loadResultNuts(map) {
      this.interactionService.onPopupValidation();
      const layerNameArray = []
      for (let i = 0; i < this.interactionService.getLayerArray().keys().length; i++) {
          layerNameArray.push(this.interactionService.getLayerArray().keys()[i] +
            this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue) );
      }
      this.logger.log('layerNameArray ' + layerNameArray);
      this.getStatisticsFromIds(Array.from(this.nutsIds), layerNameArray, map);
  }
// Summary result show result
getStatisticsFromIds(nutsIds: string[], layers: string[], map: any) {
  const self = this;
  const request = [];
  this.loaderService.display(true);
  const payload: PlayloadStatNuts = { layers: layers, year: constant_year, nuts: nutsIds }
  const summaryPromise = this.interactionService.getSummaryResultWithIds(payload).then(result => {
   // this.editableLayers.clearLayers();
    this.displaySummaryResult(result, map);
  }).catch();
  request.push(summaryPromise);
  this.logger.log('getStatisticsFromIds/this.scaleValue ' + this.scaleValue)
  this.logger.log('getStatisticsFromLayer/this.scaleValue ' + this.scaleValue)
  if ((this.scaleValue === nuts2) || (this.scaleValue === nuts3)) {

    this.logger.log('nuts_id =  ' + this.nutsIds.values());
    const heatLoadPayload = {
      'year': 2010,
      'nuts': Array.from(this.nutsIds.values()),
      'nuts_level': this.businessInterfaceRenderService.convertNutsToApiName(this.scaleValue)
    }
    console.log('heatLoadPayload=');
    console.log(JSON.stringify(heatLoadPayload));
    const heatloadPromise = this.interactionService.getLoadProfileAggregateResultWithPayload(heatLoadPayload).then(result => {
      this.logger.log('heatLoadresult ' + JSON.stringify(result));
      const data = this.helper.formatDataLoadProfil(result);
      this.displayHeatLoad(data);
    }).catch();
    request.push(heatloadPromise);
  } else {
    this.displayHeatLoad(null);
  }
  Promise
    .all(request)
    .then(values => {
      this.logger.log('Promise then ' + values);
    });

}
  enableNavigationService( map: any) {
    this.interactionService.enableButtonWithId('selection');
  }
  getSelectionIdFromLayer(layer): any {
    let id_selection = this.getNUTSIDFromGeoJsonLayer(layer);
    if (this.helper.isNullOrUndefined(id_selection) === true) {
      id_selection = this.getLAU2IDFromGeoJsonLayer(layer);
    }
    return id_selection
  }
  removeLayerFromMultiSelectionLayers(layer: any) {
    this.logger.log('SelectionToolService/removeLayerFromMultiSelectionLayers');
    // if the nut
    const id_selection = this.getSelectionIdFromLayer(layer)
    this.nutsIds.delete(id_selection)
    const self = this
    let indexToRemove = 999;
    for (let i = 0; i < this.multiSelectionLayers.getLayers().length; i++) {
      const layerInsideMultiSelectionLayer = this.multiSelectionLayers.getLayers()[i];
      const iDInMultiSelectionLayers = self.getSelectionIdFromLayer(layerInsideMultiSelectionLayer)

      if (id_selection === iDInMultiSelectionLayers) {
        indexToRemove = i
        break;
      }
    }
    if (indexToRemove !== 999) {
      this.multiSelectionLayers.removeLayer(this.multiSelectionLayers.getLayers()[indexToRemove])
    }

    this.updateSelectionToolAction();
  }
  containLayer(layer: any): boolean {
    const id_selection = this.getSelectionIdFromLayer(layer);
    return this.nutsIds.has(id_selection)
  }
 layerCreatedClick(layer, map) {
   this.logger.log('SelectionToolService/layerCreatedClick');
   this.currentLayer = layer
   this.editableLayers.clearLayers();
   this.editableLayers.addLayer(this.currentLayer);
   this.editableLayers.addTo(map);
   this.enableNavigationService(map);
   this.loadPopup(map, layer);
 }
  toggleActivateTool(val: boolean) {
    this.isActivate = val;
  }

  manageEditOrCreateLayer(layer: any, map: any) {
    this.currentLayer = layer;
    this.isActivate = true;
    // we finich create the layer we go in edition mode
    if (this.helper.isNullOrUndefined(this.currentLayer.editing) === false) {
      this.currentLayer.editing.enable();
    }
    this.editableLayers.addLayer(this.currentLayer);
    // then we launch the validate popup

  }

  getLocationsFromPolygon(layer): Location[] {
    return this.helper.getLocationsFromPolygon(layer);
  }

  getLocationsFromGeoJsonLayer(layer): Location[] {
    return this.helper.getLocationsFromGeoJsonLayer(layer);
  }


  getNUTSIDFromGeoJsonLayer(layer): string {
    return this.helper.getNUTSIDFromGeoJsonLayer(layer);
  }
  getLAU2IDFromGeoJsonLayer(layer): string {
    return this.helper.getLAU2IDFromGeoJsonLayer(layer);
  }


  getLocationsFromCicle(layer): Location[] {
    return this.helper.getLocationsFromCicle(layer);
  }



  clearAll(map: any) {
    // ONLY HECTAR LEVEL
    if (this.scaleValue === hectare) {
      this.editableLayers.clearLayers();
    }
    // ====
    if (this.isDrawer) {
        this.theDrawer.disable(); // Disable the actual drawer anyway and
        this.isPolygonDrawer = false;
      }
      this.interactionService.disableStateOpenWithFunction('right');
      this.interactionService.disableButtonWithId('load_result');
      this.interactionService.closeRightPanel();
      // remove all layers selected
      this.multiSelectionLayers.clearLayers();
      // remove all nutsID selected
      this.nutsIds.clear();

      this.updateSelectionToolAction();
  }
  // Summary result show result
  getStatisticsFromLayer(locations: Location[], layers: string[], map: any) {
    const self = this;
    const request = [];
    this.loaderService.display(true);
    const payload: PayloadStat = { layers: layers, year: constant_year, points: locations }
    const summaryPromise = this.interactionService.getSummaryResultWithPayload(payload).then(result => {
      console.log(result );

      this.displaySummaryResult(result, map);
    }).catch();
    request.push(summaryPromise);
    this.logger.log('getStatisticsFromLayer/this.scaleValue ' + this.scaleValue);
    if (this.scaleValue === nuts2) {
      const nuts_id = this.getNUTSIDFromGeoJsonLayer(this.currentLayer);
      this.logger.log('nuts_id =  ' + nuts_id);
      const heatLoadPayload = {
        'year': 2010,
        'nuts_id': nuts_id,
        'nuts_level': '2'
      }
      const heatloadPromise = this.interactionService.getLoadProfileAggregateResultWithPayload(heatLoadPayload).then(result => {
      //  this.logger.log('heatLoadPayload ' + JSON.stringify(result));
        const data = this.helper.formatDataLoadProfil(result);
        this.displayHeatLoad(data);
      }).catch();
      request.push(heatloadPromise);
    } else {
      this.displayHeatLoad(null);

    }

    Promise
      .all(request)
      .then(values => {
        this.logger.log('Promise then ' + values);
      });

  }

  displayHeatLoad(data: any) {
    this.interactionService.setLoadProfileAggregateResultData(data)
  }

  openPopup() {
    this.logger.log('SelectionToolService/openPopup');
    this.currentLayer.openPopup();
  }
  displaySummaryResult(result: any, map: any) {
    // this.logger.log('displaySummaryResult');
    this.interactionService.openRightPanel();
    this.interactionService.setSummaryResultData(result);
    this.interactionService.enableButtonWithId('load_result');
    this.interactionService.enableStateOpenWithFunction('right');
    this.loaderService.display(false);
    // this.logger.log('this.loaderService.display(false) ;' + JSON.stringify(result) );
    // this.drawResult(result, map)
  }

  toggleControl(map: any) {
    if (this.isDrawer) {
      this.theDrawer.disable(); // Disable the actual drawer
    } else {
      this.isDrawer = true;
    }
  }
  /**
   * Activate the click selection tool
   */
  clickSelection(map: Map) {
    if (this.isDrawer) {
      this.getDrawer().disable(); // disable the current drawer before creating a new one
    }
    this.isPolygonDrawer = false;
  }
  /**
   * Activate the drawing rectangle tool
   */
  drawTool(map: Map, tool: string) {
    map.addLayer(this.editableLayers);
    this.editableLayers.clearLayers();
    if (this.isDrawer) {
      this.getDrawer().disable(); // disable the current drawer before creating a new one
    }
    switch (tool) {
      case 'rectangle':
        this.theDrawer = new L.Draw.Rectangle(map);
        this.isPolygonDrawer = false;
        break;
      case 'circle':
        this.theDrawer = new L.Draw.Circle(map);
        this.isPolygonDrawer = false;
        break;

      case 'polygon':
        this.theDrawer = new L.Draw.Polygon(map);
        this.isPolygonDrawer = true;
        break;
      default:
        break;
    }

    this.theDrawer.enable();

    this.isDrawer = true;
    this.isPolygonDrawer = true;
  }
  /**
   * Get the current drawer
   */
  getDrawer() {
    return this.theDrawer;
  }
  /**
   * Return true if polygon drawer is selected (activated)
   */
  getPolygonDrawerState(): boolean {
    if (this.isPolygonDrawer) {
      return true;
    }else {
      return false;
    }
  }
  /**
   * Get the current layer
   */
  getCurrentLayer() {
    return this.currentLayer;
  }
  getLau2ID(location, map, nuts_lvl) {
    this.loaderService.display(true);
    const epsg = '4326';
    const coordinate = location;
    const url = geoserverUrl + '?service=wfs' +
      '&version=2.0.0' +
      '&request=GetFeature' +
      '&srsName=EPSG:' + epsg +
      '&typeNames=hotmaps:' + lau2name +
      '&outputFormat=application/json' +
      '&CQL_FILTER= (WITHIN(geom,polygon((' + coordinate.toString() + '))))'
    this.logger.log('lau2 url ' + url);
    this.GET(url).map((res: Response) => res.json()  as any)
      .subscribe(res => this.drawResultBeforeLoadingResult(res), err => super.handleError(err));
  }
  getNutID(location, map, nuts_lvl) {
    this.loaderService.display(true);
    this.logger.log('getNutID');
    const epsg = '4326';
    const coordinate = location;
    const url = geoserverUrl + '?service=wfs' +
      '&version=2.0.0' +
      '&request=GetFeature' +
      '&srsName=EPSG:' + epsg +
      '&typeNames=hotmaps:' + 'population' +
      '&outputFormat=application/json' +
      '&CQL_FILTER= (WITHIN(geom,polygon((' + coordinate.toString() + '))))' +
      'AND stat_levl_=' + nuts_lvl + 'AND date=2015-01-01Z'
    ;
    this.GET(url).map((res: Response) => res.json()  as any)
      .subscribe(res => this.drawResultBeforeLoadingResult(res), err => super.handleError(err));
  }
  updateSelectionToolAction() {
    if (this.nutsIds.size > 0) {
      this.enableButtonLoad();
      this.enableButtonClearAll();
    } else {
      // disable buttons after clear
      this.disableButtonClearAll();
      this.disableButtonLoad();
    }
    this.nbNutsSelectedSubject.next(this.nutsIds.size);
  }
  drawResultBeforeLoadingResult(result: any) {
    if (this.helper.isNullOrUndefined(result) === false) {
      for (const feature of result.features) {
        let selection_id ;
        if (this.helper.isNullOrUndefined(feature.properties.nuts_id) === false) {
          selection_id = feature.properties.nuts_id
        } else {
          selection_id = feature.properties.comm_id
        }
        if (this.nutsIds.has(selection_id) === false) {
          this.nutsIds.add(selection_id)
          const areaNutsSelectedLayer = L.geoJson(feature);
          this.multiSelectionLayers.addLayer(areaNutsSelectedLayer) ;
        }
      }
      const self = this
    }
    this.updateSelectionToolAction();
    this.loaderService.display(false);
  }
  addToMultiSelectionLayers(layer: any) {
    if (this.helper.isNullOrUndefined(layer) === false) {
      const selection_id = this.getSelectionIdFromLayer(layer)
      if (this.nutsIds.has(selection_id) === false) {
        this.nutsIds.add(selection_id)
        this.multiSelectionLayers.addLayer(layer) ;
        this.updateSelectionToolAction();
      }
    }
    this.loaderService.display(false);
  }

}
