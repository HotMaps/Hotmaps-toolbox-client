import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {
  apiUrl,
  post_user_register,
  get_diskspace_endpoint,
  get_filelist_endpoint,
  get_userinformation_endpoint,
  get_userupdateprofile_endpoint
} from 'app/shared/data.service';
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
  userLogout(token): Promise<any> {
    return super.POST(this.getTokenPayload(token), apiUrl + post_user_logout )
  }

  userDelete(token: string): Promise<any> {
    return super.DELETE(apiUrl + "/users", {
      body: { token: token }
    }).toPromise();
  }

  userRecover(payload): Promise<any> {
    return super.POST(payload, apiUrl + post_user_recovery)
  }
  userRecoverAsk(payload): Promise<any> {
    return super.POST(payload, apiUrl + post_user_recovery_ask )
  }
  getDiskSpace(token): Promise<any> {
    return super.POST(this.getTokenPayload(token) ,apiUrl + get_diskspace_endpoint)
  }
  getAcountFileList(token) {
    return super.POST(this.getTokenPayload(token) ,apiUrl + get_filelist_endpoint)
  }
  getUserInformations(token) {
    return super.POST(this.getTokenPayload(token) ,apiUrl + get_userinformation_endpoint)
  }
  userUpdateProfile(payload) {
    return super.POST(payload ,apiUrl + get_userupdateprofile_endpoint)
  }
  getTokenPayload(token) {
    return {token:token};
  }
}

