import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CalculationModuleStatusService {
  private waitingCM: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  getWaitingSatus() {
    return this.waitingCM;
  }
  setWaitingStatus(value: boolean) {
    this.waitingCM.next(value);
  }
}
