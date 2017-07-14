
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';



import {apiUrl} from '../../../shared/data.service'
import {GlobalErrorHandler} from '../../../shared/services/error-handler';
import {LoaderService } from '../../../shared/services/loader.service';
import {Location} from '../location';

import {Logger} from '../../../shared/services/logger.service';
import {Payload} from '../payload.class'
import {Population} from '../population.class';
import {postPopulationDensityInArea} from '../../../shared/data.service';
import {ToasterService} from '../../../shared/services/toaster.service';


@Injectable()
export class PopulationService {
  http: Http;
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(http: Http, private logger: Logger, private loaderService: LoaderService, private toasterService: ToasterService, private errorHandler: GlobalErrorHandler) {
    this.http = http;
    this.logger = logger;
  }
  getPopulation() {
    const locations: Location[] =   [
      { lat: 46.90524554642923, lng: 5.701904296875 },
      { lat: 46.98025235521883, lng: 11.436767578125002 },
      { lat: 45.359865333959746, lng: 11.195068359375002 },
      { lat: 44.68427737181225, lng: 5.833740234375001 },
      { lat:  44.68427737181225, lng: 5.822753906250001 },
    ];
    const payload: Payload = {
      nuts_level: 3,
      year: 2015,
      points: locations,
    }

    this.logger.log('getPopulationWithPayloads/payload' + JSON.stringify(payload));
    this.getPopulationWithPayloads(payload).then(population  => this.logPopulation(population))

  }
  getPopulationWithPayloads(payload: Payload): Promise<Population> {
    const url = apiUrl + postPopulationDensityInArea;
    return this.http
      .post(url, JSON.stringify(payload), {headers: this.headers})
      .toPromise()
      .then( response => response.json() as Population)
      .catch(this.handleError);
  }

  logPopulation(population: Population) {
    this.logger.log('PopulationServices/logPopulation/population = ' + JSON.stringify(population))
  }
  private handleError(error: any) {
    this.errorHandler.handleError(error);
    // this.toasterService.showToaster('An error occurred: ' + error);
    // this.logger.log('PopulationServices/handleError');
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
