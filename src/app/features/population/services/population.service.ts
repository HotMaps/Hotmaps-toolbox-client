
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


import {apiUrl, postPopulationDensityInArea} from '../../../shared/data.service'

import {LoaderService } from '../../../shared/services/loader.service';

import {Location} from '../../../shared/class/location/location';
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
    return super.POST(payload, apiUrl + postPopulationDensityInArea);
  }

}
