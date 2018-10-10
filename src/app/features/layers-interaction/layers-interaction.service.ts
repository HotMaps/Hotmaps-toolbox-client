// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { DataInteractionClass } from './layers-interaction.class';
import { DataInteractionArray, cm_default_layer } from './layers-interaction.data';
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
  addNewLayer(name, id) {
    const newLayerAdded = DataInteractionArray.push(Object.assign({}, cm_default_layer))
    DataInteractionArray[newLayerAdded - 1].name = name + ' - ' + id.substring(0, 5)
    DataInteractionArray[newLayerAdded - 1].workspaceName = id;
    // console.log(DataInteractionArray[newLayerAdded - 1])
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
    this.logger.log('go inside  getSplittedResults+ '+ results)
    let newResults = this.helper.createSplittedResultsModel();
    const rLayers=results.layers
    this.logger.log('rLayers '+rLayers)
    this.logger.log('rLayers ' + JSON.stringify(rLayers));
    const rNoDataLayers = results.no_data_layers

    // returns null if results is empty
    if (this.helper.isNullOrUndefined(rLayers) && this.helper.isNullOrUndefined(rNoDataLayers)){
      return null;
    }

    for (let j = 0; j < summay_drop_down_buttons.length; j++){
      for (let i = 0; i< rLayers.length; i++){
        if (this.getRefFromLayerName(results.layers[i].name).includes(summay_drop_down_buttons[j]["ref"])){
          const ref = summay_drop_down_buttons[j]["ref"];
          newResults[ref]["layers"].push(results.layers[i]);
          this.logger.log('rLayers '+rLayers)

        }
      }
      for (let i = 0; i < rNoDataLayers.length; i++){
        if (this.getRefFromLayerName(results.no_data_layers[i]).includes(summay_drop_down_buttons[j]["ref"])){
          const ref = summay_drop_down_buttons[j]["ref"];
          newResults[ref]["no_data_layers"].push(results.no_data_layers[i]);
        }
      }

    }
    this.logger.log(' newResults rLayers ' + JSON.stringify(newResults));
    this.logger.log(' newResults rLayers ' + newResults);
    return newResults;
  }
  getLayersFromType(layer) {
    return this.getDataInteractionServices().then((data) => {
      return data.filter(x => x.layer_type === layer)
    })
  }
}
