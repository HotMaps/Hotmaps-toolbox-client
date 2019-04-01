import { Component, OnInit } from '@angular/core';

import { SnapshotService, SnapshotConfig } from 'app/shared/services/snapshot.service';
import { InteractionService } from "../../../shared/services/interaction.service";
import { LoaderService } from "../../../shared/services";

@Component({
  selector: 'htm-folder-panel',
  templateUrl: './folder-panel.component.html',
  styleUrls: ['../save-panel/save-panel.component.less', './folder-panel.component.less']
})
export class FolderPanelComponent implements OnInit {

  snapshots: SnapshotConfig[] = [];

  constructor(private snapshotService: SnapshotService, private interactionService: InteractionService,
              private loaderService: LoaderService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    if (this.snapshotService.list)
      this.snapshotService.list().then(snapshots => this.snapshots = snapshots);
  }

  apply(snapshot: SnapshotConfig) {
    this.loaderService.display(true);
    this.close();
    this.snapshotService.apply(snapshot, () => {
      this.loaderService.display(false);
    });
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
