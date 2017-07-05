

import 'leaflet';
import 'leaflet.vectorgrid';
import 'reflect-metadata';
import 'jquery';
import 'hammerjs/hammer.js';

import 'leaflet-measure/dist/leaflet-measure.js';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';

import { SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MapService } from './map/services/map.service';
import { GeocodingService } from './map/services/geocoding.service';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { Logger } from './shared/services/logger.service';
import { LoaderService } from './shared/services/loader.service';
import { ModulesServiceService } from './map/modules-service/modules-service.service';
import { ModuleServiceListComponent } from './map/modules-service/modules-service-list.component';



@NgModule({
  imports: [HttpModule, FormsModule, BrowserModule,  AppRoutingModule, MaterialModule, SidebarModule.forRoot()],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    SearchBarComponent,
    ToolbarComponent,
    LoginComponent,
    MapComponent,
    RegisterComponent,
    ModuleServiceListComponent


  ],
  providers: [
    GeocodingService,
    MapService,
    ModulesServiceService,
    Logger,
    LoaderService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
