import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FolderPanelComponent } from "./folder-panel.component";
import { FormsModule } from "@angular/forms";
import { SnapshotService } from "../../../shared/services/snapshot.service";
import { InteractionService } from "../../../shared/services/interaction.service";
import { LoaderService } from "../../../shared/services";
import {GoogleAnalyticsService} from "../../../google-analytics.service";


describe('FolderPanelComponent', () => {
  let component: FolderPanelComponent;
  let fixture: ComponentFixture<FolderPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [FormsModule],
    declarations: [FolderPanelComponent],
    providers: [
        { provide: SnapshotService, useValue: SnapshotService },
        { provide: InteractionService, useValue: InteractionService },
        { provide: LoaderService, useValue: LoaderService },
        { provide: GoogleAnalyticsService, useValue: GoogleAnalyticsService },
    ],
    teardown: { destroyAfterEach: false }
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
