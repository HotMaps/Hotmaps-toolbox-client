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
import { cms, mockComponents } from './../component/mock-calculation.data';



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
  getMockCalculationModuleComponents(id): Promise<any> {
    return Promise.resolve(mockComponents)

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
    this.logger.log( 'compute-async/data ' + JSON.stringify(payload) )
    return super.POST(payload, apiUrl + '/cm/compute-async/')

  }
  getStatusOfCM(status_id) {
    this.logger.log('getStatusOfCM()' + apiUrl + '/cm/status/' + status_id)
    return super.GET(apiUrl + '/cm/status/' + status_id).toPromise().then( response => response )
    .catch(this.handleError.bind(this));
  }

  deleteCM(id) {
    return super.DELETE(apiUrl + '/cm/delete/' + id)
  }
}
