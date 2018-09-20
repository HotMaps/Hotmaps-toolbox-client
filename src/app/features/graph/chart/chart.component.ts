import { Component, OnInit, Input, ViewChild, OnChanges, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Logger, energy_mix_options } from 'app/shared';

@Component({
  selector: 'htm-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @ViewChild('canvas') canvas;
  @Input() datasets;
  @Input() labels;
  @Input() type = 'line';
  // @Input() updateChart;
  @Input() options = energy_mix_options;

  private chart: Chart;

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log('ChartComponent/ngOnInit()');
  }
  ngOnChanges() {
    this.logger.log('ChartComponent/ngOnChange()');
    this.createChart();
  }
  /* ngAfterViewInit() {
    this.createChart();
  } */
  createChart() {
    this.resetChart();
    this.logger.log('this.type =' + this.type);
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: this.type,
      data: this.datasets,
      options: this.options
    });
    console.log(this.datasets, this.labels, this.options, this.chart)
  }
  resetChart() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
  }
}
