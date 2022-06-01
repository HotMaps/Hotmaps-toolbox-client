import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, fakeAsync, inject, tick, waitForAsync } from '@angular/core/testing';

import { ToasterService } from '../../../shared/services/toaster.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { Logger } from '../../../shared/services/logger.service';


import { apiUrl, postHeatLoadProfileNutsLau } from '../../../shared/data.service';
import { Location } from '../../../shared/class/location/location';
import { Payload } from '../../population/payload.class';
import { APIService } from '../../../shared/services/api.service';
import { Helper } from '../../../shared/helper';
import { MockPopulation } from '../../population/services/mock/population.data.mock';
import { HeatLoadAggregateService } from 'app/features/graph/heat-load/heat-load.service';
import { heatloaddataresponseyear, heatloaddataresponseday } from 'app/features/graph/heat-load/mock/data';

describe('HeatLoadAggregateService', () => {
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
        { provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService },
        { provide: MockBackend, useClass: MockBackend },
        { provide: Logger, useValue: loggerStub },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions }
    ],
    imports: [
        HttpModule
    ],
    teardown: { destroyAfterEach: false }
});
    }));
    let subject: HeatLoadAggregateService = null;
    let backend: MockBackend = null;
    const url = apiUrl + postHeatLoadProfileNutsLau
    beforeEach(inject([HeatLoadAggregateService, MockBackend], (userService: HeatLoadAggregateService, mockBackend: MockBackend) => {
        subject = userService;
        backend = mockBackend;
    }));
    it('should send the population request to the server', (done) => {
        done();
    });
    it('should be created', inject([HeatLoadAggregateService], (service: HeatLoadAggregateService) => {
        expect(service).toBeTruthy();
    }));

    it('#getHeatLoad' +
        ' should call endpoint and return it\'s result (Heatload day payload for nuts AT11)', (done) => {
            backend.connections.subscribe((connection: MockConnection) => {
                const options = new ResponseOptions({
                    body: heatloaddataresponseday
                });
                connection.mockRespond(new Response(options));
                expect(connection.request.url).toBe(url)
                console.log(connection)
            });
            const isHectare = false;
            const payload = {
                year: 2010,
                month: 5,
                day: 5,
                nuts: [
                    'AT11'
                ]
            };
            console.log(payload);
            subject.getHeatLoad(payload, 'day', isHectare).then((response) => {
                console.log(response);
                expect(response).toEqual(heatloaddataresponseday);
                done();
            });
        });
        it('#getHeatLoad' +
        ' should call endpoint and return it\'s result (Heatload year payload for nuts AT11)', (done) => {
            backend.connections.subscribe((connection: MockConnection) => {
                const options = new ResponseOptions({
                    body: heatloaddataresponseyear
                });
                connection.mockRespond(new Response(options));
                expect(connection.request.url).toBe(url)
            });
            const isHectare = false;
            const payload = {
                year: 2010,
                month: 5,
                day: 5,
                nuts: [
                    'AT11'
                ] //d
            };
            console.log(JSON.stringify(payload));
            subject.getHeatLoad(payload, 'year', isHectare).then((response) => {
                console.log(response);
                expect(response).toEqual(heatloaddataresponseyear);
                done();
            });
        });
})
