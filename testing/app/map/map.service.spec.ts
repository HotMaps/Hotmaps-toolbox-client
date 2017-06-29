/**
 * Created by lesly on 16.06.17.
 */
import { inject } from '@angular/core/testing';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { Logger } from '../../../src/app/shared/services/logger.service';
import { MapService } from '../../../src/app/map/services/map.service';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
describe('Service:  MapServiceTest', () => {

  let loggerStub: Logger;
  let logger: Logger;

  loggerStub = new Logger;
  loggerStub.log(' log test MapServiceTest');
    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
            {provide: Logger, useValue: loggerStub }, { provide: XHRBackend, useClass: MockBackend }
        ]
      });

    });



});
