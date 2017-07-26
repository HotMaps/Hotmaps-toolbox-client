
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
import {APIService} from '../../../shared/services/api.service';
@Injectable()
export class GridService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
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


}
