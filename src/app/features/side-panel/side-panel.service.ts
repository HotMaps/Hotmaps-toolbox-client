import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidePanelService {
    // status for left panel
    public leftPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // status for right panel
    public rightPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public rightToggleExpandedStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public summaryResultDataStatus: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    leftPanelexpandedCollapsed() {
        this.leftPanelStatus.next(true);
    }

    rightPanelexpandedCollapsed() {
        this.rightToggleExpandedStatus.next(true);
    }
    openRightPanel() {
      if (this.rightPanelStatus.value === false) {
        this.rightPanelStatus.next(true);
      }
    }
    closeRightPanel() {
      if (this.rightPanelStatus.value === true) {
        this.rightPanelStatus.next(false);
      }
    }

    setSummaryResultData(data: any) {
      this.summaryResultDataStatus.next(data);
    }
    addDataToRightPanel(data) {

    }
}

