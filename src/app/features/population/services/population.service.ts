
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


import {apiUrl, postPopulationDensityInArea, unit_population, unit_shape_area} from '../../../shared/data.service'

import {LoaderService } from '../../../shared/services/loader.service';

import {Location} from '../../../shared/class/location/location';
import {Logger} from '../../../shared/services/logger.service';
import {Payload} from '../payload.class'
import {Population} from '../population.class';

import {ToasterService} from '../../../shared/services/toaster.service';

import {APIService} from '../../../shared/services/api.service';
import LatLng = L.LatLng;
import Popup = L.Popup;

@Injectable()
export class PopulationService extends APIService {
  private populationSelectedLayer: any;
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }
  getPopulationWithPayloads(payload: Payload): Promise<Population> {
    return super.POST(payload, apiUrl + postPopulationDensityInArea);
  }
  showPopulationSelectedLayer(populationSelected: any, map: any, latlng: LatLng, popup: Popup) {
    this.logger.log('MapService/showlayer');
    const geometrie = populationSelected.features[0].geometry
    // remove the layer if there is one
    this.removePopulationSelectedlayer(map);
    this.logger.log('MapService/showlayer/layerWilladde');
    // add the selected area to the map
    this.populationSelectedLayer = L.vectorGrid.slicer(geometrie);
    this.populationSelectedLayer.addTo(map);
    this.loaderService.display(false);
    // add the popup area to the map
    this.addPopup(populationSelected, map, latlng, popup);

  }

  addPopup(data: any, map: any, latlng: LatLng, popup: Popup) {

    const stat_levl_ = data.features[0].properties.stat_levl_;
    const nuts_id = data.features[0].properties.nuts_id;
    const name = data.features[0].properties.name;
    const value = data.features[0].properties.value
    const shape_len = data.features[0].properties.shape_len;
    popup.setLatLng(latlng).setContent('<h5>Population</h5> <ul class="uk-list uk-list-divider">' +
      '<li>nuts id: ' + nuts_id  + '</li><li>nuts level: ' + stat_levl_  + '</li><li>name: ' + name + '</li>' +
      '<li>Population: ' + value.toLocaleString() +  ' habitants'  + '</li></ul>').openOn(map);
    this.logger.log('PopulationService/addPopup/popup/added');

}


  removePopulationSelectedlayer( map: any) {
    if (this.populationSelectedLayer) {
      this.logger.log('MapService/removelayer');
      map.removeLayer(this.populationSelectedLayer);
      delete this.populationSelectedLayer;
    }
  }

}
