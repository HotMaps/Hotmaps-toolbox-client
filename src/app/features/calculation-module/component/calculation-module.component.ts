import { inputs_categories, maxSurfaceValueCM } from './../../../shared/data.service';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';
import { Helper } from './../../../shared/helper';
import {GoogleAnalyticsService} from "../../../google-analytics.service";

import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {  
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'
import { CalculationModuleService } from '../service/calculation-module.service';
import { CalculationModuleStatusService } from '../service/calcultation-module-status.service';
import * as uikit from 'uikit';
import { Logger, ToasterService } from "../../../shared/services";
import {InteractionService} from "../../../shared/services/interaction.service";

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
export class CalculationModuleComponent implements OnInit, OnDestroy, OnChanges,OnDestroy {
  @Input() layersSelected;
  @Input() expanded;
  @Input() expandedState;
  @Input() selectionSurface;
  private inputs_categories = inputs_categories;
  private maxSurfaceValueCM = maxSurfaceValueCM;
  @Input() scaleLevel;
  private type_select = 'select';
  private type_input = 'input';
  private type_radio = 'radio';
  private type_range = 'range';
  private type_checkbox = 'checkbox';
  private progress = 0;
  private calculationModules;
  private categories;
  private components;
  private waitingCM = false;
  private cmSelected;
  private cmRunning;
  private layersFromType = [];
  private layersFromTypeVector = [];
  private prefix_cm='';
  constructor(
    private calculationModuleService: CalculationModuleService,
    private calculationModuleStatusService: CalculationModuleStatusService,
    private interactionService: InteractionService,
    private dataInteractionService: DataInteractionService,

    private helper: Helper, private logger: Logger,
    private toasterService: ToasterService,
    private googleAnalyticsService:GoogleAnalyticsService) { }

  ngOnInit() {
    this.subscribeEvents()
    this.updateCMs();
    this.logger.log('ngOnInit called')

  }
  ngOnChanges(changes: SimpleChanges): void {

    this.logger.log('ngOnChanges called')
  }
  ngOnDestroy() {

    this.logger.log('ngOnDestroy called')

  }
  subscribeEvents() {
    const self = this;
    this.calculationModuleStatusService.getWaitingSatus().subscribe((value) => {
      self.waitingCM = value;
    });
    this.calculationModuleStatusService.getCmAnimationStatus().subscribe((data) => {
      this.progress = data;
      if (this.progress !== 0) {

        this.cmRunning = true;
        this.interactionService.setCmRunning(this.cmRunning)
      } else {
        /* if (!this.helper.isNullOrUndefined(this.cmSelected)) {
          this.calculationModuleStatusService.undefinedCmRunned();
        } */
        this.cmRunning = false;
        this.interactionService.setCmRunning(this.cmRunning)
      }
      this.logger.log('CM progress:' + this.progress)
      this.logger.log('CM getCurrentIdCM:' + this.interactionService.getCurrentIdCM())
    })
    this.calculationModuleStatusService.getStatusCMPanel().subscribe((value) => {
      if (value === true) {
        uikit.offcanvas('#box-components').show()
        this.logger.log('cm box is shown')
      } else if (value === false) {
        try {
          uikit.offcanvas('#box-components').hide();
        } catch (error) {

        }
        this.cmHidePanel();
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
    this.interactionService.deleteCMTask();
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

  changeValueFromInputArray(event, component) {
    component.input_value = event.target.value
  }
  changeValueFromInput(event, component) {
    const newValue = event.target.value
    if ((newValue >= +component.input_min) && (newValue <= +component.input_max)) {
      component.input_value = event.target.value
    } else {
      event.target.value = component.input_value
    }
  }
  runCM() {
    this.cmSelected['cm_prefix'] = this.prefix_cm;
    this.prefix_cm='';
    this.components.forEach(comp => {
      if(!this.helper.isNullOrUndefined(comp.selected_value)){
        comp.input_value = comp.selected_value
      }
    });
    this.calculationModuleStatusService.setCmRunned(this.cmSelected, this.components);
    this.cmRunning = true;
    this.interactionService.setCmRunning(this.cmRunning)

    this.googleAnalyticsService
      .eventEmitter("cm_run_" + this.cmSelected['cm_name'], "cm", "run_" + this.cmSelected['cm_name'], "click");
  }
  setWaiting(val) {
    this.calculationModuleStatusService.setWaitingStatus(val)
  }
  setComponentCategory() {
    this.inputs_categories.map((input) => {
      input.contains_component = false
      if (this.components.filter(x => x.input_priority === input.id).length >= 1) {
        input.contains_component = true
      }
    })
  }
  getComponentFiltered(id) {
    return this.components.filter(x => x.input_priority === id)
  }
  validateAuthorizedScale(cm) {
    if(!this.helper.isNullOrUndefined(cm.authorized_scale) && cm.authorized_scale.length >= 1) {
      if (cm.authorized_scale.filter(x => x === this.scaleLevel).length >= 1) {
        return true
      } else {
        return false
      }
    } else {
      return true;
    }
  }
  stopCM() {
    this.interactionService.setCurrentIdCM(null);
    this.cmRunning = false;
    this.interactionService.setCmRunning(this.cmRunning)
  }

  selectCM(cm) {
    if(this.selectionSurface > this.maxSurfaceValueCM) {
      this.toasterService.showToasterSurfaceCalculDisabled()
    } else {
      if (this.validateAuthorizedScale(cm)) {
        this.toggleCMPanel(true)
        this.setWaiting(true)
        this.cmSelected = cm;
        this.layersFromType = [];
        if (!this.helper.isNullOrUndefined(cm.type_layer_needed)) {
          cm.type_layer_needed.map((layer) => {
            this.setLayerFromType(layer, 'raster')
          })
        }
        if (!this.helper.isNullOrUndefined(cm.type_vectors_needed)) {
          cm.type_vectors_needed.map((layer) => {
            this.setLayerFromType(layer, 'vector')
          })
        }


        this.calculationModuleService.getCalculationModuleComponents(cm.cm_id).then((values) => {
          this.components = values;
          this.components.forEach(comp => {
            comp['input_default_value'] = comp.input_value
            if(typeof comp.input_value == 'object') {
              comp.input_value = comp.input_value[0]
            }
          });
        }).then(() => {
          this.setComponentCategory();
        }).then(()=>{
          this.setWaiting(false)
        })
      } else {
        const scale_authorized = cm.authorized_scale.toString().replace(/,/g, ', ');
        this.toasterService.showToaster('Invalid scale level selected. <br/> Only <strong>' + scale_authorized + '</strong> can be choosen')
      }
    }

  }
  setLayerFromType(layer, data_type) {
    this.dataInteractionService.getLayersFromType(layer.type).then((data) => {
      if(data.length >=1) {
        this.layersFromType.push({ layerType: layer.type, layers: data, layerSelected: data[0],type_description:layer.description, data_type: data_type })
      } else {
        const layers = [{workspaceName:layer.type, name:layer.type}]
        this.layersFromType.push({ layerType: layer.type, layers: layers, layerSelected: layers[0], type_description:layer.description, data_type: data_type })
      }
    }).then(() => {
      this.setLayerNeeded()
    })
  }
  cmHidePanel() {
    this.setWaiting(true);
    this.calculationModuleStatusService.undefinedCmRunned()

    this.cmRunning = false;
    this.interactionService.setCmRunning( this.cmRunning)
    this.cmSelected = undefined;
    this.components = undefined;
    this.logger.log('cm box is hided')
    this.setWaiting(false);
  }
  toggleCMPanel(value) {
    this.calculationModuleStatusService.setStatusCMPanel(value);
  }
  getLayersFromType(layer) {
    this.dataInteractionService.getLayersFromType(layer)
  }

  setLayerNeeded() {
    this.cmSelected.layers_needed = []
    console.log(this.layersFromType)
    this.layersFromType.map((layer) => {
      console.log(layer)
      this.cmSelected.layers_needed.push({
        id:layer.layerSelected.id, 
        name:layer.layerSelected.name,
        workspaceName:layer.layerSelected.workspaceName, 
        layer_type:layer.layerSelected.layer_type, 
        data_type:layer.data_type
      })
    })
    
  }


}
