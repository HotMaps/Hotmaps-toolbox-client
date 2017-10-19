

import 'leaflet';
import 'leaflet.vectorgrid';
import 'reflect-metadata';

import 'jquery';

import 'leaflet-measure/dist/leaflet-measure.js';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, ApplicationRef} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessNamePipe } from './shared/pipes/business-name.pipe';
import { BusinessInterfaceRenderService } from './shared/business/business.service';
import { SearchBarComponent } from './pages/searchbar/searchbar.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { MapService } from './pages/map/map.service';
import { GeocodingService } from './shared/services/geocoding.service';

import { MapComponent } from './pages/map/component/map.component';

import { Logger } from './shared/services/logger.service';
import { Helper } from './shared/helper';
import { LayersService } from './features/layers/services/layers.service';
import { LoaderService } from './shared/services/loader.service';
import { PopulationService } from './features/population/services/population.service';
import { ToasterService } from './shared/services/toaster.service'
import { GlobalErrorHandler } from './shared/services/error-handler';
import { SidePanelService} from './features/side-panel/side-panel.service';
import { SelectionToolService} from './features/selection-tools/selection-tool.service';
import { SelectionToolButtonStateService} from './features/selection-tools/selection-tool-button-state.service';
import {SelectionScaleService} from './features/selection-scale/selection-scale.service';
import { SummaryResultComponent} from './features/summary-result/summary-result.component';
import { SummaryResultCellComponent} from './features/summary-result/summary-result-cell';
import { RightSideComponent } from './features/side-panel/right-side-panel/right-side-panel.component';
import { LeftSideComponent} from './features/side-panel/left-side-panel/left-side-panel.component';
import { NavigationBarComponent } from './pages/nav/navigation-bar.component';
import { NavigationBarService } from './pages/nav/navigation-bar.service';
import { DataInteractionCellComponent} from './features/data-interaction/data-interaction-cell/data-interaction-cell.component';
import { SummaryResultService } from './features/summary-result/summary-result.service';
import { UppercaseFirstLetterPipe } from './shared/pipes/uppercase-first-letter.pipe';
import { LayerNamePipe } from './shared/pipes/layer-name.pipe';
import { DecimalPipe } from '@angular/common';


import { NumberFormatPipe } from './shared/pipes/number-format.pipe';
import {DataInteractionService} from './features/data-interaction/data-interaction.service';
import {MailService} from './features/feedback/mail.service';


@NgModule({
  imports: [HttpModule,
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
    SelectionScaleService


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
