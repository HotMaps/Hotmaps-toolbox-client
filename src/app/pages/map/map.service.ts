/**
 * Created by lesly on 27.05.17.
 */



import {Injectable} from '@angular/core';

import {Map} from 'leaflet';
import { MouseEvent} from 'leaflet';
import {OnInit, OnDestroy} from '@angular/core';

import {basemap} from './basemap';
import {Helper} from '../../shared/helper'
import {LayersService} from '../../features/layers/services/layers.service';
import {Logger} from '../../shared/services/logger.service';
import {LoaderService} from '../../shared/services/loader.service';
import {SelectionToolService} from '../../features/selection-tools/selection-tool.service';
import {SelectionScaleService} from '../../features/selection-scale/selection-scale.service';
import {hectare, wwtpLayerName} from '../../shared/data.service';


@Injectable()
export class MapService implements OnInit, OnDestroy {
  private map: Map;
  private baseMaps: any;

  constructor(private logger: Logger, private loaderService: LoaderService, private selectionToolService: SelectionToolService,
              private layersService: LayersService, private helper: Helper, private selectionScaleService: SelectionScaleService) {
    logger.log('MapService/constructor()');
    this.baseMaps = basemap;
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

  retriveMapEvent(): void {
    this.logger.log('MapService/retriveMapEvent');
    const self = this;
    this.map.on('click', function(e: MouseEvent) {
      self.logger.log('MapService/click');
      // check if the selection toul is activate
      self.logger.log('MapService/Scale' + self.selectionScaleService.getScaleValue() );
      if (self.selectionScaleService.getScaleValue() === hectare) {
        if (// self.selectionToolService.getIsActivate() === false &&
        // check if there are layers to show in the layer service
        self.layersService.getIsReadyToShowFeatureInfo() === true) {
          self.layersService.getDetailLayerPoint(wwtpLayerName, e.latlng, self.map);
        }
      } else {

      }
    });

    this.map.on('baselayerchange', onBaselayerChange);
    function onBaselayerChange(e) {
      self.logger.log('baselayerchange');
      // in this part we manage the selection scale then we refresh the layers
      const scaleLevel = e.name;
      self.selectionScaleService.setScaleValue(scaleLevel);
      self.layersService.setCurrentNutsLevel(scaleLevel)

    }
    this.map.on('zoomend', function() {
      self.logger.log('MapService/zoomend');
    });

    this.map.on('zoomstart', function(event)
    {

    });
    this.map.on ('measurestart', function () {

    });
    this.map.on('measurefinish', function (evt) {
    });
    this.map.on('LayersControlEvent', function() {
      self.logger.log('LayersControlEvent');
    });

    this.map.on('layeradd', function(e) {
      // self.logger.log('MapService/layeradd-----' + e);
    });
    this.map.on('didUpdateLayers', function(e) {
      if (self.selectionToolService.isLayerInMap() === true) {
        self.selectionToolService.openPopup();
        self.logger.log('MapService/didUpdateLayers-----' + e);
      }
    });
    this.map.on('overlayadd', onOverlayAdd);
    function onOverlayAdd(e) {
      self.logger.log('overlayadd');

    }
  }

  showOrRemoveLayer(action: string, order: number) {
    this.layersService.showOrRemoveLayer(action, this.map, order);
  }
  setupMapservice(map: Map) {
    this.logger.log('MapService/setupMapservice');
    // set the map to the services that needs to get an instance
    this.map = map;
    this.selectionToolService.setMap(map);
    this.retriveMapEvent();

    this.layersService.getLayers().addTo(map);
    this.layersService.setupDefaultLayer()
  }

}
