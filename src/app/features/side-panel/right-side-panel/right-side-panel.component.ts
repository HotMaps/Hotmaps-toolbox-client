import { Payload } from './../../population/payload.class';
// TODO: Improvement of coding style :
// TODO: leaving one empty line between third party imports and application imports
// TODO: listing import lines alphabetized by the module

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
  OnChanges
} from '@angular/core';
import { SideComponent } from '../side-panel.component';
import { Layer } from './../../summary-result/summary-result.class';
import { InteractionService } from 'app/shared/services/interaction.service';
import { rightPanelSize } from 'app/shared';
import { Logger } from '../../../shared/services/logger.service';
import { DataInteractionService } from '../../layers-interaction/layers-interaction.service';

import { Helper } from 'app/shared';
import { PlayloadStatNuts, PayloadStatHectar } from 'app/features/summary-result/class/payload.class';
import {
  hectare,
  constant_year,
  default_drop_down_button,
  summay_drop_down_buttons,
  apiUrl,
  constant_year_duration_curve
} from '../../../shared/data.service';
import { Observable } from 'rxjs';
import { timer } from 'rxjs/observable/timer';




@Component({
  moduleId: module.id,
  selector: 'htm-right-side-panel',
  templateUrl: 'right-side-panel.component.html',
  styleUrls: ['right-side-panel.component.css'],
  animations: [

    trigger('panelWidthTrigger', [
      state('expanded', style({ width: rightPanelSize + 'px', display:'block' })),
      state('collapsed', style({ width: '0px', display:'none' })),
      transition('collapsed => expanded', animate('200ms ease-in')),
      transition('expanded => collapsed', animate('200ms 200ms ease-out'))
    ]),
    trigger('titleColorTrigger', [
      state('collapsed', style({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
      state('expanded', style({ backgroundColor: '#333333', color: '#FFFFFF' })),
      transition('collapsed => expanded', animate('200ms ease-in')),
      transition('expanded => collapsed', animate('200ms 200ms ease-out'))
    ]),
    trigger('titleTextTrigger', [
      state('in', style({ opacity: '1' })),
      transition('void => *', [style({ opacity: '0' }),
      animate('100ms 300ms')
      ]),
      transition('* => void', [
        animate('50ms', style({ opacity: '0' }))
      ])
    ]),
    trigger('iconTrigger', [
      transition('collapsed => expanded', animate('200ms ease-in')),
      transition('expanded => collapsed', animate('200ms ease-out'))
    ])
  ]
})
export class RightSideComponent extends SideComponent implements OnInit, OnDestroy, OnChanges {
  // Improvement of coding style :
  // place private members after public members, alphabetized
  // private summaryResult: SummaryResultClass = null;

  @Input() nutsIds;
  @Input() layers;
  @Input() scaleLevel;
  @Input() locationsSelection;
  @Input() areas;
  @Input() cmRunned;
  @Input() personnalLayers;
  private cmTimeout;


  private poiTitle;


  // Components status
  private heatloadStatus = false;
  private electricityMixStatus = false;
  private durationCurveStatus = false;
  private summaryResultStatus = false

  private cmPayload;
  private summaryPayload;
  private energyMixPayload;
  private heatLoadPayload;
  private durationCurvePayload;
  private personnalLayerPayload;


  private loadingData = false;

  private splittedResults;
  private summaryResult;




  constructor(protected interactionService: InteractionService, private helper: Helper, private logger: Logger,
    private dataInteractionService: DataInteractionService) {
    super(interactionService);
  }


  ngOnInit() { }
  ngOnDestroy() { }
  ngOnChanges() {
    this.logger.log('RightSidePanelComponent/ngOnChanges')
    if (this.expanded === true) {
      this.setSatusResults();
      this.updateAll()
    } else {
      this.resetPayloads()
    }
  }
  resetPayloads() {
    this.cmPayload = null;
    this.summaryPayload = null;
    this.energyMixPayload = null;
    this.heatLoadPayload = null;
    this.durationCurvePayload = null;
    this.personnalLayerPayload = null;
  }
  setSatusResults() {
    if ((this.scaleLevel === '4') || (this.scaleLevel === '3') || (this.scaleLevel === '2') || (this.scaleLevel === '-1')) {
      this.heatloadStatus = true;
      this.durationCurveStatus = true;
    } else {
      this.heatloadStatus = false;
      this.durationCurveStatus = false;
    }

    if (this.scaleLevel === '0') {
      this.electricityMixStatus = true;
    } else {
      this.electricityMixStatus = false;
    }
    this.summaryResultStatus = true

  }
  updateAll() {
    if (this.summaryResultStatus && this.scaleLevel !== '-1') {
      this.setSummaryPayloadIds()
    } else if (this.summaryResultStatus && this.scaleLevel === '-1') {
      this.setSummaryPayloadArea();
    } else {
      this.summaryPayload = null
    }

    if (this.heatloadStatus && this.scaleLevel !== '-1') {
      this.setHeatloadPayloadIds()
    } else if (this.heatloadStatus && this.scaleLevel === '-1') {
      this.setHeatloadPayloadAreas()
    } else {
      this.heatLoadPayload = null
    }
    if (this.durationCurveStatus && this.scaleLevel !== '-1') {
      this.setDurationCurveIds()
    } else if (this.durationCurveStatus && this.scaleLevel === '-1') {
      this.setDurationCurveAreas()
    } else {
      this.durationCurvePayload = null;
    }


    if (this.electricityMixStatus) {
      this.setElectricityMixPayload()
    } else {
      this.energyMixPayload = null
    }
    if(Object.keys(this.personnalLayers).length >= 1) {
      this.setPersonnalLayerPayload()
    } else {
      this.personnalLayerPayload = null
    }


    if (this.cmRunned) {
      this.setCMPayload()
    } else {
      this.cmPayload = null
    }

  }
  // Create payloads
  setCMPayload() {
    let payloadTmp;
    let cm_name='';
    if (this.scaleLevel !== '-1') {
      payloadTmp = { nuts: this.summaryPayload.nuts, year: this.summaryPayload.year, layers_needed: this.cmRunned.cm.layers_needed, type_layer_needed: this.cmRunned.cm.type_layer_needed, vectors_needed: this.cmRunned.cm.vectors_needed};
      this.logger.log('this.cmRunned.cm.type_layer_needed ' +this.cmRunned.cm.type_layer_needed)
    } else if (this.scaleLevel === '-1') {
      payloadTmp = { areas: this.summaryPayload.areas, year: this.summaryPayload.year, layers_needed: this.cmRunned.cm.layers_needed, type_layer_needed: this.cmRunned.cm.type_layer_needed, vectors_needed: this.cmRunned.cm.vectors_needed};
      this.logger.log('this.cmRunned.cm.type_layer_needed ' +this.cmRunned.cm.type_layer_needed)
    }
    if(!this.helper.isNullOrUndefined(this.cmRunned.cm.cm_prefix)  && this.cmRunned.cm.cm_prefix!='') {
      cm_name+=this.cmRunned.cm.cm_prefix + ' - '
    }
    cm_name += this.cmRunned.cm.cm_name
    this.cmPayload = Object.assign(
      {
        url_file: 0, scalevalue: this.helper.getScaleLevelPay(this.scaleLevel),
        inputs: this.cmRunned.component, cm_id: '' + this.cmRunned.cm.cm_id, cm_name:cm_name
      },
      { payload: payloadTmp }
    )
  }
  setPersonnalLayerPayload(){
    this.personnalLayerPayload={'layers':[],scale_level: this.helper.getScaleLevelPay(this.scaleLevel), areas: (this.scaleLevel==='-1') ? this.helper.getAreasForPayload(this.areas) : this.nutsIds }
    for(let key in this.personnalLayers) { this.personnalLayerPayload['layers'].push(this.personnalLayers[key]) }
    console.log(this.personnalLayerPayload)
  }

  setSummaryPayloadIds() {
    const payload = { layers: this.layers, year: constant_year, scale_level: this.interactionService.getScaleLevel(), nuts: this.nutsIds }
    if (this.helper.isPayloadIncomplete(payload) && Object.keys(this.personnalLayers).length == 0) {
      this.interactionService.disableRightPanel();
      return;
    }
    this.summaryPayload = payload
  }

  setSummaryPayloadArea() {
    const areas = this.helper.getAreasForPayload(this.areas)
    /*this.logger.log('RightSidePanelComponent/areas()' + JSON.stringify(areas))
     if (areas.length === 0) {
      this.logger.log('RightSidePanelComponent/areas().lenght === 0')
      this.setIsDataRunning(false);
      return
    }; */

    this.summaryPayload = { layers: this.layers, year: constant_year, scale_level: this.interactionService.getScaleLevel(),areas: areas }
  }
  setElectricityMixPayload() {
    this.energyMixPayload = { nuts: this.nutsIds }
  }
  setHeatloadPayloadAreas() {
    this.heatLoadPayload = { areas: this.helper.getAreasForPayload(this.areas), scale_level: this.interactionService.getScaleLevel()}
  }
  setHeatloadPayloadIds() {
    this.heatLoadPayload = { nuts: this.nutsIds, scale_level: this.interactionService.getScaleLevel() }
  }
  setDurationCurveIds() {
    this.durationCurvePayload = { nuts: this.nutsIds, year: constant_year_duration_curve, scale_level: this.interactionService.getScaleLevel() }
  }
  setDurationCurveAreas() {
    this.durationCurvePayload = { areas: this.helper.getAreasForPayload(this.areas), year: constant_year_duration_curve, }
  }




}
