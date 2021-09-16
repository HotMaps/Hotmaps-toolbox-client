// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidePanelService {

    // Improvement of coding style : 
    // place private members after public members, alphabetized
    // status for left panel
    public leftPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // status for right panel
    public rightPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public topPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public rightToggleExpandedStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    public folderPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public savePanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    topPanelexpandedCollapsed() {
      this.topPanelStatus.next(true);
    }
    closeTopPanelexpandedCollapsed() {
      this.topPanelStatus.next(false);
    }
    openLeftPanel() {
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

    setFolderPanelStatus(toOpen: boolean = false) {
      this.folderPanelStatus.next(toOpen);
    }

    setSavePanelStatus(toOpen: boolean = false) {
      this.savePanelStatus.next(toOpen);
    }
}

