import { Component, OnInit } from '@angular/core';

import { InteractionService } from 'app/shared/services/interaction.service';
import { SnapshotService } from 'app/shared/services/snapshot.service';
import {GoogleAnalyticsService} from "../../../google-analytics.service";

@Component({
  selector: 'htm-save-panel',
  templateUrl: './save-panel.component.html',
  styleUrls: ['./save-panel.component.less']
})
export class SavePanelComponent implements OnInit {

  name: string = "";
  description: string;

  constructor(private snapshotService: SnapshotService, private interactionService: InteractionService, private googleAnalyticsService:GoogleAnalyticsService) { }

  ngOnInit() { }

  save() {
    this.snapshotService.add(this.name, this.description).then(success => {
      if (success) {
        this.name = "";
        this.description = null;
        this.interactionService.closeSavePanel();

        this.googleAnalyticsService
          .eventEmitter("user_save_snapshot", "user", "save_snapshot", "click");
      }
    });
  }

  close() {
    this.interactionService.closeSavePanel();
  }
}
