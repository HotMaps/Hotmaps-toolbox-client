// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CalculationModuleClass } from './calculation-module.class';
import { calculationModuleClassArray, calculation_module_components } from './calculation-module.data';
import {Logger} from '../../../shared/services/logger.service';
import { LoaderService } from '../../../shared/services/loader.service';
import {APIService} from '../../../shared/services/api.service';
import {ToasterService} from '../../../shared/services/toaster.service';
import {Helper} from '../../../shared/helper';
import {BusinessInterfaceRenderService} from '../../../shared/business/business.service';
import { ComponentClass } from './../component/component.class';



@Injectable()
export class CalculationModuleService extends APIService {
  categories = new Set();
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
    private helper: Helper, private business: BusinessInterfaceRenderService) {
    super(http, logger, loaderService, toasterService);
  }

  getcalculationModuleServicesPromise(): Promise<CalculationModuleClass[]> {
    return Promise.resolve(this.getCalculationModuleServices());
  }

  getCalculationModuleServices(): CalculationModuleClass[] {
    return calculationModuleClassArray;
  }
  getCalculationModuleComponents(): ComponentClass[] {
    return calculation_module_components;
  }
  getcalculationModuleServicesByName(cm_name: string): CalculationModuleClass {

    const cm  =  this.getCalculationModuleServices().filter(x => x.cm_name === cm_name)[0];
    return cm;
  }
  getCalculationModuleCategories() {
    this.getCalculationModuleServices().forEach((cm) => {
      this.categories.add(cm.category)
    });
    return Promise.resolve(this.categories);
  }
  getCalculationModuleServicesSlowly(): Promise<CalculationModuleClass[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCalculationModuleServices()), 2000);
    });
  }
  getComponentsByCMId(cmId): ComponentClass[] {
    const components = this.getCalculationModuleComponents().filter(x => x.cmId === cmId)
    return components
  }
  getComponentsByCMIdSlowly(cmId) {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getComponentsByCMId(cmId)), 2000);
    });

  }
}
