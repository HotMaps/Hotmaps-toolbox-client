import {apiUrl, Helper} from 'app/shared';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import { LoaderService, Logger, APIService, ToasterService, Dictionary } from '../../shared';
import { CalculationModuleService } from 'app/features/calculation-module/service/calculation-module.service';





@Injectable()
export class CMLayersService extends APIService {


  private layersCM = new L.FeatureGroup();
  private cmLayersArray: Dictionary;



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
  addLayerWithAction(directory, map: any, order: number) {

    const layer = L.tileLayer(apiUrl + '/cm/tiles/' + directory + '/{z}/{x}/{y}/', {
      minZoom: 4,
      maxZoom: 15,
      tms: true,
    })
    // this.registerToEvents(map, layer)
    layer.addTo(this.layersCM)
    // layer.addTo(map)

    this.layersCM.addLayer(layer);

  }
  removelayer() {
    // we get the layer we want to remove
    this.layersCM.clearLayers();
  }


}
