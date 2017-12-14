// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { MailService } from './../../feedback/mail.service';
import { Http } from '@angular/http';

import { GeojsonClass } from './../../layers/class/geojson.class';
import {
    Component,
    OnInit,
    OnDestroy,
    trigger,
    state,
    style,
    transition,
    animate,
    Input
} from '@angular/core';
import { SideComponent } from '../side-panel.component';
import { SummaryResultClass } from './../../summary-result/summary-result.class';
import { NavigationBarService } from './../../../pages/nav/service/navigation-bar.service';
import { BusinessInterfaceRenderArray } from './../../../shared/business/business.data';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'htm-top-side-panel',
    templateUrl: 'top-side-panel.component.html',
    styleUrls: ['top-side-panel.component.css'],
    animations: [
        // Trigger of height
        trigger('panelHeightTrigger', [
            state('expanded', style({ height: '542px', top: '57px' })),
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
    constructor() {
        super();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
