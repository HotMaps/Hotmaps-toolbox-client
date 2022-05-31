import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SavePanelComponent } from './save-panel.component';
import { FormsModule } from "@angular/forms";
import { SnapshotService } from "../../../shared/services/snapshot.service";
import { InteractionService } from "../../../shared/services/interaction.service";
import {GoogleAnalyticsService} from "../../../google-analytics.service";

describe('SavePanelComponent', () => {
  let component: SavePanelComponent;
  let fixture: ComponentFixture<SavePanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SavePanelComponent ],
      providers: [
        { provide: SnapshotService, useValue: SnapshotService },
        { provide: InteractionService, useValue: InteractionService },
        { provide: GoogleAnalyticsService, useValue: GoogleAnalyticsService },
      ]
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
