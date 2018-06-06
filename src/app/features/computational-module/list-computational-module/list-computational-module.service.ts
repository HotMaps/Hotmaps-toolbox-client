// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ListComputationalModuleClass } from './list-computational-module.class';
import { ListComputationalModuleClassArray } from './list-computational-module.data';
import {Logger} from '../../../shared/services/logger.service';
import { LoaderService } from '../../../shared/services/loader.service';
import {APIService} from '../../../shared/services/api.service';
import {ToasterService} from '../../../shared/services/toaster.service';
import {Helper} from '../../../shared/helper';
import {BusinessInterfaceRenderService} from '../../../shared/business/business.service';



@Injectable()
export class ListComputationalModuleService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
    private helper: Helper, private business: BusinessInterfaceRenderService) {
    super(http, logger, loaderService, toasterService);
  }

  getListComputationalModuleServicesPromise(): Promise<ListComputationalModuleClass[]> {
    return Promise.resolve(ListComputationalModuleClassArray);
  }

  getListComputationalModuleServices(): ListComputationalModuleClass[] {
    return ListComputationalModuleClassArray;
  }
  getReadableName(layerName: string): string {

    this.logger.log('DataInteractionService/getReadableName layerName=' + layerName);
    const cm  =  this.getListComputationalModuleServices().filter(x => x.cm_name === layerName)[0];
    if (this.helper.isNullOrUndefined(cm)) {
      const layer_new  =  this.business.getReadableName(layerName);
      if (this.helper.isNullOrUndefined(layer_new)) {
        return layerName;
      } else {
        return layer_new;
      }
    }


    return cm.cm_name;

  }
  getModulesServicesWithNewService(newService: ListComputationalModuleClass): Promise<ListComputationalModuleClass[]> {
    const servicesArray: ListComputationalModuleClass[] = ListComputationalModuleClassArray;
    servicesArray.push(newService);
    return Promise.resolve(servicesArray);
  }

  getListComputationalModuleServicesSlowly(): Promise<ListComputationalModuleClass[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getListComputationalModuleServices()), 2000);
    });
  }



}
