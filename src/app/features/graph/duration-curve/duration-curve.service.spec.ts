import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, fakeAsync, inject, tick, waitForAsync } from '@angular/core/testing';

import { ToasterService } from '../../../shared/services/toaster.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { Logger } from '../../../shared/services/logger.service';


import { apiUrl } from '../../../shared/data.service';
import { Location } from '../../../shared/class/location/location';
import { Payload } from '../../population/payload.class';
import { APIService } from '../../../shared/services/api.service';
import { Helper } from '../../../shared/helper';
import { MockPopulation } from '../../population/services/mock/population.data.mock';
import { HeatLoadAggregateService } from 'app/features/graph/heat-load/heat-load.service';
import { heatloaddataresponseyear, heatloaddataresponseday } from 'app/features/graph/heat-load/mock/data';

import { DurationCurveService } from './duration-curve.service';
import {ExportDataService} from "../../export-data/service/export-data.service";

describe('DurationCurveService', () => {

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
                { provide: Helper },
                { provide: ToasterService },
                { provide: LoaderService, useValue: loaderServiceStub },
                { provide: DurationCurveService, useClass: DurationCurveService },
                { provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService },
                { provide: MockBackend, useClass: MockBackend },
                { provide: Logger, useValue: loggerStub },
                { provide: BaseRequestOptions, useClass: BaseRequestOptions },
              { provide: ExportDataService, useClass: ExportDataService }

            ],
            imports: [
                HttpModule
            ]
        });
    }));
    let subject: DurationCurveService = null;
    let backend: MockBackend = null;
    const url = apiUrl
    beforeEach(inject([DurationCurveService, MockBackend], (userService: DurationCurveService, mockBackend: MockBackend) => {
        subject = userService;
        backend = mockBackend;
    }));
  it('should be created', inject([DurationCurveService], (service: DurationCurveService) => {
        expect(service).toBeTruthy();
    }));
});
