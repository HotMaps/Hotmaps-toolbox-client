// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { TestBed } from '@angular/core/testing';
import { SidePanelService } from 'app/features/side-panel/side-panel.service';
import { Logger } from 'app/shared/services/logger.service';
import { MockLoggerService } from 'app/shared/services/mock/logger.service';
import { LayersService } from 'app/features/layers/services/layers.service';
import { SummaryResultService } from 'app/features/summary-result/summary-result.service';
import { NavigationBarService } from 'app/pages/nav/service/navigation-bar.service';
import { async } from '@angular/core/testing';
import { InteractionService } from 'app/shared/services/interaction.service';
import { inject } from '@angular/core/testing';
import { Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LoaderService } from 'app/shared/services/loader.service';
import { GeocodingService, ToasterService, Helper, BusinessInterfaceRenderService } from 'app/shared';
import {HeatLoadAggregateService} from "../../features/heat-load/heat-load.service";




describe('InteractionService', () => {
    let mockLoggerService: MockLoggerService;
    let mockSidePanelService: SidePanelService;
    let service: InteractionService;
  beforeEach(async(() => {
    mockSidePanelService = new SidePanelService();
    mockLoggerService = new MockLoggerService();
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        {
            provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
            }, deps: [MockBackend, BaseRequestOptions]
        },
        { provide: InteractionService, useClass: InteractionService },
        { provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService },
        { provide: LayersService, useClass: LayersService },
        { provide: SummaryResultService, useClass: SummaryResultService },
        { provide: Logger, useValue: mockLoggerService },
        { provide: BaseRequestOptions, useClass: BaseRequestOptions },
        { provide: MockBackend, useClass: MockBackend },
        { provide: ToasterService, useClass: ToasterService },
        { provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService },
        { provide: Helper },
        { provide: LoaderService, useValue: mockLoggerService },
        { provide: SidePanelService, useValue: mockSidePanelService },
        { provide: NavigationBarService, useClass: NavigationBarService },
      ],
      imports: []
    }).compileComponents();
  }));
    beforeEach(inject([InteractionService], (interactionService: InteractionService) => {
        service = interactionService;
    }));
    it('service should be created', () => {
        expect(service).toBeTruthy()
    });
    it('service open left panel', () => {
        service.openLeftPanel()
        expect(mockSidePanelService.leftPanelStatus.value).toBe(true);
    });
    it('service close left panel', () => {
        service.closeLeftPanel()
        expect(mockSidePanelService.leftPanelStatus.value).toBe(false);
    });
});
