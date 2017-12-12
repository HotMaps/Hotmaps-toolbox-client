import {Component, AfterContentInit, OnInit, ViewChild} from '@angular/core';

import { LoaderService } from '../shared/services/loader.service';

import { LeftSideComponent, SidePanelService, RightSideComponent } from '../features/side-panel';
import { Logger } from '../shared';
import { MapService } from '../pages/map/map.service';
import { SearchBarComponent } from '../pages/searchbar';
import { InteractionService } from 'app/shared/services/interaction.service';
import { TopSideComponent } from './../features/side-panel/top-side-panel/top-side-panel.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [ require<any>('./app.component.css')],

})

export class AppComponent implements OnInit , AfterContentInit {

  
  /**
  * Management of initial status of sidebar
  */
  openRightSidebar = false;
  openRightToggleExpanded = false;
  openLeftSidebar = false;
  openTopSidebar = false;

  /**
  * Declaration of the left, top and right sidebar and searchbar
  */
  @ViewChild(RightSideComponent) rightPanelComponent: RightSideComponent;
  @ViewChild(LeftSideComponent) leftPanelComponent: LeftSideComponent;
  @ViewChild(TopSideComponent) topSideComponent: TopSideComponent
  @ViewChild(SearchBarComponent) searchBarComponent: SearchBarComponent;

  /**
  * Management of initial status of general loading
  */
  showLoader: boolean;

  constructor(private mapService: MapService, private logger: Logger,
    private loaderService: LoaderService,
    private panelService: SidePanelService,
    private interactionService: InteractionService) {
  }

  ngAfterContentInit(): void {
   this.notifyLoaderService();
   this.notifySubscription();
    this.leftPanelComponent.setTitle('Layers');
    this.rightPanelComponent.setTitle('Load Result');
    this.topSideComponent.setTitle('Feedback');
    // this.mapService.getGridTest();

  }

  /**
  * Notifications of the side panel elements
  */
  notifySubscription() {
    this.panelService.summaryResultDataStatus.subscribe((data) => {
      this.rightPanelComponent.setSummaryResult(data);
    });
    this.panelService.poiData.subscribe((data) => {
      this.rightPanelComponent.setPoiData(data);
    });

    this.panelService.rightToggleExpandedStatus.subscribe((val: boolean) => {
      if (this.openRightToggleExpanded === false) {
        this.openRightToggleExpanded = true;
      } else {
        this.rightPanelComponent.toggleExpandedState();
        this.openRightSidebar = val;
      }
    });

    this.panelService.topPanelStatus.subscribe((val: boolean) => {
      if (this.openTopSidebar === false) {
        this.openTopSidebar = true;
      } else {
        this.topSideComponent.toggleExpandedState();
        this.openTopSidebar = val;
      }
    });

    this.panelService.rightPanelStatus.subscribe((val: boolean) => {
      this.openRightSidebar = val;
      this.rightPanelComponent.display(val);
    });

    this.panelService.leftPanelStatus.subscribe((val: boolean) => {
      this.openLeftSidebar = val;
      this.leftPanelComponent.display(val);
    });
  }

  /**
  * Initialize search bar
  */
  initializeNavigator(): void {
    this.searchBarComponent.Initialize();
  }

  /**
  * Notify the loader service
  */
  notifyLoaderService() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }


  ngOnInit() {
  }


}
