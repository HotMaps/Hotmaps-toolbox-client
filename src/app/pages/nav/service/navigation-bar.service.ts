import { Injectable } from '@angular/core';


import { NavigationButton } from '../class';
import { navigationButtons } from './';
import { SidePanelService } from '../../../features/side-panel';
import { Properties, Platform, MailService} from '../../../features/feedback';
import { Logger} from '../../../shared';


@Injectable()
export class NavigationBarService {
  properties: Properties = {};
  platform: Platform;
  url: string;
    constructor(private logger: Logger) { }
    getButtonWithId(id) {
      return this.getButtons().filter(x => x.id === id)[0];
    }
    getButtonWithFunction(functionString) {
      return this.getButtons().filter(x => x.buttonFunction === functionString).filter(x => x.enable === true);
    }
    enableOpenStateWithFunction(functionString) {
      const buttons: NavigationButton[] =  this.getButtonWithFunction(functionString);
      buttons.forEach((button) => {
        button.stateOpen = true;
      });
    }
    disableOpenStateWithFunction(functionString) {
      const buttons: NavigationButton[] =  this.getButtonWithFunction(functionString);
      buttons.forEach((button) => {
        button.stateOpen = false;
      });
    }
    enableButton(id: string) {
      const button = this.getButtonWithId(id);
      button.enable = true;
    }

    disableButton(id: string) {
      const button = this.getButtonWithId(id);
      button.enable = false;
    }

    // Disable all button depending the function string
    disableButtons(functionString: string) {
      const buttons: NavigationButton[] =  this.getButtons().filter(x => x.buttonFunction === functionString);
      buttons.forEach((button) => {
        button.enable = false;
      });
    }
    // Enable all button depending the function string
    enableButtons(functionString: string) {
      const buttons: NavigationButton[] = this.getButtonWithFunction(functionString);
      buttons.forEach((button) => {
        button.enable = true;
      });
    }
    getButtons(): NavigationButton[] {
        return navigationButtons;
    }

}
