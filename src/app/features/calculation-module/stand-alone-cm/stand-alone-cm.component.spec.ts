import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StandAloneCmComponent } from './stand-alone-cm.component';

describe('StandAloneCmComponent', () => {
  let component: StandAloneCmComponent;
  let fixture: ComponentFixture<StandAloneCmComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StandAloneCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandAloneCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
