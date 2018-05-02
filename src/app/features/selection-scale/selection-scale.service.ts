import {Map, map, tileLayer, featureGroup, control as Lcontrol, marker as Lmarker} from 'leaflet';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SelectionScaleClass } from './class/selection-scale.class';
import {
  hectareOption,
  lau2LayerOption,
  nuts0LayerOption, nuts1LayerOption, nuts2LayerOption, nuts3LayerOption,
  SelectionScaleClassArray
} from './selection-scale.data';
import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
import {Helper} from '../../shared/helper';
import {geoserverUrl, hectare, initial_scale_value, nuts0, nuts1, nuts2, nuts3} from '../../shared/data.service';

import { Subject } from 'rxjs/Subject';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SelectionScaleService extends APIService implements OnInit {
  private scaleValue = initial_scale_value;

  // scale value subject
  scaleValueSubject: BehaviorSubject<string> = new BehaviorSubject<string>(nuts3);

  private wms_request;
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }
  ngOnInit() {
    this.changeScale()
  }
  /**
   * Get and change the selected scale value
   */
  changeScale() {
    this.scaleValueSubject.next(this.scaleValue);
  }

  getDataInteractionServices(): Promise<SelectionScaleClass[]> {
    return Promise.resolve(SelectionScaleClassArray);
  }
  getScaleValue(): string {
    return this.scaleValue;
  }

  setScaleValue(scaleValue: string) {
    this.scaleValue = scaleValue;
  }

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
  getTilayer(option: any, loader): any {
    const wms_request = L.tileLayer.wms(geoserverUrl, option);
    wms_request.on('load', function(e) {
      // loader.display(false)
    });
    wms_request.on('tileunload', function() {  });
    wms_request.on('tileloadstart', function() {
     // loader.display(true)
    });
    wms_request.on('tileerror', function() {
     // loader.display(false)
    });
    wms_request.on('loading', function() {  });
    return wms_request;
  }
  getSelectionScaleMenu(map: any, loader) {
    const  nuts0Layer = this.getTilayer(nuts0LayerOption, loader);
    const  nuts1Layer = this.getTilayer(nuts1LayerOption, loader);
    const  nuts2Layer = this.getTilayer(nuts2LayerOption, loader);
    const  nuts3Layer = this.getTilayer(nuts3LayerOption, loader);
    const  lau2Layer = this.getTilayer(lau2LayerOption, loader);
    const hectareLayer = this.getTilayer(hectareOption, loader)
    const SelectionScale = {
      'NUTS 0': nuts0Layer,
      'NUTS 1': nuts1Layer,
      'NUTS 2': nuts2Layer,
      'NUTS 3': nuts3Layer,
      'LAU 2'  : lau2Layer,
      'Hectare': hectareLayer,
    }

    const overlayMaps = {
    };

   const control = L.control.layers(SelectionScale, overlayMaps, {collapsed: false});

   control.addTo(map);
    map.addLayer(SelectionScale[initial_scale_value]);  // # Add this if you want to show, comment this if you want to hide it.-

  }
  getIdFromNuts(nuts_lvl): any {
    const SelectionScale = {
      'NUTS 0': 0,
      'NUTS 1': 1,
      'NUTS 2': 2,
      'NUTS 3': 3,
      'LAU 2'  : 4,
      'Hectare': 5,
    }
    return SelectionScale[nuts_lvl]
  }
  getInitialScale(): string {
    return initial_scale_value;
  }



}
