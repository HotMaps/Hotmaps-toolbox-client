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

  /* getSummaryResultService(): Promise<SummaryResultClass[]> {
    console.log('getSummaryResultService');
    return Promise.resolve(SummaryResultArray);
  }

  getAreaSelectedSummayResultService(): Promise<SummaryResultClass[]> {
    console.log('getSummaryResultService');
    return Promise.resolve(SummaryResultArray);
  }

  getModulesServicesWithNewService(newService: SummaryResultClass): Promise<SummaryResultClass[]> {
    const servicesArray: SummaryResultClass[] = SummaryResultArray;
    servicesArray.push(newService);
    return Promise.resolve(servicesArray);
  }

  getSummaryResultSlowly(): Promise<SummaryResultClass[]> {
    console.log('getSummaryResultSlowly');
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getSummaryResultService()), 10000);
    });
  } */

  getSummaryResultWithPayload(payload: any): Promise<any> {
    // return super.POST(payload, apiUrl + postStatsLayersArea);
    return new Promise(resolve => {
      setTimeout(() => resolve(SummaryResponseData), 1000);
    });
  }

  setSummaryResult(summaryResult) {
    this.summaryResult.next(summaryResult);
  }

  getSummaryResult(): any {
    // return this.summaryResult;
    return this.summaryResult;
  }
}
