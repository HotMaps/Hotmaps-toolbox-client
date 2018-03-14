/**
 * Created by Dany on 20.12.17.
 */

import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

import { MapService } from '../../../pages/map/map.service';
import { hectare, Helper } from 'app/shared';
import { stButtons, defaultElementSelected } from 'app/features/selection-tools/component/selection-button.data';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import {Logger} from '../../../shared/services/logger.service';

@Component({
  selector: 'htm-selection-tool',
  templateUrl: './selection-tool.component.html',
  styleUrls: ['./selection-tool.component.css'],
  animations: [
        trigger('containerTrigger', [
            transition(":enter", [
              style({ opacity: 0 }),
              animate(250, style({ opacity: 1 }))
            ]),
            transition(":leave", [
              animate(250, style({ opacity: 0 }))
            ])
        ]),
        trigger('elementsTrigger', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [style({ opacity: '0' }),
            animate('100ms 200ms')
            ]),
            transition('* => void', [
                animate('50ms', style({ opacity: '0' }))
            ])
        ])]
})
export class SelectionToolComponent implements OnInit, OnDestroy {
  nbElementsSelected = 0;
  private scaleSelected: any;
  private subscription: Subscription;
  private subscriptionNbNutsSelected: Subscription;
  private isHectarSelected = false;
  private isLoaBtnDisabled = true;
  private isClearBtnDisabled = true;
  private stButtons = stButtons;
  private layerSelected;
  private elementSelected = defaultElementSelected;

  constructor(private mapService: MapService, private logger: Logger, private helper: Helper) {}

  ngOnInit() {
    this.subscribeMapService();
    this.scaleSelected = this.mapService.getScaleValue();

  }
  ngOnDestroy() {
    this.logger.log('SelectionToolComponent/ngOnDestroy');
    this.subscription.unsubscribe();
    this.subscriptionNbNutsSelected.unsubscribe();

  }
  subscribeMapService() {
    if (!this.helper.isNullOrUndefined(this.mapService.getScaleValueSubject())) {
      this.subscription = this.mapService.getScaleValueSubject().subscribe((value) => {
        this.scaleSelected = value;
        if (value === hectare) {
          this.elementSelected = 'Zones selected'
        } else {
          this.elementSelected = defaultElementSelected;
        }
      })
    }

    if (!this.helper.isNullOrUndefined(this.mapService.getNutsSelectedSubject())) {
      this.subscriptionNbNutsSelected = this.mapService.getNutsSelectedSubject().subscribe((value) => {
        this.nbElementsSelected = value;
      })
    }
    if (!this.helper.isNullOrUndefined(this.mapService.getScaleValueSubject())) {
      this.subscription = this.mapService.getScaleValueSubject().subscribe((value) => {
        this.scaleSelected = value;
        if (value === hectare) {
          this.elementSelected = 'Zones selected'
        } else {
          this.elementSelected = defaultElementSelected;
        }

      })
    }
    if (!this.helper.isNullOrUndefined(this.mapService.getNbOfLayersSelected())) {
      this.mapService.getNbOfLayersSelected().subscribe((value) => {
        this.layerSelected = value;
      })
    }
    if (!this.helper.isNullOrUndefined(this.mapService.getNutsSelectedSubject())) {
      this.subscriptionNbNutsSelected = this.mapService.getNutsSelectedSubject().subscribe((value) => {
        this.nbElementsSelected = value;
      })

    }

    // subscribing to click event subject of MapService
    if (!this.helper.isNullOrUndefined(this.mapService.clickEventSubjectObs)) {
        this.mapService.clickEventSubjectObs.subscribe(() => {
          this.cursorClick(); // call cursor click method when we click anywhere in the map
        });
    }

    if (!this.helper.isNullOrUndefined(this.mapService.drawCreatedSubjectObs)) {
      this.mapService.drawCreatedSubjectObs.subscribe(() => {
        this.cursorClick();
      });
    }
    if (!this.helper.isNullOrUndefined(this.mapService.getClearAllButtonSubject())) {
      this.mapService.getClearAllButtonSubject().subscribe((value) => {
        this.isClearBtnDisabled = !value;
      })
    }

    if (!this.helper.isNullOrUndefined(this.mapService.getLoadResultbuttonState())) {
      this.mapService.getLoadResultbuttonState().subscribe((value) => {
        this.isLoaBtnDisabled = !value;
      })
    }
  }

  cursorClick() {
    const map = this.mapService.getMap();
    this.mapService.clickSelection(map);
    this.stButtons[0].isChecked = true;
  }
  /**
   * Draw method of the activated selection tool
   */
  drawTool(button: any) {
    if (button.type === 'click') {
      this.cursorClick()
    } else {
      const map = this.mapService.getMap();
      this.mapService.activateDrawTool(map, button.type);
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

  setClearButtonText() {
    
    let zoneString = ' zones';
    if (this.layerSelected === 1 || this.nbElementsSelected === 1) {
      zoneString = ' zone';
    }
    if (this.layerSelected >= 1) {
      return 'Clear ' + this.layerSelected + zoneString;
    } else if (this.layerSelected === 0) {
      return 'Clear ' + this.nbElementsSelected + zoneString;
    }
  }
  clearLayers() {
    if (this.layerSelected >= 1) {
      this.mapService.deleteSelectedAreas();
    } else {
      this.mapService.clearAll(this.mapService.getMap());
      this.cursorClick();
    }
    if (this.nbElementsSelected == 0){
      this.mapService.clearAll(this.mapService.getMap());
      this.cursorClick();
    }
  }
}
