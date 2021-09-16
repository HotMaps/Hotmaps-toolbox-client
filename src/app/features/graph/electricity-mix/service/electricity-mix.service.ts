import { Injectable } from '@angular/core';
import {APIService} from '../../../../shared/services/api.service';
import {Logger} from 'app/shared/services/logger.service';
import { LoaderService } from 'app/shared/services/loader.service';
import {ToasterService} from 'app/shared/services/toaster.service';
import { Helper } from 'app/shared';
import {apiUrl, getElectricityMixFromNuts0, postHeatLoadProfileHectares} from 'app/shared/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ElectricityMixService extends APIService {

  constructor(http: HttpClient, logger: Logger, loaderService: LoaderService, toasterService: ToasterService, private helper: Helper) {
    super(http, logger, loaderService, toasterService);
  }

  getElectricityMix(payload) {
      this.logger.log(apiUrl + postHeatLoadProfileHectares)
      return super.POST(payload, apiUrl + getElectricityMixFromNuts0);
  }
}
