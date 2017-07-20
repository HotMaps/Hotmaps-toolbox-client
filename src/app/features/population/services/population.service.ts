
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';



import {apiUrl, postPopulationDensityInArea} from '../../../shared/data.service'
import {GlobalErrorHandler} from '../../../shared/services/error-handler';
import {LoaderService } from '../../../shared/services/loader.service';
import {Location} from '../location';

import {Logger} from '../../../shared/services/logger.service';
import {Payload} from '../payload.class'
import {Population} from '../population.class';

import {ToasterService} from '../../../shared/services/toaster.service';

import {APIService} from '../../../shared/services/api.service';
@Injectable()
export class PopulationService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }
  getPopulationWithPayloads(payload: Payload): Promise<Population> {
    const url = apiUrl + postPopulationDensityInArea;
    this.logger.log('PopulationServices/apiUrl-postPopulationDensityInArea = ' + url)
    return this.http
      .post(url, JSON.stringify(payload), {headers: this.headers})
      .toPromise()
      .then( response => response.json() as Population)
      .catch(this.handleError.bind(this));
  }

  logPopulation(population: Population) {
    this.logger.log('PopulationServices/logPopulation/population = ' + JSON.stringify(population))
  }

}
