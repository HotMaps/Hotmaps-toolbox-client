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
  @Input() refSelected;

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
    const arrayTmp = this.helper.summaryResultToCSV(this.indicators)
    // get name of CM session to append to file name of exported CSV
    let cmSessionName;
    try {
      cmSessionName = this.indicators.cmResult.layers[0].name;
      cmSessionName = /.*(?=\s-\sCM\s-\s.*$)/g.exec(cmSessionName);
    } catch(e) {
      cmSessionName = undefined;
    }

    this.exportData(arrayTmp, cmSessionName);
  }
  exportGraphic() {
    const arrayTmp = this.helper.chartsToCSV(this.graphics)
    this.exportData(arrayTmp);
  }
  exportData(result, cmSessionName=undefined) {
    this.exportDataService.exportData(result, this.tabSelected, cmSessionName, this.refSelected);
  }
}
