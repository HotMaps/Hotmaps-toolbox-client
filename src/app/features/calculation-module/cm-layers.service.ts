import {apiUrl, Helper, vector_type_name, raster_type_name} from 'app/shared';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import { LoaderService, Logger, APIService, ToasterService, Dictionary } from '../../shared';
import { CalculationModuleService } from 'app/features/calculation-module/service/calculation-module.service';





@Injectable()
export class CMLayersService extends APIService {


  private layersCM = new L.FeatureGroup();
  private cmLayersArray: Dictionary;
  private layerAdded;


  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
    // private interactionService: InteractionService,
    // private populationService: PopulationService,
    private helper: Helper,
    private calculationModuleService: CalculationModuleService) {
    super(http, logger, loaderService, toasterService);
    this.cmLayersArray = new Dictionary([{key: null, value: null}]);
  }
  getLayersCM(): any {
    return this.layersCM;
  }

  getLayerArray(): Dictionary {
    return this.cmLayersArray;
  }
  addOrRemoveLayerWithAction(directory, type, map: any, order: number) {
    console.log(directory);
    if (!this.cmLayersArray.containsKey(directory)) {
      this.addLayerWithAction(directory, type, map, order);
    } else {
      this.removelayer(directory);
    }
  }
  addLayerWithAction(directory, type, map, order) {
    if (type === raster_type_name) {
      this.layerAdded = L.tileLayer(apiUrl + '/cm/tiles/' + directory + '/{z}/{x}/{y}/', {
        minZoom: 4,
        maxZoom: 15,
        tms: true,
      })
    } else if (type === vector_type_name) {
      console.log(vector_type_name + ' ajout d\'un layer vector:' + directory)
    }
    this.cmLayersArray.add(directory, this.layerAdded)
    this.layersCM.addLayer(this.layerAdded);

  }
  removelayer(id) {
    // we get the layer we want to remove
    const layer = this.cmLayersArray.value(id);
    // we remove this layer from map
    this.layersCM.removeLayer(layer);
    // we destroy the layer
    this.cmLayersArray.remove(id);
  }
  clearAll() {
    this.cmLayersArray._keys.map(key => {
      this.removelayer(key)
    })
  }

}
