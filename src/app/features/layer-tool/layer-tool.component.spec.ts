import { DataInteractionArray } from './../layers-interaction/layers-interaction.data';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerToolComponent } from './layer-tool.component';
import { MapService } from 'app/pages/map';
import { UploadService } from 'app/shared/services/upload.service';
import { ToasterService, Logger, LoaderService, Helper, BusinessInterfaceRenderService } from 'app/shared';
import { Http, BaseRequestOptions, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SelectionToolService, SelectionToolButtonStateService } from '../selection-tools';
import { DecimalPipe } from '@angular/common';
import { LayersService } from '../layers';
import { SelectionScaleService } from '../selection-scale';
import { CMLayersService } from '../calculation-module/cm-layers.service';
import { CustomSymbologyComponent } from './custom-symbology/custom-symbology.component';
import {GoogleAnalyticsService} from "../../google-analytics.service";

describe('LayerToolComponent', () => {
  let component: LayerToolComponent;
  let fixture: ComponentFixture<LayerToolComponent>;

  let loggerStub: Logger;
  let loaderServiceStub: LoaderService;

  beforeEach(async(() => {
    loggerStub = new Logger();
    loaderServiceStub = new LoaderService();

    TestBed.configureTestingModule({
      declarations: [ LayerToolComponent, CustomSymbologyComponent ],
      providers: [
        MapService,
        ToasterService,
        SelectionScaleService,
        SelectionToolButtonStateService,
        { provide: UploadService, useValue: UploadService },
        { provide: CMLayersService, useValue: CMLayersService },
        { provide: SelectionToolService, useValue: SelectionToolService },
        { provide: LayersService, useValue: LayersService },
        { provide: GoogleAnalyticsService, useValue: GoogleAnalyticsService },
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend, BaseRequestOptions,
        Helper, DecimalPipe,
        Logger, LoaderService,
        BusinessInterfaceRenderService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerToolComponent);
    component = fixture.componentInstance;
    component.dataInteraction = DataInteractionArray[0]
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
