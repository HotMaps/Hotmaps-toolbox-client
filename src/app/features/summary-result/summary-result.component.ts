import {
  Component,
  OnInit,
  OnDestroy, Input, OnChanges
} from '@angular/core';

import {SummaryResultService} from './summary-result.service';
import {Logger} from '../../shared/services/logger.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Helper } from 'app/shared';
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
