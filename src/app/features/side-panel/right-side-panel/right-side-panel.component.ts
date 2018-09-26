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

import { MapService } from '../../../pages/map/map.service';
import { Helper } from 'app/shared';
import { PlayloadStatNuts, PayloadStatHectar } from 'app/features/summary-result/class/payload.class';
import {
  hectare,
  constant_year,
  default_drop_down_button,
  summay_drop_down_buttons,
  apiUrl
} from '../../../shared/data.service';
import { Observable } from 'rxjs';
import { timer } from 'rxjs/observable/timer';




@Component({
  moduleId: module.id,
  selector: 'htm-right-side-panel',
  templateUrl: 'right-side-panel.component.html',
  styleUrls: ['right-side-panel.component.css'],
  animations: [
    // Define the animation used on the containing dev where the width of the
    //  panel is determined. Here we define the expanded width to be 300px, and
    //  the collapsed width to be 38px.
    //
    // When expanding the panel we transition over a 200ms interval.
    //
    // When collapsing the panel we again use 200ms for the transition, but
    //  we add a delay of 200ms to allow some other animations to complete before
    //  shrinking the panel down.
    //
    trigger('panelWidthTrigger', [
      state('expanded', style({ width: rightPanelSize + 'px' })),
      state('collapsed', style({ width: '0px' })),
      transition('collapsed => expanded', animate('200ms ease-in')),
      transition('expanded => collapsed', animate('200ms 200ms ease-out'))
    ]),

    // Define the animation used in the title bar where the colors swap from
    //  a red foreground with white background, to the opposite. In this case
    //  we use the same timings as the width animation above so these two
    //  transitions happen at the same time
    //
    trigger('titleColorTrigger', [
      state('collapsed', style({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
      state('expanded', style({ backgroundColor: '#333333', color: '#FFFFFF' })),
      transition('collapsed => expanded', animate('200ms ease-in')),
      transition('expanded => collapsed', animate('200ms 200ms ease-out'))
    ]),

    // The title text trigger is a little different because it's an animation
    //  for an element being added to the DOM. Here we take advantage of the 'void'
    //  transition using a hard-coded state called 'in' (which is also hard coded in
    //  the template).
    //
    // What we do in this animation is say when the element is added to the DOM
    //  it should have an opacity of 0 (i.e., hidden), wait 300ms, and then animate
    //  it's opacity change to 1 over a 100 ms time span. This effectively delays the
    //  appearance of the text until after the panel has slid out to the full size.
    //
    // When the element is removed we take a different approach and animate the
    //  opacity change back to 0 over a short 50ms interval. This ensures it's gone before
    //  the panel starts to slide back in, creating a nice effect.
    //
    trigger('titleTextTrigger', [
      state('in', style({ opacity: '1' })),
      transition('void => *', [style({ opacity: '0' }),
      animate('100ms 300ms')
      ]),
      transition('* => void', [
        animate('50ms', style({ opacity: '0' }))
      ])
    ]),

    // Define the animation used in the arrow icon where it rotates to point left
    //  or right based on the state of the panel. In this case we use the same
    //  timings as the width animation above so these two transitions happen at
    //  the same time.
    //
    trigger('iconTrigger', [
      // state('collapsed', style({ transform: 'rotate(0deg)' })),
      // state('expanded', style({ transform: 'rotate(180deg)' })),

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
  private heatloadStatus = false;
  private nust0Selected = false;
  private dropdown_btns;
  private buttonRef = default_drop_down_button;

  private scale = 'Nuts 3';
  private isDataAgregate = false;
  private loadingData = false;
  private electricitMixLoadingState = false;
  private splittedResults;
  private summaryResult;


  private electricitMixResult;
  private selectedButton;

  // ONLY FOR DEMO !!
  private cmResult;


  private animate;

  constructor(protected interactionService: InteractionService, private helper: Helper, private logger: Logger,
    private mapService: MapService, private dataInteractionService: DataInteractionService) {
    super(interactionService);
  }
  ngOnInit() {
    this.initButtons();
    this.interactionService.getStatusID().subscribe((value) => {
      console.log('rightSidePanel/StatusID:' + value)
      if (this.helper.isNullOrUndefined(value)) {
        this.stopCMRunned()
      }

      console.log(value)
    })
  }
  ngOnDestroy() { }

  upDateAll(){

    console.log('RightSidePanelComponent/ngOnChanges')




    if ((this.scaleLevel === '3') || (this.scaleLevel === '2') || (this.scaleLevel === '-1')) {
      this.heatloadStatus = true;

    } else {
      this.heatloadStatus = false;
    }
    if ((this.scaleLevel === '0')) {
      this.nust0Selected = true;
    } else {
      this.nust0Selected = false;
    }


    /*       this.logger.log('RightSidePanelComponent/ngOnChanges');
     */
    this.scale = this.mapService.getScaleValue();
    console.log(this.cmRunned);
    if (this.mapService.getScaleValue() !== hectare && this.expanded === true) {
      this.isDataAgregate = true;
      this.updateWithIds();
    } else if (this.mapService.getScaleValue() === hectare && this.expanded === true) {
      this.isDataAgregate = false;
      this.updateWithAreas()
    }

  }
  ngOnChanges() {
    console.log('RightSidePanelComponent/ngOnChanges')


    this.upDateAll()
    /*if (this.summaryResult) {
      this.updateResult();
    }*/
  }
  initButtons() {
    this.dropdown_btns = summay_drop_down_buttons;
    this.selectedButton = this.dropdown_btns[0];
    this.selectedButton.selected = true;
  }
  loadExportData(buttonRef) {
    const indicatorResults = this.splittedResults[buttonRef];
    this.interactionService.displayButtonExport(!this.loadingData);
    this.interactionService.setSummaryData(indicatorResults);

    if (this.helper.isResultDataEmpty(indicatorResults)) {
      this.interactionService.displayButtonExport(false)
    }
  }
  changeResultsDisplay(event) {
    this.logger.log('RightSidePanelComponentdropdown_btns/changeResultsDisplay');
    this.buttonRef = event.target.value;
    console.log(this.buttonRef)
    console.log(this.splittedResults)
    this.loadExportData(this.buttonRef);
  }
  clickTab(id: string) {
    this.logger.log('clickTab' + id);
    this.interactionService.setTabsSelectedName(id);
  }

  getData(data: any) {
    this.summaryResult = data;
  }
  setExportButtonState(val: boolean) {
    this.interactionService.setSummaryResultState(!val);
    this.interactionService.displayButtonExport(val);
  }

  updateWithIds() {
    const self = this;
    const payload: PlayloadStatNuts = { layers: this.layers, year: constant_year, nuts: this.nutsIds }

    if (this.helper.isPayloadIncomplete(payload)) {
      this.interactionService.closeRightPanel();
      return;
    }

    this.logger.log('RightSidePanelComponent/updateWithIds() +' + this.layers);
    this.loadingData = true;
    this.interactionService.setSummaryResultState(this.loadingData);
    this.setExportButtonState(false)
    const summaryPromise = this.interactionService.getSummaryResultWithIds(payload).then(result => {
      self.summaryResult = result;
      self.buttonRef = default_drop_down_button;
    }).then(() => {
      self.updateCMResult(payload);
    }).then(() => {
      self.updateResult()
      self.loadingData = false;
      self.setExportButtonState(true)
    }).catch((e) => {
      self.logger.log(JSON.stringify(e));
      self.loadingData = false;
      self.interactionService.setSummaryResultState(self.loadingData);
    });
    // only for nuts 0 electricity generation mix is allowed
    if (this.scaleLevel === '0') {
      self.electricitMixLoadingState = true;
      const payloadElec = { nuts: this.nutsIds }
      self.logger.log(' electricitMix:payloadElec = ' + self.nutsIds)
      const electricityGenerationMixPromise = this.interactionService.getElectricityMixFromNuts0(payloadElec).then(result => {
        self.electricitMixResult = result;
        self.logger.log('electricitMix: Result = ' + JSON.stringify(self.electricitMixResult))
      }).then(() => {
        self.electricitMixLoadingState = false;
        this.interactionService.setElectricityGenerationMixResultState(this.electricitMixLoadingState);
      }).catch((e) => {
        self.logger.log(JSON.stringify(e));
        self.electricitMixLoadingState = false;
        this.interactionService.setElectricityGenerationMixResultState(this.electricitMixLoadingState);
      });
    }
  }
  updateResult() {
    this.splittedResults = this.interactionService.getSplittedResults(this.summaryResult);

    this.loadExportData(this.buttonRef);
  }
  updateWithAreas() {
    this.logger.log('RightSidePanelComponent/updateWithAreas()');
    const areas = [];
    this.areas.map((layer: Layer) => {
      const points = [];
      if (layer instanceof L.Circle) {
        areas.push({ points: this.helper.getLocationsFromCicle(layer) })
      } else {
        areas.push({ points: this.helper.getLocationsFromPolygon(layer) })
      }
    });
    this.logger.log('RightSidePanelComponent/areas()' + JSON.stringify(areas))
    if (areas.length === 0) {
      this.logger.log('RightSidePanelComponent/areas().lenght === 0')
      this.loadingData = false;
      this.interactionService.setSummaryResultState(this.loadingData);
      return
    };

    const payload: PayloadStatHectar = { layers: this.layers, year: constant_year, areas: areas }
    console.log(payload)
    if (this.helper.isPayloadIncomplete(payload)) {
      this.interactionService.closeRightPanel();
      return;
    }

    this.loadingData = true;
    this.interactionService.setSummaryResultState(this.loadingData);
    const summaryPromise = this.interactionService.getSummaryResultWithMultiAreas(payload).then(result => {
      this.summaryResult = result;
      this.buttonRef = default_drop_down_button;
      // this.summaryResult.layers[0].values.push({name: 'Zones Selected', value: this.areas.length});
    }).then(() => {
      this.updateCMResult(payload);
    }).then(() => {
      this.updateResult()
      this.loadingData = false;
      this.interactionService.setSummaryResultState(this.loadingData);
      this.setExportButtonState(true)
    }).catch((e) => {
      this.logger.log(JSON.stringify(e))
      this.loadingData = false;
      this.interactionService.setSummaryResultState(this.loadingData);
    });
  }
  updateCMResult(payload) {
    this.runAnimation()
    if (!this.helper.isNullOrUndefined(this.cmRunned)) {
      this.logger.log('cmRunned ' + this.cmRunned.cm.name)
      /*this.interactionService.getCMResult(this.summaryResult, this.cmRunned).then((value) => {
        this.logger.log('getCMResult ' + JSON.stringify(payload))
        this.summaryResult.layers.push(value)
      })*/
      console.log(this.nutsIds, this.layers, this.scaleLevel, this.locationsSelection, this.areas, this.cmRunned)
      const pload = {
        payload: payload,
        scalevalue: this.helper.getScaleLevelPaylaod(this.mapService.getScaleValue()) ,
        url_file: 0,
        inputs: this.cmRunned.component,
        cm_id: '' + this.cmRunned.cm.cm_id
      }

      this.logger.log('payload ' + pload)



      this.interactionService.getCMInformations(pload, this.cmRunned).then((data) => {
        this.logger.log('ata.status_id ' + data.status_id)
        this.logger.log('this.interactionService' + this.interactionService)

        const status_id = data.status_id

        const  response = this.getStatusOfCM(status_id, this.cmRunned)



      }).catch((err) => {
        this.logger.log('there is an error ' )
        console.log(err);
      });


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
  stopCMRunned() {
    // this.interactionService.setStatusIdCM(null)
    if (!this.helper.isNullOrUndefined(this.cmTimeout)) {
      this.cmTimeout.unsubscribe();
    }
    this.stopAnimation();
  }
  deleteCMID(status_id) {
    this.interactionService.setStatusIdCM(null)
    this.interactionService.deleteCM(status_id);
  }
  getStatusOfCM(status_id, cmRunned ) {
    this.interactionService.setStatusIdCM(status_id)
    this.interactionService.getStatusAndCMResult(status_id).then((data) => {
      const response = JSON.parse(data["_body"])
      if (response["state"] === 'SUCCESS') {
        this.deleteCMID(status_id)
        this.logger.log('status' +  JSON.stringify(response["status"]) )

        this.summaryResult.layers.push({name: cmRunned.cm.cm_name, values: response.status.values});
        this.updateResult();
        if (!this.helper.isNullOrUndefined(response.status.tile_directory)) {
          this.cmRunned.cm_url = response.status.tile_directory
          this.mapService.displayCustomLayerFromCM(response.status.tile_directory);
        }

      } else {
        this.cmTimeout = timer(1000).subscribe(() => {
          this.getStatusOfCM(status_id, cmRunned);
          this.runAnimation();
          this.cmTimeout.unsubscribe()
        })
      }
    }).catch((err) => {
      this.deleteCMID(status_id)
      this.logger.log('there is an error with this UUID:' + status_id)
      console.log(err);

    });
  }



}
