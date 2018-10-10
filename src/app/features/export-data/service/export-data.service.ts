import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Helper} from '../../../shared/helper';
import {Logger} from '../../../shared/services/logger.service';
import { tab1_datapanel } from '../../../shared';


@Injectable()
export class ExportDataService {
  private statusSummary: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private dataSummary: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private statusStats: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private dataStats: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private tabsSelectedName: BehaviorSubject<string> = new BehaviorSubject<string>(tab1_datapanel);
  constructor(private helper: Helper, private logger: Logger) {}
  /**
   * subcribe summary result
   *
   */
  displayButtonExport(value: boolean) {
    this.statusSummary.next(value);
  }
  setDataSummary(data: any) {
    this.dataSummary.next(data);
  }
  getSummaryStatus(): BehaviorSubject<boolean> {
  return this.statusSummary;
  }
  getDataSummary(): BehaviorSubject<any> {
    return this.dataSummary;
  }
  /**
   * subcribe stats result
   *
   */
  displayButtonExportStats(value: boolean) {
    this.statusStats.next(value);
  }
  setDataStats(data: any) {
    this.dataStats.next(data);
  }
  getStatsStatus(): BehaviorSubject<boolean> {
    return this.statusStats;
  }
  getDataStats(): BehaviorSubject<boolean> {
    return this.dataStats;
  }
  /**
   * subcribe tabs selected
   *
   */
  setTabsSelectedName(data: string) {
    this.tabsSelectedName.next(data);
  }
  getTabsSelectedName(): BehaviorSubject<string> {
    return this.tabsSelectedName;
  }


  exportData(data: any, concatenate: boolean, tabSelectedName: string) {
    console.log(data)
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      useBom: true
    };
    let cpt = 0;
    let dataFormated ;
    this.logger.log('ExportDataService/exportData');
    this.logger.log('data' + JSON.stringify(data));
    if (concatenate === true) {

      dataFormated =  this.helper.summaryResultToCSV(data);
    } else {
      dataFormated = this.helper.resultToCSV(data)
      cpt ++ ;
      this.logger.log('number of tap' + cpt);
    }
    new Angular2Csv(dataFormated, 'report_' + tabSelectedName + this.helper.generateRandomName(), options);
  }
}
