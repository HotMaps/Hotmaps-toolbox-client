// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';
import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
import { apiUrl, user_endpoint } from '../../shared/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class FeedbackService extends APIService {

  constructor(http: HttpClient, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }
  sendFeedback(data){
    return super.POSTunStringify(data,apiUrl+user_endpoint+'feedback', {headers: new HttpHeaders() })
    //return this.http.post(, data);
  }
}
