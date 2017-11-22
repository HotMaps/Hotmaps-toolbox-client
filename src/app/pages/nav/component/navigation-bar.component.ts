import { NavigationBarService } from '../service';
import { Component, OnInit, Input } from '@angular/core';

import { RightSideComponent, LeftSideComponent} from '../../../features/side-panel';
import { InteractionService } from 'app/shared/services/interaction.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: [ './navigation-bar.component.css' ]
})

export class NavigationBarComponent implements OnInit {
    @Input() leftPanel: LeftSideComponent;
    @Input() rightPanel: RightSideComponent;
    private navButtons: any[];
    constructor(private interactionService: InteractionService) { }

    ngOnInit() {
        // you must allow the change of states
        this.navButtons = this.interactionService.getNavButtons();
    }
    toggleExpandedState(button: any) {
        button.stateOpen = !button.stateOpen;
        this.interactionService.toggleNavBarFromButton(button);
    }
}
