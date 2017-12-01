import { Http, Response } from '@angular/http';

import {idWwtpLayer, lau2, lau2name} from './../../shared/data.service';
/**
 * Created by lesly on 27.05.17.
 */
import { BusinessInterfaceRenderService } from './../../shared/business/business.service';
import { hectare, clickAccuracy, geoserverGetFeatureInfoUrl, MAPDRAWEDITED, MAPDRAWSTART, MAPDRAWDELETED,
  MAPDRAWEDITSTOP, MAPDRAWEDITSTART, MAPCLICK, MAPLAYERCHANCE, MAPDRAWCREATED, MAPZOOMSTART, MAPZOOMEND,
  MAPLAYERSCONTROLEVENT, MAPLAYERADD, MAPDIDIUPDATELAYER, MAPOVERLAYADD} from './../../shared/data.service';
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
import LatLng = L.LatLng;


@Injectable()
export class MapService extends APIService implements OnInit, OnDestroy {
    private map: Map;
    private baseMaps: any;
    private areaNutsSelectedLayer: any;
    constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
        private layersService: LayersService, private selectionScaleService: SelectionScaleService,
                private selectionToolService: SelectionToolService,
                private businessInterfaceRenderService: BusinessInterfaceRenderService) {
        super(http, logger, loaderService, toasterService);
        this.baseMaps = basemap;
    }
    ngOnInit(): void {
        this.logger.log('MapService/ngOnInit()');
    }

    ngOnDestroy(): void {
        this.logger.log('MapService/ngOnDestroy()');
    }

    getMap(): Map {
        return this.map;
    }
    // Retrive all map events
    retriveMapEvent(): void {
        const self = this;
        this.map.on(MAPCLICK, (event: MouseEvent) => {self.onClickEvent(self, event)});
        this.map.on(MAPLAYERCHANCE, (event: L.LayersControlEvent) => { self.onBaselayerChange(self, event) });
        this.map.on(MAPZOOMSTART, () => { self.onZoomStart(self)});
        this.map.on(MAPZOOMEND, () => { self.onZoomEnd(self)});
        this.map.on(MAPLAYERSCONTROLEVENT, () => { self.onLayersControlEvent(self)});
        this.map.on(MAPLAYERADD, () => { self.onLayerAdd(self)});
        this.map.on(MAPDIDIUPDATELAYER, (event) => { self.onDidUpdateLayers(self, event)});
        this.map.on(MAPOVERLAYADD, () => { self.onOverLayAdd(self)});
        this.map.on(MAPDRAWCREATED, (e) => { self.onDrawCreated(self, e)});
        this.map.on(MAPDRAWEDITED, () => { self.onDrawEdited(self)});
        this.map.on(MAPDRAWSTART, () => { self.onDrawStart(self)});
        this.map.on(MAPDRAWEDITSTART, () => { self.onDrawEditStart(self)});
        this.map.on(MAPDRAWEDITSTOP, () => { self.onDrawEditStop(self)});
        this.map.on(MAPDRAWDELETED, () => { self.onDrawDeleted(self)});
    }

    // Event functions
    onDrawCreated(self, e) {
        self.selectionToolService.drawCreated(e, this.map);
    }
    onDrawEdited(self) { }
    onDrawStart(self) { self.selectionToolService.toggleActivateTool(true); }
    onDrawEditStart(self) { self.selectionToolService.toggleActivateTool(true); }
    onDrawEditStop(self) { self.selectionToolService.toggleActivateTool(false); }
    onDrawDeleted(self) { self.selectionToolService.clearAll(self.map); }
    onLayersControlEvent(self) { }
    onLayerAdd(self) { }
    onOverLayAdd(self) { }
    onMeasureStart(self) { }
    onZoomStart(self) {
    }
    onZoomEnd(self) { }
    onDidUpdateLayers(self, e) {
        if (self.selectionToolService.isLayerInMap() === true) {
            self.selectionToolService.openPopup();
            self.logger.log('MapService/didUpdateLayers-----' + e);
        }
    }
    onBaselayerChange(self, e: LayersControlEvent) {
        self.logger.log('baselayerchange');
        // in this part we manage the selection scale then we refresh the layers
        const scaleLevel = e.name;
        self.selectionToolService.clearAll(self.map);
        self.selectionScaleService.setScaleValue(scaleLevel);
        self.selectionToolService.setScaleValue(scaleLevel);
        self.layersService.setCurrentNutsLevel(scaleLevel);
        if (self.selectionToolService.isLayerInMap() === true) {
            self.selectionToolService.openPopup();
            self.logger.log('MapService/didUpdateLayers-----' + e);
        }
    }
    onClickEvent(self, e: MouseEvent) {
      self.logger.log('MapService/click');
      // check if the selection toul is activate
      self.logger.log('MapService/Scale' + self.selectionScaleService.getScaleValue());
      if (self.selectionScaleService.getScaleValue() === hectare) {
        if (self.layersService.getIsReadyToShowFeatureInfo() === true) {
         // const layer = new L.Rectangle(e.latlng.toBounds(100));
          const point = e.latlng;
          self.selectionToolService.layerCreatedClick(point, self.map);
        }
      } else if (self.selectionScaleService.getScaleValue() === lau2) {
        self.selectionToolService.enableNavigationService(self.map);
        self.getNutsGeometryFromLau2(e.latlng, self.selectionScaleService.getScaleValue());
      } else {
        self.selectionToolService.enableNavigationService(self.map);
        self.getNutsGeometryFromNuts(e.latlng, self.selectionScaleService.getScaleValue());
      }

    }

    // Draw control management
    addDrawControls() {
        this.selectionToolService.addDrawerControl(this.map);
    }
    removeDrawControls() {
        this.selectionToolService.removeControls(this.map);
    }
    toggleDrawControls() {
        this.selectionToolService.toggleControl(this.map);
    }

    // NUTS management
    getNutsGeometryFromNuts( latlng: LatLng, nuts_level): any {
        this.logger.log('MapService/getNutsGeometryFromNuts()');
        const current_nuts_level = this.businessInterfaceRenderService.convertNutsToApiName(nuts_level);
        let bbox = latlng.toBounds(clickAccuracy).toBBoxString();
        bbox = bbox + '&CQL_FILTER=' + 'stat_levl_=' + current_nuts_level + 'AND ' + 'date=' + '2015' + '-01-01Z';
        const action = 'population';
        const url = geoserverGetFeatureInfoUrl
            + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
            '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
        this.logger.log('url' + url);
         return this.getAreaFromScale(url);
    }
    // LAU management;
      getNutsGeometryFromLau2( latlng: LatLng, nuts_level): any {
        const bbox = latlng.toBounds(clickAccuracy).toBBoxString();
        const action = lau2name;
        const url = geoserverGetFeatureInfoUrl
          + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
          '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
        this.logger.log('lau2name url' + url);
        return this.getAreaFromScale(url);
      }
    getAreaFromScale(url): any {
      return this.http.get(url).map((res: Response) => res.json() as GeojsonClass)
        .subscribe(res => this.selectAreaWithNuts(res), err => this.handleError.bind(this));
    }
    selectAreaWithNuts(areaSelected: any) {
        this.logger.log('MapService/selectAreaWithNuts()');
        // remove the layer if there is one
        this.removeAreaSelectedlayer();
        this.areaNutsSelectedLayer = L.geoJSON(areaSelected);
        this.areaNutsSelectedLayer.addTo(this.map);
            // this.layersService.getLayers().addLayer(this.areaNutsSelectedLayer, true);
        this.loaderService.display(false);
        this.createSelection();
    }

    createSelection() {
        this.selectionToolService.manageEditOrCreateLayer(this.areaNutsSelectedLayer, this.map);
    }
    removeAreaSelectedlayer() {
        if (this.areaNutsSelectedLayer) {
            this.logger.log('MapService/removeAreaSelectedlayer');
            this.map.removeLayer(this.areaNutsSelectedLayer);
            delete this.areaNutsSelectedLayer;
        }
    }

    getSelectionScaleMenu() {
        this.selectionScaleService.getSelectionScaleMenu(this.map);
    }

    showOrRemoveLayer(action: string, order: number) {
        this.layersService.showOrRemoveLayer(action, this.map, order);
    }

    setupMapservice(map: Map) {
        this.logger.log('MapService/setupMapservice');
        // set the map to the services that needs to get an instance
        this.map = map;
        this.getSelectionScaleMenu();
        this.retriveMapEvent();
        this.layersService.getLayers().addTo(this.map);
        this.layersService.setupDefaultLayer();
    }
  checkZoomLevelLayer(action, zoomLevel) {
    // this.layersService.showLayerDependingZoom(action, this.map, zoomLevel);
  }
  getLayerArray() {
    return this.layersService.getLayerArray();
  }
}
