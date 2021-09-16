/**
 * Created by lesly on 19.07.17.
 */

 // Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/timeout'


import {timeOut} from '../data.service'
import {LoaderService } from './loader.service';


import {Logger} from './logger.service';


import {ToasterService} from './toaster.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class APIService {
  public headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

  constructor(protected http: HttpClient, protected logger: Logger, protected  loaderService: LoaderService,
              protected  toasterService: ToasterService) {
    this.http = http;
    this.logger = logger;
    this.loaderService = loaderService;
    this.toasterService = toasterService;
  }
  handleError(error: any) {
    this.loaderService.display(false);
    let message;
    if (this.isNullOrUndefined(error.message)) {
       message = 'An internal error occured';
    } else {
      this.logger.log('APIService/handleError nnn'+ error.message);
      message = error.message
      message = ', ' + message;
      const status = error.status;
      const statusText = error.statusText;
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

  POST(payload, url): Promise<any> {
    let options = {
      headers: this.headers
    }
    return this.http
      .post(url, JSON.stringify(payload), options)
      .timeout(timeOut)
      .toPromise()
      .then( response => response)
      .catch(this.handleError.bind(this));
  }

  POSTunStringify(payload, url, options?): Promise<any> {
    if(!options){
      options = {
        headers: this.headers
      }
    } 
    return this.http
      .post(url, payload, options)
      .timeout(timeOut)
      .toPromise()
      .then( response => response)
      .catch(this.handleError.bind(this));
  }

  GET(url): any {
    return this.http.get(url)
  }

  DELETE(url, options?) {
    if(!options){
      options = {}
    }
    return this.http.delete(url, options);
  }

  async pGET(url): Promise<any>  {
    return await this.http
      .get(url)
      .toPromise()
      .then( response => response  )

      .catch(this.handleError.bind(this));
  }

  public async getJSONFromFille(url: string): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then( response => response)
  }

}
