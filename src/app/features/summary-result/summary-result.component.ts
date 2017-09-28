import {
  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  AfterViewInit,
  animate, Input
} from '@angular/core';



import {SummaryResultService} from './summary-result.service';
import {SummaryResultClass} from './summary-result.class';
import {Helper} from '../../shared/helper';
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
export class SummaryResultComponent  implements OnInit, OnDestroy, AfterViewInit {
  @Input() expanded: boolean;
  @Input('summaryResult') summaryResult: SummaryResultClass;
  expandedState = 'collapsed';
  busy: Promise<any>;


  constructor(private helper: Helper, private summaryResultService: SummaryResultService ) {

  }

  ngOnInit() {


  }
  ngAfterViewInit() {
    if (this.summaryResult){
      this.busy =  this.summaryResultService.getSummaryResultToClass(this.summaryResult).then(data => this.getData(data));

    }


  }
  ngOnDestroy() {

  }
  roundValue(value): number {
    return this.helper.round(value)
  };
  getData(data: any) {
    console.log('summary result ' + data);
    this.summaryResult = data;
  }

}
