import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';
import { ConnectionBackend, BaseRequestOptions, Http } from '@angular/http';

import { UserManagementComponent } from './user-management.component';
import { LoginComponent, UserManagementService } from '..';
import { RecoveryComponent } from '..';
import { RegisterComponent } from '..';
import { UserManagementStatusService } from '..';
import { Logger, LoaderService, ToasterService } from 'app/shared';
import { routes } from 'app/routes';
import { ActivateComponent } from './../activate/activate.component';
import { ChartComponent } from 'app/features/graph/chart/chart.component';
import { AccountComponent } from '..';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;
  const fakeActivatedRoute = {
    'params': Observable.from([{ token_activated:"token_of_test"}])
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementComponent, LoginComponent, RegisterComponent,
        RecoveryComponent, AccountComponent, ChartComponent, ActivateComponent ],
      imports: [
        // RouterModule.forRoot(routes),
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
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
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
