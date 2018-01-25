import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit, ViewChild, SimpleChanges } from '@angular/core';

import { Stocks, load_profile_data, load_profile_data2 } from '../shared/data';
import { Stock } from '../shared/data';
import { SummaryResultClass } from '../../summary-result/summary-result.class';
import { Logger } from '../../../shared/services/logger.service';
import { HeatLoadClass, Value } from '../heat-load.class';
import { LoadProfile, Stock2 } from 'app/features/heat-load/shared';
import { rightPanelSize, Helper, buttons_heat_load, heat_load_api_year, heat_load_api_month, heat_load_api_day } from 'app/shared';
import { Chart } from 'chart.js';
import { DatasetChart } from 'app/features/chart/chart';
import { InteractionService } from 'app/shared/services/interaction.service';
import { HeatLoadAggregateService } from 'app/features/heat-load/heat-load.service';

@Component({
  selector: 'htm-heat-load-chart',
  templateUrl: './heat-load-chart.component.html',
  styleUrls: ['./heat-load-chart.component.css']
})
export class HeatLoadChartComponent implements OnInit, OnChanges, OnDestroy {
  @Input() expanded: boolean;
  @Input('heatLoadResult') heatLoadResult: Stock2[];
  @Input() nutsIds;
  @Input() layers;

  private buttons_date_type;
  private chart: Chart;
  private labels;
  private loadProfileData: any;
  private subtitle = 'Heatload profil';
  private datasets: DatasetChart;
  private type = 'barChart';
  private selectedButton;
  private titleDate;
  private default_year = 2010;

  constructor(private logger: Logger, private helper: Helper, private heatLoadAggregateService: HeatLoadAggregateService) {
  }
  ngOnInit() {
    this.initComponent();
  }
  ngOnDestroy() {
    this.logger.log('HeatLoadChartComponent/ngOnDestroy');
    this.unselectButtons();
    this.initComponent();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.loadProfileData = [];
    this.logger.log('HeatLoadChartComponent/ngOnChanges');
    console.log(this.nutsIds);
    if (changes.heatLoadResult !== undefined) {
      this.loadProfileData = this.helper.formatHeatLoadForChartjs(this.heatLoadResult);
      this.datasets = this.loadProfileData[0];
      this.labels = this.loadProfileData[1];
    }
  }
  initComponent() {
    this.buttons_date_type = buttons_heat_load;
    this.selectedButton = this.buttons_date_type[0];
    this.titleDate = this.selectedButton.date;
    this.selectedButton.selected = true;
  }
  changeHeatloadType(button) {
    this.unselectButtons();
    button.selected = true;
    this.selectedButton = button;
    this.update()
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
      return button.date;
    }
  }
  update() {
    const payload = ''
    this.heatLoadAggregateService.getHeatLoadAggregateMonthWithPayload(payload, this.selectedButton.api_ref).then((result) => {
      console.log(result)
    })
  }
}
