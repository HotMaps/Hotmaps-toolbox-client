/* tslint:disable:no-unused-variable */
import { TestBed, inject, fakeAsync , ComponentFixture} from '@angular/core/testing';
import { BaseRequestOptions, Http, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MapService } from './map.service';
import {Logger} from './logger.service';
import { LoaderService } from './loader.service'


import {Map} from 'leaflet';

describe('mapService', () => {

  let loaderServiceStub: LoaderService;
  let loggerStub: Logger;
  beforeEach(() => {
    loaderServiceStub = new LoaderService();
    loggerStub = new Logger;
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        {provide: MockBackend, useClass: MockBackend},
        {provide: MapService, useClass: MapService},
        {provide: LoaderService, useValue: loaderServiceStub },
        {provide: Logger, useValue: loggerStub},


      ],
    })
  });


  it('should getMap undefined',
    inject([MapService, MockBackend], fakeAsync((mapService: MapService, mockBackend: MockBackend) => {
      let map: Map;
      map = mapService.getMap();
     expect(map).toBe(undefined);
    }))
  );



});
