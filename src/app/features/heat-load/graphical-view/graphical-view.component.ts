import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';

import { Stocks, load_profile_data, load_profile_data2 } from './shared/data';
import { Stock } from './shared/data';
import { SummaryResultClass } from '../../summary-result/summary-result.class';
import { Logger } from '../../../shared/services/logger.service';
import { HeatLoadClass, Value } from '../heat-load.class';
import { LoadProfile, Stock2 } from 'app/features/heat-load/graphical-view/shared';
import { rightPanelSize, Helper } from 'app/shared';
import { Chart } from 'chart.js';

@Component({
  selector: 'htm-graphical-view',
  templateUrl: './graphical-view.component.html',
  styleUrls: ['./graphical-view.component.css']
})
export class GraphicalViewComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() expanded: boolean;


  @Input('heatLoadResult') heatLoadResult: Stock2[];
  @ViewChild('canvas') canvas;
  private subtitle = 'Heatload profil';
  private chart: Chart;
  private loadProfileData;

  constructor(private logger: Logger, private helper: Helper) {
  }
  ngOnDestroy() {
    this.logger.log('GraphicalViewComponent/ngOnDestroy');
  }
  ngOnInit() {
    this.logger.log('GraphicalViewComponent/ngOnInit');
    this.createChart();
  }
  ngAfterViewInit() {
  }
  ngOnChanges() {
    this.logger.log('GraphicalViewComponent/ngOnChanges');
    if (this.heatLoadResult) {
      this.loadProfileData = [];
      console.log(this.chart);
      this.loadProfileData = this.helper.formatHeatLoadForChartjs(this.heatLoadResult);
    }
  }
  createChart() {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels:  this.loadProfileData.labels,
        datasets: this.loadProfileData.datas[0]
      },
      options: {}
    });
  }
}
