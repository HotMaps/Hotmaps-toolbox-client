import { Injectable } from '@angular/core';

import { LoaderService } from './loader.service';
import { MailService } from './../../features/feedback/mail.service';
import { SummaryResultService } from './../../features/summary-result/summary-result.service';
import { NavigationBarService } from './../../pages/nav/service/navigation-bar.service';
import { Logger } from './logger.service';
import { SidePanelService } from './../../features/side-panel/side-panel.service';
import { SelectionToolButtonStateService } from 'app/features/selection-tools';
import { Dictionary } from 'app/shared';
import { LayersService } from 'app/features/layers';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import {HeatLoadAggregateService} from "../../features/heat-load/heat-load.service";

@Injectable()
export class InteractionService {

    constructor(private logger: Logger,
        private sidePanelService: SidePanelService,
        private navigationBarService: NavigationBarService,
        private summaryResultService: SummaryResultService,
        private layerService: LayersService, private heatLoadAggregateService: HeatLoadAggregateService
    ) { }
    getLayerArray(): Dictionary {
        return this.layerService.getLayerArray()
    }
    enableStateOpenWithFunction(functionString: string) {
        this.navigationBarService.enableOpenStateWithFunction(functionString)
    }
    disableStateOpenWithFunction(functionString: string) {
        this.navigationBarService.disableOpenStateWithFunction(functionString)
    }
    enableButtonWithId(buttonString: string) {
        this.navigationBarService.enableButton(buttonString);
    }
    disableButtonWithId(buttonString: string) {
        this.navigationBarService.disableButton(buttonString);
    }
    disableAllButtonsWithFunction(functionString: string) {
        this.navigationBarService.disableButton(functionString);
    }
    enableAllButtonsWithFunction(functionString: string) {
        this.navigationBarService.enableButtons(functionString);
    }
    onPopupValidation() {}
    // RIGHT PANEL
    openRightPanel() {
        this.sidePanelService.openRightPanel();
    }
    openTopPanel() {
      this.sidePanelService.topPanelexpandedCollapsed();
    }
    closeTopPanel() {
      this.logger.log('InteractionService/closeTopPanel');
      this.sidePanelService.topPanelexpandedCollapsed();
    }
    closeRightPanel() {
        this.sidePanelService.closeRightPanel();
    }
    disableRightPanel() {
        this.sidePanelService.closeRightPanel();
    }

    // LEFT PANEL
    openLeftPanel() {
        this.sidePanelService.openLeftPanel();
    }
    closeLeftPanel() {
        this.sidePanelService.closeLeftPanel();
    }
    disableLeftPanel() {
        this.sidePanelService.closeLeftPanel();
    }

    getNavButtons() {
        return this.navigationBarService.getButtons();
    }
    setSummaryResultData(data) {
        this.sidePanelService.setSummaryResultData(data);
    }
    getSummaryResultWithIds(payload): Promise<any> {
      return this.summaryResultService.getSummaryResultWithIds(payload);
    }
    getSummaryResultWithPayload(payload): Promise<any> {
        return this.summaryResultService.getSummaryResultWithPayload(payload);
    }
    getLoadProfileAggregateResultWithPayload(payload): Promise<any> {
      return this.heatLoadAggregateService.getHeatLoadAggregateMonthWithPayload(payload);
    }

    setLoadProfileAggregateResultData(data) {
      this.sidePanelService.setHeatLoadResultData(data);
    }
}
