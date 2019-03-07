import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
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
import { ActivateComponent } from './../activate/activate.component';
import { ChartComponent } from 'app/features/graph/chart/chart.component';
import { AccountComponent } from '..';
import { UploadComponent } from '../account/upload/upload.component';
import { InteractionService } from 'app/shared/services/interaction.service';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;
  const fakeActivatedRoute = {
    'params': Observable.from([{ token_activated:"token_of_test"}])
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementComponent, LoginComponent, RegisterComponent,
        RecoveryComponent, AccountComponent, ChartComponent, ActivateComponent, UploadComponent ],
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
        Logger,
        LoaderService, ToasterService, 
        MockBackend, BaseRequestOptions,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: InteractionService, useValue: InteractionService },
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
