import { Injectable } from '@angular/core';

import { LoaderService } from './loader.service';
import { MailService } from './../../features/feedback/mail.service';
import { SummaryResultService } from './../../features/summary-result/summary-result.service';
import { NavigationBarService } from './../../pages/nav/service/navigation-bar.service';
import { Logger } from './logger.service';
import { SidePanelService } from './../../features/side-panel/side-panel.service';
import { SelectionToolButtonStateService } from 'app/features/selection-tools';
@Injectable()
export class InteractionService  {

    constructor(logger: Logger, private sidePanelService: SidePanelService,
        private navigationBarService: NavigationBarService, private summaryResultService: SummaryResultService,
        private selectionToolButtonStateService: SelectionToolButtonStateService) { }
    enableStateOpenWithID(functionString: string) {
        this.navigationBarService.enableOpenStateWithFunction(functionString)
    }
    disableStateOpenWithID(functionString: string) {
        this.navigationBarService.disableOpenStateWithFunction(functionString)
    }
    enableButtonWithId(buttonString: string) {
        this.navigationBarService.enableButton(buttonString);
    }
    disableButtonWithId(buttonString: string) {
        this.navigationBarService.disableButton(buttonString);
    }
    disableAllButtonsWithFunction(functionString: string) {
        this.navigationBarService.disableButtons(functionString);
    }
    enableAllButtonsWithFunction(functionString: string) {
        this.navigationBarService.enableButtons(functionString);
    }

    // RIGHT PANEL
    openRightPanel() {
        this.sidePanelService.openRightPanel();
        this.navigationBarService.enableOpenStateWithFunction('right');
    }
    closeRightPanel() {
        this.sidePanelService.openRightPanel();
    }
    disableRightPanel() {
        this.sidePanelService.openRightPanel();
        this.enableAllButtonsWithFunction('right');
    }

    // LEFT PANEL
    openLeftPanel() {
        this.sidePanelService.openLeftPanel();
        this.navigationBarService.enableOpenStateWithFunction('left');
    }
    closeLeftPanel() {
        this.sidePanelService.closeLeftPanel();
    }
    disableLeftPanel() {
        this.sidePanelService.closeLeftPanel();
        this.disableAllButtonsWithFunction('left');
    }

    getNavButtons() {
        return this.navigationBarService.getButtons();
    }
    toggleNavBarFromButton(button) {
        if (button.enable) {
            if (button.buttonFunction === 'left') {
                this.openLeftPanel()
            }else if (button.buttonFunction === 'right') {
                this.openRightPanel()
            }else if (button.buttonFunction  === 'selection') {
              this.selectionToolButtonStateService.enable(true);
              this.enableButtonWithId(button.buttonFunction);
            }else if (button.buttonFunction  === 'send_mail') {
              // Toggle top panel
            }
        }
    }
    setSummaryResultData(data) {
        this.sidePanelService.setPoiData(data);
    }
}
