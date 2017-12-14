/**
 * Created by lesly on 14.06.17.
 */

 // Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
// this file already exist, we can maybe delete it
import { AppComponent } from '../../src/app/component/app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LoaderService } from '../../src/app/shared/services/loader.service';

describe('AppComponent Test', function () {
  let de: DebugElement[];
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el_register;
  let el_login;
  let loaderService: LoaderService;
  let loaderServiceStub: LoaderService;
  loaderServiceStub = {
    status: new BehaviorSubject<boolean>(false),
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:    [ {provide: LoaderService, useValue: loaderServiceStub }],
      imports: [RouterTestingModule],
      declarations: [ AppComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.queryAll(By.css('a'));
    el_register = de[0].nativeElement.getAttribute('routerLink');
    el_login = de[1].nativeElement.getAttribute('routerLink');
  });



  it('should have login root set to /login root', () => {

    fixture.detectChanges();
    expect(el_login).toEqual('/login');

  });

  it('should have register root set to /register root', () => {

    fixture.detectChanges();
    expect(el_register).toEqual('/register');

  });
});
