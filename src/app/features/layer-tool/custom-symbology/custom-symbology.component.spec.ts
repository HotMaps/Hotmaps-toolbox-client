import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSymbologyComponent } from './custom-symbology.component';

describe('CustomSymbologyComponent', () => {
  let component: CustomSymbologyComponent;
  let fixture: ComponentFixture<CustomSymbologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSymbologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSymbologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
