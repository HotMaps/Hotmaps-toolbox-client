

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
import { LoaderService } from './shared/services/loader.service';
import { PopulationService } from './features/population/services/population.service';
import { ModulesServiceService } from './pages/map/modules-service/modules-service.service';
import { ModuleServiceListComponent } from './pages/map/modules-service/modules-service-list.component';
import { ToasterService } from './shared/services/toaster.service'
import { GlobalErrorHandler } from './shared/services/error-handler';
import { ServiceComponent } from './feature/hundred-by-hundred-grid/service/service.component';


@NgModule({
  imports: [HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SidebarModule.forRoot()],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    SearchBarComponent,
    ToolbarComponent,
    LoginComponent,
    MapComponent,
    RegisterComponent,
    ModuleServiceListComponent,
    ServiceComponent


  ],
  providers: [
    PopulationService,
    GeocodingService,
    MapService,
    ModulesServiceService,
    Logger,
    LoaderService,
    ToasterService,
    GlobalErrorHandler,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
