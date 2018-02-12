

import 'leaflet';
import 'leaflet.vectorgrid';
import 'reflect-metadata';
import 'jquery';

// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, ApplicationRef} from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { DecimalPipe } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule, AppComponent  } from './';


import { SearchBarComponent } from './pages/searchbar/searchbar.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { MapService, MapComponent } from './pages/map';
import { GeocodingService, Logger, LoaderService, ToasterService,
  GlobalErrorHandler, Helper, BusinessNamePipe, BusinessInterfaceRenderService,
  LayerNamePipe, UppercaseFirstLetterPipe, NumberFormatPipe} from './shared';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms'
import { LayersService } from './features/layers';
import { PopulationService } from './features/population/services/population.service';
import { SidePanelService} from './features/side-panel/side-panel.service';
import { SelectionToolService, SelectionToolButtonStateService} from './features/selection-tools';
import { FeedbackComponent } from './features/feedback/';

import { SelectionScaleService} from './features/selection-scale';
import { SummaryResultComponent} from './features/summary-result/summary-result.component';
import { SummaryResultCellComponent} from './features/summary-result/summary-result-cell';
import { RightSideComponent } from './features/side-panel/right-side-panel/right-side-panel.component';
import { LeftSideComponent} from './features/side-panel/left-side-panel/left-side-panel.component';
import { NavigationBarComponent } from './pages/nav/component/navigation-bar.component';
import { NavigationBarService } from './pages/nav/service/navigation-bar.service';
import { DataInteractionCellComponent} from './features/data-interaction/data-interaction-cell/data-interaction-cell.component';
import { SummaryResultService } from './features/summary-result/summary-result.service';

import {DataInteractionService} from './features/data-interaction/data-interaction.service';

import { InteractionService } from 'app/shared/services/interaction.service';
import { MailService } from './features/feedback/mail.service';
import { TopSideComponent } from 'app/features/side-panel';
import { SelectionToolComponent } from './features/selection-tools/selection-tool/selection-tool.component';
import { HeatLoadChartComponent } from './features/heat-load/component/';
import { HeatLoadAggregateService } from './features/heat-load/heat-load.service';
import { ChartComponent } from './features/chart/chart.component';
import { SelectionToolUtils } from 'app/features/selection-tools/selection-tool-utils.service';


@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    LeftSideComponent,
    NavigationBarComponent,
    SummaryResultComponent,
    SummaryResultCellComponent,
    DataInteractionCellComponent,
    LeftSideComponent,
    TopSideComponent,
    UppercaseFirstLetterPipe,
    NumberFormatPipe,
    LayerNamePipe,
    BusinessNamePipe,
    FeedbackComponent,
    HeatLoadChartComponent,
    SelectionToolComponent,
    ChartComponent
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
    SelectionToolUtils
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
