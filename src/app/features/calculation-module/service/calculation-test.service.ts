import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
export class CalculationHeatLoadDividedService extends APIService {
  private cmResult: BehaviorSubject<any> = new BehaviorSubject<any>('init');
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
    private helper: Helper, private business: BusinessInterfaceRenderService) {
    super(http, logger, loaderService, toasterService);
  }

  setCMResult() {
    this.cmResult.next('test')
  }

  getCMResult(summaryResult, cm) {
    console.log(summaryResult, cm);
    let cmResult = {}
    summaryResult.layers.map((layerResult) => {
      if (layerResult.name === 'heat_tot_curr_density') {
        cmResult =
        {
          values: [
            {unit: 'MWh', name: 'heat_consumption', value: String((layerResult.values[0].value / cm.component[0].value))},
            {unit: 'MWh/ha', name: 'heat_density', value: String(((layerResult.values[0].value / cm.component[0].value)/layerResult.values[2].value))},
            {unit: 'cells', name: 'count_cell_heat', value: String(layerResult.values[2].value)}],
          name: cm.cm.id
        }
        // layerResult.values[0].value
        console.log(cmResult);
      }
    })
    return Promise.resolve(cmResult)
  }
}
