import { GeojsonClass } from './../layers/class/geojson.class';
import {
  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate, Input, AfterViewInit, OnChanges
} from '@angular/core';



import {SummaryResultService} from './summary-result.service';
import {SummaryResultClass} from './summary-result.class';
import {hectare, round_value, constant_year} from '../../shared/data.service';
import {SelectionScaleService} from '../selection-scale/selection-scale.service';
import {Logger} from '../../shared/services/logger.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { PlayloadStatNuts, PayloadStat } from 'app/features/summary-result/class/payload.class';

@Component({

  selector: 'htm-summary-result',
  templateUrl: 'summary-result.component.html',
  styleUrls: ['summary-result.component.css'],

  providers: [SummaryResultService],
  animations: [
    trigger('tableOpacityTrigger', [
      state('in', style({ opacity: '1' })),
      transition('void => *', [style({ opacity: '0' }),
        animate('100ms 300ms')
      ]),
      transition('* => void', [
        animate('50ms', style({ opacity: '0' }))
      ])
    ]),
  ]
})
export class SummaryResultComponent  implements OnInit, OnDestroy, OnChanges  {
  @Input() expanded: boolean;
  @Input() poiTitle;
  @Input() locationsSelection;
  @Input() nutsIds;
  @Input() layers;
  @Input() scaleLevel;

  expandedState = 'collapsed';
  private round = round_value;
  private summaryResult: any;
  private scale = 'Nuts 3';
  private isDataAgregate = false;
  private loadingData = false;

  constructor(private summaryResultService: SummaryResultService, private selectionScaleService: SelectionScaleService,
              private logger: Logger) {}

  ngOnInit() {


  }
  ngOnChanges(changes: SimpleChanges) {
    this.logger.log('SummaryResultComponent/ngOnChanges');
    this.scale = this.selectionScaleService.getScaleValue();
    if (this.selectionScaleService.getScaleValue() !== hectare) {
      this.isDataAgregate = true;
      this.updateIds();
    } else {
      this.isDataAgregate = false;
      this.updateLayers()
    }

  }

  ngOnDestroy() {

  }

  getData(data: any) {

    this.summaryResult = data;
  }
  updateIds() {
    this.logger.log('SummaryResultComponent/updateIds()');
    this.loadingData = true;
    const payload: PlayloadStatNuts = { layers: this.layers, year: constant_year, nuts: this.nutsIds }
    const summaryPromise = this.summaryResultService.getSummaryResultWithIds(payload).then(result => {
      this.summaryResult = result;
    }).then(() => { this.loadingData = false; }).catch((e) => {
      this.logger.log(JSON.stringify(e))
      this.loadingData = false;
    });
  }
  updateLayers() {
    this.logger.log('SummaryResultComponent/updateLayers()');
    this.loadingData = true;
    const payload: PayloadStat = { layers: this.layers, year: constant_year, points: this.locationsSelection }
    const summaryPromise = this.summaryResultService.getSummaryResultWithPayload(payload).then(result => {
      this.summaryResult = result;
    }).then(() => { this.loadingData = false; }).catch((e) => {
      this.logger.log(JSON.stringify(e))
      this.loadingData = false;
    });
  }
}
