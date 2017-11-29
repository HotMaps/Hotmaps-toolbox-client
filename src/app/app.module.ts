

import 'leaflet';
import 'leaflet.vectorgrid';
import 'reflect-metadata';
import 'jquery';


import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, ApplicationRef} from '@angular/core';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
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


import { LayersService } from './features/layers';
import { PopulationService } from './features/population/services/population.service';
import { SidePanelService} from './features/side-panel/side-panel.service';
import { SelectionToolService, SelectionToolButtonStateService} from './features/selection-tools';

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
import {MailService} from './features/feedback/mail.service';
import { InteractionService } from 'app/shared/services/interaction.service';


@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
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
    UppercaseFirstLetterPipe,
    NumberFormatPipe,
    LayerNamePipe,
    BusinessNamePipe,
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
    InteractionService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
