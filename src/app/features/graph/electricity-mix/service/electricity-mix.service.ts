import { Injectable } from '@angular/core';
import {APIService} from '../../../../shared/services/api.service';
import { Http } from '@angular/http';
import {Logger} from 'app/shared/services/logger.service';
import { LoaderService } from 'app/shared/services/loader.service';
import {ToasterService} from 'app/shared/services/toaster.service';
import { Helper } from 'app/shared';
import {apiUrl, heat_load_api_year, getElectricityMixFromNuts0, postHeatLoadProfileHectares} from 'app/shared/data.service';

@Injectable()
export class ElectricityMixService extends APIService {

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService, private helper: Helper) {
    super(http, logger, loaderService, toasterService);
  }

  getElectricityMixFromNuts0(payload) {
      this.logger.log(apiUrl + postHeatLoadProfileHectares)
      return super.POST(payload, apiUrl + getElectricityMixFromNuts0);
  }
}
