// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';

import {Logger} from '../../../shared/services/logger.service';
import { LoaderService } from '../../../shared/services/loader.service';
import {APIService} from '../../../shared/services/api.service';
import {ToasterService} from '../../../shared/services/toaster.service';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CalculationHeatLoadDividedService extends APIService {
  constructor(http: HttpClient, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }


  getCMResult(summaryResult, cm) {
    let cmResult = {}
    summaryResult.layers.map((layerResult) => {
      if (layerResult.name === 'heat_tot_curr_density') {
        cmResult =
        {
          values: [
            {unit: 'MWh', name: 'heat_consumption', value: String((layerResult.values[0].value / cm.component[0].value))},
            {unit: 'MWh/ha', name: 'heat_density', value: String(((layerResult.values[0].value / cm.component[0].value)/ layerResult.values[2].value))},
            {unit: 'cells', name: 'count_cell_heat', value: String(layerResult.values[2].value)}],
          name: cm.cm.id
        }
        // layerResult.values[0].value
      }
    })
    return Promise.resolve(cmResult)
  }


}
