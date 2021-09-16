import { CMLayersService } from './../../features/calculation-module/cm-layers.service';

/**
 * Created by lesly on 27.05.17.
 */

import { BusinessInterfaceRenderService } from './../../shared/business/business.service';
import {
  lau2, lau2name, defaultZoomLevel, hectare, clickAccuracy, geoserverGetFeatureInfoUrl, MAPDRAWEDITED, MAPDRAWSTART,
  MAPDRAWDELETED,
  MAPDRAWEDITSTOP, MAPDRAWEDITSTART, MAPCLICK, MAPLAYERCHANCE, MAPDRAWCREATED, MAPZOOMSTART, MAPZOOMEND,
  MAPLAYERSCONTROLEVENT, MAPLAYERADD, MAPDIDIUPDATELAYER, MAPOVERLAYADD, apiUrl, maps_order,
} from './../../shared/data.service';
import { basemap } from './basemap';

import { SelectionToolService } from './../../features/selection-tools';
import { SelectionScaleService } from './../../features/selection-scale';
import { GeojsonClass, LayersService } from './../../features/layers';
import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { ToasterService } from './../../shared/services/toaster.service';
import { LoaderService } from './../../shared/services/loader.service';
import { Logger } from './../../shared/services/logger.service';
import { APIService } from '../../shared/services/api.service';
import { MouseEvent, Map, LayersControlEvent } from 'leaflet';
import { nuts2DataResult } from './component/mockdata';

