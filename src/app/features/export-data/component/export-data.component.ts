import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { ExportDataService} from '../service/export-data.service';
import {Logger} from '../../../shared/services/logger.service';
import {tab1} from '../../../shared/data.service';

@Component({
  selector: 'htm-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements OnInit, OnDestroy {
  private loadingSummary: boolean;
  private loadingStats: boolean;
  private dataSummary: any;
  private dataStats: any;
  private isInSummary = true;
  private tabsSelectedName = tab1;
  @Input() heatloadStatus;
  constructor(private exportDataService: ExportDataService, private logger: Logger) { }

  ngOnInit() {
    this.notifyService();
  }
  ngOnDestroy() {
    this.logger.log('ExportDataComponent/ngOnDestroy')
  }
  notifyService() {
    /**
     * subcribe the status of the summary result
     *
     */
    this.exportDataService.getSummaryStatus().subscribe((val: boolean) => {
      this.loadingSummary = val;
    });
    /**
     * subcribe the data of the summary result
     *
     */
    this.exportDataService.getDataSummary().subscribe((val: any) => {
      this.dataSummary = val;
    });

    /**
     * subcribe the status of the stats result
     *
     */
    this.exportDataService.getStatsStatus().subscribe((val: boolean) => {
      this.loadingStats = val;
    });

    /**
     * subcribe the data of the stats result
     *
     */
    this.exportDataService.getDataStats().subscribe((val: any) => {
      this.logger.log('ExportDataComponent/getDataStats' + JSON.stringify(val))
      this.dataStats = val;
    });
    /**
     * subcribe the status of the tabs on which tabs are we?
     *
     */
    this.exportDataService.getTabsSelectedName().subscribe((val: string) => {
      this.logger.log('ExportDataComponent/getTabsSelectedName' + val)
      if (val === tab1) {
        this.isInSummary = true;
      } else {
        this.isInSummary = false;
      }
      this.tabsSelectedName = val;
    });
  }
  export() {
    if (this.isInSummary === true) {
      this.exportDataService.exportData(this.dataSummary.layers, true, this.tabsSelectedName)
      console.log(this.dataSummary.no_data_layers)
    } else {
      this.exportDataService.exportData(this.dataStats.values, false, this.tabsSelectedName)
    }
  }


}
