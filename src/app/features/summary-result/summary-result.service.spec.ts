import { Http, ConnectionBackend, BaseRequestOptions, ResponseOptions, Headers } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, fakeAsync, inject, tick, async } from '@angular/core/testing';

import { ToasterService } from './../../shared/services/toaster.service';
import { LoaderService } from './../../shared/services/loader.service';
import { Logger } from './../../shared/services/logger.service';
import { SummaryResultService } from './summary-result.service';
import { PayloadStatData, SummaryResultDataPopu } from './mock/summary-result.data';
import { postStatsLayersArea, apiUrl } from './../../shared/data.service';
import { Location } from '../../shared/class/location/location';
import { PayloadStat } from './mock/payload.class';
import { Payload } from './../population/payload.class';
import { APIService } from './../../shared/services/api.service';
import { SummaryResultClass } from './summary-result.class';
import { Helper } from './../../shared/helper';

describe('SummaryResultService', () => {
    let loggerStub: Logger;
    let loaderServiceStub: LoaderService;
    beforeEach(() => {
        loaderServiceStub = new LoaderService();
        loggerStub = new Logger();
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }, deps: [MockBackend, BaseRequestOptions]
                },
                {provide: Helper},
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
        inject([SummaryResultService, MockBackend], fakeAsync((summaryResultService: SummaryResultService, mockBackend: MockBackend) => {
            /* mockBackend.connections.subscribe(c => {
                console.log(c.request.url);
                expect(c.request.url).toBe('http://hotmaps.hevs.ch:9005/api/stats/layers/area/');
                c.mockRespond(new Response({
                    body: SummaryResultDataPopu
                }));
            }); */
            const payload: PayloadStat = PayloadStatData;
            payload.layers.push('population');
            console.log(JSON.stringify(payload));
            let result;
            summaryResultService.getSummaryResultWithPayload(payload).then((data) => {
                console.log('data getSummary: ', JSON.stringify(data));
                result = data;
            });
            tick(100)
            expect(result).toBe(SummaryResultDataPopu);
    })));
})
