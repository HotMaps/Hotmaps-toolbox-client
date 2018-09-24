import { energy_mix_options, summay_drop_down_buttons, energy_mix_title, duration_curve_graph_options, heat_load_graph_options, duration_curve_graph_title, duration_curve_graph_category, energy_mix_graph_category, heatloadprofile } from './../../../shared/data.service';
import { Logger } from 'app/shared/services/logger.service';
import { InteractionService } from 'app/shared/services/interaction.service';
import { Graphics, IndicatorResult } from './../service/result-manager';
import { Helper } from 'app/shared';
import { Component, OnDestroy, OnInit, Input, OnChanges } from '@angular/core';
import { ResultManagerPayload } from '../service/result-manager';
import { DataInteractionService } from '../../layers-interaction/layers-interaction.service';
import { MapService } from '../../../pages/map';

@Component({
  moduleId: module.id,
  selector: 'htm-result-manager',
  templateUrl: 'result-manager.component.html',
  styleUrls: ['result-manager.component.css'],

})
export class ResultManagerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() cmPayload;
  @Input() summaryPayload;
  @Input() energyMixPayload;
  @Input() heatLoadPayload;
  @Input() durationCurvePayload;

  @Input() scaleLevel;

  private noIndicator = true
  private dropdown_btns = summay_drop_down_buttons;
  private selectedButton = this.dropdown_btns[0];
  private result: ResultManagerPayload = {
    indicators: {layers:[], no_data_layers:[], no_table_layers:[]},
    graphics: [], raster_layers: [], vector_layers: []
  };


  constructor(private helper: Helper, private interactionService: InteractionService, private logger: Logger,
    private dataInteractionService: DataInteractionService, private mapService: MapService) { }

  ngOnInit() { }
  ngOnDestroy() { }
  ngOnChanges(changes) {
    console.log(changes)
    this.resetResult()
    if (!this.helper.isNullOrUndefined(this.summaryPayload)) { this.updateSummaryResult() }
    if (!this.helper.isNullOrUndefined(this.energyMixPayload)) { this.updateEnergyMixResult() }
    if (!this.helper.isNullOrUndefined(this.heatLoadPayload)) { this.updateHeatLoadResult() }
    if (!this.helper.isNullOrUndefined(this.durationCurvePayload)) { this.updateDurationCurveResult() }
    if (!this.helper.isNullOrUndefined(this.cmPayload)) { this.updateCMResult() }

  }
  updateCMResult() {
    const self = this;
    console.log(this.cmPayload)
    self.interactionService.getCMInformations(this.cmPayload).then((data) => {
      self.logger.log('data.status_id ' + data.status_id)
      const status_id = data.status_id
      self.getStatusOfCM(status_id)
    }).catch((err) => {
      self.logger.log('there is an error ')
      console.log(err);
    });
  }
  updateSummaryResult() {
    const self = this;
    if (this.scaleLevel === '-1') {
      self.interactionService.getSummaryResultWithMultiAreas(self.summaryPayload).then(result => {
        console.log(result)
        self.result.indicators.layers.push(result.layers)
        self.result.indicators.no_data_layers.push(result.no_data_layers)
        self.result.indicators.no_table_layers.push(result.no_table_layers)
        self.getIndicatorsCatergories()
      }).catch((e) => {
        self.logger.log(JSON.stringify(e));
      });
    } else {
      self.interactionService.getSummaryResultWithIds(self.summaryPayload).then(result => {
        console.log(result)
        self.result.indicators.layers.push(result.layers)
        self.result.indicators.no_data_layers.push(result.no_data_layers)
        self.result.indicators.no_table_layers.push(result.no_table_layers)
        self.getIndicatorsCatergories()
        console.log(self.result)
      }).catch((e) => {
        self.logger.log(JSON.stringify(e));
      })
    } 

  }
  updateEnergyMixResult() {
    const self = this;
    const graphic = self.addGraphic(energy_mix_title, 'pie', [], [], energy_mix_options, energy_mix_graph_category, true);
    self.interactionService.getElectricityMix(self.energyMixPayload).then(result => {
      console.log('updateEnergyMixResult():', result)
      graphic.isLoading = false;
      graphic.data = result.datasets;
      graphic.labels = result.labels;
      console.log(self.result)
    }).catch((e) => {
      console.log('error')
      self.logger.log(JSON.stringify(e));
    });
  }
  updateHeatLoadResult() {
    this.addGraphic(heatloadprofile, 'line', [], [], heat_load_graph_options, 'heatload', true)
    console.log(this.heatLoadPayload)
  }
  updateDurationCurveResult() {
    const self = this;
    const graphic = self.addGraphic(duration_curve_graph_title, 'line', [], [], duration_curve_graph_options, duration_curve_graph_category, true);
    let isHectare;
    if (this.scaleLevel === '-1') {
      isHectare = true
    } else {
      isHectare = false
    }
    self.interactionService.getDurationCurveWithPayload(this.durationCurvePayload, isHectare).then((result) => {
      console.log(result.points)
      const dataset = this.interactionService.getDefaultDatasetDurationCurve()
      dataset.data = []
      const labels = []
      result.points.map((point) => {
        dataset.data.push(point.Y)
        labels.push('')
      });
      // console.log(dataset.data, labels)
      graphic.isLoading = false;
      graphic.data = [dataset];
      graphic.labels = labels;
      console.log(graphic);
    })
  }

  getStatusOfCM(status_id) {

    // this.interactionService.getStatusAndCMResult(status_id).then((data) => {
    this.interactionService.getCMResultMockData(status_id).then((data) => {
      const response = JSON.parse(data["_body"])
      console.log('mockCMData', response)
      //if (response["state"] === 'SUCCESS') {
      // this.stopAnimation()
      this.logger.log('status' + response["status"])
      console.log('cm response:' + response)

      /* if (!this.helper.isNullOrUndefined(response.status.tile_directory)) {
        this.mapService.displayCustomLayerFromCM(response.status.tile_directory);
        // this.cmRunned.cm_url = response.status.tile_directory
      } */
      if (response.result.indicator.length >= 1) {
        // this.result.indicators.layers.push({ name: response.result.name, values: response.result.indicator })
        console.log(this.result)
      }
      if (response.result.graphics.length >= 1) {
        response.result.graphics.map((graphic) => {
          const graph = this.addGraphic(response.result.name, graphic.type, graphic.data.datasets, graphic.data.labels, heat_load_graph_options, 'calculation_module', false)
          console.log(graph)
        })
      }

      /*  } else {
         setTimeout(() => {
           this.getStatusOfCM(status_id);
           // this.runAnimation();
 
         }, 1000);
       } */
    }).catch((err) => {
      // this.stopAnimation()
      this.logger.log('there is an error ')
      console.log(err);

    });
  }
  getIndicatorsCatergories() {
    this.resetButtonsDiplay()
    this.result.indicators.layers.map((layer) => {
      const refToDisplay = this.dataInteractionService.getRefFromLayerName(layer.name)
      layer.category = refToDisplay
      refToDisplay.map(ref => {
        this.dropdown_btns.filter(x => x.ref === ref)[0].display = true
      })
    })
    if (this.result.indicators.layers.length === 0) {
      this.noIndicator = true
    } else {
      this.noIndicator = false
    }
  }

  addGraphic(name, type, data, labels, options, category, isLoading) {
    const graphic = { name: name, type: type, data: data, labels: labels, options: options, category: category, isLoading: isLoading }
    this.result.graphics.push(graphic)
    return graphic
  }
  changeResultsDisplay(button) {
    console.log(button)
    this.selectedButton = button;
  }
  resetButtonsDiplay() {
    this.dropdown_btns.map((btn) => {
      btn.display = false;
    })
  }
  resetResult() {
    this.result.indicators = {layers: [], no_data_layers: [], no_table_layers: []}
    this.result.graphics = [];
    this.result.raster_layers = [];
    this.result.vector_layers = [];
  }

}
