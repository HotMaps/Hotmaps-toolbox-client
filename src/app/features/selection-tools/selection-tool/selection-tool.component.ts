/**
 * Created by Dany on 20.12.17.
 */

import { Component, OnInit } from '@angular/core';

import { MapService } from '../../../pages/map/map.service';
declare var jQuery: any;
import * as $ from "jquery";

@Component({
  selector: 'htm-selection-tool',
  templateUrl: './selection-tool.component.html',
  styleUrls: ['./selection-tool.component.css']
})
export class SelectionToolComponent implements OnInit {

	  nbNutsSelected = 0;
	  private scaleSelected: any;
	  private subscription: any;
    private subscriptionNbNutsSelected: any;

    constructor(private mapService: MapService) {

    this.scaleSelected = mapService.getScaleValue();
    this.subscription = mapService.getScaleValueSubject().subscribe((value) => {
      this.scaleSelected = value;
    })

    this.subscriptionNbNutsSelected = mapService.getNutsSelectedSubject().subscribe((value) => {
      this.nbNutsSelected = value;
    })

    // subscribing to click event subject of MapService
    this.mapService.clickEventSubjectObs.subscribe(() => {
        this.cursorClick(); // call cursor click method when we click anywhere in the map
      }
    );

    this.mapService.getEnableLoadResultSubjectObs().subscribe(() => {
      $("#loadBtn").removeAttr("disabled");
    })

    this.mapService.getEnableClearAllSubjectObs().subscribe(() => {
      $("#clearBtn").removeAttr("disabled");
    })

    this.mapService.getDisableLoadResultSubjectObs().subscribe(() => {
      $("#loadBtn").prop("disabled", true);
    })

    this.mapService.getDisbleClearAllSubjectObs().subscribe(() => {
      $("#clearBtn").prop("disabled", true);
    })

  }

  ngOnInit() {
    // disable the click through the 2 boxes
    const boxTools = L.DomUtil.get('selection-tools-box');
    const boxInfos = L.DomUtil.get('info-box');

    if (!L.Browser.touch) {
      L.DomEvent.disableClickPropagation(boxTools);
      L.DomEvent.disableClickPropagation(boxInfos);
      // L.DomEvent.on(div, 'mousewheel', L.DomEvent.stopPropagation);
    } else {
      L.DomEvent.on(boxTools, 'click', L.DomEvent.stopPropagation);
      L.DomEvent.on(boxInfos, 'click', L.DomEvent.stopPropagation);
    }

  }

  /**
   * Click method when cursor selection tool is selected
   */
  cursorClick() {
    const map = this.mapService.getMap();
    this.mapService.clickSelection(map);
    $('#radio-1').prop( 'checked', true );    
  }

  /**
   * Click method when square selection tool is selected
   */
  squareClick() {
    const map = this.mapService.getMap();
    this.mapService.drawTool(map, "rectangle");
  }

  /**
   * Click method when circle selection tool is selected
   */
  circleClick() {
    const map = this.mapService.getMap();
    this.mapService.drawTool(map, "circle");
  }

  /**
   * Click method when polygon selection tool is selected
   */
  polygonClick() {
    const map = this.mapService.getMap();
    this.mapService.drawTool(map, "polygon");
  }

  /**
   * Load the results of the selection
   */
  loadResultsButton() {
    const map = this.mapService.getMap();
    this.mapService.loadResultNuts(map);
  }

  /**
   * Clear all informations in the info box
   */
  clearAllButton() {
     const map = this.mapService.getMap();
     this.mapService.clearAll(map);
  }


}
