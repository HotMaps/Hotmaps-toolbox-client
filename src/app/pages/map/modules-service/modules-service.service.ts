/**
 * Created by lesly on 09.06.17.
 */
import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ModulesService } from './modules-service';
import { MODULESERVICE } from './fake-module-service-data.service';
import { LoaderService } from '../../../shared/services/loader.service';
@Injectable()
export class ModulesServiceService {

  constructor(private http: Http, private loaderService: LoaderService) { }
  /* getModulesServices(): Promise<ModulesService[]> {
    return this.http.get(this.servicesUrl)
      .toPromise()
      .then(response => response.json().data as ModulesService[])
      .catch(this.handleError);
  }*/

  getModulesServices(): Promise<ModulesService[]> {
    return Promise.resolve(MODULESERVICE);
  }

  getModulesServicesWithNewService(newService: ModulesService): Promise<ModulesService[]> {
    let servicesArray: ModulesService[] = MODULESERVICE;
    servicesArray.push(newService);
    return Promise.resolve(servicesArray);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getModulesServicesSlowly(): Promise<ModulesService[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getModulesServices()), 2000);
    });
  }




}
