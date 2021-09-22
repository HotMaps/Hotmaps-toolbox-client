// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Component, OnInit, Input } from '@angular/core';

import { RightSideComponent, LeftSideComponent} from '../../../features/side-panel';
import { InteractionService } from 'app/shared/services/interaction.service';
import { SelectionToolButtonStateService } from '../../../features/selection-tools/service/selection-tool-button-state.service';
import { SelectionToolService } from '../../../features/selection-tools/service/selection-tool.service';
import { MapService } from '../../../pages/map/map.service';
import { NavigationButton } from '../class';

@Component({
    selector: 'htm-nav-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: [ './navigation-bar.component.css' ]
})

export class NavigationBarComponent implements OnInit {
    @Input() leftPanel: LeftSideComponent;
    @Input() rightPanel: RightSideComponent;
    navButtons: NavigationButton[];

    constructor(
        private interactionService: InteractionService,
        private selectionToolButtonStateService: SelectionToolButtonStateService,
        private selectionToolService: SelectionToolService,
        private mapService: MapService
    ) { }

    ngOnInit() {
        // you must allow the change of states
        this.navButtons = this.interactionService.getNavButtons();
    }
    toggleExpandedState(button: NavigationButton) {
        const functionName = button.buttonFunction;
        const isOpen = button.stateOpen;

        if (isOpen) this.interactionService.disableStateOpenWithFunction(functionName);
        else this.interactionService.enableStateOpenWithFunction(functionName);

        switch (functionName) {
            case 'left':
                if (isOpen) this.interactionService.closeLeftPanel();
                else this.interactionService.openLeftPanel();
                break;
            case 'right':
                if (isOpen) this.interactionService.closeRightPanel();
                else this.interactionService.openRightPanel();
                break;
            case 'selection':
                if (isOpen) this.selectionToolButtonStateService.enable(false);
                else this.selectionToolButtonStateService.enable(true);
                break;
            case 'send_mail':
                if (isOpen) this.interactionService.closeTopPanel();
                else this.interactionService.openTopPanel();
                break;
            case 'save':
                this.interactionService.actionSavePanel(!isOpen);
                break;
            case 'folder':
                this.interactionService.actionFolderPanel(!isOpen);
                break;
        }
    }
}
