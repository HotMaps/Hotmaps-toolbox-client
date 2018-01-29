
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
import {postStatsLayersArea, apiUrl, postStatsLayersNutsIds} from './../../shared/data.service';



@Injectable()
export class SummaryResultService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }

  getSummaryResultWithPayload(payload: any): Promise<any> {
    this.logger.log('SummaryResultService/getSummaryResultWithPayload = ' + JSON.stringify(payload));
    return super.POST(payload, apiUrl + postStatsLayersArea);
  }

  getSummaryResultWithIds(payload: any): Promise<any> {
    this.logger.log('SummaryResultService/getSummaryResultWithIds = ' + JSON.stringify(payload));
    return super.POST(payload, apiUrl + postStatsLayersNutsIds);
  }






}
