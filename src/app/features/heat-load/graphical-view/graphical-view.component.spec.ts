import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalViewComponent } from './graphical-view.component';
import {HeatLoadAggregateService} from "../heat-load.service";

describe('GraphicalViewComponent', () => {
  let component: GraphicalViewComponent;
  let fixture: ComponentFixture<GraphicalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicalViewComponent ],
      providers: [

        {provide: HeatLoadAggregateService, useClass: HeatLoadAggregateService},






      ],
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
