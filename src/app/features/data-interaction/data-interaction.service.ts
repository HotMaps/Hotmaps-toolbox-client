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
@Injectable()
export class DataInteractionService extends APIService {

  private srTest = {
        "layers":[
            {
                "values":[
                    {
                        "unit":"MWh",
                        "name":"heat_consumption",
                        "value":"2904211.87"
                    },
                    {
                        "unit":"MWh/ha",
                        "name":"heat_density",
                        "value":"58.4925151557873960"
                    },
                    {
                        "unit":"cells",
                        "name":"count_cell_heat",
                        "value":"49651"
                    }
                ],
                "name":"heat_tot_curr_density"
            },
            {
                "values":[
                    {
                        "unit":"kW",
                        "name":"power",
                        "value":"16545.079999700000055"
                    },
                    {
                        "unit":"Person equivalent",
                        "name":"capacity",
                        "value":"256734"
                    }
                ],
                "name":"wwtp"
            }
        ],
        "no_data_layers":[
            "vol_nonres_curr_density",
            "potential_biomass"
        ]
    }

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

  getTabsFromLayerName(name: string): any[]{
    const layer  =  this.getLayersTabs().filter(x => x.name === name)[0];
    if (this.helper.isNullOrUndefined(layer)) {return []}
    return layer.tabs;

  }
 


  getLayersTabs(): DataInteractionClass[] {
      return DataInteractionArray;
  }


  /*firstTabLayers(layers){
    let listLayers = this.getDataArrayServices();
    let newLayers = [];
    for (let i = 0; i<layers.length; i++){
      for (let j = 0; j<listLayers.length; j++) {
        if (layers[i].includes(listLayers[j].workspaceName) && listLayers[j].tabs.includes('summary')){
          newLayers.push(layers[i])
        }
      }
    }
    return newLayers;
  }

  secondTabLayers(layers){
    let listLayers = this.getDataArrayServices();
    let newLayers = [];
    for (let i = 0; i<layers.length; i++){
      for (let j = 0; j<listLayers.length; j++) {
        if (layers[i].includes(listLayers[j].workspaceName) && listLayers[j].tabs.includes('demand')){
          newLayers.push(layers[i])
        }
      }
    }
    return newLayers;
  }*/

  firstTabLayers(results){
    let listLayers = this.getDataArrayServices();

    let newResults = results;

    for (let i = 0; i<results.layers.length; i++){
      for (let j = 0; j<listLayers.length; j++) {
        if (results.layers[i].name.includes(listLayers[j].workspaceName) && listLayers[j].tabs.includes('summary')){
          newResults.layers.splice(i, 1);
          //console.log(newResults);
        }
      }
    }

    for (let i = 0; i<results.no_data_layers.length; i++){
      for (let j = 0; j<listLayers.length; j++) {
        if (results.no_data_layers[i].includes(listLayers[j].workspaceName) && listLayers[j].tabs.includes('summary')){
          newResults.no_data_layers.splice(i, 1);
          //console.log(newResults);
        }
      }
    }

    return newResults;

  }

  secondTabLayers(results){
    console.log('newResults')

    let listLayers = this.getDataArrayServices();

    let newResults = results;
    console.log(newResults)

    for (let i = 0; i<results.layers.length; i++){
      for (let j = 0; j<listLayers.length; j++) {
        if (results.layers[i].name.includes(listLayers[j].workspaceName) && !listLayers[j].tabs.includes('demand')){
          newResults.layers.splice(i, 1);
          console.log(newResults);
        }
      }
    }
    console.log(newResults)


    for (let i = 0; i<results.no_data_layers.length; i++){
      for (let j = 0; j<listLayers.length; j++) {
        if (results.no_data_layers[i].includes(listLayers[j].workspaceName) && !listLayers[j].tabs.includes('demand')){
          newResults.no_data_layers.splice(i, 1);
          console.log(newResults);
        }
      }
    }
    console.log(newResults)
    return newResults;

  }

}
