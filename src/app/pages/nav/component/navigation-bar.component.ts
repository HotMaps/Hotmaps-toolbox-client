import { NavigationBarService } from '../service';
import { Component, OnInit, Input } from '@angular/core';

import { RightSideComponent, LeftSideComponent} from '../../../features/side-panel';

@Component({
    selector: 'htm-nav-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: [ './navigation-bar.component.css' ]
})

export class NavigationBarComponent implements OnInit {
    @Input() leftPanel: LeftSideComponent;
    @Input() rightPanel: RightSideComponent;
    private navButtons: any[];
    constructor(private navService: NavigationBarService) { }

    ngOnInit() {
        this.navButtons = this.navService.getButtons();
    }
    toggleExpandedState(button: any) {
        this.navService.toggleBar(button);
    }
}
