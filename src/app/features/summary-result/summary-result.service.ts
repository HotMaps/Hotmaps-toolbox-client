import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SummaryResponseData } from './mock/test.data';
import { PayloadStat } from './mock/payload.class';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SummaryResultClass } from './summary-result.class';
import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
import { postStatsLayersArea, apiUrl } from './../../shared/data.service';



@Injectable()
export class SummaryResultService extends APIService {

  public summaryResult: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }

  getSummaryResultWithPayload(payload: any): Promise<any> {
    const url = apiUrl + postStatsLayersArea;
    this.logger.log('getSummaryResultWithPayload/url = ' + url);
    return super.POST(payload, apiUrl + postStatsLayersArea);
  }






}
