// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import {BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions, HttpModule} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { TestBed, fakeAsync, inject, tick, async } from '@angular/core/testing';

import { ToasterService } from '../../../shared/services/toaster.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { Logger } from '../../../shared/services/logger.service';

import { LayersService } from './layers.service';
import {
  postStatsLayersArea, apiUrl, defaultLayer, populationLayerName,
  wwtpLayerName
} from '../../../shared/data.service';


import { APIService } from '../../../shared/services/api.service';

import { Helper } from '../../../shared/helper';
import {PopulationService} from '../../population/services/population.service';
import {SidePanelService} from '../../side-panel/side-panel.service';
import {NavigationBarService} from '../../../pages/nav/service/navigation-bar.service';
import {SelectionToolButtonStateService} from '../../selection-tools/selection-tool-button-state.service';
import {MailService} from '../../feedback/mail.service';
import {BusinessInterfaceRenderService} from '../../../shared/business/business.service';


describe('LayersService', () => {
  let loggerStub: Logger;
  let loaderServiceStub: LoaderService;
  beforeEach(async(() => {
    loaderServiceStub = new LoaderService();
    loggerStub = new Logger();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: Helper},
        {provide: ToasterService},

        {provide: BusinessInterfaceRenderService, useClass: BusinessInterfaceRenderService},
        {provide: MailService, useClass: MailService},
        {provide: SelectionToolButtonStateService, useClass: SelectionToolButtonStateService},
        {provide: NavigationBarService, useClass: NavigationBarService},
        {provide: PopulationService, useClass: PopulationService},
        {provide: SidePanelService, useClass: SidePanelService},
        {provide: LoaderService, useValue: loaderServiceStub},
        {provide: LayersService, useClass: LayersService},
        {provide: MockBackend, useClass: MockBackend},
        {provide: Logger, useValue: loggerStub},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}
      ],
      imports: [
        HttpModule
      ]
    });
  }));
  let subject: LayersService = null;
  let backend: MockBackend = null;

  beforeEach(inject([LayersService, MockBackend], (userService: LayersService, mockBackend: MockBackend) => {
    subject = userService;
    backend = mockBackend;
  }));
  it('should send the LayerService request to the server', (done) => {
    done();
  });
  it('should be created', inject([LayersService], (service: LayersService) => {
    expect(service).toBeTruthy();
  }));

  it('should load the heatmap', inject([LayersService], (service: LayersService) => {
    expect(service.getLayerArray().containsKey(defaultLayer)).toBeTruthy();
  }));
  it('should not load the population', inject([LayersService], (service: LayersService) => {
    expect(service.getLayerArray().containsKey(populationLayerName)).toBeFalsy();
  }));
  it('should not load the wwtp', inject([LayersService], (service: LayersService) => {
    expect(service.getLayerArray().containsKey(wwtpLayerName)).toBeFalsy();
  }));
  it('should add the population', inject([LayersService], (service: LayersService) => {
    service.getLayerArray().add(populationLayerName, populationLayerName);
    expect(service.getLayerArray().containsKey(populationLayerName)).toBeTruthy();
  }));
  it('should add the wwtp', inject([LayersService], (service: LayersService) => {
    service.getLayerArray().add(wwtpLayerName, wwtpLayerName);
    expect(service.getLayerArray().containsKey(wwtpLayerName)).toBeTruthy();
  }));
  it('should remove the heatmap', inject([LayersService], (service: LayersService) => {
    service.getLayerArray().remove(defaultLayer);
    expect(service.getLayerArray().containsKey(defaultLayer)).toBeFalsy();
  }));
})

