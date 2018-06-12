import { NavigationBarService } from './../../../pages/nav/service/navigation-bar.service';
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

} from '@angular/core';

import { SideComponent } from '../side-panel.component';
import { Chart } from 'chart.js'
import { DataInteractionService } from '../../layers-interaction/layers-interaction.service';
import { DataInteractionClass } from '../../layers-interaction/layers-interaction.class';
import { InteractionService } from 'app/shared/services/interaction.service';
import { leftPanelSize } from 'app/shared';
import { Logger } from "../../../shared/services/logger.service";
import { MapService } from "../../../pages/map/map.service";
@Component({
  moduleId: module.id,
  selector: 'htm-left-side-panel',
  templateUrl: 'left-side-panel.component.html',
  styleUrls: ['left-side-panel.component.css'],
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
      state('expanded', style({ width: leftPanelSize + 'px' })),
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
      // state('collapsed', style({ transform: 'rotate(180deg)' })),
      // state('collapsed', style({ transform: 'rotate(180deg)' })),
      //   state('expanded', style({ transform: 'rotate(0deg)' })),

      transition('collapsed => expanded', animate('200ms ease-in')),
      transition('expanded => collapsed', animate('200ms ease-out'))
    ])
  ],
  providers: [DataInteractionService],
})
export class LeftSideComponent extends SideComponent implements OnInit, OnDestroy {
  @Input() areas;

  expanded = false;
  expandedState = 'collapsed';
  layers: DataInteractionClass[];
  category: DataInteractionClass[];
  zoneSelected;
  constructor(
    private dataInteractionService: DataInteractionService, private logger: Logger,
    protected interactionService: InteractionService, protected mapservice: MapService) {
    super(interactionService);
  }

  ngOnInit() {


    this.dataInteractionService.getDataInteractionServices().then(layers => this.getLayerAndCategory(layers));
  }


  getLayerAndCategory(layers: any) {

    this.logger.log(' layerr = ' + JSON.stringify(layers))

    this.layers = layers
    this.category = layers.map(item => item.category)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  ngOnDestroy() {

  }

}
