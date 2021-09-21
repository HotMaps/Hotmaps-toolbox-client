import { calculation_module_category } from './../../../shared/data.service';
import { CalculationModuleComponent } from 'app/features/calculation-module/component/calculation-module.component';
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
} from '@angular/core';
import {  
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'
import { SideComponent } from '../side-panel.component';
import { DataInteractionService } from '../../layers-interaction/layers-interaction.service';
import { DataInteractionClass } from '../../layers-interaction/layers-interaction.class';
import { InteractionService } from 'app/shared/services/interaction.service';
import { leftPanelSize } from 'app/shared';
import { Logger } from "../../../shared/services/logger.service";
import { MapService } from "../../../pages/map/map.service";
import * as uikit from 'uikit';
import {hectare} from "../../../shared/data.service";
import { UserManagementStatusService } from 'app/features/user-management';


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
  @Input() selectionSurface;
  @ViewChild(CalculationModuleComponent, { static: true }) calculationModuleComponent: CalculationModuleComponent;
  private layersSelected = [];
  private nbElementsSelected = 0;
  private scaleLevel;
  layers: DataInteractionClass[];
  category = [];
  private isZoneSelected = false;
  private isConnected = false;

  expanded = false;
  expandedState = 'collapsed';
  constructor(
    private dataInteractionService: DataInteractionService, private logger: Logger,
    protected interactionService: InteractionService, protected mapService: MapService,
    private userStatusService: UserManagementStatusService) {
    super(interactionService);
  }

  ngOnInit() {
    
    if (this.mapService.getNutsSelectedSubject()) {
      this.mapService.getNutsSelectedSubject().subscribe((value) => {
        this.scaleLevel = this.mapService.getScaleValue();
        if (value === 0) {
          uikit.tab('#uk-tab-left-panel').show(0);
          this.isZoneSelected = false;
        } else {
          if (this.scaleLevel === hectare) {
            this.isZoneSelected = true;
          } else {
            this.isZoneSelected = true;
          }
        }
        this.nbElementsSelected = value;
        this.logger.log('LeftSideComponent/this.nbElementsSelected = ' + this.nbElementsSelected)
      });

      this.mapService.getLayerArray().subscribe(() => {
        this.layersSelected = this.mapService.setLayerWithoutSuffix();
        this.logger.log('LeftSideComponent/this.layersSelected = ' + this.layersSelected)
      });

      this.userStatusService.getIsUserLogged().subscribe(value => this.isConnected = value);
    }

    this.userStatusService.getIsUserLogged().subscribe(value => this.isConnected = value);

    this.dataInteractionService.getDataInteractionServices().then(layers => this.getLayerAndCategory(layers));
  }
  updateCmss() {
    this.calculationModuleComponent.updateCMs()
  }
  getLayerAndCategory(layers: any) {
    this.logger.log(' layerr = ' + JSON.stringify(layers))
    this.layers = layers
    this.category = layers.map(item => item.category)
      .filter((value, index, self) => self.indexOf(value) === index);
    this.category.push(calculation_module_category)
  }

  ngOnDestroy() {

  }

}
