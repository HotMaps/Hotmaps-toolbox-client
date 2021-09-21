import { Component } from '@angular/core';

declare let module;
let moduleId = module.id;

@Component({
  moduleId:moduleId
})
export class WaitingStatusComponent {

  protected waitingStatus = false;

  setWaitingStatus(value) {
    this.waitingStatus=value;
  }
}
