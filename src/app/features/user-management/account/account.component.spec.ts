import { UserManagementStatusService } from './../service/user-management-status.service';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectionBackend, BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ChartComponent } from 'app/features/graph/chart/chart.component';
import { AccountComponent } from './account.component';
import { UserManagementService } from '..';
import { Logger, LoaderService, ToasterService } from 'app/shared';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent, ChartComponent ],
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
        {provide: Logger, useClass: Logger},
        {provide: LoaderService, useValue: LoaderService },
        {provide: ToasterService, useClass: ToasterService},
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},

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
