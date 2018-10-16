import { defaultLayerType } from './../../../shared/data.service';
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
import { CalculationModuleStatusService } from '../service/calculation-module-status.service';
import { calculationModuleClassArray } from '../service/calculation-module.data';
import * as uikit from 'uikit';
import {Logger} from "../../../shared/services";
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

  private progress = 0;
  private calculationModules;
  private categories;
  private components;
  private waitingCMs = false;
  private cmSelected;
  private cmRunning;
  private panelStatus;
  private running_status_id;

  private layersFromType = [];
  constructor(
    private calculationModuleService: CalculationModuleService,
    private calculationModuleStatusService: CalculationModuleStatusService,
    private dataInteractionService: DataInteractionService,
    private helper: Helper, private logger: Logger) { }

  ngOnInit() {
    this.subscribeEvents()
    this.updateCMs();

  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnDestroy() {}

  subscribeEvents() {
    this.calculationModuleStatusService.getStatusId().subscribe((data) => {
      this.running_status_id = data;
    })
    this.calculationModuleStatusService.getIsCMRunning().subscribe((value) => {
      this.cmRunning = value
      console.log('this.cmRunning', this.cmRunning)
      // if(value===false) { this.calculationModuleStatusService.undefinedCmRunned(); }
    });
    this.calculationModuleStatusService.getProgressTime().subscribe((data) => {
      this.progress = data;
      this.logger.log('CM progress:' + this.progress)
    })
    this.calculationModuleStatusService.getPanelStatus().subscribe((value) => {
      this.panelStatus = value
      if (value === true) {
        uikit.offcanvas('#box-components').show();
        this.logger.log('cm box is shown')
      } else if (value === false) {
        this.calculationModuleStatusService.undefinedCmRunned()
        uikit.offcanvas('#box-components').hide();
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

  updateCMs() {
    this.calculationModuleService.getCalculationModuleServices().then((result) => {
      this.calculationModules = []
      this.calculationModules = result;
      this.setWaitingCMs(false);
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
    this.calculationModuleStatusService.setIsCMRunning(true)
    this.calculationModuleStatusService.setCMselected(this.cmSelected, this.components);
  }
  setWaitingCMs(val) {
    this.waitingCMs = val
  }

  selectCM(cm) {
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
    this.setWaitingCMs(true)
    this.calculationModuleService.getCalculationModuleComponents(cm.cm_id).then((values) => {
      this.components = values;
      this.setWaitingCMs(false)
    })
  }
  /* cmHidePanel() {
    this.calculationModuleStatusService.undefinedCmRunned()
    this.setWaitingCMs(false);
    this.cmRunning = false
    this.cmSelected = undefined;
    this.logger.log('cm box is hided')
  } */
  toggleCMPanel(value) {
    this.calculationModuleStatusService.setPanelStatus(value);
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
