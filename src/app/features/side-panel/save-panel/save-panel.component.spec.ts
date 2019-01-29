import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePanelComponent } from './save-panel.component';

describe('SavePanelComponent', () => {
  let component: SavePanelComponent;
  let fixture: ComponentFixture<SavePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
