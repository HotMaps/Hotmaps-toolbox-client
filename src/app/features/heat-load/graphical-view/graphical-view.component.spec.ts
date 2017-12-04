import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalViewComponent } from './graphical-view.component';

describe('GraphicalViewComponent', () => {
  let component: GraphicalViewComponent;
  let fixture: ComponentFixture<GraphicalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicalViewComponent ]
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
