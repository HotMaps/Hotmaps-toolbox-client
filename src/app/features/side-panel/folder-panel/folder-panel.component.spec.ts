import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FolderPanelComponent } from "./folder-panel.component";
import { FormsModule } from "@angular/forms";
import { SnapshotService } from "../../../shared/services/snapshot.service";
import { InteractionService } from "../../../shared/services/interaction.service";
import { LoaderService } from "../../../shared/services";


describe('FolderPanelComponent', () => {
  let component: FolderPanelComponent;
  let fixture: ComponentFixture<FolderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ FolderPanelComponent ],
      providers: [
        { provide: SnapshotService, useValue: SnapshotService },
        { provide: InteractionService, useValue: InteractionService },
        { provide: LoaderService, useValue: LoaderService },
      ]
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
