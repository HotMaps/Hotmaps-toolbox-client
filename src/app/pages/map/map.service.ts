import { idWwtpLayer } from './../../shared/data.service';
/**
 * Created by lesly on 27.05.17.
 */


import {Http, Response} from '@angular/http';
import {Injectable, OnInit, OnDestroy} from '@angular/core';
import {Map, MouseEvent} from 'leaflet';

import {basemap} from './basemap';
import {Helper, Logger, LoaderService, APIService, ToasterService, BusinessInterfaceRenderService} from '../../shared'
import {SelectionToolService} from '../../features/selection-tools';
import {SelectionScaleService} from '../../features/selection-scale';
import {clickAccuracy, geoserverGetFeatureInfoUrl, hectare, wwtpLayerName, zoomLevelDetectChange} from '../../shared/data.service';
import LatLng = L.LatLng;
import {GeojsonClass, LayersService} from '../../features/layers';



@Injectable()
export class MapService extends APIService implements OnInit, OnDestroy {
  private map: Map;
  private baseMaps: any;
  private areaNutsSelectedLayer: any;
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
              private selectionToolService: SelectionToolService,
              private layersService: LayersService, private helper: Helper, private selectionScaleService: SelectionScaleService,
              private businessInterfaceRenderService: BusinessInterfaceRenderService) {
    super(http, logger, loaderService, toasterService);
    this.baseMaps = basemap;
  }
  getNutsGeometryFromNuts( latlng: LatLng, nuts_level): any {
    this.logger.log('MapService/getNutsGeometryFromNuts()');

    const current_nuts_level = this.businessInterfaceRenderService.convertNutsToApiName(nuts_level);
    let bbox = latlng.toBounds(clickAccuracy).toBBoxString();
    // to test
    //
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
    // remove the layer if there is one
    this.removeAreaSelectedlayer(this.map);
    this.areaNutsSelectedLayer = L.geoJson(areaSelected);
    this.areaNutsSelectedLayer.addTo(this.map);
     // this.layersService.getLayers().addLayer(this.areaNutsSelectedLayer, true);
    this.loaderService.display(false);
    this.createSelection();
    this.map.fitBounds(this.areaNutsSelectedLayer.getBounds());

  }
  createSelection() {
    this.selectionToolService.manageEditOrCreateLayer(this.areaNutsSelectedLayer, this.map);


  }
  removeAreaSelectedlayer( map: any) {
    if (this.areaNutsSelectedLayer) {
      this.logger.log('MapService/removeAreaSelectedlayer');
      map.removeLayer(this.areaNutsSelectedLayer);
      delete this.areaNutsSelectedLayer;
    }
  }
  addDrawerControl(map: Map) {
    this.selectionToolService.addDrawerControl(map)
  }
  disableMouseEvent(elementId: string) {
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
  getSelectionScaleMenu(map: any) {
    this.selectionScaleService.getSelectionScaleMenu(map);
  }
  showLayerDependingZoom() {
    if (this.layersService.getLayerArray().containsKey(wwtpLayerName)) {
      this.layersService.showLayerDependingZoom(wwtpLayerName, this.map, zoomLevelDetectChange);
    }
  }
  retriveMapEvent(map: Map): void {
    this.logger.log('MapService/retriveMapEvent');
    const self = this;
    this.map.on('click', function(e: MouseEvent) {
      self.logger.log('MapService/click');
      // check if the selection tool is activate
      self.logger.log('MapService/Scale' + self.selectionScaleService.getScaleValue() );
      if (self.selectionScaleService.getScaleValue() === hectare) {
        if (self.layersService.getIsReadyToShowFeatureInfo() === true) {
          const layer = new L.Rectangle(e.latlng.toBounds(100));
          self.selectionToolService.layerCreatedClick(layer, self.map);
        }
      } else {
        self.selectionToolService.enableNavigationService(self.map);
        self.getNutsGeometryFromNuts(e.latlng, self.selectionScaleService.getScaleValue());
      }
    });
    map.on('baselayerchange', onBaselayerChange);
    function onBaselayerChange(e) {
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
    map.on('zoomend', function(e) {
      self.logger.log('MapService/zoomend');
      self.showLayerDependingZoom()
    });

    map.on('zoomstart', function(e) {
      // self.logger.log('MapService/zoomstart');
    });
    map.on ('measurestart', function () {

    });
    map.on('measurefinish', function (evt) {
    });
    map.on('LayersControlEvent', function() {
      self.logger.log('LayersControlEvent');
    });


    map.on('layeradd', function(e) {
      // self.logger.log('MapService/layeradd-----' + e);
    });
    map.on('moveend', function(e) {
      // self.logger.log('MapService/layeradd-----' + e);
       self.showLayerDependingZoom();
    });
    map.on('didUpdateLayers', function(e) {
      if (self.selectionToolService.isLayerInMap() === true) {
        self.selectionToolService.openPopup();
        self.logger.log('MapService/didUpdateLayers-----' + e);
      }
    });
    map.on('overlayadd', onOverlayAdd);
    function onOverlayAdd(e) {
      self.logger.log('overlayadd');
    }
  }
  showOrRemoveLayer(action: string, order: number) {
    this.layersService.showOrRemoveLayer(action, this.map, order);
  }
  setupMapservice(map: Map) {
    // set the map to the services that needs to get an instance
    this.logger.log('MapService/setupMapservice');
    // set the map to the services that needs to get an instance
    this.map = map;
    this.selectionToolService.setMap(map);
    this.retriveMapEvent(this.map);

    this.layersService.getLayers().addTo(map);
    this.layersService.setupDefaultLayer();
    this.layersService.setupZoomLayerGroup(map);
  }

  checkZoomLevelLayer(action, zoomLevel) {
    this.layersService.showLayerDependingZoom(action, this.map, zoomLevel);
  }
  getLayerArray() {
    return this.layersService.getLayerArray();
  }
}
