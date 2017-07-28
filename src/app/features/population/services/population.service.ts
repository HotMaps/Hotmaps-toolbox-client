
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


import {apiUrl, postPopulationDensityInArea} from '../../../shared/data.service'

import {LoaderService } from '../../../shared/services/loader.service';

import {Location} from '../../../shared/location/location';
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

  getPopulationTest() {
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

    this.logger.log('getGridWithPayloads/payload' + JSON.stringify(payload));
    this.getPopulationWithPayloads(payload).then(grid  => this.logPopulation(grid))
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
