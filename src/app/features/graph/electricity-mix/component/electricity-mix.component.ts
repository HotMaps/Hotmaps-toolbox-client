import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { InteractionService } from 'app/shared/services/interaction.service';
import { Logger } from '../../../../shared/services/logger.service';
import {energy_mix_options} from '../../../../shared/data.service';
@Component({
  selector: 'htm-electricity-mix',
  templateUrl: './electricity-mix.component.html',
  styleUrls: ['./electricity-mix.component.css']
})
export class ElectricityMixComponent implements OnInit, OnChanges {
  subtitle = 'Electricity generation mix'; 

  type = 'pie';
  @Input() labels
  @Input() datasets;
  @Input() isLoading;
  options: any;

  constructor( private logger: Logger, private interactionService: InteractionService ) {
  }

  ngOnInit() {
    this.options = energy_mix_options
    /* this.update(); */
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
