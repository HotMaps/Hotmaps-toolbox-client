/**
 * Created by lesly on 14.06.17.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {FormsModule}   from '@angular/forms';

import { ModuleServiceListComponent } from '../../../src/app/pages/map/modules-service/modules-service-list.component';
import { MapComponent } from '../../../src/app/pages/map/map.component';
import { ToolbarComponent } from '../../../src/app/pages/toolbar/toolbar.component';
import { Logger } from '../../../src/app/shared/services/logger.service';
import { GeocodingService } from '../../../src/app/pages/map/services/geocoding.service';
import { MapService } from '../../../src/app/pages/map/services/map.service';
import { ModulesServiceService } from '../../../src/app/pages/map/modules-service/modules-service.service';
import { basemap} from '../../../src/app/pages/map/basemap';
import {Map} from 'leaflet';
import {Http} from '@angular/http';



describe('MapComponent test injector', function () {
  let de: DebugElement[];
  let comp: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let geocodingServiceStub: GeocodingService;
  let modulesService: ModulesServiceService;
  let modulesServiceStub: ModulesServiceService;
  let loggerStub: Logger;
  let logger: Logger;
  let geocodingService: GeocodingService;
  let mapService: MapService;
  let mapServiceStub: MapService;
  loggerStub = new Logger;
  loggerStub.log('test');



  mapServiceStub = {
    map: null,
    baseMaps: basemap
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers:    [ {provide: MapService, useValue: mapServiceStub }, FormsModule,
        {provide: GeocodingService, useValue: geocodingServiceStub }, {provide: Logger, useValue: loggerStub },
        {provide: ModulesServiceService, useValue: modulesServiceStub }],
      declarations: [ MapComponent, ModuleServiceListComponent, ToolbarComponent ]
    })
      .compileComponents();
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      providers:    [ {provide: MapService, useValue: mapServiceStub } ],
      declarations: [ MapComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    comp = fixture.componentInstance;
    mapService = TestBed.get(MapService);
    geocodingService = TestBed.get(GeocodingService);
    modulesService = TestBed.get(ModulesServiceService);
    logger = TestBed.get(Logger);
  });




});
