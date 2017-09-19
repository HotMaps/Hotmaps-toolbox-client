

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
import {MaterialModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { RightSideComponent } from './features/side-panel/right-side-panel/right-side-panel.component';
import { LeftSideComponent} from './features/side-panel/left-side-panel/left-side-panel.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { NavigationBarComponent } from './pages/nav/navigation-bar.component';
import { NavigationBarService } from './pages/nav/navigation-bar.service';
import { DataInteractionCellComponent} from './features/data-interaction/data-interaction-cell/data-interaction-cell.component';
import { PopupService } from './features/popup/popup.service';
import { PopupComponent } from './features/popup/popup.component';


@NgModule({
  imports: [
    HttpModule,
    FormsModule,
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
    DataInteractionCellComponent,
    LeftSideComponent,
    PopupComponent
  ],

  providers: [
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
    PopupService


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
