// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';
import {  
    trigger,
    state,
    style,
    transition,
    animate
  } from '@angular/animations'
import { SideComponent } from '../side-panel.component';
import { InteractionService } from 'app/shared/services/interaction.service';


@Component({
    moduleId: module.id,
    selector: 'htm-top-side-panel',
    templateUrl: 'top-side-panel.component.html',
    styleUrls: ['top-side-panel.component.css'],
    animations: [
        // Trigger of height
        trigger('panelHeightTrigger', [
            state('expanded', style({ height: '627px', top: '57px' })),
            state('collapsed', style({ height: '0px', display: 'none'  })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms ease-out'))
        ]),

        // trigger of title Color
        trigger('titleColorTrigger', [
            state('collapsed', style({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
            state('expanded', style({ backgroundColor: '#333333', color: '#FFFFFF' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms ease-out'))
        ]),

        // trigger of title
        trigger('titleTextTrigger', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [style({ opacity: '0' }),
                animate('100ms 200ms')
            ]),
            transition('* => void', [
                animate('50ms', style({ opacity: '0' }))
            ])
        ]),
    ]
})
export class TopSideComponent extends SideComponent implements OnInit, OnDestroy {
    constructor(protected interactionService: InteractionService) {
        super(interactionService);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
