import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidePanelService {
    // status for left panel
    public leftPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // status for right panel
    public rightPanelStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    leftPanelexpandedCollapsed() {
        this.leftPanelStatus.next(true);
    }

    rightPanelexpandedCollapsed() {
        this.rightPanelStatus.next(true);
    }
}

