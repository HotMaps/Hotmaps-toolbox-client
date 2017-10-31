import { Injectable } from '@angular/core';


import { NavigationButton } from '../class';
import { navigationButtons } from './';
import { SelectionToolButtonStateService } from '../../../features/selection-tools';
import { SidePanelService } from '../../../features/side-panel';
import { Properties, Platform, MailService} from '../../../features/feedback';
import { Logger} from '../../../shared';


@Injectable()
export class NavigationBarService {
  properties: Properties = {};
  platform: Platform;
  url: string;
    constructor(private panelService: SidePanelService, private selectionToolButtonStateService: SelectionToolButtonStateService,
      private mailService: MailService, private logger: Logger) { }
    toggleBar(button: any) {
      this.logger.log('button' + button);

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
              button.stateOpen = !button.stateOpen;
            }
        }
    }
    enableButton(id: string) {
      const button  =  this.getButtons().filter(x => x.id === id)[0];
      button.enable = true;
      button.stateOpen = true;
    }

    disableButton(id: string) {
      const button  =  this.getButtons().filter(x => x.id === id)[0];
      button.enable = false;
      button.stateOpen = false;
    }
    getButtons(): NavigationButton[] {
        return navigationButtons;
    }
    sendEmail() {
      this.mailService.sendEmail();
    }

}
