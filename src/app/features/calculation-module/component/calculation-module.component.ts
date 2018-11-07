import { defaultLayerType, inputs_categories } from './../../../shared/data.service';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';
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
import {Logger, ToasterService} from "../../../shared/services";
import { population_type, wwtp_type, gfa_type } from '../../layers-interaction/layers-interaction.data';

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
  private inputs_categories = inputs_categories;
  @Input() scaleLevel;
  private progress = 0;
  private calculationModules;
  private categories;
  private components;
  private waitingCM = false;
  private cmSelected;
  private cmRunning;
  private layersFromType = [];
  constructor(
    private calculationModuleService: CalculationModuleService,
    private calculationModuleStatusService: CalculationModuleStatusService,
    private dataInteractionService: DataInteractionService,
    private helper: Helper, private logger: Logger,
    private  toasterService: ToasterService) { }

  ngOnInit() {
    this.subscribeEvents()
    this.updateCMs();

  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnDestroy() {}

  subscribeEvents() {
    const self = this;
    this.calculationModuleStatusService.getWaitingSatus().subscribe((value) => {
      self.waitingCM = value;
    });
    this.calculationModuleStatusService.getCmAnimationStatus().subscribe((data) => {
      this.progress = data;
      if (this.progress !== 0) {
        this.cmRunning = true;
      } else {
        /* if (!this.helper.isNullOrUndefined(this.cmSelected)) {
          this.calculationModuleStatusService.undefinedCmRunned();
        } */
        this.cmRunning = false;
      }
      this.logger.log('CM progress:' + this.progress)
    })
    this.calculationModuleStatusService.getStatusCMPanel().subscribe((value) => {
      if (value === true) {
        uikit.offcanvas('#box-components').show()
        this.logger.log('cm box is shown')
      } else if (value === false) {
        uikit.offcanvas('#box-components').hide()
        this.cmHidePanel()
      }
    })
  }
  isCmsReadable() {

    if (!this.helper.isNullOrUndefined(this.calculationModules)) {
      this.calculationModules.map((cm) => {
        cm['isReadable'] = true;
      })
    }
  }
  resetCM() {
    this.cmSelected.status_id = '';
    this.cmSelected.isApiRequestInTreatment = false;
    this.calculationModuleStatusService.undefinedCmRunned();
  }
  updateCMs() {
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
    this.cmRunning = true;
    this.calculationModuleStatusService.setCmRunned(this.cmSelected, this.components);
  }
  setWaiting(val) {
    this.calculationModuleStatusService.setWaitingStatus(val)

  }
  setComponentCategory() {
    this.inputs_categories.map((input) => {
      input.contains_component = false
      if (this.components.filter(x => x.category === input.id).length >= 1) {
        input.contains_component = true
      }
    })
  }
  validateAuthorizedScale(cm) {
    if(!this.helper.isNullOrUndefined(cm.authorized_scale)) {
      if (cm.authorized_scale.filter(x => x === this.scaleLevel).length >= 1) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
  selectCM(cm) {
    if (this.validateAuthorizedScale(cm)) {
      this.layersFromType = [];
      if (!this.helper.isNullOrUndefined(cm.type_layer_needed)) {
        cm.type_layer_needed.map((layerType) => {
          this.dataInteractionService.getLayersFromType(layerType).then((data) => {
            this.layersFromType.push({layerType: layerType, layers: data, layerSelected: data[0].workspaceName})
          }).then(() => {
            this.setLayerNeeded()
          })
        })
      }
      this.cmSelected = cm;

    this.toggleCMPanel(true)
    this.setWaiting(true)

    this.calculationModuleService.getCalculationModuleComponents(cm.cm_id).then((values) => {
      this.components = values;
    }).then(() => {
      this.setComponentCategory();
      console.log(this.inputs_categories)
      this.setWaiting(false)
    })
      this.toggleCMPanel(true)
      this.setWaiting(true)
      this.calculationModuleService.getCalculationModuleComponents(cm.cm_id).then((values) => {
        this.components = values;
        this.setWaiting(false)
      })
    } else {
      const scale_authorized = cm.authorized_scale.toString().replace(/,/g, ', ');
      this.toasterService.showToaster('Invalid scale level selected. <br/> Only <strong>' + scale_authorized + '</strong> can be choosen')
    }
  }
  cmHidePanel() {
    this.calculationModuleStatusService.undefinedCmRunned()
    this.setWaiting(false);
    this.cmRunning = false
    this.cmSelected = undefined;
    this.logger.log('cm box is hided')
  }
  toggleCMPanel(value) {
    this.calculationModuleStatusService.setStatusCMPanel(value);
  }
  getLayersFromType(layer) {
    this.dataInteractionService.getLayersFromType(layer)
  }

  setLayerNeeded() {
    this.cmSelected.layers_needed = []
    this.layersFromType.map((layer) => {
      this.cmSelected.layers_needed.push(layer.layerSelected)
    })
  }
}
