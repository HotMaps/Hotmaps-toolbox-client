import { Component, OnInit, OnDestroy } from '@angular/core';

import { InteractionService } from 'app/shared/services/interaction.service';
import { SnapshotService, SnapshotConfig } from 'app/shared/services/snapshot.service';

@Component({
  selector: 'htm-folder-panel',
  templateUrl: './folder-panel.component.html',
  styleUrls: ['./folder-panel.component.css']
})
export class FolderPanelComponent implements OnInit {


  snapshots: SnapshotConfig[] = [];

  constructor(private snapshotService: SnapshotService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.snapshotService.list().then(snapshots => this.snapshots = snapshots);
  }



  apply(snapshot: SnapshotConfig) {
    this.snapshotService.apply(snapshot);
    this.interactionService.closeFolderPanel();
  }

  delete(snapshot: SnapshotConfig) {
    this.snapshotService.delete(snapshot).then(() =>
      this.refresh()
    );
  }

}
