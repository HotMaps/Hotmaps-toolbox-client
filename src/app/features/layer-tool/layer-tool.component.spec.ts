import { DataInteractionArray } from './../layers-interaction/layers-interaction.data';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerToolComponent } from './layer-tool.component';

describe('LayerToolComponent', () => {
  let component: LayerToolComponent;
  let fixture: ComponentFixture<LayerToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerToolComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerToolComponent);
    component = fixture.componentInstance;
    component.dataInteraction = DataInteractionArray[0]
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
