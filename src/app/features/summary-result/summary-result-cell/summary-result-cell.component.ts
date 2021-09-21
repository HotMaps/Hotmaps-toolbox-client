// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {  
    trigger,
    state,
    style,
    transition,
    animate
  } from '@angular/animations'
import {MapService} from '../../../pages/map/map.service'
import { SummaryResultClass } from '../summary-result.class';

declare let module;
export let moduleId = module.id;

@Component({
    moduleId: moduleId,
    selector: 'htm-summary-result-cell',
    templateUrl: 'summary-result-cell.component.html',
    styleUrls: ['summary-result-cell.component.css'],
    animations: [
        // Define an animation that adjusts the opactiy when a new item is created
        //  in the DOM. We use the 'visible' string as the hard-coded value in the
        //  trigger.
        //
        // When an item is added we wait for 300ms, and then increase the opacity to 1
        //  over a 200ms time interval. When the item is removed we don't delay anything
        //  and use a 200ms interval.
        //
        trigger('visibleTrigger', [
            state('visible', style({ opacity: '1' })),
            transition('void => *', [style({ opacity: '0' }), animate('200ms 300ms')]),
            transition('* => void', [animate('200ms', style({ opacity: '0' }))])
        ])
    ]
})
export class SummaryResultCellComponent implements OnInit {
    // Improvement of coding style : 
    // place private members after public members, alphabetized
    @Input() summaryResult: SummaryResultClass;
    @Input() expanded: boolean;


    constructor(private mapService: MapService) { }

    ngOnInit() {
    }
}
