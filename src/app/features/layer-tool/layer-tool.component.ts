import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { DataInteractionClass } from '../layers-interaction/layers-interaction.class';

import { MapService } from 'app/pages/map';
import { UploadService } from 'app/shared/services/upload.service';

import { nuts0, nuts3, lau2, hectare, urlLegend, nuts2, nuts1, calculation_module_category } from '../../shared/data.service';
import {GoogleAnalyticsService} from "../../google-analytics.service";

@Component({
  selector: 'htm-layer-tool',
  templateUrl: './layer-tool.component.html',
  styleUrls: ['./layer-tool.component.css']
})

export class LayerToolComponent implements OnInit {
  @Input() dataInteraction: DataInteractionClass;
  private imageUrl = urlLegend;
  isLegendDisplayed = false;
  isInfoDisplayed = false;
  private displayLegend = false;

  loading: boolean = false;
  hasZoneSelected: boolean = false;
  calculation_module_name = calculation_module_category;


  constructor(private mapService: MapService, private uploadService: UploadService, private googleAnalyticsService:GoogleAnalyticsService) { }

  ngOnInit() {
    // display download button according to the following rules
    if (this.mapService.getLoadResultbuttonState()) {
      this.mapService.getLoadResultbuttonState().subscribe(value => {
        let availableScales = [];
        if (this.dataInteraction.category === calculation_module_category) {
          availableScales = [nuts0, nuts1, nuts2, nuts3, lau2, hectare];
        } else if (this.dataInteraction.dataType) {
          if (this.dataInteraction.dataType === 'raster')
            availableScales = [nuts3, lau2, hectare];
          else if (this.dataInteraction.dataType === 'shp')
            availableScales = [nuts2, nuts3, lau2, hectare];
          else if (this.dataInteraction.dataType === 'csv')
            availableScales = this.dataInteraction.scales ? this.dataInteraction.scales : [nuts2, nuts3, lau2, hectare];
          else
            throw Error("This dataType is not supported.")
        } else {
          console.log("This layer (" + this.dataInteraction.name + ") can't be downloaded.");
        }

        this.hasZoneSelected = value && availableScales.indexOf(this.mapService.getScaleValue()) > -1;
      })
    }
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
    this.uploadService.export(this.dataInteraction.workspaceName, this.dataInteraction.cm_id, this.dataInteraction.schema, this.dataInteraction.layerName, this.dataInteraction.year)
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

          this.googleAnalyticsService
            .eventEmitter("map_layers_export_selection", "map", "layers_export_selection", "click");
        }
        this.loading = false;
      });
  }

  gaOpenRepo(){
    this.googleAnalyticsService
      .eventEmitter("map_layers_open_repo", "map", "layers_open_repo", "click");
  }
}
