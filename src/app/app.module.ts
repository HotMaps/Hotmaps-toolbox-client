

import 'leaflet';
import 'reflect-metadata';
import 'jquery';

// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { DecimalPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, AppComponent } from './';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';


import { SearchBarComponent } from './pages/searchbar/searchbar.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { MapService, MapComponent } from './pages/map';
import {
  GeocodingService, Logger, LoaderService, ToasterService,
  GlobalErrorHandler, Helper, BusinessNamePipe, BusinessInterfaceRenderService,
  LayerNamePipe, UppercaseFirstLetterPipe, NumberFormatPipe
} from './shared';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms'
import { LayersService } from './features/layers';
import { PopulationService } from './features/population/services/population.service';
import { SidePanelService } from './features/side-panel/side-panel.service';
import { SelectionToolService, SelectionToolButtonStateService } from './features/selection-tools';
import { FeedbackComponent } from './features/feedback/';

import { SelectionScaleService } from './features/selection-scale';
import { SummaryResultComponent } from './features/summary-result/summary-result.component';
import { SummaryResultCellComponent } from './features/summary-result/summary-result-cell';
import { RightSideComponent } from './features/side-panel/right-side-panel/right-side-panel.component';
import { LeftSideComponent } from './features/side-panel/left-side-panel/left-side-panel.component';
import { NavigationBarComponent } from './pages/nav/component/navigation-bar.component';
import { NavigationBarService } from './pages/nav/service/navigation-bar.service';
import { DataInteractionCellComponent } from './features/layers-interaction/layers-interaction-cell/layers-interaction-cell.component';
import { SummaryResultService } from './features/summary-result/summary-result.service';

import { DataInteractionService } from './features/layers-interaction/layers-interaction.service';

import { InteractionService } from 'app/shared/services/interaction.service';
import { MailService } from './features/feedback/mail.service';
import { TopSideComponent } from 'app/features/side-panel';
import { SelectionToolComponent } from './features/selection-tools/component/selection-tool.component';
import { HeatLoadChartComponent } from './features/graph/heat-load/component/';
import { HeatLoadAggregateService } from './features/graph/heat-load/heat-load.service';
import { ChartComponent } from './features/graph/chart/chart.component';
import { DurationCurveComponent } from './features/graph/duration-curve/duration-curve.component';
import { DurationCurveService } from './features/graph/duration-curve/duration-curve.service'
import { ExportDataComponent } from './features/export-data/component/export-data.component';
import { ExportDataService } from './features/export-data/service/export-data.service';
import { SelectionToolUtils } from 'app/features/selection-tools/service/selection-tool-utils.service';
import { ElectricityMixComponent } from './features/graph/electricity-mix/component/electricity-mix.component';
import { ElectricityMixService } from './features/graph/electricity-mix/service/electricity-mix.service';
import { CalculationModuleComponent } from './features/calculation-module/component/calculation-module.component';
import { CalculationModuleService } from './features/calculation-module/service/calculation-module.service';
import { CalculationModuleStatusService } from './features/calculation-module/service/calcultation-module-status.service';
import { CalculationHeatLoadDividedService } from './features/calculation-module/service/calculation-test.service';
import { CMLayersService } from './features/calculation-module/cm-layers.service';
import { ResultManagerComponent } from './features/result-manager/component/result-manager.component';
import { UserManagementComponent } from './features/user-management';
import { LoginComponent } from './features/user-management';
import { RegisterComponent } from './features/user-management';
import { RecoveryComponent } from './features/user-management';
import { UserManagementService } from './features/user-management/service/user-management.service';
import { UserManagementStatusService } from './features/user-management/service/user-management-status.service';
import { AccountComponent } from './features/user-management/account/account.component';
import { ActivateComponent } from './features/user-management/activate/activate.component';
import { RouterModule } from '@angular/router';
import { LayerToolComponent } from './features/layer-tool/layer-tool.component';


import { UploadComponent } from './features/user-management/account/upload/upload.component';
import { UploadService } from './shared/services/upload.service';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule.forRoot()
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    SearchBarComponent,
    ToolbarComponent,
    MapComponent,
    RightSideComponent,
    NavigationBarComponent,
    SummaryResultComponent,
    SummaryResultCellComponent,
    DataInteractionCellComponent,
    LeftSideComponent,
    ResultManagerComponent,
    TopSideComponent,
    UppercaseFirstLetterPipe,
    NumberFormatPipe,
    LayerNamePipe,
    BusinessNamePipe,
    FeedbackComponent,
    HeatLoadChartComponent,
    SelectionToolComponent,
    ChartComponent,
    DurationCurveComponent,
    ExportDataComponent,
    ElectricityMixComponent,
    CalculationModuleComponent,
    UserManagementComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    AccountComponent,
    ActivateComponent,
    LayerToolComponent,
    UploadComponent
  ],
  providers: [
    DataInteractionService,
    PopulationService,
    GeocodingService,
    MapService,
    Logger,
    LoaderService,
    ToasterService,
    GlobalErrorHandler,
    Helper,
    SidePanelService,
    NavigationBarService,
    LayersService,
    SelectionToolService,
    SelectionToolButtonStateService,
    BusinessInterfaceRenderService,
    SummaryResultService,
    DecimalPipe,
    MailService,
    SelectionScaleService,
    InteractionService,
    HeatLoadAggregateService,
    SelectionToolUtils,
    ExportDataService,
    DurationCurveService,
    ElectricityMixService,
    CalculationModuleService,
    CalculationModuleStatusService,
    CalculationHeatLoadDividedService,
    CMLayersService,
    UserManagementService,
    UserManagementStatusService,
    UploadService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
