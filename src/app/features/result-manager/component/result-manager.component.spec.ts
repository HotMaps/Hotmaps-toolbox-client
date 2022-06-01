import { discardPeriodicTasks } from '@angular/core/testing';
// Improvement of coding style :
// listing import lines alphabetized by the module
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { TestBed, ComponentFixture, inject, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { DebugElement } from '@angular/core';


import { DataInteractionCellComponent } from '../../layers-interaction/layers-interaction-cell/layers-interaction-cell.component';
import { DataInteractionService } from '../../layers-interaction/layers-interaction.service';
import { Logger } from '../../../shared/services/logger.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { Helper } from '../../../shared/helper';
import { ToasterService } from '../../../shared/services/toaster.service';
import {BusinessInterfaceRenderService} from '../../../shared/business/business.service';
import { InteractionService } from 'app/shared/services/interaction.service';
import { NavigationBarService } from 'app/pages/nav/service/navigation-bar.service';
import { SummaryResultService } from 'app/features/summary-result';
import { LayersService } from 'app/features/layers';
import {HeatLoadAggregateService} from '../../graph/heat-load/heat-load.service';
import {ExportDataService} from '../../export-data/service/export-data.service';
import { DurationCurveService } from '../../graph/duration-curve/duration-curve.service';
import {ElectricityMixService} from '../../graph/electricity-mix/service/electricity-mix.service';
import { SelectionScaleService } from 'app/features/selection-scale';
import { CalculationModuleService } from 'app/features/calculation-module/service/calculation-module.service';
import { CalculationModuleStatusService } from 'app/features/calculation-module/service/calcultation-module-status.service';
import { CalculationModuleComponent } from '../../calculation-module/component/calculation-module.component';
import { SelectionToolButtonStateService } from '../../selection-tools/service/selection-tool-button-state.service';
import { SelectionToolUtils } from 'app/features/selection-tools/service/selection-tool-utils.service';
import { SelectionToolService } from 'app/features/selection-tools';
import { MapService } from '../../../pages/map/map.service';
import { DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GoogleAnalyticsService} from "../../../google-analytics.service";

describe('ResultManagerComponent', () => {
  /* let component: LeftSideComponent;
  let fixture: ComponentFixture<LeftSideComponent>;
  let debugEl: DebugElement; */
    let loggerStub: Logger;
    let loaderServiceStub: LoaderService;
    beforeEach(waitForAsync(() => {
      loggerStub = new Logger();
        loaderServiceStub = new LoaderService();
        TestBed.configureTestingModule({
    declarations: [DataInteractionCellComponent, CalculationModuleComponent],
    providers: [
        {
            provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }, deps: [MockBackend, BaseRequestOptions]
        },
        { provide: Helper, useClass: Helper },
        { provide: DecimalPipe, useClass: DecimalPipe },
        { provide: InteractionService, useClass: InteractionService },
        { provide: ExportDataService, useClass: ExportDataService },
        { provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService },
        { provide: SummaryResultService, useClass: SummaryResultService },
        { provide: LayersService, useClass: LayersService },
        { provide: NavigationBarService, useClass: NavigationBarService },
        { provide: DataInteractionService, useClass: DataInteractionService },
        { provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService },
        { provide: DurationCurveService, useClass: DurationCurveService },
        { provide: ToasterService },
        { provide: ElectricityMixService, useClass: ElectricityMixService },
        { provide: MockBackend, useClass: MockBackend },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions },
        { provide: Logger, useValue: loggerStub },
        { provide: LoaderService, useValue: loaderServiceStub },
        { provide: MapService, useClass: MapService },
        { provide: SelectionScaleService, useClass: SelectionScaleService },
        { provide: SelectionToolService, useClass: SelectionToolService },
        { provide: SelectionToolUtils, useClass: SelectionToolUtils },
        { provide: SelectionToolButtonStateService, useClass: SelectionToolButtonStateService },
        { provide: CalculationModuleService, useClass: CalculationModuleService },
        { provide: CalculationModuleStatusService, useClass: CalculationModuleStatusService },
        { provide: GoogleAnalyticsService, useClass: GoogleAnalyticsService },
    ],
    imports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    teardown: { destroyAfterEach: false }
});
    }));
    beforeEach(inject([MockBackend], (mockBackend: MockBackend) => {
        backend = mockBackend;
      }));
    let backend: MockBackend = null;
})
