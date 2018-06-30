import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CalculationModuleStatusService {
  private waitingCM: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private cmRunned: BehaviorSubject<any> = new BehaviorSubject<any>(null);
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
}
