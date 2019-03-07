import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { FormsModule } from '@angular/forms';
import { UploadService } from 'app/shared/services/upload.service';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ UploadComponent ],
      providers: [
        { provide: UploadService, useValue: UploadService },
        { provide: DataInteractionService, useValue: DataInteractionService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
