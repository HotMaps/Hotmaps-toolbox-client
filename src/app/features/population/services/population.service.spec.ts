// Improvement of coding style : 
// listing import lines alphabetized by the module
import {BaseRequestOptions, Http, ConnectionBackend, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import {Logger } from '../../../shared/services/logger.service';
import {LoaderService } from '../../../shared/services/loader.service';
import {Helper } from '../../../shared/helper';
import {PopulationService } from './population.service';
import {ToasterService} from '../../../shared/services/toaster.service';
describe('PopulationService', () => {

  let loaderServiceStub: LoaderService;
  let loggerStub: Logger;
  beforeEach(waitForAsync(() => {
    loaderServiceStub = new LoaderService();
    loggerStub = new Logger;
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
        { provide: PopulationService, useClass: PopulationService },
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
  let subject: PopulationService = null;
  let backend: MockBackend = null;

  beforeEach(inject([PopulationService, MockBackend], (userService: PopulationService, mockBackend: MockBackend) => {
    subject = userService;
    backend = mockBackend;
  }));

  it('should send the population request to the server', (done) => {
    done();
  });
  it('should be created', inject([PopulationService], (service: PopulationService) => {

    expect(service).toBeTruthy();
  }));


});
