import {apiUrl, Helper, vector_type_name, raster_type_name, cm_layers_order} from 'app/shared';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import { LoaderService, Logger, APIService, ToasterService, Dictionary } from '../../shared';
import { CalculationModuleService } from 'app/features/calculation-module/service/calculation-module.service';
import Layer = L.Layer;
import * as shpjs from 'shpjs';
import { feature } from '@turf/helpers';




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
  addOrRemoveLayerWithAction(directory, type, map: any) {
    if (!this.cmLayersArray.containsKey(directory)) {
      this.addLayerWithAction(directory, type);
    } else {
      this.removelayer(directory, type);
    }
    map.fireEvent('didUpdateLayers', this.cmLayersArray);
  }
  addLayerWithActionRaster(directory) {
    const self = this;
    let layer;
    layer = L.tileLayer(apiUrl + '/cm/tiles/' + directory + '/{z}/{x}/{y}/', {
      zIndex:cm_layers_order,
      tms: true
    })
    layer.addTo(self.layersCM)
    self.cmLayersArray.add(directory, layer)
  }
  addLayerWithActionVector(directory) {
    const self = this;
    shpjs(apiUrl + '/cm/files/' + directory).then(data => {
      let layer;
      layer = new L.GeoJSON(data,{
        onEachFeature: this.onEachFeature,
        style:(feature) => {
          const color = feature.properties['rgba']
          // return { color: 'rgba'+color+''}
          return { color: '#ad1ad1'}
        }
      })
      layer.addTo(self.layersCM)
      self.cmLayersArray.add(directory, layer)

    })
  }
  addLayerWithAction(directory, type) {
    // let layerAdded:any;
    if (type === raster_type_name) {
      this.addLayerWithActionRaster(directory)
    } else if (type === vector_type_name) {
      this.addLayerWithActionVector(directory)
    }

  }
  onEachFeature(feature, layer) {
    let html = ''
    Object.keys(feature.properties).map((prop) => {
      if (prop !== 'rgba') {
        html += '<bold>' + prop + ':</bold>';
        html += '<span>' + feature.properties[prop] + '</span><br />';
      }
    })
    layer.bindPopup(html);

  }
  removelayer(id, type) {

    // we get the layer we want to remove
    const layer = this.cmLayersArray.value(id);
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
    this.logger.log('Clear all is called')
    this.layersCM.clearLayers()
  }

}
