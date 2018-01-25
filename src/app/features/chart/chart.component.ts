import { Component, OnInit, Input, ViewChild, OnChanges, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import {  } from '@angular/core/src/metadata/lifecycle_hooks';

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
  
  private chart: Chart;

  constructor() { }

  ngOnInit() {
    console.log('ChartComponent/ngOnInit()');
    console.log(this.datasets);
    console.log(this.labels);
    console.log(this.type);
  }
  ngOnChanges() {
    console.log('ChartComponent/ngOnChange()');
    this.createChart();
  }
  ngAfterViewInit() {
    this.createChart();
  }
  createChart() {
    this.resetChart();
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels:  this.labels,
        datasets: this.datasets
      }
    });
  }
  resetChart() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
  }
}
