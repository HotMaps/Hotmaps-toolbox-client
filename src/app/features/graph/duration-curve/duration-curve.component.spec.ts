import { CalculationHeatLoadDividedService } from 'app/features/calculation-module/service/calculation-test.service';
import { CalculationModuleService } from 'app/features/calculation-module/service/calculation-module.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationCurveComponent } from './duration-curve.component';
import { DurationCurveService } from "./duration-curve.service";
import { Logger, Helper, LoaderService, ToasterService } from 'app/shared';
import { APP_BASE_HREF, DecimalPipe } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from 'app/features/graph/chart/chart.component';
import { ConnectionBackend, BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { MockLoaderService } from 'app/shared/services/mock/loader.service';
import { MockLoggerService } from 'app/shared/services/mock/logger.service';
import { InteractionService } from '../../../shared/services/interaction.service';
import { SidePanelService } from '../../side-panel/side-panel.service';
import { SelectionToolService } from '../../selection-tools/service/selection-tool.service';
import {BusinessInterfaceRenderService} from '../../../shared/business/business.service';
import {SelectionScaleService} from '../../selection-scale/selection-scale.service';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';
import { NavigationBarService } from '../../../pages/nav/service/navigation-bar.service';
import { SummaryResultService } from '../../summary-result/summary-result.service';
import { LayersService } from '../../layers/services/layers.service';
import { HeatLoadAggregateService } from '../heat-load/heat-load.service';
import { ExportDataService } from "../../export-data/service/export-data.service";
import {ElectricityMixService} from "../electricity-mix/service/electricity-mix.service";
import { CalculationModuleStatusService } from "app/features/calculation-module/service/calcultation-module-status.service";


describe('DurationCurveComponent', () => {
  let component: DurationCurveComponent;
  let fixture: ComponentFixture<DurationCurveComponent>;
  let mockLoggerService: MockLoggerService;
  let mockLoaderService: MockLoaderService;

  beforeEach(async(() => {
    mockLoggerService = new MockLoggerService();
    mockLoaderService = new MockLoaderService();
    TestBed.configureTestingModule({
      declarations: [ DurationCurveComponent, ChartComponent ],
      providers: [
        { provide: DurationCurveService, useClass: DurationCurveService },
        { provide: Logger, useClass: Logger },
        { provide: ToasterService, useClass: ToasterService },
        { provide: InteractionService, useClass: InteractionService },
        { provide: SidePanelService, useClass: SidePanelService },
        { provide: SelectionToolService, useClass: SelectionToolService },
        { provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService },
        { provide: SelectionScaleService, useClass: SelectionScaleService },
        { provide: DataInteractionService, useClass: DataInteractionService },
        { provide: NavigationBarService, useClass: NavigationBarService },
        { provide: SummaryResultService, useClass: SummaryResultService },
        { provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService },
        { provide: LayersService, useClass: LayersService },
        { provide: ExportDataService, useClass: ExportDataService },
        { provide: LoaderService, useValue: mockLoaderService },
        { provide: Logger, useValue: mockLoggerService },
        { provide: Helper, useClass: Helper },
        { provide: DecimalPipe, useClass: DecimalPipe },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions },
        { provide: ElectricityMixService, useClass: ElectricityMixService },
        { provide: MockBackend, useClass: MockBackend },
        { provide: CalculationModuleService, useClass: CalculationModuleService},
        { provide: CalculationModuleStatusService, useClass: CalculationModuleStatusService},
        { provide: CalculationHeatLoadDividedService, useClass: CalculationHeatLoadDividedService},
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
      ],
      imports: [BrowserAnimationsModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
