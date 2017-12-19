import {Component, Input, OnInit, OnChanges, OnDestroy} from '@angular/core';

import {NgxChartsModule} from '@swimlane/ngx-charts';

import { Stocks, load_profile_data, load_profile_data2 } from './shared/data';
import { Stock } from './shared/data';
import {SummaryResultClass} from '../../summary-result/summary-result.class';
import {Logger} from "../../../shared/services/logger.service";
import {HeatLoadClass, Value} from "../heat-load.class";
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { LoadProfile, Stock2 } from 'app/features/heat-load/graphical-view/shared';
import { rightPanelSize } from 'app/shared';

@Component({
  selector: 'htm-graphical-view',
  templateUrl: './graphical-view.component.html',
  styleUrls: ['./graphical-view.component.css']
})
export class GraphicalViewComponent implements OnInit, OnChanges, OnDestroy {
  @Input() expanded: boolean;

  @Input() poiTitle;
  @Input('heatLoadResult') heatLoadResult: Stock2[];
  subtitle: string = 'Heat load profil';

  width_const = 600;
  height_const = 200;

  private margin = {top: 20, right: 100, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  // private line: d3Shape.Line<[number, number]>;
  private data;
  private valueDisplayed = 0;
  private loadProfileData: LoadProfile[] = [];
  single: any[];
  multi: any[];
  private timeline = true;
  view: any[] = [rightPanelSize - 30, 300];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'kW';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = false;
  constructor(private logger: Logger) {
  }
  ngOnDestroy() {
    this.logger.log('GraphicalViewComponent/ngOnDestroy');
  }
  ngOnInit() {}

  ngOnChanges() {
    this.logger.log('GraphicalViewComponent/ngOnChanges');
    if (this.heatLoadResult) {
      this.loadProfileData = [{
        name: 'Load profile data',
        series: this.heatLoadResult
      }];
    }
  }
  onHoverStop() {
    this.valueDisplayed = 0;
  }
  onHover(event) {
    console.log(event);
    // this.valueDisplayed = event.value.value;
  }
  onSelect(event) {
    // this.valueDisplayed = event.value;
    // console.log(event);
  }
}
