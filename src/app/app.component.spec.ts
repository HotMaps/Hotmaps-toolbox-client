/* tslint:disable:no-unused-variable */
/**
 * Created by lesly on 28.06.17.
 */
import { DebugElement } from '@angular/core';
import {ComponentFixture, TestBed, async, inject, tick, fakeAsync} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MapComponent } from './pages/map/component/map.component';
import { SearchBarComponent } from './pages/searchbar/searchbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MockLoaderService } from './shared/services/mock/loader.service';
import { LoaderService } from './shared/services/loader.service'
import {Router} from '@angular/router';
import {routes} from './routes';
import {Location} from '@angular/common';
import {DataInteractionCellComponent} from './features/data-interaction/data-interaction-cell/data-interaction-cell.component';
import {RightSideComponent} from './features/side-panel/right-side-panel/right-side-panel.component';
import {LeftSideComponent} from './features/side-panel/left-side-panel/left-side-panel.component';
import {NavigationBarComponent} from './pages/nav/navigation-bar.component';

import { FormsModule } from '@angular/forms';
import {SummaryResultComponent} from './features/summary-result/summary-result.component';
import {UppercaseFirstLetterPipe} from './shared/pipes/uppercase-first-letter.pipe';
import {NumberFormatPipe} from './shared/pipes/number-format.pipe';
import {LayerNamePipe} from './shared/pipes/layer-name.pipe';
import {BusinessNamePipe} from './shared/pipes/business-name.pipe';



describe('AppComponent: Router', () => {

  let fixture: ComponentFixture<AppComponent>;
  let mockLoaderService: MockLoaderService;
  let loaderServiceStub: LoaderService;
  let location: Location;
  let router: Router;
  beforeEach(() => {
    mockLoaderService = new MockLoaderService();
    loaderServiceStub = new LoaderService();

    TestBed.configureTestingModule({
      declarations: [AppComponent, MapComponent, SearchBarComponent, LeftSideComponent, RightSideComponent,
        SearchBarComponent, DataInteractionCellComponent, NavigationBarComponent,
        SummaryResultComponent, UppercaseFirstLetterPipe, NumberFormatPipe, LayerNamePipe,
        BusinessNamePipe],
      providers: [
        {provide: LoaderService, useValue: loaderServiceStub },

      ],
      imports: [RouterTestingModule.withRoutes(routes), FormsModule ]
    })
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();

  });

  it('fakeAsync works', fakeAsync(() => {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /map', fakeAsync(() => {
    router.navigate(['']);

    tick();
    expect(location.path()).toBe('/map');
  }));
  it('navigate to "map" redirects you to /map', fakeAsync(() => {
    router.navigate(['map']);
    tick();
    expect(location.path()).toBe('/map');
  }));

});
