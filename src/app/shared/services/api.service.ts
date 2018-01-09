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

import 'rxjs/add/operator/timeout'


import {apiUrl, timeOut} from '../data.service'
import {GlobalErrorHandler} from './error-handler';
import {LoaderService } from './loader.service';


import {Logger} from './logger.service';


import {ToasterService} from './toaster.service';
export class APIService {
  public headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

  constructor(protected http: Http, protected logger: Logger, protected  loaderService: LoaderService,
              protected  toasterService: ToasterService) {
    this.http = http;
    this.logger = logger;
    this.loaderService = loaderService;
    this.toasterService = toasterService;
  }
  handleError(error: any) {
    this.loaderService.display(false);
    let message = error.message;
    if (error.name === 'TimeoutError') {
       message = 'Timeout has occurred';
    }

    this.toasterService.showToaster('We encountered a problem' + ', please try again later');
    this.logger.log('APIService/handleError');
    console.log('An error occurred', error.message); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  POST(payload, url): Promise<any> {

    return this.http
      .post(url, JSON.stringify(payload), {headers: this.headers})
      .timeout(timeOut)
      .toPromise()
      .then( response => response.json() as any)
      .catch(this.handleError.bind(this));
  }
  GET(url): any {
    return this.http.get(url, this.headers)
  }

  public async getJSONFromFille(url: string): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then( response => response.json() as any)
  }


}
