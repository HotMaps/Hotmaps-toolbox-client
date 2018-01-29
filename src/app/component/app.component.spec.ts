/* tslint:disable:no-unused-variable */
/**
 * Created by lesly on 28.06.17.
 */
import { DebugElement } from '@angular/core';
import {ComponentFixture, TestBed, async, inject, tick, fakeAsync} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MapComponent } from '../pages/map/component/map.component';
import { SearchBarComponent } from '../pages/searchbar/searchbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MockLoaderService } from '../shared/services/mock/loader.service';
import { LoaderService } from '../shared/services/loader.service'
import {Router} from '@angular/router';
import {routes} from '../routes';
import {DecimalPipe, Location, APP_BASE_HREF} from '@angular/common';
import {DataInteractionCellComponent} from '../features/data-interaction/data-interaction-cell/data-interaction-cell.component';
import {RightSideComponent} from '../features/side-panel/right-side-panel/right-side-panel.component';
import {LeftSideComponent} from '../features/side-panel/left-side-panel/left-side-panel.component';
import {NavigationBarComponent} from '../pages/nav/component/navigation-bar.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SummaryResultComponent} from '../features/summary-result/summary-result.component';
import {UppercaseFirstLetterPipe} from '../shared/pipes/uppercase-first-letter.pipe';
import {NumberFormatPipe} from '../shared/pipes/number-format.pipe';
import {LayerNamePipe} from '../shared/pipes/layer-name.pipe';
import {BusinessNamePipe} from '../shared/pipes/business-name.pipe';
import {MapService} from '../pages/map/map.service';
import {Logger} from '../shared/services/logger.service';
import {SelectionToolButtonStateService} from '../features/selection-tools/selection-tool-button-state.service';
import {SelectionToolService} from '../features/selection-tools/selection-tool.service';
import {Helper} from '../shared/helper';
import {SidePanelService} from '../features/side-panel/side-panel.service';
import {NavigationBarService} from '../pages/nav/service/navigation-bar.service';
import {MailService} from '../features/feedback/mail.service';
import {SummaryResultService} from '../features/summary-result/summary-result.service';
import {BaseRequestOptions, ConnectionBackend, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {ToasterService} from '../shared/services/toaster.service';
import {LayersService} from '../features/layers/services/layers.service';
import {PopulationService} from '../features/population/services/population.service';
import {GeocodingService} from '../shared/services/geocoding.service';
import {DataInteractionService} from '../features/data-interaction/data-interaction.service';
import {BusinessInterfaceRenderService} from '../shared/business/business.service';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SelectionScaleService} from '../features/selection-scale/selection-scale.service';
import { InteractionService } from 'app/shared/services/interaction.service';
import {TopSideComponent} from '../features/side-panel/top-side-panel/top-side-panel.component';
import {FeedbackComponent} from '../features/feedback/component/feedback.component';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import { MouseEvent, Map, LayersControlEvent } from 'leaflet';
import {HeatLoadAggregateService} from "../features/heat-load/heat-load.service";
import { SelectionToolComponent } from '../features/selection-tools/selection-tool/selection-tool.component';
import { HeatLoadChartComponent } from 'app/features/heat-load/component';
import { ChartComponent } from 'app/features/chart/chart.component';



describe('AppComponent: Router', () => {


  let mockLoaderService: MockLoaderService;
  let loaderServiceStub: LoaderService;

  let location, router;
  beforeEach(() => {
    mockLoaderService = new MockLoaderService();
    loaderServiceStub = new LoaderService();

    TestBed.configureTestingModule({
      declarations: [AppComponent, MapComponent, SearchBarComponent, LeftSideComponent, RightSideComponent, TopSideComponent,
        SearchBarComponent, DataInteractionCellComponent, NavigationBarComponent, FeedbackComponent,
        SummaryResultComponent, SelectionToolComponent, UppercaseFirstLetterPipe, NumberFormatPipe, LayerNamePipe,
        HeatLoadChartComponent, ChartComponent, BusinessNamePipe],
      providers: [
        {provide: LoaderService, useValue: loaderServiceStub },
        {provide: MapService, useClass: MapService},
        {provide: SidePanelService, useClass: SidePanelService},

        {provide: SelectionScaleService, useClass: SelectionScaleService},
        {provide: Logger, useClass: Logger},
        {provide: SelectionToolService, useClass: SelectionToolService},
        {provide: Helper, useClass: Helper},
        {provide: DecimalPipe, useClass: DecimalPipe},
        {provide: SidePanelService, useClass: SidePanelService},
        {provide: NavigationBarService, useClass: NavigationBarService},
        {provide: SelectionToolButtonStateService, useClass: SelectionToolButtonStateService},
        {provide: MailService, useClass: MailService},
        {provide: SummaryResultService, useClass: SummaryResultService},
        {provide: InteractionService, useClass: InteractionService},
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        {provide: ToasterService, useClass: ToasterService},
        {provide: LayersService, useClass: LayersService},
        {provide: PopulationService, useClass: PopulationService},
        {provide: GeocodingService, useClass: GeocodingService},
        {provide: DataInteractionService, useClass: DataInteractionService},

        {provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService},
        {provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService},
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
      imports: [RouterTestingModule.withRoutes(routes), FormsModule, BrowserAnimationsModule, NoopAnimationsModule, ReactiveFormsModule,
        RecaptchaFormsModule,
        RecaptchaModule.forRoot()
      ]
    })

  });
  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    router = _router;
  }));


  it('fakeAsync works', fakeAsync(() => {
    console.log('it goes to fakeAsync works');
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));


  it('should /map go map', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    router.navigate(['/map']).then(() => {
      expect(location.path()).toBe('/map');

    });
  }));

  it('should empty path go map', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/map');

    });
  }));
});
