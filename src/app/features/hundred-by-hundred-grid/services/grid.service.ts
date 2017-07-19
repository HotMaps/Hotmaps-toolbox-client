
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {apiUrl, getGrid} from '../../../shared/data.service'
import {LoaderService } from '../../../shared/services/loader.service';
import {Logger} from '../../../shared/services/logger.service';
import {Grid} from '../grid.class'
import {Payload} from '../../population/payload.class'
import {Location} from '../../population/location';
import {ToasterService} from '../../../shared/services/toaster.service';

@Injectable()
export class GridService {

  http: Http;
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(http: Http, private logger: Logger, private loaderService: LoaderService, private toasterService: ToasterService) {
    this.http = http;
    this.logger = logger;
  }
  getGrid() {
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
    this.getGridWithPayloads(payload).then(grid  => this.logGrid(grid))

  }
  getGridWithPayloads(payload: Payload): Promise<Grid> {
    const url = apiUrl + getGrid;
    return this.http
      .post(url, JSON.stringify(payload), {headers: this.headers})
      .toPromise()
      .then( response => response.json() as Grid)
      .catch(this.handleError);
  }

  logGrid(grid: Grid) {
    this.logger.log('PopulationServices/logPopulation/population = ' + JSON.stringify(grid))
  }
  private handleError(error: any) {

    // this.toasterService.showToaster('An error occurred: ' + error);
    // this.logger.log('PopulationServices/handleError');
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
