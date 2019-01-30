import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalLayersComponent } from './personnal-layers.component';

describe('PersonnalLayersComponent', () => {
  let component: PersonnalLayersComponent;
  let fixture: ComponentFixture<PersonnalLayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalLayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
