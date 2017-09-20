import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SummaryResultClass } from './summary-result.class';
import { SummaryResultArray } from './summary-result.data';
import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
@Injectable()
export class SummaryResultService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }

  getSummaryResultService(): Promise<SummaryResultClass[]> {
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
  }




}
