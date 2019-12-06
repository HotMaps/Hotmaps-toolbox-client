import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprComponent } from './gdpr.component';

describe('GdprComponent', () => {
  let component: GdprComponent;
  let fixture: ComponentFixture<GdprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
