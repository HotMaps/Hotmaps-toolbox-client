import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { ElectricityMixService } from './electricity-mix.service';
import {LoaderService} from "../../../../shared/services/loader.service";
import {BaseRequestOptions, ConnectionBackend, Http, HttpModule, ResponseOptions} from "@angular/http";
import {Logger} from "../../../../shared/services/logger.service";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {ToasterService} from "../../../../shared/services/toaster.service";
import {HeatLoadAggregateService} from "../../heat-load/heat-load.service";
import {apiUrl, getElectricityMixFromNuts0} from "../../../../shared/data.service";
import {electricityMixresponse, energy_mix_data} from "../mock/enery-mix.data";
import {Helper} from "../../../../shared/helper";


describe('ElectricityMixService', () => {
  let loggerStub: Logger;
  let loaderServiceStub: LoaderService;
  beforeEach(waitForAsync(() => {
    loaderServiceStub = new LoaderService();
    loggerStub = new Logger();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        { provide: ElectricityMixService },
        { provide: Helper },
        { provide: ToasterService },
        { provide: LoaderService, useValue: loaderServiceStub },
        { provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService },
        { provide: MockBackend, useClass: MockBackend },
        { provide: Logger, useValue: loggerStub },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions }
      ],
      imports: [
        HttpModule
      ]
    });
  }));
  let subject: ElectricityMixService = null;
  let backend: MockBackend = null;
  const url = apiUrl + getElectricityMixFromNuts0
  beforeEach(inject([ElectricityMixService, MockBackend], (userService: ElectricityMixService, mockBackend: MockBackend) => {
    subject = userService;
    backend = mockBackend;
  }));
  it('should send  request to the server', (done) => {
    done();
  });
  it('should be created', inject([HeatLoadAggregateService], (service: HeatLoadAggregateService) => {
    expect(service).toBeTruthy();
  }));

})
