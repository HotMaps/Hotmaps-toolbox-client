import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmapsDataComponent } from './hotmaps-data.component';

describe('HotmapsDataComponent', () => {
  let component: HotmapsDataComponent;
  let fixture: ComponentFixture<HotmapsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotmapsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotmapsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
