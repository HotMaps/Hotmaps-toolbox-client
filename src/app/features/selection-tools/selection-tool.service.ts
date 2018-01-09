
/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Map} from 'leaflet';
import * as proj4x from 'proj4';
const proj4 = (proj4x as any).default;
import {Logger, LoaderService, Helper} from '../../shared/';
import {Location} from '../../shared/class/location/location';
import Created = L.DrawEvents.Created;
declare const L: any;



import { PayloadStat } from './../summary-result/mock/payload.class';
import {
  constant_year, constant_year_sp_wwtp, hectare, initial_scale_value, lau2, nuts2, nuts3, proj3035,
  wwtpLayerName
} from '../../shared/data.service';
import {GeojsonClass} from '../layers/class/geojson.class';
import {BusinessInterfaceRenderService} from '../../shared/business/business.service';
import {SummaryResultClass} from '../summary-result/summary-result.class';
import { InteractionService } from 'app/shared/services/interaction.service';
import { Subject } from 'rxjs/Subject';
import {geoserverUrl} from '../../shared';
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
  private enableLoadResultSubject = new Subject<any>();
  enableLoadResultSubjectObs = this.enableLoadResultSubject.asObservable();
  private disableLoadResultSubject = new Subject<any>();
  disableLoadResultSubjectObs = this.disableLoadResultSubject.asObservable();
  private enableClearAllSubject = new Subject<any>();
  enableClearAllSubjectObs = this.enableClearAllSubject.asObservable();
  private disableClearAllSubject = new Subject<any>();
  disbleClearAllSubjectObs = this.disableClearAllSubject.asObservable();
  constructor(http: Http, logger: Logger,  loaderService: LoaderService, toasterService: ToasterService, private helper: Helper,
    private businessInterfaceRenderService: BusinessInterfaceRenderService,
    private interactionService: InteractionService
  ) {super(http, logger, loaderService, toasterService); }

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
  drawHectareCreated(e, map) {
    console.log('created', e.type);
    const event: Created = <Created>e;
    const type = event.layerType,
      layer: any = event.layer;
    this.isActivate = false;
    // Clear the map before to show the new selection
    this.manageEditOrCreateLayer(layer, map);
  }
  drawNutsCreated(e, map, nuts_lvl) {
    console.log('created', e.type);
    const event: Created = <Created>e;
    const type = event.layerType,
    layer: any = event.layer;
    this.isActivate = false;
    // Clear the map before to show the new selection
    // enable buttons when layer is created
    this.enableButtonLoad();
    this.enableButtonClearAll();

    let location = '';
    if (layer instanceof L.Circle) {
      location = this.helper.convertLatLongToLocationString(this.getLocationsFromCicle(layer))
    } else  if (layer instanceof L.Polygon) {
      location = this.helper.convertLatLongToLocationString(this.getLocationsFromPolygon(layer))
    }else  if (layer instanceof L.latLng) {
      location = this.helper.convertLatLongToLocationString(this.getLocationsFromPolygon(layer))
    } else {
      location = this.helper.convertLatLongToLocationString(this.getLocationsFromGeoJsonLayer(layer))

      // this.logger.log('unknown form');
    }
    this.getNutID(location, map, nuts_lvl)
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

  loadResults(map: any, layer: L.Layer) {
     if (this.currentLayer) {
       const layerNameArray = []
       for (let i = 0; i < this.interactionService.getLayerArray().keys().length; i++) {
         if (this.interactionService.getLayerArray().keys()[i] !== wwtpLayerName) {
           this.logger.log('array ' + this.interactionService.getLayerArray().keys()[i]
             + this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue) )
           this.logger.log('loadPopup/this.scaleValue' + this.scaleValue);
           layerNameArray.push(this.interactionService.getLayerArray().keys()[i] +
             this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue) );
         } else {
           layerNameArray.push(this.interactionService.getLayerArray().keys()[i]);
         }
       }
       if (this.currentLayer instanceof L.Circle) {
         this.getStatisticsFromLayer(this.getLocationsFromCicle(this.currentLayer), layerNameArray, map)
       } else  if (this.currentLayer instanceof L.Polygon) {
         this.getStatisticsFromLayer(this.getLocationsFromPolygon(this.currentLayer), layerNameArray, map)
       }else  if (this.currentLayer instanceof L.latLng) {

         this.getStatisticsFromLayer(this.getLocationsFromPolygon(this.currentLayer), layerNameArray, map)
       } else {
         this.logger.log('unknown form');

         const layerNutsArray = [];

         for (let i = 0; i < this.interactionService.getLayerArray().keys().length; i++) {
           if (this.interactionService.getLayerArray().keys()[i] !== wwtpLayerName) {
             this.logger.log('array ' + this.interactionService.getLayerArray().keys()[i]
               + this.businessInterfaceRenderService.getNutsTosuffix(this.scaleValue) )
             layerNutsArray.push(this.interactionService.getLayerArray().keys()[i] + '_ha' );
           } else {
             layerNutsArray.push(this.interactionService.getLayerArray().keys()[i]);
           }
         }
         this.getStatisticsFromLayer(this.getLocationsFromGeoJsonLayer(this.currentLayer), layerNutsArray, map)

       }
     }

   }

  enableNavigationService( map: any) {
    this.interactionService.enableButtonWithId('selection');
  }

  removeLayerFromMultiSelectionLayers(layer: any) {
    // if the nut
    const nuts_id = this.getNUTSIDFromGeoJsonLayer(layer);
    this.nutsIds.delete(nuts_id)
    this.multiSelectionLayers.removeLayer(layer);
  }
  containLayer(layer: any): boolean {
    const self = this;
    const nuts_id = this.getNUTSIDFromGeoJsonLayer(layer);
    self.logger.log('nuts_id' + nuts_id );
    this.multiSelectionLayers.eachLayer(function(layerInsideMultiSelectionLayer) {
      layerInsideMultiSelectionLayer.onEachFeature(function(feature, layerInside) {
           if (nuts_id === layerInside.properties.nuts_id) {
             self.logger.log('multiSelectionLayer hasLayer' )
           } else {
             self.logger.log('multiSelectionLayer has not this Layer' );
           }
      });
    });



    return this.multiSelectionLayers.hasLayer(layer)
  }
 layerCreatedClick(layer, map) {
   this.logger.log('SelectionToolService/layerCreatedClick');
   this.currentLayer = layer
   this.editableLayers.clearLayers();
   this.editableLayers.addLayer(this.currentLayer);
   this.editableLayers.addTo(map);
   // this.loadPopup(map, this.currentLayer); dany
   this.enableNavigationService(map);

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


  getLocationsFromCicle(layer): Location[] {
    return this.helper.getLocationsFromCicle(layer);
  }



  clearAll(map: any) {
    if (this.isDrawer) {
        this.theDrawer.disable(); // Disable the actual drawer anyway and
      }
      this.interactionService.disableStateOpenWithFunction('right');
      this.interactionService.disableButtonWithId('load_result');
      this.interactionService.closeRightPanel();
      // remove all layers selected
      this.multiSelectionLayers.clearLayers();
      // remove all nutsID selected
      this.nutsIds.clear();

      // disable buttons after clear
      this.disableButtonClearAll();
      this.disableButtonLoad();
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
    this.logger.log('getStatisticsFromLayer/this.scaleValue ' + this.scaleValue)
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
    if (this.helper.isNullOrUndefined(this.currentLayer.editing) === false) {
      this.currentLayer.editing.disable();
    }
    this.currentLayer.closePopup();
    this.loaderService.display(false);
    // this.logger.log('this.loaderService.display(false) ;' + JSON.stringify(result) );
    this.drawResult(result, map)
  }

  drawResult(result: SummaryResultClass, map: any) {

    if (this.helper.isNullOrUndefined(result.feature_collection.type) === false) {
      let geoJson = null
      if (this.scaleValue === lau2) {

        proj4.defs('EPSG:3035', proj3035);
        geoJson = L.Proj.geoJson(result.feature_collection);
      }else {
        geoJson = result.feature_collection;
      }

      // add the selected area to the map
      this.areaNutsSelectedLayer = L.geoJson(geoJson);
      this.areaNutsSelectedLayer.addTo(map);
    }
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
  drawRectangle(map: Map) {
    map.addLayer(this.editableLayers);
    this.editableLayers.clearLayers();
    if (this.isDrawer) {
      this.getDrawer().disable(); // disable the current drawer before creating a new one
    }

    this.theDrawer = new L.Draw.Rectangle(map);
    this.theDrawer.enable();

    this.isDrawer = true;
    this.isPolygonDrawer = false;
  }

  /**
   * Activate the drawing circle tool
   */
  drawCircle(map: Map) {
    map.addLayer(this.editableLayers);
    this.editableLayers.clearLayers();
    if (this.isDrawer) {
      this.getDrawer().disable(); // disable the current drawer before creating a new one
    }
    this.theDrawer = new L.Draw.Circle(map);
    this.theDrawer.enable();

    this.isDrawer = true;
    this.isPolygonDrawer = false;
  }

  /**
   * Activate the drawing polygon tool
   */
  drawPolygon(map: Map) {
    map.addLayer(this.editableLayers);
    this.editableLayers.clearLayers();

    if (this.isDrawer) {
      this.getDrawer().disable(); // disable the current drawer before creating a new one
    }

    this.theDrawer = new L.Draw.Polygon(map);
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


  drawResultBeforeLoadingResult(result: any) {
    if (this.helper.isNullOrUndefined(result) === false) {
      for (const feature of result.features) {
        this.nutsIds.add(feature.properties.nuts_id)
      }
      const self = this
      this.nutsIds.forEach(function(item, sameItem, s) {
        self.logger.log(item);
      });
      const geoJson = result;
      const areaNutsSelectedLayer = L.geoJson(geoJson);
      this.multiSelectionLayers.addLayer(areaNutsSelectedLayer) ;
    }
    this.loaderService.display(false);
  }



}
