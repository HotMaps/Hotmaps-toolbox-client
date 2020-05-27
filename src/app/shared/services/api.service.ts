/**
 * Created by lesly on 19.07.17.
 */

 // Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import {Http, Headers, RequestOptionsArgs} from '@angular/http';
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

    let message;
    if (this.isNullOrUndefined(error.json().message)) {
       message = 'An internal error occured';
    } else {
      this.logger.log('APIService/handleError nnn'+ error.json().message);
      message = error.json().message
      message = ', ' + message;
      const status = error.json().error.status;
      const statusText = error.json().error.statusText;
      message = statusText + ' ' + message
    }

    this.toasterService.showToaster(message);

    this.logger.log('An error occurred: ' + message); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  isNullOrUndefined(x: any) {
    let result = false;
    if (x == null) {
      result = true;
    }

    if (x === null) {
      result = true;
    }
    if (typeof x === 'undefined') {
      result = true;
    }
    return result;
  }

  POST(payload, url, request:RequestOptionsArgs = {}, toJson: Boolean = true): Promise<any> {
    if (!request.headers)
      request.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(payload), request)
      .timeout(timeOut)
      .toPromise()
      .then( response => toJson ? response.json() as any : response)
      .catch(this.handleError.bind(this));
  }

  POSTunStringify(payload, url, request:RequestOptionsArgs = {}, toJson: Boolean = true): Promise<any> {
    if (!request.headers)
      request.headers = this.headers;
    return this.http
      .post(url, payload, request)
      .timeout(timeOut)
      .toPromise()
      .then( response => toJson ? response.json() as any : response)
      .catch(this.handleError.bind(this));
  }

  GET(url, request:RequestOptionsArgs = {}): any {
    return this.http.get(url, request)
  }

  DELETE(url, request:RequestOptionsArgs = {}) {
    return this.http.delete(url, request);
  }

  async pGET(url, request:RequestOptionsArgs = {}): Promise<any>  {
    return await this.http
      .get(url, request)
      .toPromise()
      .then( response => response  )

      .catch(this.handleError.bind(this));
  }

  public async getJSONFromFille(url: string): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then( response => response.json() as any)
  }

}
