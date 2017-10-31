import { map_options } from './../../shared/data.service';
import { basemap } from './basemap';
import { ToasterService } from './../../shared/services/toaster.service';
import { SummaryResultService } from './../../features/summary-result/summary-result.service';
import { MailService } from './../../features/feedback/mail.service';
import { SelectionToolButtonStateService } from './../../features/selection-tools/selection-tool-button-state.service';
import { NavigationBarService } from './../nav/navigation-bar.service';
import { TestBed, inject, fakeAsync, ComponentFixture, async, tick } from '@angular/core/testing';
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



describe('mapService', () => {
  let populationService: MockPopulationService;
  let loaderServiceStub: LoaderService;
  let loggerStub: Logger;
  let service: MapService;
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
  beforeEach(inject([MapService], (mapService: MapService) => {
    service = mapService;
  }));

  it('should getMap undefined', async(() => {
    let map: Map;
    map = service.getMap();
    expect(map).toBe(undefined);
  }));

  it('should fire event zoomend', async(() => {
    let map: Map;
    service.setupMapservice(L.map('map', map_options));
    map = service.getMap();
    expect(map).toBeTruthy();
    map.on('zoomend', (e) => {
      expect(e.type).toBe('zoomend');
      expect(map.getZoom()).toBe(7);
    });
    map.setZoom(7, { animate: false });
  }));
});
