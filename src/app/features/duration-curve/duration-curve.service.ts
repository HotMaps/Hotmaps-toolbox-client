import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatasetChart } from '../../features/chart/chart';
import {Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service';
import {APIService} from '../../shared/services/api.service';
import {ToasterService} from '../../shared/services/toaster.service';
import { Helper } from '../../shared';
import {apiUrl, postDurationCurveNutsLau, postDurationCurveHectares} from '../../shared/data.service';


@Injectable()
export class DurationCurveService extends APIService {

  private chartDataset: DatasetChart[] = [
	  {label: 'HeatLoad', data: [], borderColor: '#2889DF', fill: true} // "fill: false" if the grey filling isn't good
  ]

  private formattedValues = [];

  constructor(http: Http, logger: Logger, loaderService: LoaderService, toasterService: ToasterService, private helper: Helper) { 
	super(http, logger, loaderService, toasterService);
  }

	getDurationCurveWithPayload(payload: any, isHectare): Promise<any>{
		if (isHectare == false){
			this.logger.log('DurationCurveService/getDurationCurveWithPayload = ' + JSON.stringify(payload));
			return super.POST(payload, apiUrl + postDurationCurveNutsLau);
		}else{
			this.logger.log('DurationCurveService/getDurationCurveWithPayload = ' + JSON.stringify(payload));
			return super.POST(payload, apiUrl + postDurationCurveHectares);
		}		
	}

  	formatDataset() {
		this.chartDataset[0].data = [];
		this.formattedValues = [];
  	}

	transformData(data){
	this.formatDataset();
		for (var i = 0; i < data["points"].length; ++i) {
			this.formattedValues[i] = {
				x: data["points"][i]['X'],
				y: data["points"][i]['Y']
			}
		}
		this.chartDataset[0].data = this.formattedValues
		return this.chartDataset;
	}
}
