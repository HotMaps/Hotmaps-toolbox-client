import {
  Component,Input, OnInit, style, trigger, state, transition, animate
} from '@angular/core';

@Component({

  selector: 'htm-summary-result-container',
  templateUrl: 'summary-result-container.component.html',
  styleUrls: ['summary-result-container.component.css']
})
export class SummaryResultContainerComponent implements OnInit {
  @Input('results') results;
  @Input('refSelected') refSelected;
  constructor() {}
  ngOnInit() {}
}
