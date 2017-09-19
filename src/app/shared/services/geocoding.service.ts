/**
 * Created by lesly on 27.05.17.
 */
import {Http, Headers, Response} from '@angular/http';
import {Location} from '../class/location/location.class';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { LoaderService } from './loader.service';
import {Logger} from './logger.service';
import {geocodeUrl} from '../data.service'
import {getIpUrl} from '../data.service'
import {getLocationFromIp} from '../data.service'

@Injectable()
export class GeocodingService {
  http: Http;
  constructor(http: Http, private logger: Logger, private loaderService: LoaderService) {
    this.http = http;
    this.logger = logger;
  }

  geocode(address: string) {
    this.logger.log('GeocodingService/geocode()');
    this.loaderService.display(true);
    return this.http
      .get(geocodeUrl + encodeURIComponent(address))
      .map(res => res.json())
      .map(result => {
        this.logger.log('GeocodingService/geocode()/result' + result);

        if (result.status !== 'OK') { throw new Error('unable to geocode address'); }
        const location = new Location();
        location.address = result.results[0].formatted_address;
        location.latitude = result.results[0].geometry.location.lat;
        location.longitude = result.results[0].geometry.location.lng;

        const viewPort = result.results[0].geometry.viewport;
        location.viewBounds = L.latLngBounds(
          {
            lat: viewPort.southwest.lat,
            lng: viewPort.southwest.lng},
          {
            lat: viewPort.northeast.lat,
            lng: viewPort.northeast.lng
          });
        this.loaderService.display(false);
        return location;
      });
  }

  getCurrentLocation() {
    this.logger.log('GeocodingService/getCurrentLocation()');
    // this.loaderService.display(true);
    return this.http
      .get(getIpUrl)
      .map(res => res.json().ip)
      .flatMap(ip => this.http.get(getLocationFromIp + ip))
      .map((res: Response) => res.json())
      .map(result => {
        const location = new Location();

        location.address = result.city + ', ' + result.region_code + ' ' + result.zip_code + ', ' + result.country_code;
        location.latitude = result.latitude;
        location.longitude = result.longitude;
       //   this.loaderService.display(false);
        return location;
      });
  }


  private handleError(error: any): Promise<any> {
    this.logger.log('GeocodingService/handleError() err : ' + error);
    this.loaderService.display(false);
    return Promise.reject(error.message || error);
  }

}
