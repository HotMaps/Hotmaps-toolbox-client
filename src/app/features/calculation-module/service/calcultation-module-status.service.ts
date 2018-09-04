import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs';

@Injectable()
export class CalculationModuleStatusService {
  private waitingCM: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private cmRunned: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private panelIsOpen: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private status_id: Subject<any> = new Subject<any>();
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
  setStatusIdCM(status_id) {
    this.status_id.next(status_id)
  }
  getStatusIdCM() {
    return this.status_id
  }
}
