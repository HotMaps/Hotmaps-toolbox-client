import { Component, OnInit, Input, ViewChild, OnChanges, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Logger } from 'app/shared';

@Component({
  selector: 'htm-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('canvas') canvas;
  @Input() datasets;
  @Input() labels;
  @Input() type = 'line';
  @Input() updateChart;
  @Input() options;

  private chart: Chart;

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log('ChartComponent/ngOnInit()');
  }
  ngOnChanges() {
    this.logger.log('ChartComponent/ngOnChange()');
    this.createChart();
  }
  ngAfterViewInit() {
    this.createChart();
  }
  createChart() {
    this.resetChart();
    this.logger.log('this.type =' + this.type);
    if (this.type === 'line') {
      this.logger.log('this.type = line');
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels:  this.labels,
        datasets: this.datasets
      },
      options: this.options
    }); } else
      if (this.type === 'pie') {
        this.logger.log('this.type = pie');
      this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
        type: 'pie',
        data: this.datasets,
        options: this.options
      }); }
  }
  resetChart() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
  }
}
