import {Component, Input, OnInit, OnChanges, OnDestroy, ContentChild, TemplateRef} from '@angular/core';

import {NgxChartsModule} from '@swimlane/ngx-charts';

import { Stocks, load_profile_data, load_profile_data2, HeatLoadResult } from './shared/data';
import { Stock } from './shared/data';
import {SummaryResultClass} from '../../summary-result/summary-result.class';
import {Logger} from '../../../shared/services/logger.service';
import {HeatLoadClass, Value} from '../heat-load.class';
import { LoadProfile, Stock2 } from 'app/features/heat-load/graphical-view/shared';
import { rightPanelSize, unit_heatload_profil } from 'app/shared';

@Component({
  selector: 'htm-graphical-view',
  templateUrl: './graphical-view.component.html',
  styleUrls: ['./graphical-view.component.css']
})
export class GraphicalViewComponent implements OnInit, OnChanges, OnDestroy {
  @Input() expanded: boolean;

  @Input() poiTitle;
  @Input('heatLoadResult') heatLoadResult: HeatLoadResult[];
  @ContentChild('tooltipTemplate') tooltipTemplate: TemplateRef<any>;  // line, area
  subtitle = 'Heat load profil';

  width_const = 600;
  height_const = 200;

  private margin = { top: 20, right: 100, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  // private line: d3Shape.Line<[number, number]>;
  private data;
  private valueDisplayed = 0;
  private loadProfileData: LoadProfile[] = [];
  private timeline = true;
  // view: any[] = [rightPanelSize - 30, 400];
  view: any[] = undefined;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Month';
  showYAxisLabel = false;
  yAxisLabel = unit_heatload_profil;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  autoScale = true;
  constructor(private logger: Logger) {
  }
  ngOnDestroy() {
    this.logger.log('GraphicalViewComponent/ngOnDestroy');
  }
  ngOnInit() {}

  formateTooltip(model) {
    console.log(model);
    return model.name
  }
  ngOnChanges() {
    this.logger.log('GraphicalViewComponent/ngOnChanges');
    console.log(this.heatLoadResult);
    if (this.heatLoadResult) {
      this.loadProfileData = this.heatLoadResult;
    }
  }
  yFormatting(val) {
    return val + ' ' + unit_heatload_profil;
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
