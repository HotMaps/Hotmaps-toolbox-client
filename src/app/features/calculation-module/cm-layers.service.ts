import {apiUrl, Helper, vector_type_name, raster_type_name} from 'app/shared';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import { LoaderService, Logger, APIService, ToasterService, Dictionary } from '../../shared';
import { CalculationModuleService } from 'app/features/calculation-module/service/calculation-module.service';
import Layer = L.Layer;
import * as shpjs from 'shpjs';




@Injectable()
export class CMLayersService extends APIService {


  private layersCM = new L.FeatureGroup();
  private cmLayersArray: Dictionary;
  // private layerAdded;

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService,
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
    console.log('addOrRemoveLayerWithAction', directory, type, this.cmLayersArray.containsKey(directory))
    if (!this.cmLayersArray.containsKey(directory)) {
      this.addLayerWithAction(directory, type, map, order);
    } else {
      this.removelayer(directory, type);
    }
    map.fireEvent('didUpdateLayers', this.cmLayersArray);
  }
  addLayerWithAction(directory, type, map, order) {
    // console.log('addLayerWithAction', directory, type===raster_type_name, type===vector_type_name)
    const self = this;
    // let layerAdded:any;
    if (type === raster_type_name) {
      let layer;
      layer = L.tileLayer(apiUrl + '/cm/tiles/' + directory + '/{z}/{x}/{y}/', {
        minZoom: 4,
        maxZoom: 15,
        tms: true,
      })
      layer.addTo(self.layersCM)
      self.cmLayersArray.add(directory, layer)

    } else if (type === vector_type_name) {
      shpjs(apiUrl + '/cm/files/' + directory).then(data => {
        let layer;
        layer = new L.GeoJSON(data,{
          onEachFeature: this.onEachFeature
        })
        layer.addTo(self.layersCM)
        self.cmLayersArray.add(directory, layer)

      })
    }

  }
  onEachFeature(feature, layer) {
    let html = ''
    Object.keys(feature.properties).map((prop) => {
      html += '<bold>' + prop + ':</bold>';
      html += '<span>' + feature.properties[prop] + '</span><br />';
    })
    layer.bindPopup(html);

  }
  removelayer(id, type) {

    // we get the layer we want to remove
    const layer = this.cmLayersArray.value(id);
    // console.log(layer)
    if (type === vector_type_name) {
      layer.clearLayers()
    } else if (type === raster_type_name) {
      this.layersCM.removeLayer(layer);
    }
    // we remove this layer from map
    // we destroy the layer
    this.cmLayersArray.remove(id);
  }

  clearAll() {
    /* this.cmLayersArray._keys.map(key => {
      this.removelayer(key)
    }) */
    this.layersCM.clearLayers()
  }

}
