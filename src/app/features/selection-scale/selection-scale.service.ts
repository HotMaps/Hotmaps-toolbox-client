import {Map, map, tileLayer, featureGroup, control as Lcontrol, marker as Lmarker} from 'leaflet';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SelectionScaleClass } from './class/selection-scale.class';
import {hectareLayer, nuts3Layer, SelectionScale, SelectionScaleClassArray} from './selection-scale.data';
import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
import {Helper} from '../../shared/helper';
import {geoserverUrl, hectare, initial_scale_value, nuts0, nuts1, nuts2, nuts3} from '../../shared/data.service';
@Injectable()
export class SelectionScaleService extends APIService {
  private scaleValue = initial_scale_value;

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }

  getDataInteractionServices(): Promise<SelectionScaleClass[]> {
    return Promise.resolve(SelectionScaleClassArray);
  }

  /**
  * Get the initial scale value
  */  
  getScaleValue(): string {
    return this.scaleValue;
  }

  /**
  * Set the scale value
  */
  setScaleValue(scaleValue: string) {
    this.scaleValue = scaleValue;
  }

  /**
  * Get the selection scale array
  */  
  getDataArrayServices(): SelectionScaleClass[] {
    return SelectionScaleClassArray;
  }

  getModulesServicesWithNewService(newService: SelectionScaleClass): Promise<SelectionScaleClass[]> {
    const servicesArray: SelectionScaleClass[] = SelectionScaleClassArray;
    servicesArray.push(newService);
    return Promise.resolve(servicesArray);
  }

  getModulesServicesSlowly(): Promise<SelectionScaleClass[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getDataInteractionServices()), 2000);
    });
  }

  /**
  * Get the selection scale menu
  */ 
  getSelectionScaleMenu(map: any) {

    const overlayMaps = {
    };

   const control = L.control.layers(SelectionScale, overlayMaps, {collapsed: false});
   control.addTo(map);



    map.addLayer(this.getInitialLayer());  // # Add this if you want to show, comment this if you want to hide it.-

  }

  /**
  * Get the initial scale
  */  
  getInitialScale(): string {
    return initial_scale_value;
  }

  /**
  * Get the inital layer
  */  
  getInitialLayer(): any {
    return SelectionScale[initial_scale_value];
  }




}
