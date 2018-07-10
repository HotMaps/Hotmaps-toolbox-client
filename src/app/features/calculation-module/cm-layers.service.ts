import { Helper } from 'app/shared';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import { LoaderService, Logger, APIService, ToasterService, Dictionary } from '../../shared';
import { CalculationModuleService } from 'app/features/calculation-module/service/calculation-module.service';





@Injectable()
export class CMLayersService extends APIService {


  private layers = new L.LayerGroup();
  private cmLayersArray: Dictionary;



  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
    // private interactionService: InteractionService,
    // private populationService: PopulationService,
    private helper: Helper,
    private calculationModuleService: CalculationModuleService) {
    super(http, logger, loaderService, toasterService);
    this.cmLayersArray = new Dictionary([{key: null, value: null}]);
  }
  getLayers(): any {
    return this.layers;
  }

  getLayerArray(): Dictionary {
    return this.cmLayersArray;
  }
  addLayerWithAction(cm, map: any, order: number) {
    this.logger.log('CMLayerService/addLayerWithAction cm.id: ' + cm.id);
    const layer = L.tileLayer(cm.cm_url + '/{z}/{x}/{y}.png', {
      minZoom: 4,
      maxZoom: 15,
      tms: true
    })
    // this.registerToEvents(map, layer)
    layer.addTo(this.layers)
    // layer.addTo(map)
    console.log(cm)
    this.layers.addLayer(layer);
    this.cmLayersArray.add(cm.id, layer);
    console.log(this.cmLayersArray)
  }
  removelayer(cmid) {
    // we get the layer we want to remove
    const layer = this.cmLayersArray.value(cmid);
    // we remove this layer from map
    this.layers.removeLayer(layer);
    // we destroy the layer
    this.cmLayersArray.remove(cmid);
  }


}
