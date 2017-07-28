
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {apiUrl, getGrid} from '../../../shared/data.service'
import {LoaderService } from '../../../shared/services/loader.service';
import {Logger} from '../../../shared/services/logger.service';
import {Grid} from '../grid.class'
import {PayloadGrid} from '../../grid/payload.grid.class'
import {Location} from '../../../shared/location/location';
import {ToasterService} from '../../../shared/services/toaster.service';
import {APIService} from '../../../shared/services/api.service';
@Injectable()
export class GridService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }
  getGridTest() {
    const locations: Location[] =   [
      { lat: 46.3287, lng: 6.9225 },
      { lat: 46.3287, lng: 7.0554 },
      { lat: 46.2447, lng: 7.0554 },
      { lat: 46.2447, lng: 6.9225 },
    ];
    const payload: PayloadGrid = {
      points: locations,
    }

    this.logger.log('getGridWithPayloads/payload' + JSON.stringify(payload));
    this.getGridWithPayloads(payload).then(grid  => this.logGrid(grid))

  }
  getGridWithPayloads(payload: PayloadGrid): Promise<any> {
    const url = apiUrl + getGrid;
    return this.http
      .post(url, JSON.stringify(payload), {headers: this.headers})
      .toPromise()
      .then( response => response.json() as any)
      .catch(this.handleError);
  }

  logGrid(grid: Grid) {
    this.logger.log('PopulationServices/logPopulation/population = ' + JSON.stringify(grid))
  }


}
