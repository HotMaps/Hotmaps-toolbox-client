import { BusinessInterfaceRenderService } from './../../shared/business/business.service';
import { hectare, clickAccuracy, geoserverGetFeatureInfoUrl } from './../../shared/data.service';
import { basemap } from './basemap';
import { InteractionService } from './../../shared/services/interaction.service';
import { SelectionToolService } from './../../features/selection-tools/selection-tool.service';
import { GeocodingService } from './../../shared/services/geocoding.service';
import { PopulationService } from './../../features/population/services/population.service';
import { SelectionScaleService } from './../../features/selection-scale/selection-scale.service';
import { DataInteractionService } from './../../features/data-interaction/data-interaction.service';
import { GeojsonClass, LayersService } from './../../features/layers';
import { Http, Response } from '@angular/http';
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
        private layersService: LayersService, private dataInteractionService: DataInteractionService,
        private selectionScaleService: SelectionScaleService, private populationService: PopulationService,
        private geocodingService: GeocodingService, private selectionToolService: SelectionToolService,
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
        this.map.on('click', (event: MouseEvent) => {self.onClickEvent(self, event)});
        this.map.on('baselayerchange', (event: L.LayersControlEvent) => { self.onBaselayerChange(self, event) });
        this.map.on('zoomstart', () => { self.onZoomStart()});
        this.map.on('zoomend', () => { self.onZoomEnd()});
        this.map.on('measurestart', () => { self.onMeasureStart()});
        this.map.on('LayersControlEvent', () => { self.onLayersControlEvent()});
        this.map.on('layeradd', () => { self.onLayerAdd()});
        this.map.on('didUpdateLayers', (event) => { self.onDidUpdateLayers(self, event)});
        this.map.on('overlayadd', () => { self.onOverLayAdd()});
        this.map.on('measurefinish', () => { self.onZoomEnd()});
        this.map.on(L.Draw.Event.CREATED, () => { self.onDrawCreated()});
        this.map.on(L.Draw.Event.EDITED, () => { self.onDrawEdited()});
        this.map.on(L.Draw.Event.DRAWSTART, () => { self.onDrawStart()});
        this.map.on(L.Draw.Event.EDITSTART, () => { self.onDrawEditStart()});
        this.map.on(L.Draw.Event.EDITSTOP, () => { self.onDrawEditStop()});
        this.map.on(L.Draw.Event.DELETED, () => { self.onDrawDeleted()});
    }

    // Event functions
    onDrawCreated() { }
    onDrawEdited() { }
    onDrawStart() { }
    onDrawEditStart() { }
    onDrawEditStop() { }
    onDrawDeleted() { }
    onLayersControlEvent() { }
    onLayerAdd() { }
    onOverLayAdd() { }
    onMeasureStart() { }
    onZoomStart() {
    }
    onZoomEnd() { }
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
            const layer = new L.Rectangle(e.latlng.toBounds(100));
            self.selectionToolService.layerCreatedClick(layer, self.map);
          }
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
        return this.http.get(url).map((res: Response) => res.json() as GeojsonClass)
            .subscribe(res => this.selectAreaWithNuts(res), err => this.handleError.bind(this));
    }

    selectAreaWithNuts(areaSelected: any) {
        this.logger.log('MapService/selectAreaWithNuts()');
        const geometrie = areaSelected.features[0].geometry
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
        this.selectionToolService.setMap(this.map);
        this.retriveMapEvent();
        this.layersService.getLayers().addTo(this.map);
        this.layersService.setupDefaultLayer();
    }
}
