/**
 * Created by lesly on 28.06.17.
 */
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed , async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MockLoaderService } from './shared/services/mock/loader.service';
import { LoaderService } from './shared/services/loader.service'


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockLoaderService: MockLoaderService;
  let loaderServiceStub: LoaderService;
  let de: DebugElement[];
  let el_register;
  let el_login;

  beforeEach(async(() => {

    mockLoaderService = new MockLoaderService();
    loaderServiceStub = new LoaderService();

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {provide: LoaderService, useValue: loaderServiceStub },
      ],
      imports: [RouterTestingModule, ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.queryAll(By.css('a'));
    el_register = de[0].nativeElement.getAttribute('routerLink');
    el_login = de[1].nativeElement.getAttribute('routerLink');
    fixture.detectChanges();
  });
});
