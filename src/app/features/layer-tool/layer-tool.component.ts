import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { DataInteractionClass } from '../layers-interaction/layers-interaction.class';

import { MapService } from 'app/pages/map';
import { UploadService } from 'app/shared/services/upload.service';

import { nuts3, lau2, hectare, urlLegend } from '../../shared/data.service';

@Component({
  selector: 'htm-layer-tool',
  templateUrl: './layer-tool.component.html',
  styleUrls: ['./layer-tool.component.css']
})

export class LayerToolComponent implements OnInit {
  @Input() dataInteraction: DataInteractionClass;
  private imageUrl = urlLegend;
  private isLegendDisplayed = false;
  private isInfoDisplayed = false;
  private displayLegend = false;

  private loading: boolean = false;
  private hasZoneSelected: boolean = false;


  constructor(private mapService: MapService, private uploadService: UploadService) { }

  ngOnInit() { 
    this.mapService.getLoadResultbuttonState().subscribe(value => this.hasZoneSelected = value 
      && [nuts3, lau2, hectare].indexOf(this.mapService.getScaleValue()) > -1
    );
  }

  toggleLegend() {
    this.isLegendDisplayed = !this.isLegendDisplayed;
  }
  toggleInformations() {
    this.isInfoDisplayed = !this.isInfoDisplayed;
  }

  endLoadLegend() {
    this.displayLegend = true;
  }


  export() {
    this.loading = true;
    this.uploadService.export(this.dataInteraction.workspaceName)
      .then(data => {
        if (data.url != "") {
          //window.open(data.url); //POPUP blocker          
          const a = document.createElement('a');
          a.href = data.url;
          a.download = data.filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(data.url);
        }
        this.loading = false;
      });
  }
}
