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
})
export class SummaryResultComponent  implements OnInit, OnDestroy, OnChanges  {
  // @Input() expanded: boolean;
  @Input() summaryResult;
  @Input() refSelected;
  // @Input() loadingData;
  // private buttonRef = default_drop_down_button;



  constructor(private logger: Logger, private helper: Helper, private interactionService: InteractionService) {
  }

  ngOnInit() {
    this.logger.log('SummaryResultComponent/ngOnInit');
    this.logger.log('SummaryResult '+ JSON.stringify(this.summaryResult) );

  }
  ngOnChanges(changes: SimpleChanges) {
    this.logger.log('SummaryResultComponent/ngOnChanges');
    this.logger.log('SummaryResult '+ JSON.stringify(this.summaryResult) );
  }

  ngOnDestroy() {
  }

}
