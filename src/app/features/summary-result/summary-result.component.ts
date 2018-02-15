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
import {SummaryResultClass, Layer} from './summary-result.class';
import {hectare, round_value, constant_year} from '../../shared/data.service';
import {SelectionScaleService} from '../selection-scale/selection-scale.service';
import {Logger} from '../../shared/services/logger.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { PlayloadStatNuts, PayloadStat, PayloadStatHectar, Area } from 'app/features/summary-result/class/payload.class';
import { Helper } from 'app/shared';
import {InteractionService} from '../../shared/services/interaction.service';
import {MapService} from '../../pages/map/map.service';

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
  @Input() areas: Layer[];

  expandedState = 'collapsed';
  private round = round_value;
  private summaryResult: any;
  private scale = 'Nuts 3';
  private isDataAgregate = false;
  private loadingData = false;

  constructor(private mapService: MapService,
              private logger: Logger, private helper: Helper, private interactionService: InteractionService) {}

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.logger.log('SummaryResultComponent/ngOnChanges');
    this.scale = this.mapService.getScaleValue();
    if (this.mapService.getScaleValue() !== hectare) {
      this.isDataAgregate = true;
      this.updateWithIds();
    } else {
      this.isDataAgregate = false;
      this.updateWithAreas()
    }
  }
  ngOnDestroy() {
  }
  getData(data: any) {
    this.summaryResult = data;
  }
  updateWithIds() {
    this.logger.log('SummaryResultComponent/updateWithIds() +' + this.layers);
    this.loadingData = true;
    this.interactionService.displayButtonExport(!this.loadingData)

    const payload: PlayloadStatNuts = { layers: this.layers, year: constant_year, nuts: this.nutsIds }
    const summaryPromise = this.interactionService.getSummaryResultWithIds(payload).then(result => {
      this.summaryResult = result;
      this.interactionService.setSummaryData(result);
    }).then(() => {
      this.loadingData = false;
      this.interactionService.displayButtonExport(!this.loadingData)
    }).catch((e) => {
      this.logger.log(JSON.stringify(e))
      this.loadingData = false;
      this.interactionService.displayButtonExport(!this.loadingData)
    });
  }
  updateWithAreas() {
    this.logger.log('SummaryResultComponent/updateWithAreas()');
    this.loadingData = true;
    this.interactionService.displayButtonExport(!this.loadingData)
    const area = this.areas;
    const areas = [];
    this.areas.map((layer: Layer) => {
      const points = [];
      if (layer instanceof L.Circle) {
        areas.push({points: this.helper.getLocationsFromCicle(layer)})
      } else {
        areas.push({points: this.helper.getLocationsFromPolygon(layer)})
      }
    });
    const payload: PayloadStatHectar = { layers: this.layers, year: constant_year, areas: areas }
    console.log(payload);
    const summaryPromise = this.interactionService.getSummaryResultWithMultiAreas(payload).then(result => {
      this.summaryResult = result;
      this.interactionService.setSummaryData(result);
      this.summaryResult.layers[0].values.push({name: 'Zones Selected', value: this.areas.length});
    }).then(() => { this.loadingData = false;
      this.interactionService.displayButtonExport(!this.loadingData)}).catch((e) => {
      this.logger.log(JSON.stringify(e))
      this.loadingData = false;
      this.interactionService.displayButtonExport(!this.loadingData)
    });
  }
}
