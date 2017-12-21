import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalViewComponent } from './graphical-view.component';
import {HeatLoadAggregateService} from '../heat-load.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Logger } from 'app/shared';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GraphicalViewComponent', () => {
  let component: GraphicalViewComponent;
  let fixture: ComponentFixture<GraphicalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicalViewComponent ],
      providers: [
        {provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService},
        {provide: Logger, useClass: Logger},
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
      imports: [ NgxChartsModule, BrowserAnimationsModule, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
