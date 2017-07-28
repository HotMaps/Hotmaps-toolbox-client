import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';


import {apiUrl} from '../../../shared/data.service';
import {Location} from '../../../shared/location/location';
import {Logger } from '../../../shared/services/logger.service';
import {LoaderService } from '../../../shared/services/loader.service';
import {MockGrid } from './mock/grid.data.mock';
import {Payload} from '../../population/payload.class'


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
    const locations: Location[] =   [
      { lat: 46.90524554642923, lng: 5.701904296875 },
      { lat: 46.98025235521883, lng: 11.436767578125002 },
      { lat: 45.359865333959746, lng: 11.195068359375002 },
      { lat: 44.68427737181225, lng: 5.833740234375001 },
      { lat:  44.68427737181225, lng: 5.822753906250001 },
    ];
    const payload: Payload = {
      nuts_level: 3,
      year: 2015,
      points: locations,
    }

    return service.getGridWithPayloads(payload).then( data => {
      expect(data).toEqual(MockGrid);
    });
  }));
});
