import { Helper } from './../../../shared/helper';
import { Component, OnInit, Input, OnDestroy, OnChanges, DoCheck } from '@angular/core';

import {Logger} from '../../../shared/services/logger.service';
import { tab1_datapanel, tab2_datapanel} from '../../../shared/data.service';
import { ExportDataService } from '../service/export-data.service';

@Component({
  selector: 'htm-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements OnInit, OnDestroy, OnChanges {
  @Input() graphics;
  @Input() indicators;
  @Input() indicatorState;
  @Input() graphState;
  @Input() tabSelected;
  private displayButton = false;
  constructor(private exportDataService: ExportDataService, private logger: Logger, private helper: Helper) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }
  
  ngOnDestroy() {
    this.logger.log('ExportDataComponent/ngOnDestroy')
  }
  exportIndicators() {
    const arraytmp = this.helper.summaryResultToCSV(this.indicators)
    this.exportData(arraytmp);
  }
  exportGraphic() {
    const arraytmp = this.helper.chartsToCSV(this.graphics)
    this.exportData(arraytmp);
  }
  exportData(result) {
    this.exportDataService.exportData(result,this.tabSelected);
  }
}
