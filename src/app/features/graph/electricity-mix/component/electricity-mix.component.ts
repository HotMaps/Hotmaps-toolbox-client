import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DatasetChart} from '../../chart/chart';
import { InteractionService } from 'app/shared/services/interaction.service';
import { Logger } from '../../../../shared/services/logger.service';
import {chartJsEx, energy_mix_data} from '../mock/enery-mix.data';
import {energy_mix_options} from '../../../../shared/data.service';
@Component({
  selector: 'htm-electricity-mix',
  templateUrl: './electricity-mix.component.html',
  styleUrls: ['./electricity-mix.component.css']
})
export class ElectricityMixComponent implements OnInit, OnChanges {
  private subtitle = 'Electricity generation mix';

  private type = 'pie';
  @Input() expanded: boolean;
  @Input() datasets;
  @Input() nutsIds;
  @Input() loadingData;
  @Input() scaleLevel;
  @Input() electricityGenerationResultState;
  private options: any;

  constructor( private logger: Logger, private interactionService: InteractionService ) {
  }

  ngOnInit() {
    this.options = energy_mix_options
    this.update();
  }

  ngOnChanges(changes: SimpleChanges) {
   // this.logger.log('HeatLoadChartComponent/ngOnChanges');
    this.update();
  }
  update() {
    if (this.scaleLevel === '0') {
      this.loadingData = true;
      const payloadElec = { nuts: this.nutsIds }
      this.logger.log(' electricitMix:payloadElec = ' + this.nutsIds)
      const self = this;
      const electricityGenerationMixPromise =  this.interactionService.getElectricityMixFromNuts0(payloadElec).then(result => {
        self.datasets = result;

      }).then(() => {
        self.loadingData = false;
        this.interactionService.setElectricityGenerationMixResultState(this.loadingData);
      }).catch((e) => {
        self.logger.log(JSON.stringify(e));
        self.loadingData = false;
        self.interactionService.setElectricityGenerationMixResultState(this.loadingData);
      });
    }
  }


}
