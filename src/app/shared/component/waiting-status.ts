import { Component } from '@angular/core';


@Component({
  moduleId:module.id,
  template: ''
})
export class WaitingStatusComponent {

  waitingStatus = false;

  setWaitingStatus(value) {
    this.waitingStatus=value;
  }
}
