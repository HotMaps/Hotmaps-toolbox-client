
import { Injectable } from '@angular/core';

import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
import { apiUrl, postStatsLayersNutsLau, postStatsLayersHectares, postStatsPersonalLayer } from './../../shared/data.service';
import { HttpClient } from '@angular/common/http';



@Injectable()

export class SummaryResultService extends APIService {

  constructor(http: HttpClient, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }

  getSummaryResultWithIds(payload: any): Promise<any> {
    this.logger.log('SummaryResultService/getSummaryResultWithIds = ' + JSON.stringify(payload));
    return super.POST(payload, apiUrl + postStatsLayersNutsLau);
  }

  getSummaryResultWithMultiAreas(payload: any): Promise<any> {
    this.logger.log('SummaryResultService/getSummaryResultWithMultiAreas = ' + JSON.stringify(payload));
    return super.POST(payload, apiUrl + postStatsLayersHectares);
  }
  getSummaryResultPersonnalLayers(payload) {
    this.logger.log('SummaryResultService/getSummaryResultPersonnalLayers = ' + JSON.stringify(payload));
    return super.POST(payload, apiUrl + postStatsPersonalLayer);
  }
}
