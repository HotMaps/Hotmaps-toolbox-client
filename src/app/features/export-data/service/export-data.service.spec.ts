

import { ExportDataService } from './export-data.service';


import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, fakeAsync, inject, tick, waitForAsync } from '@angular/core/testing';

import { ToasterService } from '../../../shared/services/toaster.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { Logger } from '../../../shared/services/logger.service';

import { apiUrl } from '../../../shared/data.service';
import { Location } from '../../../shared/class/location/location';

import { APIService } from '../../../shared/services/api.service';
import { Helper } from '../../../shared/helper';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';
import { BusinessInterfaceRenderService } from 'app/shared';


describe('ExportDataService', () => {
  let loggerStub: Logger;
  let loaderServiceStub: LoaderService;
  let service: ExportDataService;
  beforeEach(waitForAsync(() => {
    loaderServiceStub = new LoaderService();
    loggerStub = new Logger();
    TestBed.configureTestingModule({
      providers: [
        { provide: Helper },
        { provide: ToasterService },
        { provide: LoaderService, useValue: loaderServiceStub },
        { provide: ExportDataService, useClass: ExportDataService },
        { provide: DataInteractionService, useClass: DataInteractionService},
        { provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService},
        

        { provide: MockBackend, useClass: MockBackend },
        { provide: Logger, useValue: loggerStub },
      ],
      imports: [
        HttpModule
      ]
    });
  }));

  beforeEach(inject([ExportDataService], (exportDataService: ExportDataService) => {
    service = exportDataService;
  }));

  // INIT TESTS
  it('service should be created', () => {
    expect(service).toBeTruthy()
  });
})
