// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ComputationalModuleClass } from './computational-module.class';
import { computationalModuleClassArray } from './computational-module.data';
import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
import {Helper} from '../../shared/helper';
import {BusinessInterfaceRenderService} from '../../shared/business/business.service';



@Injectable()
export class ComputationalModuleService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
    private helper: Helper, private business: BusinessInterfaceRenderService) {
    super(http, logger, loaderService, toasterService);
  }

  getComputationalModuleServicesPromise(): Promise<ComputationalModuleClass[]> {
    return Promise.resolve(computationalModuleClassArray);
  }

  getListComputationalModuleServices(): ComputationalModuleClass[] {
    return computationalModuleClassArray;
  }
  getComputationalModuleServicesByName(cm_name: string): ComputationalModuleClass {

    const cm  =  this.getListComputationalModuleServices().filter(x => x.cm_name === cm_name)[0];
    return cm;
  }
}
