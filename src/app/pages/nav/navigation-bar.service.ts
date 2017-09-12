import { Injectable } from '@angular/core';


import { NavigationButton } from './navigation-bar.class';
import { navigationButtons } from './navigation-buttons.data';
import { MapService } from './../../shared/services/map.service';
import { SidePanelService } from './../../features/side-panel/side-panel.service';

@Injectable()
export class NavigationBarService {

    constructor(private panelService: SidePanelService, private mapService: MapService) { }

    toggleBar(button: any) {
        button.stateOpen = !button.stateOpen;
        if (button.enable) {
            if (button.buttonFunction === 'left') {
                this.panelService.leftPanelexpandedCollapsed();
            }else if (button.buttonFunction === 'right') {
                this.panelService.rightPanelexpandedCollapsed();
            }else if (button.buttonFunction  === 'selection') {
                this.mapService.toggleControl();
            }
        }
    }
    getButtons(): NavigationButton[] {
        return navigationButtons;
    }
}
