/**
 * Created by lesly on 19.07.17.
 */
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



import {apiUrl} from '../data.service'
import {GlobalErrorHandler} from './error-handler';
import {LoaderService } from './loader.service';


import {Logger} from './logger.service';


import {ToasterService} from './toaster.service';
export class APIService {
  http: Http;
  logger: Logger;
  loaderService: LoaderService;
  toasterService: ToasterService;
  public headers = new Headers({'Content-Type': 'application/json'});
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    this.http = http;
    this.logger = logger;
    this.loaderService = loaderService;
    this.toasterService = toasterService;
  }
  handleError(error: any) {
    this.loaderService.display(false);
    this.toasterService.showToaster('An error occurred: please try again later');
    this.logger.log('PopulationServices/handleError');
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  POST(payload, url): Promise<any> {
    return this.http
      .post(url, JSON.stringify(payload), {headers: this.headers})
      .toPromise()
      .then( response => response.json() as any)
      .catch(this.handleError.bind(this));
  }
  GET(url): any {
    return this.http.get(url).map((res: Response) => res.json()).subscribe(res => console.log(JSON.stringify(res)));
  }

  public async getJSONFromFille(url: string): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then( response => response.json() as any)

  }


}
