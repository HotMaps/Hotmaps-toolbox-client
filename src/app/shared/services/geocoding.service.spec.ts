/* tslint:disable:no-unused-variable */
import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { GeocodingService } from './geocoding.service';
import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {LocationClass} from '../class/location/location.class';
import {Logger} from './logger.service';
import { LoaderService } from './loader.service'
import {geocodeUrl} from '../data.service'
import {getIpUrl} from '../data.service'
import {getLocationFromIp} from '../data.service'
describe('geocodingService', () => {

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
        {provide: LoaderService, useValue: loaderServiceStub },
        {provide: GeocodingService, useClass: GeocodingService},
        {provide: MockBackend, useClass: MockBackend},
        {provide: Logger, useValue: loggerStub},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}
      ]
    });
  });

  it('should getCurrentLocation() of ip 72.229.28.185 with result from',
    inject([GeocodingService, MockBackend], fakeAsync((geocodingService: GeocodingService, mockBackend: MockBackend) => {

      const location = new LocationClass();
      let i = 0;
      mockBackend.connections.subscribe(c => {


        if (i === 0) {
          expect(c.request.url).toBe(getIpUrl);
          const response = new ResponseOptions({body: '{"ip":"72.229.28.185"}'});
          c.mockRespond(new Response(response));
          i++;
        } else if (i === 1) {
          expect(c.request.url).toBe(getLocationFromIp + '72.229.28.185');
          const response = new ResponseOptions({body: '{"ip":"72.229.28.185","country_code":"US","country_name":"United States",' +
          '"region_code":"NY","region_name":"New York","city":"New York","zip_code":"10036",' +
          '"time_zone":"America/New_York","latitude":40.7605,"longitude":-73.9933,"metro_code":501}'});
          c.mockRespond(new Response(response));

        }
      });
      geocodingService.getCurrentLocation().subscribe((result) => {

        location.address = result.address;
        location.latitude = result.latitude;
        location.longitude = result.longitude;
      });
      tick();
      expect(location.address).toBe('New York, NY 10036, US');
      expect(location.latitude).toBe(40.7605);
      expect(location.longitude).toBe(-73.9933);
    }))
  );

  it('should geocode() from lausannne',
    inject([GeocodingService, MockBackend], fakeAsync((geocodingService: GeocodingService, mockBackend: MockBackend) => {
      let res: Response;
      let location = new LocationClass();
      mockBackend.connections.subscribe(c => {

          expect(c.request.url).toBe(geocodeUrl + 'lausanne');

      });
      geocodingService.geocode('lausanne').subscribe((result) => {
        location = result;

      });
      tick();

    }))
  );
});
