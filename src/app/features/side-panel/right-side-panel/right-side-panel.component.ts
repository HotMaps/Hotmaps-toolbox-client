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
      state('expanded', style({ width: rightPanelSize + 'px' })),
      state('collapsed', style({ width: '0px' })),
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
  }
  setSatusResults() {
    if ((this.scaleLevel === '3') || (this.scaleLevel === '2') || (this.scaleLevel === '-1')) {
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

    if (this.summaryResultStatus && this.scaleLevel !== '-1') {
      this.setSummaryPayloadIds()
    } else if (this.summaryResultStatus && this.scaleLevel === '-1') {
      this.setSummaryPayloadArea();
    } else {
      this.summaryPayload = null
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
    if (this.scaleLevel !== '-1') {
      payloadTmp = { nuts: this.summaryPayload.nuts, year: this.summaryPayload.year, layer_needed: this.cmRunned.cm.layers_needed};
    } else if (this.scaleLevel === '-1') {
      payloadTmp = { areas: this.summaryPayload.areas, year: this.summaryPayload.year, layer_needed: this.cmRunned.cm.layers_needed};
    }
    this.cmPayload = Object.assign(
      {
        url_file: 0, scalevalue: this.helper.getScaleLevelPay(this.scaleLevel),
        inputs: this.cmRunned.component, cm_id: '' + this.cmRunned.cm.cm_id,
        layers_needed: this.cmRunned.cm.layers_needed
      },
      { payload: payloadTmp }
    )
    console.log(JSON.stringify(this.cmPayload), this.summaryPayload)
  }

  setSummaryPayloadIds() {
    const payload = { layers: this.layers, year: constant_year, nuts: this.nutsIds }
    if (this.helper.isPayloadIncomplete(payload)) {
      this.interactionService.closeRightPanel();
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

    this.summaryPayload = { layers: this.layers, year: constant_year, areas: areas }
  }
  setElectricityMixPayload() {
    this.energyMixPayload = { nuts: this.nutsIds }
  }
  setHeatloadPayloadAreas() {
    this.heatLoadPayload = { areas: this.helper.getAreasForPayload(this.areas)}
  }
  setHeatloadPayloadIds() {
    this.heatLoadPayload = { nuts: this.nutsIds }
  }
  setDurationCurveIds() {
    this.durationCurvePayload = { nuts: this.nutsIds, year: constant_year_duration_curve }
  }
  setDurationCurveAreas() {
    this.durationCurvePayload = { areas: this.helper.getAreasForPayload(this.areas), year: constant_year_duration_curve}
  }




}
