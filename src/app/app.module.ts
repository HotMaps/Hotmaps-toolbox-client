

import 'leaflet';
import 'leaflet.vectorgrid';
import 'reflect-metadata';

import 'jquery';
import 'hammerjs/hammer.js';

import 'leaflet-measure/dist/leaflet-measure.js';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, ApplicationRef} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';
import {MaterialModule} from '@angular/material';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessNamePipe } from './shared/pipes/business-name.pipe';
import { BusinessInterfaceRenderService } from './shared/business/business.service';
import { SearchBarComponent } from './pages/searchbar/searchbar.component';
import { SidebarModule } from 'ng-sidebar';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { MapService } from './shared/services/map.service';
import { GeocodingService } from './shared/services/geocoding.service';
import { LoginComponent } from './pages/login/login.component';
import { MapComponent } from './pages/map/map.component';
import { RegisterComponent } from './pages/register/register.component';
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
import { PopupComponent } from './features/popup/popup.component';
import { PopupService } from './features/popup/popup.service';
import {DataInteractionService} from './features/data-interaction/data-interaction.service';


@NgModule({
  imports: [HttpModule,
    FormsModule,
    BusyModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SidebarModule.forRoot(),
    Angular2FontawesomeModule
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    SearchBarComponent,
    ToolbarComponent,
    LoginComponent,
    MapComponent,
    RegisterComponent,
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
    PopupComponent
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
    PopupService,
    DecimalPipe


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
