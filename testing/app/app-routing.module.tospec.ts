// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
// this file already exist, we can maybe delete it
import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';


import { AppComponent }  from '../../src/app/component/app.component';
import { routes } from '../../src/app/routes';

import { RegisterComponent }  from '../../src/app/register/register.component';
import { LoginComponent }  from '../../src/app/login/login.component';
import { MapComponent }  from '../../src/app/map/map.component';



describe('Router: App', () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        LoginComponent,
        MapComponent,
        RegisterComponent],
      providers: [
      ],
      imports: [ RouterTestingModule.withRoutes(routes) ]
      // declare the test component
    })
      .compileComponents();  // compile template and css
  }));
  // synchronous beforeEach
  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        LoginComponent,
        MapComponent,
        RegisterComponent],
      providers: [
      ],
      imports: [ RouterTestingModule.withRoutes(routes) ]
      // declare the test component
    })
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });
  it('navigate to "" redirects you to /map', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/map');
  }));
});
