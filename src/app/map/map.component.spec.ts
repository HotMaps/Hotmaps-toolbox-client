import { MockMapService } from './services/mock/map.service';
import {MapService} from './services/map.service';
import {MapComponent} from './map.component'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { basemap } from './basemap';

import { NavigatorComponent } from '../navigator/navigator.component';
import { GeocodingService } from './services/geocoding.service';
import { MockGeocodeService } from './services/mock/geocoding.service';
import { LoaderService } from '../shared/services/loader.service';
import { Logger } from '../shared/services/logger.service';
import { MockLoggerService } from '../shared/services/mock/logger.service';
import { MockLoaderService } from '../shared/services/mock/loader.service';
import { ModulesServiceService } from '../../../src/app/map/modules-service/modules-service.service';
import { ModuleServiceListComponent } from '../../../src/app/map/modules-service/modules-service-list.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mockSearchService: MockMapService;
  let mockLoggerService: MockLoggerService;
  let mockGeocodeService: MockGeocodeService;
  let modulesServiceStub: ModulesServiceService;
  let mockLoaderService: MockLoaderService;

  beforeEach(() => {
    mockSearchService = new MockMapService();
    mockLoggerService = new MockLoggerService();
    mockGeocodeService = new MockGeocodeService();
    TestBed.configureTestingModule({
      declarations: [MapComponent, ModuleServiceListComponent, ToolbarComponent, NavigatorComponent],
      providers: [
        {provide: MapService, useValue: mockSearchService},
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

  /*it('should createMap()', () => {

    expect(component.createMap(basemap.OpenStreetMap)).toBeDefined();
  });*/

});
