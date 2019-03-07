import { Helper } from './../../../shared/helper';
import { Component, OnInit, Input, OnDestroy, OnChanges, DoCheck } from '@angular/core';

import { ExportDataService} from '../service/export-data.service';
import {Logger} from '../../../shared/services/logger.service';
import { tab1_datapanel, tab2_datapanel} from '../../../shared/data.service';

@Component({
  selector: 'htm-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements OnInit, OnDestroy, OnChanges {

  @Input() indicators;
  @Input() graphics;
  @Input() tabSelected;
  @Input() displayExportDataStatus;


  private loadingSummary: boolean;
  private dataSummary: any;
  private dataStats: any;
  private isInSummary = true;
  private tabsSelectedName = tab1_datapanel;
  private isChartValue = false;
  /* @Input() heatloadStatus; */
  /* @Input() graphics;
  @Input() indicators;
  @Input() heatLoadData;
  @Input() tab = tab1_datapanel;
  @Input() updateStatus; */
  private displayButton = true;
  constructor(private exportDataService: ExportDataService, private logger: Logger, private helper: Helper) { }

  ngOnInit() {
    this.notifyService();
  }

  ngOnChanges(changes) {

  }
  changeButtonState() {

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
     * subcribe the data of the stats result
     *
     */
    this.exportDataService.getDataStats().subscribe((val: any) => {
      this.logger.log('ExportDataComponent/getDataStats' + JSON.stringify(val))
      if (!this.helper.isNullOrUndefined(val)) {
        this.isChartValue = true;
        this.dataStats = val;
      } else {
        this.isChartValue = false;
      }
    });
  }
  export() {
    if (this.tabSelected === tab1_datapanel) {
      if (!this.helper.isNullOrUndefined(this.indicators.layers)) {
        this.exportDataService.exportData(this.indicators.layers, true, this.tabSelected)

      }
    } else if (this.tabSelected === tab2_datapanel) {
      if (!this.helper.isNullOrUndefined(this.dataStats)) {
        this.exportDataService.exportData(this.dataStats.values, false, this.tabSelected)
      }
    }
  }


}
