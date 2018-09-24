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
  ngOnChanges(changes) {
    console.log('RightSidePanelComponent/ngOnChanges')

    console.log(changes)
    if (this.expanded === true) {
      this.setSatusResults();
      this.updateAll()
    }
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
    }

    if (this.durationCurveStatus && this.scaleLevel !== '-1') {
      this.setDurationCurveIds()
    } else if (this.durationCurveStatus && this.scaleLevel === '-1') {
      this.setDurationCurveAreas()
    }
    if (this.electricityMixStatus) {
      this.setElectricityMixPayload()
    }

    if (this.summaryResultStatus && this.scaleLevel !== '-1') {
      this.setSummaryPayloadIds()
    } else if (this.summaryResultStatus && this.scaleLevel === '-1') {
      this.setSummaryPayloadArea();
    }

    if (this.cmRunned) {
      this.setCMPayload()
    }

  }
  // Create payloads
  setCMPayload() {
    this.cmPayload = Object.assign({ url_file: 0, inputs: this.cmRunned.component, cm_id: '' + this.cmRunned.cm.cm_id}, {payload: this.summaryPayload})

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
    const areas = this.getAreas()
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
    console.log('setElectricityMixPayload()', this.energyMixPayload)
  }
  setHeatloadPayloadAreas() {
    this.heatLoadPayload = { areas: this.getAreas()}
  }
  setHeatloadPayloadIds() {
    this.heatLoadPayload = { nuts: this.nutsIds }
  }
  setDurationCurveIds() {
    this.durationCurvePayload = { nuts: this.nutsIds, year: constant_year_duration_curve }
  }
  setDurationCurveAreas() {
    this.heatLoadPayload = { areas: this.getAreas(), year: constant_year_duration_curve}
  }


  getAreas(){
    const areas = [];
    this.areas.map((layer: Layer) => {
      const points = [];
      if (layer instanceof L.Circle) {
        areas.push({ points: this.helper.getLocationsFromCicle(layer) })
      } else {
        areas.push({ points: this.helper.getLocationsFromPolygon(layer) })
      }
    });
    return areas
  }



  loadExportData(buttonRef) {
    const indicatorResults = this.splittedResults[buttonRef];
    this.interactionService.displayButtonExport(!this.loadingData);
    this.interactionService.setSummaryData(indicatorResults);

    if (this.helper.isResultDataEmpty(indicatorResults)) {
      this.interactionService.displayButtonExport(false)
    }
  }
  clickTab(id: string) {
    this.logger.log('clickTab' + id);
    this.interactionService.setTabsSelectedName(id);
  }

  setExportButtonState(val: boolean) {
    this.interactionService.setSummaryResultState(!val);
    this.interactionService.displayButtonExport(val);
  }

  setSummaryResultState(val) {
    this.loadingData = val;
    this.interactionService.setSummaryResultState(val);
  }
  setIsDataRunning(val) {
    this.setSummaryResultState(val);
    this.setExportButtonState(!val)
  }
  update(payload) {
    if (this.helper.isPayloadIncomplete(payload)) {
      this.interactionService.closeRightPanel();
      return;
    }
    this.setIsDataRunning(true);
    const self = this;
  }

  updateCMResult(areas) {
    this.runAnimation()
    if (!this.helper.isNullOrUndefined(this.cmRunned)) {
      this.logger.log('cmRunned ' + this.cmRunned.cm.name)
      console.log(this.nutsIds, this.layers, this.scaleLevel, this.locationsSelection, this.areas, this.cmRunned)
      const payload = {
        layers: this.layers,
        year: constant_year,
        areas: areas,
        url_file: 0,
        inputs: this.cmRunned.component,
        cm_id: '' + this.cmRunned.cm.cm_id
      }







    }
  }

  runAnimation() {

    let bar: any = document.getElementById('js-progressbar');
    bar.value += 10;
    var animate = setInterval(function () {
      if (bar.value >= bar.max) {

      }
      if (bar.value === 100) {
        bar.value = 0

      }

    }, 1000);
  }
  stopAnimation() {
    const bar: any = document.getElementById('js-progressbar');
    const animate = setInterval(function () {
      if (bar.value >= bar.max) {
        bar.value = 0;
      } else {

        bar.value = 100;
        clearInterval(animate);
      }
    }, 100);

  }


}
