// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { ToasterService } from './../../shared/services/toaster.service';
import { SummaryResultService } from './../../features/summary-result/summary-result.service';
import { MailService } from './../../features/feedback/mail.service';
import { SelectionToolButtonStateService } from './../../features/selection-tools/selection-tool-button-state.service';
import { NavigationBarService } from '../nav/service/navigation-bar.service';
import { TestBed, inject, fakeAsync , ComponentFixture} from '@angular/core/testing';
import { BaseRequestOptions, Http, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Map} from 'leaflet';

import { Helper } from '../../shared/helper';
import { MapService } from './map.service';
import { Logger} from '../../shared/services/logger.service';
import { LoaderService } from '../../shared/services/loader.service'

import { PopulationService } from '../../features/population/services/population.service';
import { LayersService } from '../../features/layers/services/layers.service';

import { MockPopulationService } from '../../features/population/services/mock/population.service';
import { SidePanelService } from './../../features/side-panel/side-panel.service';
import { SelectionToolService } from './../../features/selection-tools/selection-tool.service';
import {BusinessInterfaceRenderService} from '../../shared/business/business.service';
import {SelectionScaleService} from '../../features/selection-scale/selection-scale.service';
import { DataInteractionService } from 'app/features/data-interaction/data-interaction.service';
import { GeocodingService } from 'app/shared';
import { InteractionService } from 'app/shared/services/interaction.service';



describe('mapService', () => {
  let populationService: MockPopulationService;
  let loaderServiceStub: LoaderService;
  let loggerStub: Logger;
  beforeEach(() => {
    populationService = new MockPopulationService();
    loaderServiceStub = new LoaderService();
    loggerStub = new Logger;
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: InteractionService, useClass: InteractionService},
        {provide: SelectionScaleService, useClass: SelectionScaleService},
        {provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService},
        {provide: DataInteractionService, useClass: DataInteractionService},
        {provide: GeocodingService, useClass: GeocodingService},
        {provide: LayersService, useClass: LayersService},
        {provide: Helper, useValue: Helper},
        {provide: PopulationService, useValue: populationService},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        {provide: MockBackend, useClass: MockBackend},
        {provide: MapService, useClass: MapService},
        {provide: LoaderService, useValue: loaderServiceStub },
        {provide: Logger, useValue: loggerStub},
        {provide: SelectionToolService, useClass: SelectionToolService},
        {provide: SidePanelService, useClass: SidePanelService},
        {provide: NavigationBarService, useClass: NavigationBarService},
        {provide: SelectionToolButtonStateService, useClass: SelectionToolButtonStateService},
        {provide: MailService, useClass: MailService},
        {provide: SummaryResultService, useClass: SummaryResultService},
        {provide: ToasterService, useClass: ToasterService},





      ],
    })
  });


  it('should getMap undefined',
    inject([MapService, MockBackend], fakeAsync((mapService: MapService, mockBackend: MockBackend) => {
      let map: Map;
      map = mapService.getMap();
     expect(map).toBe(undefined);
    }))
  );



});
