import { Injectable } from '@angular/core';


import { NavigationButton } from './navigation-bar.class';
import { navigationButtons } from './navigation-buttons.data';
import { MapService } from '../map/map.service';
import { SelectionToolButtonStateService } from './../../features/selection-tools/selection-tool-button-state.service';
import { SidePanelService } from './../../features/side-panel/side-panel.service';
import {Properties} from '../../features/feedback/properties.utils';
import {Platform, platforms} from '../../features/feedback/platforms.utils';
import {Logger} from '../../shared/services/logger.service';
import {MailService} from '../../features/feedback/mail.service';

@Injectable()
export class NavigationBarService {
  properties: Properties = {};
  platform: Platform;
  url: string;
    constructor(private panelService: SidePanelService, private selectionToolButtonStateService: SelectionToolButtonStateService, private mailService: MailService) { }

    toggleBar(button: any) {
        button.stateOpen = !button.stateOpen;
        if (button.enable) {
            if (button.buttonFunction === 'left') {
                this.panelService.leftPanelexpandedCollapsed();
            }else if (button.buttonFunction === 'right') {
                this.panelService.rightPanelexpandedCollapsed();
            }else if (button.buttonFunction  === 'selection') {
              this.selectionToolButtonStateService.enable(true);
            }else if (button.buttonFunction  === 'send_mail') {
              this.sendEmail();
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
    sendEmail() {
      this.mailService.sendEmail();
    }

}
