// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import {Injectable} from '@angular/core';


declare let L;

import { business_name_population, unit_population
} from '../../../shared/data.service'

import {LoaderService } from '../../../shared/services/loader.service';

import {Logger} from '../../../shared/services/logger.service';

import {ToasterService} from '../../../shared/services/toaster.service';

import {APIService} from '../../../shared/services/api.service';
import * as Leaflet from 'leaflet';
import {Helper} from '../../../shared/helper';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PopulationService extends APIService {
  private populationSelectedLayer: any;
  constructor(http: HttpClient, logger: Logger, loaderService: LoaderService, toasterService: ToasterService, private helper: Helper) {
    super(http, logger, loaderService, toasterService);
  }

  /**
  * Get the population with payloads
  */
  /*getPopulationWithPayloads(payload: Payload): Promise<Population> {
    return super.POST(payload, apiUrl + postPopulationDensityInArea);
  }*/

  /**
  * Show the population selected layer
  */
  showPopulationSelectedLayer(populationSelected: any, map: any, latlng: Leaflet.LatLng, popup: Leaflet.Popup) {
    this.logger.log('PopulationService/showPopulationSelectedLayer');
    const geometrie = populationSelected.features[0].geometry
    // remove the layer if there is one
    this.removePopulationSelectedlayer(map);
    // add the selected area to the map
    this.populationSelectedLayer = L.vectorGrid.slicer(geometrie);
    this.populationSelectedLayer.addTo(map);
    this.loaderService.display(false);
    // add the popup area to the map
    // this.addPopupHectare(populationSelected, map, latlng, popup);

  }

  /**
  * Add the Nuts popup
  */
  addPopupNuts(data: any, map: any, latlng: Leaflet.LatLng, popup: Leaflet.Popup) {
    const stat_levl_ = data.features[0].properties.stat_levl_;
    const nuts_id = data.features[0].properties.nuts_id;
    const name = data.features[0].properties.name;
    const value = data.features[0].properties.value
    const date = data.features[0].properties.date.split('Z')[0];
    // Improvement of coding style : (with codelyzer)
    // Line 73 exceeds maximum line length of 140
    popup.setLatLng(latlng).setContent('<h5>' + business_name_population + '</h5> <ul class="uk-list uk-list-divider">' +
      '<li>nuts id: ' + nuts_id  + '</li><li>nuts level: ' + stat_levl_  + '</li><li>name: ' + name + '</li>' +
      '<li>Population: ' +  this.helper.round(value)  + ' ' +  unit_population  + '</li><li>Reference date: ' + date + '</li></ul>').openOn(map);
    this.logger.log('PopulationService/addPopup/popup/added');

 }

  /**
  * Remove the population selected layer
  */
  removePopulationSelectedlayer( map: any) {
    if (this.populationSelectedLayer) {
      this.logger.log('MapService/removelayer');
      map.removeLayer(this.populationSelectedLayer);
      delete this.populationSelectedLayer;
    }
  }

}
