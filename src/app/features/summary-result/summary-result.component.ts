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
import {hectare, round_value} from '../../shared/data.service';
import {SelectionScaleService} from "../selection-scale/selection-scale.service";
import {Logger} from "../../shared/services/logger.service";

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
  @Input('summaryResult') summaryResult: SummaryResultClass;
  expandedState = 'collapsed';
  busy: Promise<any>;
  private round = round_value;
  private scale = 'Nuts 3';
  private isDataAgregate = false;
  constructor(private summaryResultService: SummaryResultService, private selectionScaleService: SelectionScaleService,
              private logger: Logger) {}

  ngOnInit() {


  }
  ngOnChanges() {
    this.logger.log('SummaryResultComponent/ngOnChanges');
    this.scale = this.selectionScaleService.getScaleValue();
    if (this.selectionScaleService.getScaleValue() !== hectare) {
      this.isDataAgregate = true;
    } else {
      this.isDataAgregate = false;
    }
  }

  ngOnDestroy() {

  }

  getData(data: any) {
    console.log('summary result ' + data);
    this.summaryResult = data;
  }

}
