import { NavigationBarService } from './navigation-bar.service';
import { Component, OnInit, Input } from '@angular/core';

import { SidePanelService } from './../../features/side-panel/side-panel.service';
import { LeftSideComponent } from './../../features/side-panel/left-side-panel/left-side-panel.component';
import { RightSideComponent } from './../../features/side-panel/right-side-panel/right-side-panel.component';

@Component({
    selector: 'nav-bar',
    templateUrl: 'navigation-bar.component.html',
    styleUrls: [ 'navigation-bar.component.css' ]
})

export class NavigationBarComponent implements OnInit {
    @Input() leftPanel: LeftSideComponent;
    @Input() rightPanel: RightSideComponent;
    private navButtons: any[];
    constructor(private navService: NavigationBarService) { }

    ngOnInit() {
        // you must allow the change of states
        this.navButtons = this.navService.getButtons();
    }
    toggleExpandedState(button: any) {
        this.navService.toggleBar(button);
    }
}
