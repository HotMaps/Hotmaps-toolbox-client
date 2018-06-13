import { CalculationHeatLoadDividedService } from 'app/features/calculation-module/service/calculation-test.service';
import { Helper } from './../../../shared/helper';

import {
  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CalculationModuleService } from '../service/calculation-module.service';
import { CalculationModuleStatusService } from '../service/calcultation-module-status.service';
import { calculationModuleClassArray } from '../service/calculation-module.data';
import * as uikit from 'uikit';

@Component({
  selector: 'htm-cms',
  templateUrl: 'calculation-module.component.html',
  styleUrls: ['calculation-module.component.css'],
  animations: [
    // Formulare trigger
    trigger('cmTrigger', [
      state('expanded', style({ opacity: 1 })),
      state('collapsed', style({ opacity: 0 })),
      transition('collapsed => expanded', animate('200ms 150ms linear')),
      transition('expanded => collapsed', animate('100ms linear'))
    ]),
  ]
})
export class CalculationModuleComponent implements OnInit, OnDestroy, OnChanges {
  @Input() layersSelected;
  @Input() expanded;
  @Input() expandedState;
  private calculationModules;
  private categories;
  private components;
  private cmName;
  private waitingCM = false;
  private cmSelected;
  constructor(
    private calculationModuleService: CalculationModuleService,
    private calculationModuleStatusService: CalculationModuleStatusService,
    private helper: Helper) { }

  ngOnInit() {
    this.subscribeEvents()
  }
  ngOnChanges(changes: SimpleChanges): void {
/*     console.log(changes.layersSelected.currentValue)
 */
    if (!this.helper.isNullOrUndefined(this.calculationModules)) {
      this.calculationModules.map((cm) => {
        for (const layer of cm.layer_needed) {
          console.log(layer)
          if (this.layersSelected.filter(lay => lay === layer).length === 0) {
            cm.isReadable = false;
            break
          } else {
            cm.isReadable = true;
          }
          console.log(layer)
        }

      })
    }
    this.updateCMs()
    console.log(this.calculationModules, this.categories)
    // this.layersSelected.includes(this.calculationModules.layer_needed)
  }
  ngOnDestroy() { }

  subscribeEvents() {
    const self = this;
    this.calculationModuleStatusService.getWaitingSatus().subscribe((value) => {
      self.waitingCM = value;
    });
    // Event trigger for the cm panel
    uikit.util.on('#box-components', 'show', function () {
      console.log('cm box is shown')
    });
    uikit.util.on('#box-components', 'hide', function () {
      self.calculationModuleStatusService.undefinedCmRunned()
      self.setWaiting(false);
      self.cmSelected = undefined;
      console.log('cm box is hided')
    });
  }
  updateCMs() {
    this.calculationModuleService.getcalculationModuleServicesPromise().then((result) => {
      this.calculationModules = []
      this.calculationModules = result;
      this.setWaiting(false);
    });
    this.calculationModuleService.getCalculationModuleCategories().then((categories) => {
      this.categories = {}
      this.categories = categories;
    });

  }
  changeValue(event, component) {
    const newValue = event.target.value
    if ((newValue >= component.min) && (newValue <= component.max)) {
      component.value = event.target.value
    } else {
      event.target.value = component.value
    }
  }
  runCM() {
    if (this.cmSelected.id === 'calculation_module_1') {
      this.calculationModuleStatusService.setCmRunned(this.cmSelected, this.components);
    }
  }
  setWaiting(val) {
    this.calculationModuleStatusService.setWaitingStatus(val)

  }
  selectCM(cm) {
    this.cmSelected = cm
    uikit.offcanvas('#box-components').show()
    this.cmName = cm.cm_name;
    this.setWaiting(true)
    this.calculationModuleService.getComponentsByCMIdSlowly(cm.id).then((values) => {
      this.components = values;
      this.setWaiting(false)
    })
  }
  closeCMpage() {
    uikit.offcanvas('#box-components').hide()
  }
}
