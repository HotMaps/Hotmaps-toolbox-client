import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit, ViewChild, SimpleChanges } from '@angular/core';

import { Stocks, load_profile_data, load_profile_data2 } from '../shared/data';
import { Stock } from '../shared/data';
import { SummaryResultClass } from '../../../summary-result/summary-result.class';
import { Logger } from '../../../../shared/services/logger.service';
import { HeatLoadClass, Value } from '../heat-load.class';
import { LoadProfile, Stock2 } from 'app/features/graph/heat-load/shared';
import {
  rightPanelSize,
  Helper,
  buttons_heat_load,
  heat_load_api_year,
  heat_load_api_month,
  heat_load_api_day,
  heatloadprofile
} from 'app/shared';
import { heat_load_graph_options } from '../../../../shared/data.service';
import { Chart } from 'chart.js';
import { DatasetChart } from 'app/features/graph/chart/chart';
import { InteractionService } from 'app/shared/services/interaction.service';
import { Layer} from '../../../summary-result/summary-result.class';



@Component({
  selector: 'htm-heat-load-chart',
  templateUrl: './heat-load-chart.component.html',
  styleUrls: ['./heat-load-chart.component.css']
})
export class HeatLoadChartComponent implements OnInit, OnChanges, OnDestroy {
  @Input() heatLoadPayload;

  private isLoading = true;
  private dateHeatload = { year: 2010, month: 1, day: 1 }
  private buttons_date_type;
  // private chart: Chart;
  private labels;
  private options: any;
  private loadProfileData: any;
  private subtitle = heatloadprofile;
  private datasets: DatasetChart;
  private type = 'line';
  private selectedButton;
  private titleDate;
  private default_year = 2010;

  constructor(private logger: Logger, private helper: Helper, private interactionService: InteractionService) {
  }
  ngOnInit() {
    this.logger.log('HeatLoadChartComponent/ngOnInit');
    this.initComponent();
    this.update();
  }

  ngOnDestroy() {
    this.logger.log('HeatLoadChartComponent/ngOnDestroy');
    this.unselectButtons();
    // this.initComponent();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.logger.log('HeatLoadChartComponent/ngOnChanges');
    this.update();
  }
  initComponent() {
    this.buttons_date_type = buttons_heat_load;
    this.selectedButton = this.buttons_date_type[0];
    this.titleDate = this.selectedButton.date;
    this.selectedButton.selected = true;
    this.setOptionsInButtons();
  }
  setOptionsInButtons() {
    let month = this.buttons_date_type[1].date,
    year = this.buttons_date_type[0].date;
    this.buttons_date_type.map((button) => {
      button.options = [];
      let maxDate;
      if (button.api_ref === heat_load_api_day) {
        maxDate = this.getDaysInMonth(month, year);
      } else {
        maxDate = button.max;
      }
      for (let i = button.min; i <= maxDate; i++) {
        let dateToPush;
        if (button.api_ref === heat_load_api_month) {
          dateToPush = this.helper.getMonthString(i, 0);
        } else {
          dateToPush = i;
        }
        button.options.push({name: dateToPush, id: i});
      }
    })
  }
  getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  onSelectChange(event) {
    this.selectedButton.date = +event.target.value;
    this.update();
  }
  changeHeatloadType(button) {
    this.unselectButtons();
    button.selected = true;
    this.selectedButton = button;
    this.setOptionsInButtons();
    this.update();
  }
  unselectButtons() {
    this.buttons_date_type.map((but) => {
      but.selected = false
    });
  }
  decrementDate() {
    if (this.selectedButton.api_ref === heat_load_api_year) {
    } else if (this.selectedButton.date !== 1) {
      this.selectedButton.date--;
      this.update();
    }
  }
  incrementDate() {
    if ((this.selectedButton.api_ref === heat_load_api_month) && (this.selectedButton.date === 12)) {
    } else if ((this.selectedButton.api_ref === heat_load_api_day) && (this.selectedButton.date === 30)) {
    } else if (this.selectedButton.api_ref === heat_load_api_year) {
    } else {
      this.selectedButton.date++;
      this.update();
    }
  }

  defineTitleDate(value) {
    this.titleDate = value;
  }
  getCurrentDateFormated(button) {
    if (this.selectedButton.api_ref === heat_load_api_month) {
      return this.helper.getMonthString(button.date, 0)
    } else {
      return button.name + ' ' + button.date;
    }
  }

  update() {
    this.interactionService.setHeatLoadData(null)
    this.interactionService.setDataStats(null);


    if (this.buttons_date_type !== undefined) {
      let isHectare = false;
      this.isLoading = true;
      this.interactionService.displayButtonExportStats(!this.isLoading);
      let payload: any;
      if (!this.helper.isNullOrUndefined(this.heatLoadPayload)) {
        if (!this.helper.isNullOrUndefined(this.heatLoadPayload.areas)) { // updating chart with data by hectare
          isHectare = true;
          payload = this.helper.createHLPayloadHectares(this.selectedButton.api_ref, this.buttons_date_type, this.heatLoadPayload.areas);
        }else { // updating chart with data by nuts
          payload = this.helper.createHLPayloadNuts(this.selectedButton.api_ref, this.buttons_date_type, this.heatLoadPayload.nuts);
        }
      }
      this.interactionService.getHeatLoad(payload, this.selectedButton.api_ref, isHectare).then((result) => {
        this.loadProfileData = [];
        this.interactionService.setDataStats(result);
        this.loadProfileData = this.interactionService.formatHeatLoadForChartjs(result, this.selectedButton.api_ref);
        this.datasets = this.loadProfileData[0];
        this.labels = this.loadProfileData[1];
        this.options = heat_load_graph_options;
        this.interactionService.setHeatLoadData({dataset: this.datasets, labels: this.labels})
      }).then(() => {
        this.isLoading = false;
        this.interactionService.displayButtonExportStats(!this.isLoading);
      }).catch((e) => {
        this.logger.log(JSON.stringify(e))
        this.isLoading = false;
        this.interactionService.displayButtonExportStats(!this.isLoading)
      });
    }
  }
}
