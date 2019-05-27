import { energy_mix_options, summay_drop_down_buttons, energy_mix_title, duration_curve_graph_options, heat_load_graph_options, duration_curve_graph_title, duration_curve_graph_category, energy_mix_graph_category, heatloadprofile, calculation_module_category, tab2_datapanel, tab1_datapanel, raster_type_name, vector_type_name } from './../../../shared/data.service';
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
  @Input() summaryPayload: any;
  @Input() energyMixPayload;
  @Input() heatLoadPayload;
  @Input() durationCurvePayload;
  @Input() personnalLayerPayload;

  @Input() scaleLevel;
  private graphicsExportButtonState=false;
  private indicatorExportButtonState=false;

  private indicatorLoading=false;
  private indicatorPersoLoading=false;
  private animationTimeout;
  private status_id;
  private progressCmAnimation = 0;
  private updateExportButton = false;
  private noIndicator = true
  private tab1=tab1_datapanel;
  private tab2=tab2_datapanel;
  private cm_catedory = calculation_module_category;
  private tabSelected = this.tab1;
  private exportbuttonDisplay;
  private dropdown_btns = summay_drop_down_buttons;
  private selectedButton = this.dropdown_btns[0];
  private heatloadGraph;
  private result: ResultManagerPayload = {
    indicators: { summaryResult: null, personnalLayerResult: null, cmResult: null },
    graphics: null, raster_layers: null, vector_layers: null
  };

  private heatLoadData;
  constructor(private helper: Helper, private interactionService: InteractionService, private logger: Logger,
    private dataInteractionService: DataInteractionService, private mapService: MapService) { }

  ngOnInit() {
    this.interactionService.getHeatLoadData().subscribe((heatload) => {
      if (!this.helper.isNullOrUndefined(heatload)) {
        this.heatLoadData = heatload;
        this.heatloadGraph.data = this.heatLoadData.dataset
        this.heatloadGraph.labels = this.heatLoadData.labels
      }
    })
  }
  ngOnDestroy() { }
  ngOnChanges() {
    this.resetResult();
    if (!this.helper.isNullOrUndefined(this.cmPayload)) { this.updateCMResult() }
    if (!this.helper.isNullOrUndefined(this.summaryPayload)) { this.updateSummaryResult() }
    if (!this.helper.isNullOrUndefined(this.heatLoadPayload)) { this.updateHeatLoadResult() }
    if (!this.helper.isNullOrUndefined(this.energyMixPayload)) { this.updateEnergyMixResult() }
    if (!this.helper.isNullOrUndefined(this.durationCurvePayload)) { this.updateDurationCurveResult() }
    if (!this.helper.isNullOrUndefined(this.personnalLayerPayload)) { this.updatePersonnalLayersResult() }
    

  }
   updateCMResult() {
    const self = this;
    if (!this.helper.isNullOrUndefined(this.status_id)) { self.interactionService.deleteCM(this.status_id); }
    self.interactionService.getCMInformations(this.cmPayload).then((data) => {
      self.logger.log('data.status_id ' + data.status_id)
      self.status_id = data.status_id
      self.interactionService.setCurrentIdCM(self.status_id )
      self.getStatusOfCM()
    }).catch((err) => {
      this.stopAnimation()
      self.logger.log('there is an error ')
      self.logger.log(err);
    });
  }
   updatePersonnalLayersResult() {
    
    if (this.helper.isNullOrUndefined(this.personnalLayerPayload)) { return }
    const self = this;
    self.indicatorPersoLoading = true
    self.interactionService.getSummaryPersonnalLayers(self.personnalLayerPayload).then(result => {
      self.setSummaryResult(result,'personnalLayerResult');
      self.getIndicatorsCatergories()
      self.indicatorPersoLoading = false
    }).catch((e)=>{
      // self.indicatorExportButtonState = false
      self.indicatorPersoLoading = false
      self.logger.log(JSON.stringify(e));
    })
  }
  killAnimation() {
    this.progressCmAnimation = 0;
    this.interactionService.setCMAnimationStatus(this.progressCmAnimation);
    this.interactionService.setCmRunningProgess(this.progressCmAnimation)
  }
   updateSummaryResult() {
    const self = this;
    self.indicatorLoading = true
    if (this.scaleLevel === '-1') {
      self.interactionService.getSummaryResultWithMultiAreas(self.summaryPayload).then(result => {
        // this.resetIndicators();
        self.setSummaryResult(result, 'summaryResult');
        self.getIndicatorsCatergories()
        self.indicatorLoading = false

      }).catch((e) => {
        // this.resetIndicators();
        self.indicatorExportButtonState = false
        self.indicatorLoading = false

        self.logger.log(JSON.stringify(e));
      });
    } else {
      self.interactionService.getSummaryResultWithIds(self.summaryPayload).then(result => {
        //this.resetIndicators();
        self.setSummaryResult(result,'summaryResult')
        self.getIndicatorsCatergories()
        self.indicatorLoading = false

      }).catch((e) => {
        this.resetIndicators();
        self.indicatorExportButtonState = false
        self.indicatorLoading = false

        self.logger.log(JSON.stringify(e));

      })
    }
  }

  setSummaryResult(result, type) {
    this.result.indicators[type] = result
    this.indicatorExportButtonState=true;
  }

   updateEnergyMixResult() {
    const self = this;
    const graphic = self.addGraphic(energy_mix_title, 'pie', [], [], energy_mix_options, energy_mix_graph_category, true);

    self.interactionService.getElectricityMix(self.energyMixPayload).then(result => {
      graphic.isLoading = false;
      graphic.data = result.datasets;
      graphic.labels = result.labels;
      self.graphicsExportButtonState = true;
    }).catch((e) => {
      self.graphicsExportButtonState = false;
      self.logger.log('error')
      self.logger.log(JSON.stringify(e));
    });
  }
   updateHeatLoadResult() {
    this.heatloadGraph = this.addGraphic(heatloadprofile, 'line', [], [], heat_load_graph_options, 'heatload', true)
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
      const dataset = this.interactionService.getDefaultDatasetDurationCurve()
      dataset.data = []
      const labels = []
      result.points.map((point) => {
        dataset.data.push(point.Y)
        labels.push('')
      });
      graphic.isLoading = false;
      graphic.data = [dataset];
      graphic.labels = labels;
      self.graphicsExportButtonState = true;    
    }).catch(e => {
      self.graphicsExportButtonState = false;
      self.logger.log('error')
      self.logger.log(JSON.stringify(e));
    })
  }

  processAndShowCmResult(data){
    const response = JSON.parse(data["_body"])
    if (response["state"] === 'SUCCESS' ){
      this.stopAnimation()
      this.logger.log('status' + response["status"])
      const name_of_result = this.cmPayload.cm_name;
      if (!this.helper.isNullOrUndefined(response.status.result.raster_layers)) {
        response.status.result.raster_layers.map((raster) => {
          let symb;
          if(raster.type === 'custom') {
            symb = raster.symbology;
          }
          this.dataInteractionService.addNewLayer(name_of_result, raster.path, raster_type_name, symb)
          this.mapService.displayCustomLayerFromCM(raster.path, raster_type_name);
        })
      }

      if (!this.helper.isNullOrUndefined(response.status.result.vector_layers)) {
        response.status.result.vector_layers.map((vector) => {
          let symb;
          if(vector.type == 'custom') {
            symb = vector.symbology;
          }
          this.dataInteractionService.addNewLayer(name_of_result, vector.path, vector_type_name,symb)

          this.mapService.displayCustomLayerFromCM(vector.path, vector_type_name );
        })
      }
      if (!this.helper.isNullOrUndefined(response.status.result.indicator) && response.status.result.indicator.length >= 1) {
        this.result.indicators.cmResult = {'layers':[{
          name: name_of_result, values: response.status.result.indicator, category: ['overall', calculation_module_category]
        }]}
        this.indicatorExportButtonState=true
      }
      this.indicatorLoading = false
      if (!this.helper.isNullOrUndefined(response.status.result.graphics) && response.status.result.graphics.length >= 1) {
        response.status.result.graphics.map((graphic) => {
          const option_calculation_module = { scales: {
              yAxes: [{ scaleLabel: { display: true, labelString: graphic.yLabel },ticks: {min:0} }],
              xAxes: [{ scaleLabel: { display: true, labelString: graphic.xLabel },ticks: {autoSkip: false, min:0} }]
            }
          }
          const graph = this.addGraphic(name_of_result, graphic.type, graphic.data.datasets, graphic.data.labels, option_calculation_module, calculation_module_category, false)
        })
        this.graphicsExportButtonState = true;
      }
      this.getIndicatorsCatergories()
    } else{

      this.logger.log('animationTimeout')
      this.animationTimeout = setTimeout(() => {
        this.getStatusOfCM();
        this.runAnimation();

      }, 1000);
    }

  }

  getStatusOfCM() {
    const self = this;
    this.indicatorLoading = true

    this.logger.log('this.interactionService.getCurrentIdCM()' + this.interactionService.getCurrentIdCM())
    if (this.interactionService.getCurrentIdCM() != null){
      this.interactionService.getStatusAndCMResult( this.interactionService.getCurrentIdCM()).then((data) => {
        this.processAndShowCmResult(data)

      }).catch((err) => {

        this.animationTimeout = setTimeout(() => {
          this.stopAnimation()

        }, 1000);
        this.indicatorLoading = false

        this.interactionService.setCMAnimationStatus(null)
        this.logger.log('there is an error ')
        this.logger.log(err);

      })
    }
    else {

      this.logger.log('EVERYTHING SHOULD HAVE STOP')
      this.animationTimeout = setTimeout(() => {
        this.stopAnimation()

      }, 1000);
      this.indicatorLoading = false
      this.interactionService.setCMAnimationStatus(null)
      this.interactionService.setStatusCMPanel(false)

    }

  }

  StopIfRunning(){

  }
  stopAllAnimation() {
    this.interactionService.setCMAnimationStatus(0)
    if (!this.helper.isNullOrUndefined(this.animationTimeout)) {
      clearTimeout(this.animationTimeout)
    }
    if (!this.helper.isNullOrUndefined(this.status_id)) {
      this.interactionService.deleteCM(this.status_id)
    }
    this.killAnimation()

  }
  runAnimation() {
    if (this.progressCmAnimation === 100) {
      this.progressCmAnimation = 10
    } else {
      this.progressCmAnimation += 10;
    }
    this.interactionService.setCMAnimationStatus(this.progressCmAnimation);
    this.interactionService.setCmRunningProgess(this.progressCmAnimation)

  }


  stopAnimation() {
    if (!this.helper.isNullOrUndefined(this.animationTimeout)) {
      clearTimeout(this.animationTimeout)
    }
    if (!this.helper.isNullOrUndefined(this.status_id)) {
      this.interactionService.deleteCM(this.status_id)
    }
    this.killAnimation()

  }
  getIndicatorsCatergories() {
    this.resetButtonsDiplay()
    for(let key of Object.keys(this.result.indicators)) {
      if(this.helper.isNullOrUndefined(this.result.indicators[key])){continue}
      const lay = this.result.indicators[key].layers
      if (lay.length === 0) {
        this.noIndicator = true
      } else {
        lay.map((layer) => {
          if (!this.helper.isNullOrUndefined(layer.name)) {
            let refToDisplay=[];
            if(this.helper.isNullOrUndefined(layer.category)){
              refToDisplay = this.dataInteractionService.getRefFromLayerName(layer.name)
              layer.category = refToDisplay
            } else {
              refToDisplay = layer.category
            }
            this.logger.log("refToDisplay:" +refToDisplay)

            refToDisplay.map(ref => {
              this.dropdown_btns.filter(x => x.ref === ref)[0].display = true
            })
          }
        })
        this.noIndicator = false
      }
    }
      this.selectedButton = this.dropdown_btns[0]
      this.selectedButton.selected = true 
   
  }

  addGraphic(name, type, data, labels, options, category, isLoading) {
    const graphic = { name: name, type: type, data: data, labels: labels, options: options, category: category, isLoading: isLoading }
    this.result.graphics.push(graphic)
    return graphic
  }
  changeResultsDisplay(button) {
    this.selectedButton = button;
  }
  resetButtonsDiplay() {
    this.dropdown_btns.map((btn) => {
      btn.display = false;
    })
  }
  resetResult() {
    this.graphicsExportButtonState=false;
    this.indicatorExportButtonState=false;

    this.resetIndicators();
    this.result.graphics = [];
    this.result.raster_layers = [];
    this.result.vector_layers = [];
  }
  resetIndicators() {
    this.indicatorExportButtonState=false;
    this.result.indicators = { personnalLayerResult: null, summaryResult: null, cmResult: null }
  }
  tabSwitch(tabName) {
    this.tabSelected = tabName
  }
}
