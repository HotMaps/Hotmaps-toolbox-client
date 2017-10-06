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
        inject([SummaryResultService], (summaryResultService: SummaryResultService) => {
            // mockBackend.connections.subscribe(c => {
                // console.log(c.request.url);
                /* expect(c.request.url).toBe('http://hotmaps.hevs.ch:9005/api/stats/layers/area/');
                const response = new ResponseOptions({ body: SummaryResponseData }); */
                // console.log(JSON.stringify(response));
                // c.mockRespond(new Response(response));
            // });
            const payload: PayloadStat = PayloadStatData;
            // console.log(JSON.stringify(payload));
            let name;
            let unit;
            let value;
            summaryResultService.getSummaryResultWithPayload(payload).then(result => {
                /* console.log(result);
                console.log(result.layers[0].values[0].unit);
                console.log(result.layers[0].values[0].value); */
                name = result.layers[0].values[0].name;
                unit = result.layers[0].values[0].unit;
                value = result.layers[0].values[0].value;
                /* expect(result.layers[0].values[0].name).toBe('density');
                expect(result.layers[0].values[0].value).toBe(1033080);
                expect(result.layers[0].values[0].unit).toBe('citizens'); */
            });
            tick();
            expect(name).toBe('density');
            expect(value).toBe(1033080);
            expect(unit).toBe('citizens');
        }));
})
