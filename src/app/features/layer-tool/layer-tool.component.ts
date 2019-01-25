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

export class LayerToolComponent implements OnInit, DoCheck {
  @Input() dataInteraction: DataInteractionClass;
  private imageUrl = urlLegend;
  private isLegendDisplayed = false;
  private isInfoDisplayed = false;
  private displayLegend = false;

  private loading: boolean = false;
  private hasZoneSelected: boolean = false;


  constructor(private mapService: MapService, private uploadService: UploadService) { }

  ngOnInit() { }

  ngDoCheck() {    
    this.hasZoneSelected = this.mapService.getLoadResultbuttonState().getValue() && 
      [nuts3, lau2, hectare].indexOf(this.mapService.getScaleValue()) > -1;
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
      .then(url => {
        // window.open(url); //POPUP blocker
        if (url != "") {
          const a = document.createElement('a');
          a.href = url;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
        this.loading = false;
      });
  }
}
