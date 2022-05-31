import { UserManagementStatusService } from './../service/user-management-status.service';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ConnectionBackend, BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ChartComponent } from 'app/features/graph/chart/chart.component';
import { AccountComponent } from './account.component';
import { UserManagementService } from '..';
import { Logger, LoaderService, ToasterService, BusinessInterfaceRenderService, Helper } from 'app/shared';
import { UploadComponent } from './upload/upload.component';
import { InteractionService } from 'app/shared/services/interaction.service';
import { UploadService } from 'app/shared/services/upload.service';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';
import { DecimalPipe } from '@angular/common';
import {GoogleAnalyticsService} from "../../../google-analytics.service";

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent, ChartComponent, UploadComponent ],
      imports: [
        FormsModule
      ],
      providers:[
        UserManagementService,
        UserManagementStatusService,
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend, BaseRequestOptions,
        Logger, LoaderService, ToasterService,
        Helper, DecimalPipe,
        DataInteractionService,
        BusinessInterfaceRenderService,
        { provide: UploadService, useValue: UploadService },
        { provide: GoogleAnalyticsService, useValue: GoogleAnalyticsService },
        { provide: InteractionService, useValue: InteractionService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
