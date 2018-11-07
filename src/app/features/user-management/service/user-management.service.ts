import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { apiUrl, post_user_register } from 'app/shared/data.service';
import {
  post_user_register_activate, post_user_login,
  post_user_logout, post_user_recovery, post_user_recovery_ask
} from './../../../shared/data.service';
import { APIService } from './../../../shared/services/api.service';
import { Logger, LoaderService, ToasterService } from 'app/shared';

@Injectable()
export class UserManagementService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService) {
    super(http, logger, loaderService, toasterService);
  }

  userRegister(payload): Promise<any> {
    return super.POST(payload, apiUrl + post_user_register )
  }

  userRegisterActivate(payload): Promise<any> {
    return super.POST(payload, apiUrl + post_user_register_activate )
  }
  userLogin(payload): Promise<any> {
    return super.POST(payload, apiUrl + post_user_login )
  }
  userLogout(): Promise<any> {
    return super.POST({}, apiUrl + post_user_logout )
  }
  userRecover(payload): Promise<any> {
    return super.POST(payload, apiUrl + post_user_recovery)
  }
  userRecoverAsk(payload): Promise<any> {
    return super.POST(payload, apiUrl + post_user_recovery_ask )
  }
}

