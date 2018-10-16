import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Injectable } from '@angular/core';


@Injectable()
export class CalculationModuleStatusService {
  // private waitingCM = new BehaviorSubject<boolean>(true);
  private cm_panelStatus = new BehaviorSubject<any>(null);
  private calculcation_modules = new BehaviorSubject<any>(null)
  private cm_components = new BehaviorSubject<any>(null)
  private cm_selected = new BehaviorSubject<any>(null)
  private cm_progress_time = new BehaviorSubject<any>(0)
  private cm_isRunning = new BehaviorSubject<any>(false)
  private cm_status_id = new BehaviorSubject(null)

  constructor() {}
  // getWaitingCMs() { return this.waitingCM }
  getPanelStatus() { return this.cm_panelStatus }
  getCalculationModules() { return this.calculcation_modules }
  getComponents() { return this.cm_components }
  getCMselected() { return this.cm_selected }
  getProgressTime() { return this.cm_progress_time }
  getIsCMRunning() { return this.cm_isRunning }
  getStatusId() { return this.cm_status_id }

  // setWaitingCMs(data) { this.waitingCM.next(data) }
  setPanelStatus(data) { this.cm_panelStatus.next(data) }
  setCalculationModules(data) {
    this.calculcation_modules.next(data);
  }
  setComponents(data) { this.cm_components.next(data) }
  setCMselected(cm, components) {
    const cm_selected = { cm: cm, component: components}
    this.cm_selected.next(cm_selected)
  }
  setCMUndefinned() { this.cm_selected.next(undefined) }


  setProgressTime(data) { this.cm_progress_time.next(data) }
  setIsCMRunning(data) { this.cm_isRunning.next(data) }
  setStatusId(data) { this.cm_status_id.next(data) }


}
