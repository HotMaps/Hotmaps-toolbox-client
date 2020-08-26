import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserManagementService } from '..';
import { Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ToasterService, Logger, LoaderService } from 'app/shared';
import { BrowserModule } from '@angular/platform-browser';
import { RecaptchaModule, RecaptchaLoaderService } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {GoogleAnalyticsService} from "../../../google-analytics.service";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        RecaptchaModule,
        RecaptchaFormsModule
      ],
      providers:[
        UserManagementService,
        RecaptchaLoaderService,
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
        {provide: GoogleAnalyticsService, useClass: GoogleAnalyticsService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
