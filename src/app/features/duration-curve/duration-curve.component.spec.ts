import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationCurveComponent } from './duration-curve.component';

describe('DurationCurveComponent', () => {
  let component: DurationCurveComponent;
  let fixture: ComponentFixture<DurationCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
