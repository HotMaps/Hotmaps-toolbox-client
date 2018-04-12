// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { DataInteractionClass } from './data-interaction.class';
import { DataInteractionArray } from './data-interaction.data';
import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
import {Helper} from '../../shared/helper';
import {BusinessInterfaceRenderService} from '../../shared/business/business.service';
import { summay_drop_down_buttons } from '../../shared/data.service';


@Injectable()
export class DataInteractionService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
    private helper: Helper, private business: BusinessInterfaceRenderService) {
    super(http, logger, loaderService, toasterService);
  }
  /* getModulesServices(): Promise<ModulesService[]> {
    return this.http.get(this.servicesUrl)
      .toPromise()
      .then(response => response.json().data as ModulesService[])
      .catch(this.handleError);
  }*/

  getDataInteractionServices(): Promise<DataInteractionClass[]> {
    return Promise.resolve(DataInteractionArray);
  }

  getDataArrayServices(): DataInteractionClass[] {
    return DataInteractionArray;
  }
  getReadableName(layerName: string): string {

    this.logger.log('DataInteractionService/getReadableName layerName=' + layerName);
    const layer  =  this.getDataArrayServices().filter(x => x.workspaceName === layerName)[0];
    if (this.helper.isNullOrUndefined(layer)) {
      const layer_new  =  this.business.getReadableName(layerName);
      if (this.helper.isNullOrUndefined(layer_new)) {
        return layerName;
      } else {
        return layer_new;
      }
    }


    return layer.name;

  }
  getModulesServicesWithNewService(newService: DataInteractionClass): Promise<DataInteractionClass[]> {
    const servicesArray: DataInteractionClass[] = DataInteractionArray;
    servicesArray.push(newService);
    return Promise.resolve(servicesArray);
  }

  getModulesServicesSlowly(): Promise<DataInteractionClass[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getDataInteractionServices()), 2000);
    });
  }

  getRefFromLayerName(name: string): any[]{
    const layer  =  this.getLayersTabs().filter(x => x.workspaceName === name)[0];

    if (this.helper.isNullOrUndefined(layer)) {return ["no layer with this name"]}
    return layer.ref;
  }

  getLayersTabs(): DataInteractionClass[] {
      return DataInteractionArray;
  }

  getSplittedResults(results){
    let newResults = this.helper.createSplittedResultsModel();

    for (let j = 0; j<summay_drop_down_buttons.length; j++){

      for (let i = 0; i<results.layers.length; i++){
        if (this.getRefFromLayerName(results.layers[i].name).includes(summay_drop_down_buttons[j]["ref"])){
          const ref = summay_drop_down_buttons[j]["ref"];
          newResults[ref]["layers"].push(results.layers[i]);
        }
      }
      for (let i = 0; i<results.no_data_layers.length; i++){
        if (this.getRefFromLayerName(results.no_data_layers[i]).includes(summay_drop_down_buttons[j]["ref"])){
          const ref = summay_drop_down_buttons[j]["ref"];
          newResults[ref]["no_data_layers"].push(results.no_data_layers[i]);
        }
      }

    }

    return newResults;
  }

}
