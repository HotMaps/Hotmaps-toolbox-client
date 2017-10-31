import { BaseRequestOptions, Http, ConnectionBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MockMapService } from '../../../shared/services/mock/map.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

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
import { MdSnackBar } from '@angular/material';
import { ToasterService } from '../../../shared/services/toaster.service';



describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mockMapService: MockMapService;
  let sidePanelService: SidePanelService;
  let mockLoggerService: MockLoggerService;
  let mockLoaderService: MockLoaderService;
  let mockGeocodeService: MockGeocodeService;

  beforeEach(() => {
    mockMapService = new MockMapService();
    sidePanelService = new SidePanelService();
    mockLoggerService = new MockLoggerService();
    mockLoaderService = new MockLoaderService();
    mockGeocodeService = new MockGeocodeService();
    TestBed.configureTestingModule({
      declarations: [MapComponent, LeftSideComponent, RightSideComponent,
        SearchBarComponent, DataInteractionCellComponent],
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },

        {provide: MdSnackBar, useClass: MdSnackBar},
        {provide: ToasterService, useClass: ToasterService},
        {provide: MapService, useValue: mockMapService},
        {provide: Logger, useValue: mockLoggerService },
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        {provide: MockBackend, useClass: MockBackend},
        {provide: GeocodingService, useValue: mockGeocodeService },
        {provide: LoaderService, useValue: mockLoaderService },
        {provide: SidePanelService, useValue: mockLoaderService },
      ],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test map created
});
