import { MockMapService } from '../../shared/services/mock/map.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DataInteractionCellComponent } from '../../features/data-interaction/data-interaction-cell/data-interaction-cell.component';
import { SearchBarComponent } from '../searchbar/searchbar.component';

import { LoaderService } from '../../shared/services/loader.service';
import { Logger } from '../../shared/services/logger.service';
import { MapService} from '../../shared/services/map.service';
import { MapComponent} from './map.component'
import { MockLoggerService } from '../../shared/services/mock/logger.service';
import { MockLoaderService } from '../../shared/services/mock/loader.service';

import { LeftSideComponent } from '../../features/side-panel/left-side-panel/left-side-panel.component';
import { SidePanelService } from '../../features/side-panel/side-panel.service';
import { RightSideComponent } from '../../features/side-panel/right-side-panel/right-side-panel.component';

import { ModuleServiceListComponent } from '../../features/modules-service/modules-service-list.component';


describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mockMapService: MockMapService;
  let sidePanelService: SidePanelService;
  let mockLoggerService: MockLoggerService;
  let mockLoaderService: MockLoaderService;
  beforeEach(() => {
    mockMapService = new MockMapService();
    sidePanelService = new SidePanelService();
    mockLoggerService = new MockLoggerService();
    mockLoaderService = new MockLoaderService();
    TestBed.configureTestingModule({
      declarations: [MapComponent, ModuleServiceListComponent, LeftSideComponent, RightSideComponent,
        SearchBarComponent, DataInteractionCellComponent],
      providers: [
        {provide: MapService, useValue: mockMapService},
        {provide: Logger, useValue: mockLoggerService },
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

  it('should have a map created', () => {

    expect(component.getMap()).toBeDefined();
  });

});
