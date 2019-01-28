
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Logger} from '../../../shared/services/logger.service';
import { LoaderService } from '../../../shared/services/loader.service';
import {APIService} from '../../../shared/services/api.service';
import {ToasterService} from '../../../shared/services/toaster.service';
import {apiUrl, postHeatLoadProfileNutsLau, postHeatLoadProfileHectares} from '../../../shared/data.service';
import { DatasetChart } from 'app/features/graph/chart/chart';
import { Helper } from 'app/shared';



@Injectable()
export class HeatLoadAggregateService extends APIService {
  private multiDatasets: DatasetChart[] = [
    {label: 'Min', data: [], borderColor: '#2889DF', fill: false},
    {label: 'Max', data: [], borderColor: '#2889DF', fill: false},
    {label: 'Average', data: [], borderColor: '#d94f5c', fill: false}
  ];
  private singleDataset: DatasetChart[] = [
    {label: 'Value', data: [], borderColor: '#2889DF', fill: false}
  ]
  private formattedValues = [];
  private heatLoadData = new BehaviorSubject<any>(null);

  private labels = [];
  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService, private helper: Helper) {
    super(http, logger, loaderService, toasterService);
  }
  setHeatLoadData(data) {
    this.heatLoadData.next(data)
  }
  getHeatLoadData() {
    return this.heatLoadData;
  }

  getHeatLoad(payload, type_api_ref, isHectare) {
    if (isHectare === false) {
      this.logger.log('postHeatLoadProfileNutsLau ' + apiUrl + postHeatLoadProfileNutsLau +'/'+ type_api_ref + ' ; payload:'+ JSON.stringify(payload))
      return super.POST(payload, apiUrl + postHeatLoadProfileNutsLau);
    }else {
      this.logger.log('postHeatLoadProfileHectares ' + apiUrl + postHeatLoadProfileHectares + type_api_ref + ' ; payload:'+ JSON.stringify(payload))
      this.logger.log(apiUrl + postHeatLoadProfileHectares)
      return super.POST(payload, apiUrl + postHeatLoadProfileHectares);
    }
  }

  heatLoadMultiDataset(data) {
    data.values.map((value) => {
      this.multiDatasets[0].data.push(Math.round(value.min));
      this.multiDatasets[1].data.push(Math.round(value.max));
      this.multiDatasets[2].data.push(Math.round(value.average));
    });
    this.formattedValues.push(this.multiDatasets);
  }
  heatLoadSingleDataset(data) {
    data.values.map((value) => {
      this.singleDataset[0].data.push(Math.round(value.value));
    });
    this.formattedValues.push(this.singleDataset);
  }
  heatLoadLabelsYear(data) {
    data.values.map((value) => {
      this.labels.push(this.helper.getMonthString(value.month, 0));
    })
  }
  heatLoadLabelsMonth(data) {
    data.values.map((value) => {
      this.labels.push(value.granularity + ' ' + value.day);
    });
  }
  heatLoadLabelsDay(data) {
    data.values.map((value) => {
      this.labels.push(value.granularity + ' ' + value.hour_of_day);
    })
  }
  formatDataset() {
    this.multiDatasets[0].data = [];
    this.multiDatasets[1].data = [];
    this.multiDatasets[2].data = [];
    this.singleDataset[0].data = [];
    this.labels = [];
    this.formattedValues = [];
  }
  formatHeatLoadForChartjs(data, api_ref) {
    this.formatDataset();
    if (api_ref === 'day') {
      this.heatLoadLabelsDay(data)
      this.heatLoadSingleDataset(data);
    }else if (api_ref === 'month') {
      this.heatLoadLabelsMonth(data);
      this.heatLoadMultiDataset(data);
    } else if (api_ref === 'year') {
      this.heatLoadLabelsYear(data);
      this.heatLoadMultiDataset(data);
    }
    this.formattedValues.push(this.labels);
    return this.formattedValues;
  }

}
