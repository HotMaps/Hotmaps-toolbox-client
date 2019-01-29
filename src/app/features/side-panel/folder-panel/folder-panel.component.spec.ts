import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderPanelComponent } from './folder-panel.component';

describe('FolderPanelComponent', () => {
  let component: FolderPanelComponent;
  let fixture: ComponentFixture<FolderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
