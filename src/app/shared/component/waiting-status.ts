import { Component } from '@angular/core';

declare let module;

@Component({
  moduleId:module.id
})
export class WaitingStatusComponent {

  protected waitingStatus = false;

  setWaitingStatus(value) {
    this.waitingStatus=value;
  }
}
