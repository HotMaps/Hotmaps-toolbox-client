import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalLayersComponent } from './share-layers.component';
import { UploadService } from 'app/shared/services/upload.service';

describe('PersonnalLayersComponent', () => {
  let component: PersonnalLayersComponent;
  let fixture: ComponentFixture<PersonnalLayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalLayersComponent ],
      providers: [ 
        { provide: UploadService, useValue: UploadService },
      ]
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
