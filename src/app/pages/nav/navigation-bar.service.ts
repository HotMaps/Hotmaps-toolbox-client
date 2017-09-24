import { Injectable } from '@angular/core';


import { NavigationButton } from './navigation-bar.class';
import { navigationButtons } from './navigation-buttons.data';
import { MapService } from './../../shared/services/map.service';
import { SelectionToolButtonStateService } from './../../features/selection-tools/selection-tool-button-state.service';
import { SidePanelService } from './../../features/side-panel/side-panel.service';

@Injectable()
export class NavigationBarService {

    constructor(private panelService: SidePanelService, private selectionToolButtonStateService: SelectionToolButtonStateService) { }

    toggleBar(button: any) {
        button.stateOpen = !button.stateOpen;
        if (button.enable) {
            if (button.buttonFunction === 'left') {
                this.panelService.leftPanelexpandedCollapsed();
            }else if (button.buttonFunction === 'right') {
                this.panelService.rightPanelexpandedCollapsed();
            }else if (button.buttonFunction  === 'selection') {
              this.selectionToolButtonStateService.enable(true);
            }
        }
    }

    enableButton(id: string) {
    const button  =  this.getButtons().filter(x => x.id === id)[0];
      button.enable = true;

    }
    disableButton(id: string) {
      const button  =  this.getButtons().filter(x => x.id === id)[0];
      button.enable = false;

    }
    getButtons(): NavigationButton[] {
        return navigationButtons;
    }
}
