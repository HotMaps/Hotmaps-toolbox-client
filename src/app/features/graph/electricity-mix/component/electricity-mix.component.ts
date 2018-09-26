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
  @Input() labels
  @Input() datasets;
  private options: any;

  constructor( private logger: Logger, private interactionService: InteractionService ) {
  }

  ngOnInit() {
    this.options = energy_mix_options
    /* this.update(); */
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
