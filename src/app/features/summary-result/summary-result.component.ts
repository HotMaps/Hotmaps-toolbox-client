import { GeojsonClass } from './../layers/class/geojson.class';
import {
  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate, Input, AfterViewInit
} from '@angular/core';



import {SummaryResultService} from './summary-result.service';
import {SummaryResultClass} from './summary-result.class';
import {round_value} from '../../shared/data.service';

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
export class SummaryResultComponent  implements OnInit, OnDestroy  {
  @Input() expanded: boolean;
  @Input() poiData;
  @Input() poiTitle;
  @Input('summaryResult') summaryResult: SummaryResultClass;

  expandedState = 'collapsed';
  busy: Promise<any>;
  private round = round_value;
  constructor(private summaryResultService: SummaryResultService) {}

  ngOnInit() {
    console.log('SummaryResultComponent/ngOnInit ' + this.expanded);
    console.log('SummaryResultComponent/ngOnInit ' + JSON.stringify(this.poiData));
  }

  ngOnDestroy() {

  }

  getData(data: any) {
    console.log('summary result ' + data);
    this.summaryResult = data;
  }

}
