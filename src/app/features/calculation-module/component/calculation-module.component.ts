import { calculationModuleClassArray } from '../service/calculation-module.data';

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
    ViewChild
} from '@angular/core';
import { CalculationModuleService } from '../service/calculation-module.service';
import { CalculationModuleStatusService } from '../service/calcultation-module-status.service';
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
export class CalculationModuleComponent implements OnInit, OnDestroy {
  @Input() expanded;
  @Input() expandedState;
  private calculationModules;
  private categories;
  private components;
  private cmName;
  private waitingCM = false
  constructor(
    private calculationModuleService: CalculationModuleService,
    private calculationModuleStatusService: CalculationModuleStatusService) { }
  ngOnInit() {
    this.subscribeEvents()
  }
  ngOnDestroy() { }

  subscribeEvents() {
    const self = this;
    this.calculationModuleService.getcalculationModuleServicesPromise().then((result) => {
      self.calculationModules = result;
      self.setWaiting(false);
    });
    this.calculationModuleService.getCalculationModuleCategories().then((categories) => {
      self.categories = categories;
    });
    this.calculationModuleStatusService.getWaitingSatus().subscribe((value) => {
      self.waitingCM = value;
    });
    // Event trigger for the cm panel
    uikit.util.on('#box-components', 'show', function () {
      console.log('cm box is shown')
    });
    uikit.util.on('#box-components', 'hide', function () {
      self.setWaiting(false)
      console.log('cm box is hided')
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
  runCM(cm) {
    console.log(cm)
  }
  setWaiting(val) {
    this.calculationModuleStatusService.setWaitingStatus(val)

  }
  getComponents(cm) {
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
