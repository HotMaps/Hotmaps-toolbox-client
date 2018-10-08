import { Helper } from './../../../shared/helper';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

import { ExportDataService} from '../service/export-data.service';
import {Logger} from '../../../shared/services/logger.service';
import { tab1_datapanel, tab2_datapanel} from '../../../shared/data.service';

@Component({
  selector: 'htm-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements OnInit, OnDestroy, OnChanges {
  private loadingSummary: boolean;
  private loadingStats: boolean;
  private dataSummary: any;
  private dataStats: any;
  private isInSummary = true;
  private tabsSelectedName = tab1_datapanel;
  /* @Input() heatloadStatus; */
  @Input() graphics;
  @Input() indicators;
  @Input() heatLoadData;
  @Input() tab = tab1_datapanel;
  @Input() updateStatus;
  private displayButton = true;
  constructor(private exportDataService: ExportDataService, private logger: Logger, private helper: Helper) { }

  ngOnInit() {
    this.notifyService();
  }
  ngOnChanges(changes) {
    if (!this.helper.isNullOrUndefined(changes.updateStatus)) {
      // this.displayButton = !this.updateStatus
      this.changeButtonState()
    }
  }
  changeButtonState() {
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
    }
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
      if (val === tab1_datapanel) {
        this.isInSummary = true;
      } else {
        this.isInSummary = false;
      }
      this.logger.log('setisinsummary:' + this.isInSummary)
      this.tabsSelectedName = val;
    });
  }
  export() {
    if (this.isInSummary === true) {
      this.exportDataService.exportData(this.dataSummary.layers, true, this.tabsSelectedName)
    } else {
      this.exportDataService.exportData(this.dataStats.values, false, this.tabsSelectedName)
    }
  }


}
