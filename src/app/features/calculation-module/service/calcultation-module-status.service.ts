import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs';

@Injectable()
export class CalculationModuleStatusService {
  private waitingCM: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private cmRunned: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private panelIsOpen: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private cmAnimationStatus: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  private cmRunning: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  getRuningState() {
    return this.cmRunning
  }
  setRuningState(val) {
    this.cmRunning.next(val)
  }
  getWaitingSatus() {
    return this.waitingCM;
  }
  setWaitingStatus(value: boolean) {
    this.waitingCM.next(value);
  }
  setCmRunned(cm, components) {
    const calculationmodule = {'cm': cm, 'component': components}
    this.cmRunned.next(calculationmodule);
  }
  getCmRunned() {
    return this.cmRunned
  }
  undefinedCmRunned() {
    this.cmRunned.next(null);
  }
  getStatusCMPanel() {
    return this.panelIsOpen;
  }
  setStatusCMPanel(value) {
    this.panelIsOpen.next(value)
  }
  setCmAnimationStatus(value) {
    this.cmAnimationStatus.next(value)
  }
  getCmAnimationStatus() {
    return this.cmAnimationStatus
  }
}