import LatLng = L.LatLng;
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { SelectionToolButtonStateService } from '../../features/selection-tools/service/selection-tool-button-state.service';
import { Helper } from '../../shared/helper';
import {GoogleAnalyticsService} from "../../google-analytics.service";
import { UploadService } from 'app/shared/services/upload.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MapService extends APIService implements OnInit, OnDestroy {
  private map: Map;
  private baseMaps: any;
  private areaNutsSelectedLayer: any;
  private zoomlevel: BehaviorSubject<number> = new BehaviorSubject<number>(defaultZoomLevel);
  public layerArray: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  private tempAreaSelected;
  private cmRunning = false;

  // TODO: A modifier
  private clickEventSubject = new Subject<any>(); // Observable source for click
  clickEventSubjectObs = this.clickEventSubject.asObservable(); // Observable stream

  private drawCreatedSubject = new Subject<any>();
  drawCreatedSubjectObs = this.drawCreatedSubject.asObservable();

  constructor(http: HttpClient, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
    private layersService: LayersService, private selectionScaleService: SelectionScaleService,
    private cmLayerService: CMLayersService,
    private selectionToolService: SelectionToolService, private helper: Helper,
    private businessInterfaceRenderService: BusinessInterfaceRenderService,
    private selectionToolButtonStateService: SelectionToolButtonStateService,
    private googleAnalyticsService:GoogleAnalyticsService) {
    super(http, logger, loaderService, toasterService);
    this.baseMaps = basemap;
  }
  ngOnInit(): void {
    this.logger.log('MapService/ngOnInit()');
    this.layerArray.next(this.layersService.getLayerArray().keys())

  }

  ngOnDestroy(): void {
    this.logger.log('MapService/ngOnDestroy()');
  }
  getSubscribtionNutsIds() {
    return this.selectionToolService.nutsIdsSubject.asObservable()
  }
  getNbOfLayersSelected() {
    return this.selectionToolService.nbOfLayersSelected;
  }
  /**
  * Update the clickCursorSubject
  */
  clickCursorUpdate() {
    this.clickEventSubject.next();
  }
  /**
  * Update the drawCreatedSubject
  */
  drawCreatedUpdate() {
    this.drawCreatedSubject.next();
  }

  getMap(): Map {
    return this.map;
  }
  setCMRunning(val) {
    this.cmRunning = val;
  }
  // Retrive all map events
  retriveMapEvent(): void {
    const self = this;
    this.map.on(MAPCLICK, (event: MouseEvent) => { self.onClickEvent(self, event) });  
    this.map.on(MAPLAYERCHANCE, (event: L.LayersControlEvent) => { self.onBaselayerChange(self, event) });
    this.map.on(MAPZOOMSTART, () => { self.onZoomStart(self) });
    this.map.on(MAPZOOMEND, () => { self.onZoomEnd(self) });
    this.map.on(MAPLAYERSCONTROLEVENT, () => { self.onLayersControlEvent(self) });
    this.map.on(MAPLAYERADD, (e) => { self.onLayerAdd(self, e) });
    this.map.on(MAPDIDIUPDATELAYER, (event) => { self.onDidUpdateLayers(self, event) });
    this.map.on(MAPOVERLAYADD, () => { self.onOverLayAdd(self) });
    this.map.on(MAPDRAWCREATED, (e) => { self.onDrawCreated(self, e) });
    this.map.on(MAPDRAWEDITED, () => { self.onDrawEdited(self) });
    this.map.on(MAPDRAWSTART, () => { self.onDrawStart(self) });
    this.map.on(MAPDRAWEDITSTART, () => { self.onDrawEditStart(self) });
    this.map.on(MAPDRAWEDITSTOP, (e) => { self.onDrawEditStop(self, e) });
    this.map.on(MAPDRAWDELETED, () => { self.onDrawDeleted(self) });
  }

  // Event functions
  onDrawCreated(self, e) {
    self.logger.log('MapService/onDrawCreated');
    const scale_lvl = self.selectionScaleService.getIdFromNuts(self.selectionScaleService.getScaleValue());
    self.selectionToolService.drawCreated(e, this.map, scale_lvl);
    self.selectionToolService.setIsPolygonDrawer(false);
    self.drawCreatedUpdate();
  }
  onDrawEdited(self) {
    self.logger.log('MapService/onDrawEdited');
  }
  onDrawStart(self) {
    self.logger.log('MapService/DrawStart');
    self.selectionToolService.toggleActivateTool(true);

    this.selectionToolService.setButtonClearAll(true); // enable button when the drawing starts
  }
  onDrawEditStart(self) {
    self.logger.log('MapService/DrawEditStart');
    self.selectionToolService.toggleActivateTool(true);
  }
  onDrawEditStop(self, e) {
    self.logger.log('MapService/DrawEditStop');
    self.selectionToolService.setAreas();
    self.selectionToolService.toggleActivateTool(false);
  }
  onDrawDeleted(self) {
    self.logger.log('MapService/DrawDeleted');
    self.selectionToolService.clearAll(self.map);
  }
  onLayersControlEvent(self) { }
  onLayerAdd(self, e) {


    // const name = e.layer.wmsParams.layers;
    // self.logger.log('MapService/onLayerAdd '+ name);
    //  self.logger.log(e);
    //e.layer.bringToFront();
    self.logger.logObj(e);


  }
  onOverLayAdd(self) { }
  onMeasureStart(self) { }
  onZoomStart(self) {
  }
  onZoomEnd(self) {
    this.zoomlevel.next(self.map.getZoom())
  }
  onDidUpdateLayers(self, e) {
    self.logger.log('MapService/onDidUpdateLayers-----' + e);
  }
  onBaselayerChange(self, e: LayersControlEvent) {
    self.logger.log('baselayerchange');
    // in this part we manage the selection scale then we refresh the layers
    const scaleLevel = e.name;
    self.logger.log('baselayerchange ' + scaleLevel);
    if (scaleLevel !== 'OSM' && scaleLevel !== 'Satellite') {
      self.selectionToolService.clearAll(self.map);
      self.selectionScaleService.setScaleValue(scaleLevel);
      self.selectionToolService.setScaleValue(scaleLevel);
      self.layersService.setCurrentNutsLevel(scaleLevel);
    }

    // changes the actual scale
    this.selectionScaleService.changeScale();
  }
  onClickEvent(self, e: MouseEvent) {
    if (self.cmRunning) { self.toasterService.showDangerToaster("To run the calculation module (CM) for your new selection, STOP CM and RUN it again.") }
    if (self.getScaleValue() === hectare) { return; }
    if (self.selectionToolService.getPolygonDrawerState()) { return; }

    self.selectionToolService.activateClickSelectionTool();

    self.logger.log('MapService/click');
    self.selectionToolButtonStateService.enable(true); // opens the selection tools

    // automatic cursor tool selection doesn't work if polygon draw is activated
    if (!self.selectionToolService.getPolygonDrawerState()) {
      self.logger.log('self.selectionToolService.getPolygonDrawerState()');

      self.clickCursorUpdate(); // automatic cursor tool selection
    }
    // check if the selection toul is activate
    self.logger.log('MapService/Scale' + self.selectionScaleService.getScaleValue());
    if (self.selectionScaleService.getScaleValue() === hectare) {
      if (self.layersService.getIsReadyToShowFeatureInfo() === true) {
        self.getHectareGeometryFromClick(e.latlng, self.selectionScaleService.getScaleValue());
      }
    } else if (self.selectionScaleService.getScaleValue() === lau2) {
      self.selectionToolService.enableNavigationService();
      self.getNutsGeometryFromLau2(e.latlng, self.selectionScaleService.getScaleValue());
    } else {
      self.selectionToolService.enableNavigationService();
      self.getNutsGeometryFromNuts(e.latlng, self.selectionScaleService.getScaleValue());
    }


  }
  getZoomLevel(): BehaviorSubject<number> {
    return this.zoomlevel;
  }

  deleteSelectedAreas() {
    this.selectionToolService.deleteSelectedAreas();
  }
  toggleDrawControls() {
    this.selectionToolService.toggleControl(this.map);
  }

  // NUTS management
  getNutsGeometryFromNuts(latlng: LatLng, nuts_level): any {
    this.logger.log('MapService/getNutsGeometryFromNuts()/');
    const current_nuts_level = this.businessInterfaceRenderService.convertNutsToApiName(nuts_level);
    let bbox = latlng.toBounds(clickAccuracy).toBBoxString();
    bbox = bbox + '&CQL_FILTER=' + 'stat_levl_=' + current_nuts_level + ' AND ' + 'date=' + '2015' + '-01-01Z';
    const action = 'population';
    const url = geoserverGetFeatureInfoUrl
      + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
      '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
    this.logger.log('url ' + url);
    return this.getAreaFromScale(url);
  }
  // LAU management;
  getNutsGeometryFromLau2(latlng: LatLng, nuts_level): any {
    const bbox = latlng.toBounds(clickAccuracy).toBBoxString();
    const action = lau2name;
    const url = geoserverGetFeatureInfoUrl
      + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
      '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
    this.logger.log('lau2name url' + url);
    return this.getAreaFromScale(url);
  }

  /*postHectareCentroid(payload: any): Promise<any> {
    return this.POST(payload, apiUrl + postForOneHectareCentroid);
  }*/

  getAreaFromScale(url): any {
    return this.http.get(url).map((res) => res as GeojsonClass)
      .subscribe(res => this.selectAreaWithNuts(res), err => super.handleError(err));
  }
  getNutsBusiness(scaleLevel) {
    return this.businessInterfaceRenderService.convertNutsToApiName(scaleLevel);
  }

  selectAreaWithHectare(areaSelected: any) {
    // test if polygon tool is activated in order to avoid selecting a nuts during a polygon drawing
    if (!this.selectionToolService.getPolygonDrawerState()) {
      this.logger.log('MapService/selectAreaWithNuts()');
      let areaSelectedLayer = false;
      if (this.areaNutsSelectedLayer) {
        areaSelectedLayer = true; // true if an area nuts is selected
      }

      const lng = areaSelected.coordinates[0];
      const lat = areaSelected.coordinates[1];
      const point = L.latLng(lat, lng);
      const selection_id = point;
      const layer = new L.Rectangle(point.toBounds(100));

      this.selectionToolService.addHectareToMultiSelectionLayers(layer)
    }
  }

  selectAreaWithNuts(areaSelected: any) {
    // test if polygon tool is activated in order to avoid selecting a nuts during a polygon drawing
    if (!this.selectionToolService.getPolygonDrawerState()) {
      this.logger.log('MapService/selectAreaWithNuts()');
      let areaSelectedLayer = false;
      if (this.areaNutsSelectedLayer) {
        areaSelectedLayer = true; // true if an area nuts is selected
      }
      // remove the layer if there is one
      this.removeAreaSelectedlayer();
      // create an other selection only if this is a new area or if no area is actually selected (highlighted)
      const areaNutsSelectedLayer = L.geoJSON(areaSelected);
      if (this.selectionToolService.containLayer(areaNutsSelectedLayer) == 0) {
        this.selectionToolService.removeLayerFromMultiSelectionLayers(areaNutsSelectedLayer);
      } else if (this.selectionToolService.containLayer(areaNutsSelectedLayer) == 1) {
        this.selectionToolService.addToMultiSelectionLayers(areaNutsSelectedLayer);
      } else {
        return;
      }
    }
  }




  createSelection() {
    // this.selectionToolService.manageEditOrCreateLayer(this.areaNutsSelectedLayer, this.map);
  }
  removeAreaSelectedlayer() {
    if (this.areaNutsSelectedLayer) {
      this.logger.log('MapService/removeAreaSelectedlayer');
      this.map.removeLayer(this.areaNutsSelectedLayer);
      delete this.areaNutsSelectedLayer;

      // disable buttons when layer is removed
      this.selectionToolService.setButtonClearAll(false);
      this.selectionToolService.setLoadresultButton(false);
    }
  }

  getSelectionScaleMenu() {
    this.selectionScaleService.getSelectionScaleMenu(this.map, this.loaderService);
  }

  showOrRemoveLayer(action: string, order: number) {
    this.layersService.showOrRemoveLayer(action, this.map, order);
  }

  setupMapservice(map: Map) {
    this.logger.log('MapService/setupMapservice');
    // set the map to the services that needs to get an instance
    this.map = map;
    this.getSelectionScaleMenu();
    this.addLayersControl();
    this.retriveMapEvent();
    this.layersService.getLayers().addTo(this.map);
    this.cmLayerService.getLayersCM().addTo(this.map);
    this.selectionToolService.getMultiSelectionLayers().addTo(this.map);
    this.layersService.setupDefaultLayer();
  }

  addLayersControl() {
    const overlayMaps = {
    };
    const baseLayers = {
      OSM: L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        zIndex:maps_order,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
          ' Tiles courtesy of <a href="https://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
      }),
      // Improvement of coding style : (with codelyzer)
      // Exceeds maximum line length of 140
      Satellite: L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        zIndex:maps_order,
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC,' +
          ' USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,'
      }),
    };
    const control = L.control.layers(baseLayers, overlayMaps, { collapsed: false });
    control.addTo(this.map);
    this.map.addLayer(baseLayers.Satellite);

  }

  checkZoomLevelLayer(action, zoomLevel) {
    // this.layersService.showLayerDependingZoom(action, this.map, zoomLevel);
  }

  /**
   * Activate the drawing tool
   */
  activateDrawTool(map: Map, tool: string) {
    this.selectionToolService.activateDrawTool(map, tool);
  }

  /**
   * Activate the selection tool
   */
  clickSelection(map: Map) {
    this.selectionToolService.activateClickSelectionTool();
  }

  /**
   * Load the nuts selection results
   */
  loadResultNuts(map: Map) {
    this.selectionToolService.loadResultNuts(map);

    this.googleAnalyticsService
      .eventEmitter("map_summary_result", "map", "summary_result", "click");
  }

  /**
   * Clear the selection(s)
   */
  clearAll(map: Map) {
    this.selectionToolService.clearAll(map);
    // this.cmLayerService.clearAll();
  }


  getSelectionSurface(): BehaviorSubject<number> {
    return this.selectionToolService.getSelectionSurface()
  }
  /**
   * Get the nutsSelected Subject of SelectionToolService
   */
  getNutsSelectedSubject(): Subject<number> {
    return this.selectionToolService.getNutsSelectedSubject();
  }

  /**
   * Get the EnableLoadResultSubjectObs of SelectionToolService
   */
  getLoadResultbuttonState() {
    return this.selectionToolService.buttonLoadResultStatus;
  }

  /**
   * Get the DisbleClearAllSubjectObs of SelectionToolService
   */
  getClearAllButtonSubject() {
    return this.selectionToolService.buttonClearAll;
  }

  /**
   * Get the ScaleValueSubject of SelectionScaleService
   */
  getScaleValueSubject(): Subject<string> {
    return this.selectionScaleService.scaleValueSubject;
  }

  /**
   * Get the ScaleValue of SelectionScaleService
   */
  getScaleValue() {
    return this.selectionScaleService.getScaleValue();
  }

  setLayersSubject() {
    const layers = [];
    this.layersService.getLayerArray().keys().map((layersName) => {
      layers.push(layersName + this.businessInterfaceRenderService.getNutsTosuffix(this.selectionScaleService.getScaleValue()));
    });
    this.layerArray.next(layers);
  }
  getLayerArray() {
    return this.layerArray;
  }

  setLayerWithoutSuffix() {
    const layers = [];
    this.layersService.getLayerArray().keys().map((layerName) => {
      layers.push(layerName.replace(this.businessInterfaceRenderService.getNutsTosuffix(this.selectionScaleService.getScaleValue()), ''))
    })
    return layers
  }
  displayCustomLayerFromCM(directory, type) {
    this.cmLayerService.addOrRemoveLayerWithAction(directory, type, this.map)
  }
  removeCMLayer() {
    // this.cmLayerService.clearAll()
  }
}




