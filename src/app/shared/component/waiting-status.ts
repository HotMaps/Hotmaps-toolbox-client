import { Component } from '@angular/core';

@Component({
  moduleId:module.id
})
export class WaitingStatusComponent {

  protected waitingStatus = false;

  setWaitingStatus(value) {
    this.waitingStatus=value;
  }
}
