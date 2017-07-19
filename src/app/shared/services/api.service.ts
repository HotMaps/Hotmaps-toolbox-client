/**
 * Created by lesly on 19.07.17.
 */
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';



import {apiUrl} from '../data.service'
import {GlobalErrorHandler} from './error-handler';
import {LoaderService } from './loader.service';


import {Logger} from './logger.service';


import {ToasterService} from './toaster.service';
export class APIService {
  http: Http;
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(http: Http, private logger: Logger, private loaderService: LoaderService, private toasterService: ToasterService) {
    this.http = http;
    this.logger = logger;
  }
}
