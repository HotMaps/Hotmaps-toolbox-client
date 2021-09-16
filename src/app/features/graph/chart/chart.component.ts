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
  @Input() title;
  @Input() options;
  @Input() isLoading = true;

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
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: this.type,
      data: {
        labels:  this.labels,
        datasets: this.datasets
      },
      labels: this.labels,
      options: this.options
    });
  }
  resetChart() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
  }
}
