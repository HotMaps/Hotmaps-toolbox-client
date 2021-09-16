/**
 * Created by lesly on 14.07.17.
 */

 // Improvement of coding style :
// leaving one empty line between third party imports and application imports
import { Injectable } from '@angular/core';
import * as uikit from 'uikit'

@Injectable()
export class ToasterService {

  constructor() {
  }

  showToaster(msg: string) {
    uikit.notification.closeAll();
    uikit.notification({message: msg, pos: 'bottom-center', timeout: 3000 })
  }
  showDangerToaster(msg: string) {
    uikit.notification.closeAll();
    uikit.notification({message:"<span uk-icon='icon: warning'></span> " + msg, pos: 'bottom-center', timeout: 3000, status: 'danger' })
  }
  showToasterSurfaceCalculDisabled() {
    this.showToaster("You have exceeded the AREA SELECTION LIMIT for the free selection as well as for running calculation modules! Please select a smaller area.");
  }
}
