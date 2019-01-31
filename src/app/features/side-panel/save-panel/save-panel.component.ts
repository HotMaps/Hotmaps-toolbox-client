import { Component, OnInit } from '@angular/core';
import { MapService } from 'app/pages/map';
import { SelectionToolService } from 'app/features/selection-tools';
import { SnapshotService } from 'app/shared/services/snapshot.service';

@Component({
  selector: 'htm-save-panel',
  templateUrl: './save-panel.component.html',
  styleUrls: ['./save-panel.component.css']
})
export class SavePanelComponent implements OnInit {

  name: string = "";
  description: string;

  constructor(private snapshotService: SnapshotService) { }

  ngOnInit() {   
  }

  save() {
    this.snapshotService.add(this.name, this.description);
  }
}
