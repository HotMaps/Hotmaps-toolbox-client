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
import {Helper} from '../../shared/helper';
import {DataInteractionService} from '../data-interaction/data-interaction.service';
@Injectable()
export class SummaryResultService extends APIService {

  public summaryResult: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
              private helper: Helper, private dataInteractionService: DataInteractionService ) {
    super(http, logger, loaderService, toasterService);
  }

  getSummaryResultWithPayload(payload: any): Promise<any> {
    const url = apiUrl + postStatsLayersArea;
    this.logger.log('getSummaryResultWithPayload/url = ' + url);
    return super.POST(payload, apiUrl + postStatsLayersArea);
  }

  getSummaryResultWithPayloadAndResult(payload: any): Promise<SummaryResultClass> {
    // return super.POST(payload, apiUrl + postStatsLayersArea);
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getSummaryResultToClass(SummaryResponseData)), 1000);
    });
  }

  getSummaryResultToClass(summaryResultData: any): Promise<SummaryResultClass> {
    for (let i = 0; i < summaryResultData.layers.length; i++) {
      // next line get the readable name from the layername
      summaryResultData.layers[i].name = this.dataInteractionService.getReadableName(summaryResultData.layers[i].name);
      for (let j = 0; j < summaryResultData.layers[i].values.length; j++) {
        // next line get the round values from the layername
        if (summaryResultData.layers[i].values[j].value) {
          summaryResultData.layers[i].values[j].value = this.helper.round(summaryResultData.layers[i].values[j].value )
        }
      }
    }
    return new Promise(resolve => { resolve(summaryResultData)
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
