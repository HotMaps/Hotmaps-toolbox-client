import { Http, ConnectionBackend, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';

import { ToasterService } from './../../shared/services/toaster.service';
import { LoaderService } from './../../shared/services/loader.service';
import { Logger } from './../../shared/services/logger.service';
import { SummaryResultService } from './summary-result.service';
import { PayloadStatData, SummaryResponseData } from './mock/test.data';
import { postStatsLayersArea, apiUrl } from './../../shared/data.service';
import { Location } from '../../shared/class/location/location';
import { PayloadStat } from './mock/payload.class';
import { Payload } from './../population/payload.class';
import { APIService } from './../../shared/services/api.service';
import { SummaryResultClass } from './summary-result.class';

describe('SummaryResultService', () => {
    let loggerStub: Logger;
    let loaderServiceStub: LoaderService;
    beforeEach(() => {
        loggerStub = new Logger();
        loaderServiceStub = new LoaderService();
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }, deps: [MockBackend, BaseRequestOptions]
                },
                {provide: ToasterService},
                {provide: LoaderService, useValue: loaderServiceStub},
                {provide: SummaryResultService, useClass: SummaryResultService},
                {provide: MockBackend, useClass: MockBackend},
                {provide: Logger, useValue: loggerStub},
                {provide: BaseRequestOptions, useClass: BaseRequestOptions}
            ]
        });

    });
    it('should be created', inject([SummaryResultService], (service: SummaryResultService) => {
        expect(service).toBeTruthy();
    }));

    it('should get statistics for population layer',
        inject([SummaryResultService, MockBackend],
        fakeAsync((summaryResultService: SummaryResultService, mockBackend: MockBackend) => {
            let name;
            let unit;
            let value;
            mockBackend.connections.subscribe(c => {
                console.log(c.request.url);
                expect(c.request.url).toBe('http://hotmaps.hevs.ch:9005/api/stats/layers/area/');
                const response = new ResponseOptions({ body: SummaryResponseData });
                console.log(JSON.stringify(response));
                c.mockRespond(new Response(response));
            });
            const payload: PayloadStat = PayloadStatData;
            console.log(JSON.stringify(payload));
            summaryResultService.getSummaryResultWithPayload(payload).then(result => {
                console.log('result : ' + JSON.stringify(result));
                console.log(result.json);
                name = result.layers[0].values[0].name;
                unit = result.layers[0].values[0].unit;
                value = result.layers[0].values[0].value;
            });
            tick();
            expect(name).toBe('density');
            expect(value).toBe(1033080);
            expect(unit).toBe('citizens');
        })));
})
