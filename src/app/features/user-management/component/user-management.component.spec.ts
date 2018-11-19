import { ChartComponent } from 'app/features/graph/chart/chart.component';
import { AccountComponent } from '..';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementComponent } from './user-management.component';
import { LoginComponent, UserManagementService } from '..';
import { RecoveryComponent } from '..';
import { RegisterComponent } from '..';
import { FormsModule } from '@angular/forms';
import { UserManagementStatusService } from '..';
import { ConnectionBackend, BaseRequestOptions, Http } from '@angular/http';
import { Logger, LoaderService, ToasterService } from 'app/shared';
import { MockBackend } from '@angular/http/testing';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementComponent, LoginComponent, RegisterComponent, RecoveryComponent, AccountComponent, ChartComponent ],
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
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
