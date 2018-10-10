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
  /* ngDoCheck(): void {
    if (this.graphics.length >= 1) {
      console.log(this.graphics)
    }

    if (this.indicators.layers.length >= 1) {
      console.log(this.indicators.layers)
    }
  } */
  ngOnChanges(changes) {
    // this.changeButtonState()
    /* if (!this.helper.isNullOrUndefined(changes.updateStatus)) {
      // this.displayButton = !this.updateStatus
      this.changeButtonState()
    } */
  }
  changeButtonState() {

    // console.log(this.displayExportDataStatus)
    /*console.log(this.indicators.layers, this.graphics)
     if ((this.tab === tab1_datapanel) && (this.indicators.layers.length >= 1)) {
      this.displayButton = true;
    } else if (this.tab === tab2_datapanel && this.graphics.length >= 1 ) {
      this.graphics.map((graphic) => {
        if (graphic.data.length === 0) {
          this.displayButton = false;
        }
      })

    } else {
      this.displayButton = false
    } */
    // console.log(this.displayButton)
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
    /* if (this.isInSummary === true) {
      this.exportDataService.exportData(this.dataSummary.layers, true, this.tabsSelectedName)
    } else {
      this.exportDataService.exportData(this.dataStats.values, false, this.tabsSelectedName)
    } */
  }


}
