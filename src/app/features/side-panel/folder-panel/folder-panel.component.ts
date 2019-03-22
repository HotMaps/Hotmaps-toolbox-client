import { Component, OnInit, OnDestroy } from '@angular/core';

import { SnapshotService, SnapshotConfig } from 'app/shared/services/snapshot.service';

@Component({
  selector: 'htm-folder-panel',
  templateUrl: './folder-panel.component.html',
  styleUrls: ['./folder-panel.component.css']
})
export class FolderPanelComponent implements OnInit {


  snapshots: SnapshotConfig[] = [];

  constructor(private snapshotService: SnapshotService) { }

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

}
