// TODO: Improvement of coding style :
// TODO: leaving one empty line between third party imports and application imports
// TODO: listing import lines alphabetized by the module
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
import { HeatLoadAggregateService } from '../../features/graph/heat-load/heat-load.service';
import {ExportDataService} from '../../features/export-data/service/export-data.service';
import { DurationCurveService } from '../../features/graph/duration-curve/duration-curve.service';
import { DataInteractionService } from '../../features/layers-interaction/layers-interaction.service';
import {ElectricityMixService} from '../../features/graph/electricity-mix/service/electricity-mix.service';

@Injectable()
export class InteractionService {
    private summaryResultState = false;
    private electricityGenerationResultState = false;

    constructor(private logger: Logger,
        private sidePanelService: SidePanelService,
        private navigationBarService: NavigationBarService,
        private summaryResultService: SummaryResultService,
        private layerService: LayersService, private exportDataService: ExportDataService,
        private heatLoadAggregateService: HeatLoadAggregateService,
        private durationCurveService: DurationCurveService,
        private dataInteractionService: DataInteractionService, private electricityMixService: ElectricityMixService
    ) { }

    getLayerArray(): Dictionary {
        return this.layerService.getLayerArray()
    }
    // interface for export data service

    displayButtonExportStats(value: boolean) {
      this.exportDataService.displayButtonExportStats(value);
    }
    setDataStats(data: any) {
      this.exportDataService.setDataStats(data);
    }
    setTabsSelectedName(data: string) {
      this.exportDataService.setTabsSelectedName(data);
    }
    displayButtonExport(val: boolean) {
      this.exportDataService.displayButtonExport(val);
    }
    setSummaryResultState(val: boolean) {
      this.summaryResultState = val;
    }
    setElectricityGenerationMixResultState(val: boolean) {
      this.electricityGenerationResultState = val;
    }
    getElectricityGenerationMixResultState(): boolean {
      return this.electricityGenerationResultState ;
    }
    getSummaryResultState() {
      return this.summaryResultState;
    }
    setSummaryData(val: any) {
        this.exportDataService.setDataSummary(val);
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

    getSummaryResultWithIds(payload): Promise<any> {
      return this.summaryResultService.getSummaryResultWithIds(payload);
    }
    getSummaryResultWithMultiAreas(payload: any): Promise<any> {
      return this.summaryResultService.getSummaryResultWithMultiAreas(payload);
    }
    getHeatLoad(payload, type_api_ref, isHectare): Promise<any>{
        return this.heatLoadAggregateService.getHeatLoad(payload, type_api_ref, isHectare);
    }
    formatHeatLoadForChartjs(data, api_ref){
        return this.heatLoadAggregateService.formatHeatLoadForChartjs(data, api_ref);
    }
    getDurationCurveWithPayload(payload, isHectare): Promise<any>{
        return this.durationCurveService.getDurationCurveWithPayload(payload, isHectare);
    }
    transformDurationCurveData(data){
        return this.durationCurveService.transformData(data);
    }
    getSplittedResults(results){
        return this.dataInteractionService.getSplittedResults(results);
    }
    getChien(r) {
        return this.dataInteractionService.getSplittedResults(r);
    }

    getElectricityMixFromNuts0(payload): Promise<any> {
    return this.electricityMixService.getElectricityMixFromNuts0(payload);
    }
    enableOpenStateWithId(id) {
        this.navigationBarService.enableOpenStateWithId(id);
    }
    disableOpenStateWithId(id) {
      this.navigationBarService.disableOpenStateWithId(id);
    }
}
