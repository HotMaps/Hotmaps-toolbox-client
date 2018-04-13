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
import {Logger} from '../../shared/services/logger.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { PlayloadStatNuts, PayloadStat, PayloadStatHectar, Area } from 'app/features/summary-result/class/payload.class';
import { Helper, summay_drop_down_buttons, default_drop_down_button } from 'app/shared';
import { InteractionService } from '../../shared/services/interaction.service';



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
  @Input() nutsIds;
  @Input() layers;
  @Input() scaleLevel;
  @Input() locationsSelection;
  @Input() areas;

  @Input() summaryResult;

  expandedState = 'collapsed';
  private round = round_value;
  
  private scale = 'Nuts 3';
  private isDataAgregate = false;
  @Input() loadingData;

  private dropdown_btns;
  private selectedButton;

  private ref = default_drop_down_button;

  private splittedResults;

  
  constructor(private logger: Logger, private helper: Helper, private interactionService: InteractionService) {
  }

  ngOnInit() {
    this.initComponent();
    this.logger.log('SummaryResultComponent/ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    this.logger.log('SummaryResultComponent/ngOnChanges');

    if(this.summaryResult){
      this.splittedResults = this.interactionService.getSplittedResults(this.summaryResult);
    }
  }

  ngOnDestroy() {
  }

  initComponent() {
    this.dropdown_btns = summay_drop_down_buttons;
    this.selectedButton = this.dropdown_btns[0];
    this.selectedButton.selected = true;
  }

  changeResultsDisplay(event){
    this.logger.log('SummaryResultComponent/changeResultsDisplay');
    this.ref = event.target.value;
  }
}
