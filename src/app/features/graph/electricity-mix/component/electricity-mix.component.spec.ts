import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ElectricityMixComponent } from './electricity-mix.component';
import {MockLoggerService} from '../../../../shared/services/mock/logger.service';
import {ChartComponent} from '../../chart/chart.component';
import {HeatLoadAggregateService} from '../../heat-load/heat-load.service';
import {BusinessInterfaceRenderService} from '../../../../shared/business/business.service';
import {Logger} from '../../../../shared/services/logger.service';
import {ToasterService} from '../../../../shared/services/toaster.service';
import {InteractionService} from '../../../../shared/services/interaction.service';
import {SidePanelService} from "../../../side-panel/side-panel.service";
import {NavigationBarService} from "../../../../pages/nav/service/navigation-bar.service";
import {SummaryResultService} from "../../../summary-result/summary-result.service";
import {LayersService} from "../../../layers/services/layers.service";
import {ExportDataService} from "../../../export-data/service/export-data.service";
import {LoaderService} from "../../../../shared/services/loader.service";
import {SelectionToolService} from "../../../selection-tools/service/selection-tool.service";
import {SelectionScaleService} from "../../../selection-scale/selection-scale.service";
import {DataInteractionService} from "../../../layers-interaction/layers-interaction.service";
import {DurationCurveService} from "../../duration-curve/duration-curve.service";
import {Helper} from "../../../../shared/helper";
import {APP_BASE_HREF, DecimalPipe} from "@angular/common";
import {BaseRequestOptions, ConnectionBackend, Http} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ElectricityMixService} from "../service/electricity-mix.service";
import { CalculationModuleService } from "app/features/calculation-module/service/calculation-module.service";
import { CalculationModuleStatusService } from "app/features/calculation-module/service/calcultation-module-status.service";
import { CalculationHeatLoadDividedService } from "app/features/calculation-module/service/calculation-test.service";
import {GoogleAnalyticsService} from "../../../../google-analytics.service";



describe('ElectricityMixComponent', () => {
  let component: ElectricityMixComponent;
  let fixture: ComponentFixture<ElectricityMixComponent>;
  let mockLoggerService: MockLoggerService;
  beforeEach(waitForAsync(() => {
    mockLoggerService = new MockLoggerService();
    TestBed.configureTestingModule({
    declarations: [ElectricityMixComponent, ChartComponent],
    providers: [
        { provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService },
        { provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService },
        { provide: Logger, useClass: Logger },
        { provide: ToasterService, useClass: ToasterService },
        { provide: InteractionService, useClass: InteractionService },
        { provide: SidePanelService, useClass: SidePanelService },
        { provide: NavigationBarService, useClass: NavigationBarService },
        { provide: SummaryResultService, useClass: SummaryResultService },
        { provide: LayersService, useClass: LayersService },
        { provide: ExportDataService, useClass: ExportDataService },
        { provide: LoaderService, useClass: LoaderService },
        { provide: InteractionService, useClass: InteractionService },
        { provide: SidePanelService, useClass: SidePanelService },
        { provide: SelectionToolService, useClass: SelectionToolService },
        { provide: SelectionScaleService, useClass: SelectionScaleService },
        { provide: DataInteractionService, useClass: DataInteractionService },
        { provide: DurationCurveService, useClass: DurationCurveService },
        { provide: NavigationBarService, useClass: NavigationBarService },
        { provide: SummaryResultService, useClass: SummaryResultService },
        { provide: LayersService, useClass: LayersService },
        { provide: Logger, useValue: mockLoggerService },
        { provide: Helper, useClass: Helper },
        { provide: DecimalPipe, useClass: DecimalPipe },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions },
        { provide: MockBackend, useClass: MockBackend },
        { provide: ElectricityMixService, useClass: ElectricityMixService },
        { provide: CalculationModuleService, useClass: CalculationModuleService },
        { provide: CalculationModuleStatusService, useClass: CalculationModuleStatusService },
        { provide: GoogleAnalyticsService, useClass: GoogleAnalyticsService },
        { provide: CalculationHeatLoadDividedService, useClass: CalculationHeatLoadDividedService },
        {
            provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }, deps: [MockBackend, BaseRequestOptions]
        },
    ],
    imports: [BrowserAnimationsModule, NoopAnimationsModule],
    teardown: { destroyAfterEach: false }
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

