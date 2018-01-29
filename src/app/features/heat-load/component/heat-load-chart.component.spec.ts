import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatLoadChartComponent } from './heat-load-chart.component';
import { HeatLoadAggregateService } from '../heat-load.service';
import { Logger, Helper, LoaderService, ToasterService } from 'app/shared';
import { APP_BASE_HREF, DecimalPipe } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from 'app/features/chart/chart.component';
import { ConnectionBackend, BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { MockLoaderService } from 'app/shared/services/mock/loader.service';
import { MockLoggerService } from 'app/shared/services/mock/logger.service';

describe('HeatLoadChartComponent', () => {
  let component: HeatLoadChartComponent;
  let fixture: ComponentFixture<HeatLoadChartComponent>;
  let mockLoggerService: MockLoggerService;
  let mockLoaderService: MockLoaderService;
  beforeEach(async(() => {
    mockLoggerService = new MockLoggerService();
    mockLoaderService = new MockLoaderService();
    TestBed.configureTestingModule({
      declarations: [HeatLoadChartComponent, ChartComponent],
      providers: [
        { provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService },
        { provide: Logger, useClass: Logger },
        { provide: ToasterService, useClass: ToasterService },
        { provide: LoaderService, useValue: mockLoaderService },
        { provide: Logger, useValue: mockLoggerService },
        { provide: Helper, useClass: Helper },
        { provide: DecimalPipe, useClass: DecimalPipe },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions },
        { provide: MockBackend, useClass: MockBackend },
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
      ],
      imports: [BrowserAnimationsModule, NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatLoadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
