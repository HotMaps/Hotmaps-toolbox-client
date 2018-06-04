// TODO: Improvement of coding style :
// TODO: leaving one empty line between third party imports and application imports
// TODO: listing import lines alphabetized by the module

import { NavigationBarService } from './../../../pages/nav/service/navigation-bar.service';
import { BusinessInterfaceRenderArray } from './../../../shared/business/business.data';
import { GeojsonClass } from './../../layers/class/geojson.class';
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
  OnChanges,
  ViewChild
} from '@angular/core';
import { SideComponent } from '../side-panel.component';
import { SummaryResultClass, Layer } from './../../summary-result/summary-result.class';
import { HeatLoadClass } from '../../graph/heat-load/heat-load.class';
import { InteractionService } from 'app/shared/services/interaction.service';
import { rightPanelSize, nuts2 } from 'app/shared';
import { Logger } from '../../../shared/services/logger.service';
import { DataInteractionService } from '../../layers-interaction/layers-interaction.service';

import { SummaryResultService } from '../../summary-result/summary-result.service';
import { MapService } from '../../../pages/map/map.service';
import { Helper } from 'app/shared';
import { PlayloadStatNuts, PayloadStat, PayloadStatHectar, Area } from 'app/features/summary-result/class/payload.class';
import { hectare, round_value, constant_year, default_drop_down_button, summay_drop_down_buttons } from '../../../shared/data.service';
import { SummaryResultComponent } from './../../summary-result/summary-result.component';




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

  constructor(protected interactionService: InteractionService, private helper: Helper, private logger: Logger,
    private mapService: MapService, private dataInteractionService: DataInteractionService) {
    super(interactionService);
  }
  ngOnInit() {
    this.initButtons();
  }
  ngOnDestroy() { }
  ngOnChanges() {




    if (this.summaryResult) {
      this.updateResult();
    }
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
    if (this.mapService.getScaleValue() !== hectare && this.expanded === true) {
      this.isDataAgregate = true;
      this.updateWithIds();
    } else if (this.mapService.getScaleValue() === hectare && this.expanded === true) {
      this.isDataAgregate = false;
      this.updateWithAreas()
    }
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
      self.updateResult()
      self.loadingData = false;
      self.setExportButtonState(true)
    }).catch((e) => {
      self.logger.log(JSON.stringify(e));
      self.loadingData = false;
      this.interactionService.setSummaryResultState(this.loadingData);
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
    ;
    const payload: PayloadStatHectar = { layers: this.layers, year: constant_year, areas: areas }

    if (this.helper.isPayloadIncomplete(payload)) {
      this.interactionService.closeRightPanel();
      return;
    }

    this.loadingData = true;
    this.interactionService.setSummaryResultState(this.loadingData);

    const summaryPromise = this.interactionService.getSummaryResultWithMultiAreas(payload).then(result => {
      this.summaryResult = result;
      // this.summaryResult.layers[0].values.push({name: 'Zones Selected', value: this.areas.length});
    }).then(() => {
    this.loadingData = false;
      this.interactionService.setSummaryResultState(this.loadingData);
    }).catch((e) => {
      this.logger.log(JSON.stringify(e))
      this.loadingData = false;
      this.interactionService.setSummaryResultState(this.loadingData);
    });
  }


}
