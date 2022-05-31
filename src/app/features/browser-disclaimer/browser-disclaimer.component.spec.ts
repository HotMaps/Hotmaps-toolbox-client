import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserDisclaimerComponent } from './browser-disclaimer.component';

describe('BrowserDisclaimerComponent', () => {
  let component: BrowserDisclaimerComponent;
  let fixture: ComponentFixture<BrowserDisclaimerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserDisclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
