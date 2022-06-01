import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GdprComponent } from './gdpr.component';

describe('GdprComponent', () => {
  let component: GdprComponent;
  let fixture: ComponentFixture<GdprComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [GdprComponent],
    teardown: { destroyAfterEach: false }
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
