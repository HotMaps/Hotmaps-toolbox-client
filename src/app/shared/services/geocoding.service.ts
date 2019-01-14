/**
 * Created by lesly on 27.05.17.
 */

 // Improvement of coding style : 
// listing import lines alphabetized by the module
import {Http, Headers, Response} from '@angular/http';
import {LocationClass} from '../class/location/location.class';
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
      .get(geocodeUrl + encodeURIComponent(address)+"&format=json&polygon=1&addressdetails=1")
      .map(res => res.json())
      .map(result => {

    //if (result.status !== 'OK') { throw new Error('unable to geocode address'); }

      const location = new LocationClass();
      location.address = result[0].display_name;
      location.latitude = result[0].lat;

      location.longitude = result[0].lon;

      const viewPort = result[0].boundingbox;
    location.viewBounds = L.latLngBounds(
      {
        lat: viewPort[0],
        lng: viewPort[2]},
      {
        lat: viewPort[1],
        lng: viewPort[3]
      });
    this.loaderService.display(false);
    return location;
  })
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
        const location = new LocationClass();

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
