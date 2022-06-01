import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { APP_BASE_HREF, DecimalPipe } from '@angular/common';
import { MockBackend } from '@angular/http/testing';
import { ConnectionBackend, BaseRequestOptions, Http } from '@angular/http';
import { ExportDataComponent } from './export-data.component';
import {ExportDataService} from '../service/export-data.service';
import {MockLoggerService} from '../../../shared/services/mock/logger.service';
import {MockLoaderService} from '../../../shared/services/mock/loader.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {Logger} from '../../../shared/services/logger.service';

import {ToasterService} from '../../../shared/services/toaster.service';
import {LoaderService} from '../../../shared/services/loader.service';
import {Helper} from '../../../shared/helper';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';
import { BusinessInterfaceRenderService } from 'app/shared';
import {GoogleAnalyticsService} from "../../../google-analytics.service";



describe('ExportDataComponent', () => {
  let component: ExportDataComponent;
  let fixture: ComponentFixture<ExportDataComponent>;
  let mockLoggerService: MockLoggerService;
  let mockLoaderService: MockLoaderService;
  beforeEach(waitForAsync(() => {
    mockLoggerService = new MockLoggerService();
    mockLoaderService = new MockLoaderService();
    TestBed.configureTestingModule({
    declarations: [ExportDataComponent],
    providers: [
        { provide: ExportDataService, useClass: ExportDataService },
        { provide: Logger, useClass: Logger },
        { provide: ToasterService, useClass: ToasterService },
        { provide: LoaderService, useValue: mockLoaderService },
        { provide: Logger, useValue: mockLoggerService },
        { provide: Helper, useClass: Helper },
        { provide: DecimalPipe, useClass: DecimalPipe },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions },
        { provide: MockBackend, useClass: MockBackend },
        { provide: DataInteractionService, useClass: DataInteractionService },
        { provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService },
        { provide: GoogleAnalyticsService, useClass: GoogleAnalyticsService },
        {
            provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }, deps: [MockBackend, BaseRequestOptions]
        },
    ],
    imports: [BrowserAnimationsModule, NoopAnimationsModule],
    teardown: { destroyAfterEach: false }
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
