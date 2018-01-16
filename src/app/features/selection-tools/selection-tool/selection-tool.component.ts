/**
 * Created by Dany on 20.12.17.
 */

import { Component, OnInit } from '@angular/core';

import { MapService } from '../../../pages/map/map.service';

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

  private isLoaBtnDisabled: boolean = true;
  private isClearBtnDisabled: boolean = true;

  private stButtons = [
    {id: '1', type: 'click', isChecked:true},
    {id: '2', type: 'rectangle', isChecked:false},
    {id: '3', type: 'circle', isChecked:false},
    {id: '4', type: 'polygon', isChecked:false}
  ]

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
    this.isLoaBtnDisabled = false;
  })

  this.mapService.getEnableClearAllSubjectObs().subscribe(() => {
    this.isClearBtnDisabled = false;
  })

  this.mapService.getDisableLoadResultSubjectObs().subscribe(() => {
    this.isLoaBtnDisabled = true;
  })

  this.mapService.getDisbleClearAllSubjectObs().subscribe(() => {
    this.isClearBtnDisabled = true;
  })

}

ngOnInit() {

}

/**
 * Click method when cursor selection tool is selected
 */
cursorClick() {
  const map = this.mapService.getMap();
  this.mapService.clickSelection(map);
  //$('#radio-1').prop( 'checked', true );

  this.stButtons[0].isChecked = true;
}

/**
 * Click method when square selection tool is selected
 */
/*squareClick() {
  const map = this.mapService.getMap();
  this.mapService.drawTool(map, 'rectangle');  
}*/

/**
 * Click method when circle selection tool is selected
 */
/*circleClick() {
  const map = this.mapService.getMap();
  this.mapService.drawTool(map, 'circle');
}*/

/**
 * Click method when polygon selection tool is selected
 */
/*polygonClick() {
  const map = this.mapService.getMap();
  this.mapService.drawTool(map, 'polygon');
}*/

/**
 * Draw method of the activated selection tool 
 */
drawTool(button: any){
  const map = this.mapService.getMap();
  this.mapService.drawTool(map, button.type);

  this.stButtons[0].isChecked = false;
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
