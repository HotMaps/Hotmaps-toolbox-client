import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { DataInteractionClass } from './data-interaction.class';
import { DataInteractionArray } from './data-interaction.data';
import { LoaderService } from '../../shared/services/loader.service';
@Injectable()
export class DataInteractionService {

  constructor(private http: Http, private loaderService: LoaderService) { }
  /* getModulesServices(): Promise<ModulesService[]> {
    return this.http.get(this.servicesUrl)
      .toPromise()
      .then(response => response.json().data as ModulesService[])
      .catch(this.handleError);
  }*/

  getDataInteractionServices(): Promise<DataInteractionClass[]> {
    return Promise.resolve(DataInteractionArray);
  }

  getModulesServicesWithNewService(newService: DataInteractionClass): Promise<DataInteractionClass[]> {
    const servicesArray: DataInteractionClass[] = DataInteractionArray;
    servicesArray.push(newService);
    return Promise.resolve(servicesArray);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getModulesServicesSlowly(): Promise<DataInteractionClass[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getDataInteractionServices()), 2000);
    });
  }




}
