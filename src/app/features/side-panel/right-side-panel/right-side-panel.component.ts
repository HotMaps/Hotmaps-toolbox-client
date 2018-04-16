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
  OnChanges
} from '@angular/core';
import { SideComponent } from '../side-panel.component';
import { SummaryResultClass, Layer } from './../../summary-result/summary-result.class';
import { HeatLoadClass } from '../../heat-load/heat-load.class';
import { InteractionService } from 'app/shared/services/interaction.service';
import { rightPanelSize, nuts2 } from 'app/shared';
import {Logger} from "../../../shared/services/logger.service";
import { DataInteractionService } from '../../data-interaction/data-interaction.service';

import {SummaryResultService} from '../../summary-result/summary-result.service';
import {MapService} from '../../../pages/map/map.service';
import { Helper } from 'app/shared';
import { PlayloadStatNuts, PayloadStat, PayloadStatHectar, Area } from 'app/features/summary-result/class/payload.class';
import {hectare, round_value, constant_year} from '../../../shared/data.service';




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
    //private summaryResult: SummaryResultClass = null;
    private poiTitle;
    @Input() nutsIds;
    @Input() layers;    
    @Input() scaleLevel;
    private heatloadStatus = false;
    @Input() locationsSelection;
    @Input() areas;

    private scale = 'Nuts 3';
    private isDataAgregate = false;
    private loadingData = false;

    private summaryResult;

    private emptyResult = false;

    constructor(protected interactionService: InteractionService, private helper: Helper, private logger: Logger,
        private mapService: MapService, private dataInteractionService: DataInteractionService) {
        super(interactionService);
    }
    ngOnInit() { 
    }
    ngOnDestroy() { }
    ngOnChanges() {
        if ((this.scaleLevel === '3') || (this.scaleLevel === '2') || (this.scaleLevel === '-1')) {
            this.heatloadStatus = true;

        } else {
            this.heatloadStatus = false;
        }

        this.logger.log('RightSidePanelComponent/ngOnChanges');
        this.scale = this.mapService.getScaleValue();
        if (this.mapService.getScaleValue() !== hectare && this.expanded == true) {
            this.isDataAgregate = true;
            this.updateWithIds();
        } else if (this.mapService.getScaleValue() === hectare && this.expanded == true){
            this.isDataAgregate = false;
            this.updateWithAreas()
        }


    }
    clickTab(id: string) {
        this.logger.log('clickTab' + id);
        this.interactionService.setTabsSelectedName(id);
    }

    getData(data: any) {
        this.summaryResult = data;
    }

    updateWithIds() {
        const self = this;

        this.logger.log('RightSidePanelComponent/updateWithIds() +' + this.layers);
        this.loadingData = true;
        this.interactionService.displayButtonExport(!this.loadingData)

        const payload: PlayloadStatNuts = { layers: this.layers, year: constant_year, nuts: this.nutsIds }

        const summaryPromise = this.interactionService.getSummaryResultWithIds(payload).then(result => {
                   
        self.summaryResult = result;
        self.interactionService.setSummaryData(result);

        if(this.helper.isResultEmpty(result)){
            this.emptyResult = true;
        }
          
        }).then(() => {        
          self.loadingData = false;
          self.interactionService.displayButtonExport(!self.loadingData);
        }).catch((e) => {
          self.logger.log(JSON.stringify(e));
          self.loadingData = false;
          self.interactionService.displayButtonExport(!self.loadingData)
        });
    }

    updateWithAreas() {
        this.logger.log('RightSidePanelComponent/updateWithAreas()');
        this.loadingData = true;
        this.interactionService.displayButtonExport(!this.loadingData);
        const areas = [];
        this.areas.map((layer: Layer) => {
          const points = [];
          if (layer instanceof L.Circle) {
            areas.push({points: this.helper.getLocationsFromCicle(layer)})
          } else {
            areas.push({points: this.helper.getLocationsFromPolygon(layer)})
          }
        });
        this.logger.log('RightSidePanelComponent/areas()' +   JSON.stringify(areas) )
        if (areas.length === 0) {
          this.logger.log('RightSidePanelComponent/areas().lenght === 0')
          this.loadingData = false;
          this.interactionService.displayButtonExport(!this.loadingData)
          return
        };
       ;
        const payload: PayloadStatHectar = { layers: this.layers, year: constant_year, areas: areas }

        const summaryPromise = this.interactionService.getSummaryResultWithMultiAreas(payload).then(result => {
          this.summaryResult = result;
          this.interactionService.setSummaryData(result);
          if(this.helper.isResultEmpty(result)){
            this.emptyResult = true;
          }
          // this.summaryResult.layers[0].values.push({name: 'Zones Selected', value: this.areas.length});
        }).then(() => { this.loadingData = false;
          this.interactionService.displayButtonExport(!this.loadingData)}).catch((e) => {
          this.logger.log(JSON.stringify(e))
          this.loadingData = false;
          this.interactionService.displayButtonExport(!this.loadingData)
        });
    }


}
