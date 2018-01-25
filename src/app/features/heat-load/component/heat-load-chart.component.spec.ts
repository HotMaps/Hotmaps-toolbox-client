import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatLoadChartComponent } from './heat-load-chart.component';
import {HeatLoadAggregateService} from '../heat-load.service';
import { Logger } from 'app/shared';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GraphicalViewComponent', () => {
  let component: HeatLoadChartComponent;
  let fixture: ComponentFixture<HeatLoadChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatLoadChartComponent ],
      providers: [
        {provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService},
        {provide: Logger, useClass: Logger},
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
      imports: [ BrowserAnimationsModule, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatLoadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
