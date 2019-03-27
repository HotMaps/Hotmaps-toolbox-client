import { Component, OnInit, OnDestroy } from '@angular/core';

import { SnapshotService, SnapshotConfig } from 'app/shared/services/snapshot.service';
import { InteractionService } from "../../../shared/services/interaction.service";

@Component({
  selector: 'htm-folder-panel',
  templateUrl: './folder-panel.component.html',
  styleUrls: ['./folder-panel.component.less']
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
  }

  delete(snapshot: SnapshotConfig) {
    this.snapshotService.delete(snapshot).then(() =>
      this.refresh()
    );
  }

  close() {
    this.interactionService.closeFolderPanel();
  }

}
