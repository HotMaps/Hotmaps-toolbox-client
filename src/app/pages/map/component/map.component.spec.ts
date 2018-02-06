// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { BaseRequestOptions, Http, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MockMapService } from '../../../shared/services/mock/map.service';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DataInteractionCellComponent } from '../../../features/data-interaction/data-interaction-cell/data-interaction-cell.component';
import { SearchBarComponent } from '../../searchbar/searchbar.component';

import { LoaderService } from '../../../shared/services/loader.service';
import { Logger } from '../../../shared/services/logger.service';
import { MapService} from '../map.service';
import { MapComponent} from './map.component'
import { MockLoggerService } from '../../../shared/services/mock/logger.service';
import { MockLoaderService } from '../../../shared/services/mock/loader.service';
import { GeocodingService } from '../../../shared/services/geocoding.service';
import { MockGeocodeService } from '../../../shared/services/mock/geocoding.service';
import { LeftSideComponent } from '../../../features/side-panel/left-side-panel/left-side-panel.component';
import { SidePanelService } from '../../../features/side-panel/side-panel.service';
import { RightSideComponent } from '../../../features/side-panel/right-side-panel/right-side-panel.component';
import { ToasterService } from '../../../shared/services/toaster.service';
import { SelectionToolButtonStateService } from './../../../features/selection-tools/selection-tool-button-state.service';
import { NavigationBarService } from '../../nav/service/navigation-bar.service';
import { BusinessNamePipe } from './../../../shared/pipes/business-name.pipe';
import { LayerNamePipe } from './../../../shared/pipes/layer-name.pipe';
import { SummaryResultComponent } from './../../../features/summary-result/summary-result.component';
import { NavigationBarComponent } from '../../nav/component/navigation-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockSidePanelService } from './../../../shared/services/mock/mock-sidepanel.service';
import { BusinessInterfaceRenderService } from './../../../shared/business/business.service';
import { DataInteractionService } from './../../../features/data-interaction/data-interaction.service';
import { DecimalPipe } from '@angular/common';
import { Helper } from './../../../shared/helper';
import { MailService } from './../../../features/feedback/mail.service';
import {SelectionScaleService} from '../../../features/selection-scale/selection-scale.service';
import { InteractionService } from 'app/shared/services/interaction.service';
import { SelectionToolService } from '../../../features/selection-tools/selection-tool.service';
import { SummaryResultService } from 'app/features/summary-result';
import { LayersService } from 'app/features/layers';
import {TopSideComponent} from '../../../features/side-panel/top-side-panel/top-side-panel.component';
import {FeedbackComponent} from '../../../features/feedback/component/feedback.component';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {HeatLoadAggregateService} from "../../../features/heat-load/heat-load.service";
import { SelectionToolComponent } from '../../../features/selection-tools/selection-tool/selection-tool.component';
import { HeatLoadChartComponent } from 'app/features/heat-load/component';
import { ChartComponent } from 'app/features/chart/chart.component';
import { MockSelectionScaleService } from 'app/shared/services/mock/selection-scale.service';



describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mockMapService: MockMapService;
  let mockSidePanelService: SidePanelService;
  let mockLoggerService: MockLoggerService;
  let mockLoaderService: MockLoaderService;
  let mockGeocodeService: MockGeocodeService;
  let mockSelectionScaleService: MockSelectionScaleService;
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    mockMapService = new MockMapService();
    mockSidePanelService = new SidePanelService();
    mockLoggerService = new MockLoggerService();
    mockLoaderService = new MockLoaderService();
    mockGeocodeService = new MockGeocodeService();
    mockSelectionScaleService = new MockSelectionScaleService();
    TestBed.configureTestingModule({
      declarations: [
        MapComponent, LeftSideComponent, RightSideComponent,
        SearchBarComponent, DataInteractionCellComponent, NavigationBarComponent, SummaryResultComponent, TopSideComponent,
        FeedbackComponent, SelectionToolComponent,
        LayerNamePipe, BusinessNamePipe,
        HeatLoadChartComponent, ChartComponent
      ],
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        { provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService },
        { provide: InteractionService, useClass: InteractionService },
        { provide: LayersService, useClass: LayersService },
        { provide: SummaryResultService, useClass: SummaryResultService },
        { provide: ToasterService, useClass: ToasterService },
        { provide: MapService, useValue: mockMapService },
        { provide: Logger, useValue: mockLoggerService },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions },
        { provide: MockBackend, useClass: MockBackend },
        { provide: GeocodingService, useValue: mockGeocodeService },
        { provide: SelectionScaleService, useValue: mockSelectionScaleService },
        { provide: LoaderService, useValue: mockLoaderService },
        { provide: SidePanelService, useValue: mockSidePanelService },
        { provide: NavigationBarService, useClass: NavigationBarService },
        { provide: SelectionToolButtonStateService, useClass: SelectionToolButtonStateService },
        { provide: SelectionToolService, useClass: SelectionToolService },
        { provide: MailService, useClass: MailService },
        { provide: Helper, useClass: Helper },
        { provide: DecimalPipe, useClass: DecimalPipe },
        { provide: DataInteractionService, useClass: DataInteractionService },
        { provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService },
      ],
      imports: [
        FormsModule, BrowserAnimationsModule, NoopAnimationsModule, ReactiveFormsModule,
        RecaptchaFormsModule,
        RecaptchaModule.forRoot()
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test map created
  it('map should be created', async((element) => {
    expect(component.getMap()).toBeDefined();
  }));
});
