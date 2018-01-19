import {Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit, ViewChild} from '@angular/core';

import { Stocks, load_profile_data, load_profile_data2 } from './shared/data';
import { Stock } from './shared/data';
import {SummaryResultClass} from '../../summary-result/summary-result.class';
import {Logger} from '../../../shared/services/logger.service';
import {HeatLoadClass, Value} from '../heat-load.class';
import { LoadProfile, Stock2 } from 'app/features/heat-load/graphical-view/shared';
import { rightPanelSize } from 'app/shared';
import { Chart } from 'chart.js';

@Component({
  selector: 'htm-graphical-view',
  templateUrl: './graphical-view.component.html',
  styleUrls: ['./graphical-view.component.css']
})
export class GraphicalViewComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() expanded: boolean;

  @Input() poiTitle;
  @Input('heatLoadResult') heatLoadResult: Stock2[];
  @ViewChild('canvas') canvas;

  chart: Chart;
  private loadProfileData: LoadProfile[] = [];

  constructor(private logger: Logger) {
  }
  ngOnDestroy() {
    this.logger.log('GraphicalViewComponent/ngOnDestroy');
  }
  ngOnInit() {}
  ngAfterViewInit() {
  }
  ngOnChanges() {
    this.logger.log('GraphicalViewComponent/ngOnChanges');
    if (this.heatLoadResult) {
      this.loadProfileData = [{
        name: 'Load profile data',
        series: this.heatLoadResult
      }];
      this.createChart();
    }
  }
  createChart() {
    console.log(this.canvas)
    this.chart = new Chart(this.canvas.nativeElement, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    console.log(this.chart)
}
}
