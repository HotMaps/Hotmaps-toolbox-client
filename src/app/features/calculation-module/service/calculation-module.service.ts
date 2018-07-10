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
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }

  getcalculationModuleServicesPromise(): Promise<CalculationModuleClass[]> {
    return Promise.resolve(this.getCalculationModuleServices());
  }

  getCalculationModuleServices(): Promise<any> {
    return super.POST('', apiUrl + '/cm/list')
  }
  getCalculationModuleComponents(cmId): Promise<any> {
    console.log(cmId)
    const payload = { cm_id: '' + cmId }
    return super.POST(payload, apiUrl + '/cm/user-interface/')
  }

  getCalculationModuleCategories(cms) {
    this.categories.clear()
    cms.forEach((cm) => {
      console.log(cm)
      if (cm.isReadable) { this.categories.add(cm.category) }
    });
    return Promise.resolve(Array.from(this.categories.values()));
  }
  getCMInformations(payload, cm) {
    if (!cm.isApiRequestInTreatment) {
      // URL to check status
      super.POST(payload, apiUrl + '/cm/compute-async/').then((data) => {
        console.log(data)
        cm.status_id = data.status_id;
        cm.isApiRequestInTreatment = true;
      }).then(() => {
        return this.getStatusOfCM(cm)
      }).catch(() => {
        console.log('error');
      })
    } else {
      const result = this.getStatusOfCM(cm);
      if (result !== null) {
        return new Promise(() => this.getStatusOfCM(cm))
      }
    }
    return
  }
  getStatusOfCM(cm) {
    console.log('getStatusOfCM()')
    super.GET('/cm/status/' + cm.status_id).toPromise().then((data) => {
      if (data['state'] === 'SUCCESS') {
        return data['status'];
      } else {
        setTimeout(() => {
          this.getStatusOfCM(cm);
        }, 2000);
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
