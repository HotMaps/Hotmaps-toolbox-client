import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';

import { ActivateComponent } from './activate.component';
import { UserManagementService } from '..';
import { ToasterService, Logger, LoaderService } from 'app/shared';

describe('ActivateComponent', () => {
  let component: ActivateComponent;
  let fixture: ComponentFixture<ActivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateComponent ],
      imports: [
        FormsModule
      ],
      providers:[
        UserManagementService,
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
    fixture = TestBed.createComponent(ActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
