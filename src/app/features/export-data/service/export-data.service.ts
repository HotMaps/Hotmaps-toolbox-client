import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Injectable } from '@angular/core';
import {Helper} from '../../../shared/helper';
import {Logger} from '../../../shared/services/logger.service';


@Injectable()
export class ExportDataService {
 
  constructor(private helper: Helper, private logger: Logger) {}
  exportData(data,tabSelectedName: string){
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      useBom: true
    };
    this.logger.log('ExportDataService/exportData');
    this.logger.log('data' + JSON.stringify(data));
    new Angular2Csv(data, 'report_' + tabSelectedName + this.helper.generateRandomName(), options);
  }
}
