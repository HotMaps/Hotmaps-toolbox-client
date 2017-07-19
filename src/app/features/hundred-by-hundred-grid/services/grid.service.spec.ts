import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';


import {apiUrl} from '../../../shared/data.service';
import {Location} from '../../population/location';
import {Logger } from '../../../shared/services/logger.service';
import {LoaderService } from '../../../shared/services/loader.service';
import {MockGrid } from './mock/grid.data.mock';



import {postPopulationDensityInArea } from '../../../shared/data.service';
import {ToasterService} from '../../../shared/services/toaster.service';
import { GridService } from './grid.service';

describe('GridService', () => {

  let loaderServiceStub: LoaderService;
  let loggerStub: Logger;
  beforeEach(() => {
    loaderServiceStub = new LoaderService();
    loggerStub = new Logger;
    TestBed.configureTestingModule({
      providers: [{
        provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
      },
        {provide: ToasterService},
        {provide: LoaderService, useValue: loaderServiceStub },
        {provide: GridService, useClass: GridService},
        {provide: MockBackend, useClass: MockBackend},
        {provide: Logger, useValue: loggerStub},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}]
    });
  });

  it('should be created', inject([GridService], (service: GridService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the exact good response for this request', inject([GridService], (service: GridService) => {
    return service.getGrid().then( data => {
      expect(data).toEqual(MockGrid);
    });
  }));
});
