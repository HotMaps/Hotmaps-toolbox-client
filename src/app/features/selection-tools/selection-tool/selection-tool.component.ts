/**
 * Created by Dany on 20.12.17.
 */

import { Component, OnInit } from '@angular/core';

import { SelectionScaleService } from '../../selection-scale/selection-scale.service';
import { SelectionToolService } from '../selection-tool.service';
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
	  private scaleSelected: string;
	  private subscription: any;
    constructor(private selectionScaleService: SelectionScaleService,
    private selectionToolService: SelectionToolService,
    private mapService: MapService) {
    this.scaleSelected = selectionScaleService.getScaleValue();
    this.subscription = selectionScaleService.scaleValueSubject.subscribe((value) => {
      this.scaleSelected = value;
    });

    // subscribing to click event subject of MapService
    this.mapService.clickEventSubjectObs.subscribe(() => {
        this.cursorClick(); // call cursor click method when we click anywhere in the map
      }
    );

    this.selectionToolService.enableLoadResultSubjectObs.subscribe(() => {
      $("#loadBtn").removeAttr("disabled");
    })

    this.selectionToolService.enableClearAllSubjectObs.subscribe(() => {
      $("#clearBtn").removeAttr("disabled");
    })

    this.selectionToolService.disableLoadResultSubjectObs.subscribe(() => {
      $("#loadBtn").prop("disabled", true);
    })

    this.selectionToolService.disbleClearAllSubjectObs.subscribe(() => {
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
    this.selectionToolService.clickSelection(this.mapService.getMap());
    $('#radio-1').prop( 'checked', true );
  }

  /**
   * Click method when square selection tool is selected
   */
  squareClick() {
    this.selectionToolService.drawRectangle(this.mapService.getMap());
  }

  /**
   * Click method when circle selection tool is selected
   */
  circleClick() {
    this.selectionToolService.drawCircle(this.mapService.getMap());
  }

  /**
   * Click method when polygon selection tool is selected
   */
  polygonClick() {
    this.selectionToolService.drawPolygon(this.mapService.getMap());
  }

  /**
   * Load the results of the selection
   */
  loadResultsButton() {
    const currentLayer = this.selectionToolService.getCurrentLayer();
    const map = this.mapService.getMap();
    this.selectionToolService.loadResults(map, currentLayer);
  }

  /**
   * Clear all informations in the info box
   */
  clearAllButton() {
     this.selectionToolService.clearAll(this.mapService.getMap());
  }


}
