import { Component } from '@angular/core';


@Component({
  moduleId:module.id,
  template: ''
})
export class WaitingStatusComponent {

  protected waitingStatus = false;

  setWaitingStatus(value) {
    this.waitingStatus=value;
  }
}
