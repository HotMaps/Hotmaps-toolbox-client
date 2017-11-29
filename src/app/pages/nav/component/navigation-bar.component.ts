
import { NavigationBarService } from '../service';
import { Component, OnInit, Input } from '@angular/core';

import { RightSideComponent, LeftSideComponent} from '../../../features/side-panel';
import { InteractionService } from 'app/shared/services/interaction.service';
import { SelectionToolButtonStateService } from 'app/features/selection-tools';

@Component({
    selector: 'nav-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: [ './navigation-bar.component.css' ]
})

export class NavigationBarComponent implements OnInit {
    @Input() leftPanel: LeftSideComponent;
    @Input() rightPanel: RightSideComponent;
    private navButtons: any[];
    constructor(
        private interactionService: InteractionService,
        private selectionToolButtonStateService: SelectionToolButtonStateService,
    ) { }

    ngOnInit() {
        // you must allow the change of states
        this.navButtons = this.interactionService.getNavButtons();
    }
    toggleExpandedState(button: any) {
        if (button.enable) {
            if (button.stateOpen) {
                if (button.buttonFunction === 'left') {
                    this.interactionService.closeLeftPanel()
                }else if (button.buttonFunction === 'right') {
                    this.interactionService.closeRightPanel()
                }else if (button.buttonFunction  === 'selection') {
                  this.selectionToolButtonStateService.enable(false);
                }else if (button.buttonFunction  === 'send_mail') {
                    // Toggle top panel when it's opened
                }
                this.interactionService.disableStateOpenWithFunction(button.buttonFunction);
            } else {
                if (button.buttonFunction === 'left') {
                    this.interactionService.openLeftPanel()
                }else if (button.buttonFunction === 'right') {
                    this.interactionService.openRightPanel()
                }else if (button.buttonFunction  === 'selection') {
                  this.selectionToolButtonStateService.enable(true);
                  // this.interactionService.enableButtonWithId(button.buttonFunction);
                }else if (button.buttonFunction  === 'send_mail') {
                    // Toggle top panel when it's closed
                }
                this.interactionService.enableStateOpenWithFunction(button.buttonFunction);
            }

        }

        console.log(button);
    }
}
