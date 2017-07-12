import { MockMapService } from '../../shared/services/mock/map.service';
import {MapService} from '../../shared/services/map.service';
import {MapComponent} from './map.component'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { basemap } from './basemap';

import { SearchBarComponent } from '../searchbar/searchbar.component';
import { GeocodingService } from '../../shared/services/geocoding.service';
import { MockGeocodeService } from '../../shared/services/mock/geocoding.service';
import { LoaderService } from '../../shared/services/loader.service';
import { Logger } from '../../shared/services/logger.service';
import { MockLoggerService } from '../../shared/services/mock/logger.service';
import { MockLoaderService } from '../../shared/services/mock/loader.service';
import { PopulationService } from '../../features/population/services/population.service';
import { MockPopulationService } from '../../features/population/services/mock/population.service';
import { ModulesServiceService } from './modules-service/modules-service.service';
import { ModuleServiceListComponent } from './modules-service/modules-service-list.component';


describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mockMapService: MockMapService;
  let mockLoggerService: MockLoggerService;
  let mockGeocodeService: MockGeocodeService;
  let modulesServiceStub: ModulesServiceService;
  let mockLoaderService: MockLoaderService;
  let populationService: MockPopulationService;


  beforeEach(() => {
    mockMapService = new MockMapService();
    populationService = new MockPopulationService();
    mockLoggerService = new MockLoggerService();
    mockGeocodeService = new MockGeocodeService();
    mockLoaderService = new MockLoaderService();
    populationService = new MockPopulationService();
    TestBed.configureTestingModule({
      declarations: [MapComponent, ModuleServiceListComponent, ToolbarComponent, SearchBarComponent],
      providers: [
        {provide: PopulationService, useValue: populationService},
        {provide: MapService, useValue: mockMapService},
        {provide: GeocodingService, useValue: mockGeocodeService },
        {provide: Logger, useValue: mockLoggerService },
        {provide: LoaderService, useValue: mockLoaderService },
        {provide: ModulesServiceService, useValue: modulesServiceStub }
      ],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a map created', () => {

    expect(component.getMap()).toBeDefined();
  });

});
