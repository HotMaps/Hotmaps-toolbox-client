import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidePanelService {

    // status for left panel
    public leftPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // status for right panel
    public rightPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public topPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public rightToggleExpandedStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public summaryResultDataStatus: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public poiData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    topPanelexpandedCollapsed() {
      this.topPanelStatus.next(true);
    }
    rightPanelexpandedCollapsed() {
      this.rightToggleExpandedStatus.next(true);
    }
    leftPanelexpandedCollapsed() {
      this.leftPanelStatus.next(true);
    }
    openTopPanel() {
      this.topPanelStatus.next(true);
    }
    closeTopPanel() {
      this.topPanelStatus.next(false);
    }
    openRightPanel() {
      this.rightPanelStatus.next(true);
    }
    closeRightPanel() {
      this.rightPanelStatus.next(false);
    }
    closeLeftPanel() {
      this.leftPanelStatus.next(false);
    }
    setSummaryResultData(data: any) {
      this.summaryResultDataStatus.next(data);
    }
    setPoiData(data) {
      this.poiData.next(data);
    }
}

