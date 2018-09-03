import { MapService } from './../../../pages/map/map.service';
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
import {Logger} from "../../../shared/services";

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
  @Input() progress = 10;
  private calculationModules;
  private categories;
  private components;
  private cmName;
  private waitingCM = false;
  private cmSelected;
  constructor(
    private calculationModuleService: CalculationModuleService,
    private calculationModuleStatusService: CalculationModuleStatusService,
    private mapService: MapService,
    private helper: Helper, private logger: Logger) { }

  ngOnInit() {
    this.subscribeEvents()
    this.updateCMs()
    var bar = document.getElementById('js-progressbar');

    let animate = setInterval(function () {

      this.progress += 10;

      if (this.progress >= 100) {
        clearInterval(animate);
      }

    }, 1000);
  }
  ngOnChanges(changes: SimpleChanges): void {
/*     console.log(changes.layersSelected.currentValue)
 */
    this.isCmsReadable();
    console.log(this.calculationModules, this.categories)
    // this.layersSelected.includes(this.calculationModules.layer_needed)
  }
  ngOnDestroy() { }

  subscribeEvents() {
    const self = this;
    this.calculationModuleStatusService.getWaitingSatus().subscribe((value) => {
      self.waitingCM = value;
    });
    this.calculationModuleStatusService.getStatusCMPanel().subscribe((value) => {
      if (value === true) {
        uikit.offcanvas('#box-components').show()
        console.log('cm box is shown')
      } else if (value === false) {
        uikit.offcanvas('#box-components').hide()
        this.cmHidePanel()
      }
    })
  }
  isCmsReadable() {
    if (!this.helper.isNullOrUndefined(this.calculationModules)) {
      this.calculationModules.map((cm) => {
        for (const layer of cm.layers_needed) {
          console.log(layer)
          if (this.layersSelected.filter(lay => lay === layer).length === 0) {
            cm['isReadable'] = false;
            break
          } else {
            cm['isReadable'] = true;
          }
          console.log(layer)
        }

      })
    }
  }
  resetCM() {
    /*console.log(this.cmSelected)
    this.mapService.removeCmLayer(this.cmSelected.cm_id)
    this.cmSelected.status_id = '';
    this.cmSelected.isApiRequestInTreatment = false;
    this.calculationModuleStatusService.undefinedCmRunned()*/
  }
  updateCMs() {
    this.logger.log('updateCMs/')
    this.calculationModuleService.getCalculationModuleServices().then((result) => {
      this.calculationModules = []
      this.calculationModules = result;
      this.setWaiting(false);
    }).then(() => {
      this.isCmsReadable()
      this.calculationModuleService.getCalculationModuleCategories(this.calculationModules).then((categories) => {
        this.categories = []
        this.categories = categories;
      })
    });
  }
  changeValue(event, component) {
    const newValue = event.target.value
    if ((newValue >= component.input_min) && (newValue <= component.input_max)) {
      component.input_value = event.target.value
    } else {
      event.target.value = component.input_value
    }
  }
  runCM() {

      this.calculationModuleStatusService.setCmRunned(this.cmSelected, this.components);

  }
  setWaiting(val) {
    this.calculationModuleStatusService.setWaitingStatus(val)

  }
  selectCM(cm) {
    this.cmSelected = cm
    this.toggleCMPanel(true)
    this.cmName = cm.cm_name;
    this.setWaiting(true)
    this.calculationModuleService.getCalculationModuleComponents(cm.cm_id).then((values) => {
      this.components = values;
      this.setWaiting(false)
    })
  }
  cmHidePanel() {
    this.calculationModuleStatusService.undefinedCmRunned()
    this.setWaiting(false);
    this.cmSelected = undefined;
    console.log('cm box is hided')
  }
  toggleCMPanel(value) {
    this.calculationModuleStatusService.setStatusCMPanel(value);
  }
}
