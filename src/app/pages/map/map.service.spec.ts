/* tslint:disable:no-unused-variable */
import { TestBed, inject, fakeAsync , ComponentFixture} from '@angular/core/testing';
import { BaseRequestOptions, Http, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Map} from 'leaflet';

import { Helper } from '../../shared/helper';
import { MapService } from './map.service';
import { Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service'

import { PopulationService } from '../../features/population/services/population.service';
import { LayersService } from '../../features/layers/services/layers.service';

import { MockPopulationService } from '../../features/population/services/mock/population.service';



describe('mapService', () => {
  let populationService: MockPopulationService;
  let loaderServiceStub: LoaderService;
  let loggerStub: Logger;
  beforeEach(() => {
    populationService = new MockPopulationService();
    loaderServiceStub = new LoaderService();
    loggerStub = new Logger;
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: LayersService, useClass: LayersService},
        {provide: Helper, useValue: Helper},
        {provide: PopulationService, useValue: populationService},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        {provide: MockBackend, useClass: MockBackend},
        {provide: MapService, useClass: MapService},
        {provide: LoaderService, useValue: loaderServiceStub },
        {provide: Logger, useValue: loggerStub},


      ],
    })
  });


  /* it('should getMap undefined',
    inject([MapService, MockBackend], fakeAsync((mapService: MapService, mockBackend: MockBackend) => {
      let map: Map;
      map = mapService.getMap();
     expect(map).toBe(undefined);
    }))
  ); */



});
