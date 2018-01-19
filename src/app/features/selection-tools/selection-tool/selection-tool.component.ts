/**
 * Created by Dany on 20.12.17.
 */

import {Component, OnInit, Input, AfterContentInit, AfterViewInit} from '@angular/core';

import { MapService } from '../../../pages/map/map.service';
import { hectare } from 'app/shared';
import { stButtons } from 'app/features/selection-tools/selection-tool/selection-button.data';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import {Logger} from "../../../shared/services/logger.service";

@Component({
  selector: 'htm-selection-tool',
  templateUrl: './selection-tool.component.html',
  styleUrls: ['./selection-tool.component.css']
})
export class SelectionToolComponent implements OnInit, OnDestroy, AfterViewInit {
  nbNutsSelected = 0;
  private scaleSelected: any;
  private subscription: Subscription;
  private subscriptionNbNutsSelected: Subscription;
  private isHectarSelected = false;
  private isLoaBtnDisabled = true;
  private isClearBtnDisabled = true;
  private stButtons = stButtons;

  constructor(private mapService: MapService, private logger: Logger) {}

  ngOnInit() {
    this.logger.log('SelectionToolComponent/ngOnInit');
    this.scaleSelected = this.mapService.getScaleValue();
    this.checkScale();
  }
  ngAfterViewInit() {
    this.logger.log('SelectionToolComponent/ngAfterViewInit');
    this.subscribeMapService();


  }
  ngOnDestroy() {
    this.logger.log('SelectionToolComponent/ngOnDestroy');
    this.subscription.unsubscribe();
    delete this.subscription;
    this.subscriptionNbNutsSelected.unsubscribe();
    delete this.subscriptionNbNutsSelected;
    delete this.scaleSelected;

  }
  subscribeMapService() {
    this.subscription = this.mapService.getScaleValueSubject().subscribe((value) => {
      this.scaleSelected = value;
      this.checkScale();
    })

    this.subscriptionNbNutsSelected = this.mapService.getNutsSelectedSubject().subscribe((value) => {
      this.nbNutsSelected = value;
    })

    // subscribing to click event subject of MapService
    this.mapService.clickEventSubjectObs.subscribe(() => {
      this.cursorClick(); // call cursor click method when we click anywhere in the map
    }
    );

    this.mapService.drawCreatedSubjectObs.subscribe(() => {
        this.cursorClick();
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
    });
  }
  cursorClick() {
    const map = this.mapService.getMap();
    this.mapService.clickSelection(map);
    this.stButtons[0].isChecked = true;
  }
  checkScale() {
    if (this.scaleSelected === hectare) {
      this.isHectarSelected = true;
    } else {
      this.isHectarSelected = false;
    }
  }
  /**
   * Draw method of the activated selection tool
   */
  drawTool(button: any) {
    if (button.type === 'click') {
      this.cursorClick()
    } else {
      const map = this.mapService.getMap();
      this.mapService.drawTool(map, button.type);
      this.stButtons[0].isChecked = false;
    }
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
    this.cursorClick();
  }



}
