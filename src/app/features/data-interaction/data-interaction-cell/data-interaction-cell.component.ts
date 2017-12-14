// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { LayersService } from './../../layers/services/layers.service';
import {
    Component,
    OnInit,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import {MapService} from '../../../pages/map/map.service'
import { DataInteractionClass } from '../data-interaction.class';
@Component({
    moduleId: module.id,
    selector: 'data-interaction-cell',
    templateUrl: 'data-interaction-cell.component.html',
    styleUrls: ['data-interaction-cell.component.css'],
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
export class DataInteractionCellComponent implements OnInit {
    @Input() dataInteraction: DataInteractionClass;
    @Input() expanded: boolean;


    constructor(private mapService: MapService) { }

    showRemoveLayer(e, action, order) {
        this.dataInteraction.isSelected = !this.dataInteraction.isSelected;
        if (this.dataInteraction.isSelected) {
            console.log(' dataInteraction true');
        }else {
            console.log(' dataInteraction false');
        }
        this.mapService.showOrRemoveLayer(action, order);
        if (this.dataInteraction.zoomLevel > 0) {
            this.mapService.checkZoomLevelLayer(action, this.dataInteraction.zoomLevel)
        }
    }
    ngOnInit() {
    }
}
