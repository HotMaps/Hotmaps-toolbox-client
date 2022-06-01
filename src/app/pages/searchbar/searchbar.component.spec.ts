// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { MockMapService } from '../../shared/services/mock/map.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from '../searchbar/searchbar.component';
import { GeocodingService } from '../../shared/services/geocoding.service';
import { MockGeocodeService } from '../../shared/services/mock/geocoding.service';
import { LoaderService } from '../../shared/services/loader.service';
import { Logger } from '../../shared/services/logger.service';
import { MapService} from '../map/map.service';
import { MockLoggerService } from '../../shared/services/mock/logger.service';
import { MockLoaderService } from '../../shared/services/mock/loader.service';
import { SidePanelService } from '../../features/side-panel/side-panel.service';
import {GoogleAnalyticsService} from "../../google-analytics.service";


describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let mockMapService: MockMapService;
  let sidePanelService: SidePanelService;
  let mockLoggerService: MockLoggerService;
  let mockGeocodeService: MockGeocodeService;
  let mockLoaderService: MockLoaderService;
  beforeEach(() => {
    mockGeocodeService = new MockGeocodeService();
    mockMapService = new MockMapService();
    sidePanelService = new SidePanelService();
    mockLoggerService = new MockLoggerService();
    mockLoaderService = new MockLoaderService();
    TestBed.configureTestingModule({
    declarations: [SearchBarComponent,
    ],
    providers: [
        { provide: MapService, useValue: mockMapService },
        { provide: Logger, useValue: mockLoggerService },
        { provide: GeocodingService, useValue: mockGeocodeService },
        { provide: LoaderService, useValue: mockLoaderService },
        { provide: SidePanelService, useValue: mockLoaderService },
        { provide: GoogleAnalyticsService, useValue: GoogleAnalyticsService },
    ],
    imports: [FormsModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
