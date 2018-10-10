import { cms } from './../component/mock-calculation.data';
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CalculationModuleClass } from './calculation-module.class';
import { Logger } from '../../../shared/services/logger.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { APIService } from '../../../shared/services/api.service';
import { apiUrl } from 'app/shared/data.service';
import { ToasterService } from '../../../shared/services/toaster.service';



@Injectable()
export class CalculationModuleService extends APIService {
  categories = new Set();
  constructor(http: Http,  logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }

  getcalculationModuleServicesPromise(): Promise<CalculationModuleClass[]> {
    return Promise.resolve(this.getCalculationModuleServices());
  }

  getCalculationModuleServices(): Promise<any> {
    return super.POST('', apiUrl + '/cm/list')
  }
  getMockCalculationModules(): Promise<any> {
    return Promise.resolve(cms)
  }
  getCalculationModuleComponents(cmId): Promise<any> {
    const payload = { cm_id: '' + cmId }
    return super.POST(payload, apiUrl + '/cm/user-interface/')
  }

  getCalculationModuleCategories(cms) {
    this.categories.clear()
    cms.forEach((cm) => {
      if (cm.isReadable) { this.categories.add(cm.category) }
    });
    return Promise.resolve(Array.from(this.categories.values()));
  }
  getCMInformations(payload) {
    // if (!cm.isApiRequestInTreatment) {
      this.logger.log( 'data ' + JSON.stringify(payload) )
      // URL to check status
     return super.POST(payload, apiUrl + '/cm/compute-async/')
    /*} else {
      this.logger.log('promise')
      const result = this.getStatusOfCM(cm);
      if (result !== null) {
        return new Promise(() => this.getStatusOfCM(cm))
      }
    }
    return*/
  }
  getStatusOfCM(status_id) {
    this.logger.log('getStatusOfCM()' + apiUrl + '/cm/status/' + status_id)
    return super.GET(apiUrl + '/cm/status/' + status_id).toPromise().then( response => response )
    .catch(this.handleError.bind(this));
  }
  /* getCMResultMockData(payload) {
    return this.http.get('http://albain-hotmaps:4200/assets/mockdata_graphic.txt').toPromise()

  } */
  deleteCM(id) {
    return super.DELETE(apiUrl + '/cm/delete/' + id)
  }
}
