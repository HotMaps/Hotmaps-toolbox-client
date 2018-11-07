/**
 * Created by lesly on 14.07.17.
 */

 // Improvement of coding style :
// leaving one empty line between third party imports and application imports
import { Injectable } from '@angular/core';
import * as uikit from 'uikit'
/* import { MdSnackBar } from '@angular/material';
 */
@Injectable()
export class ToasterService {

  constructor() {
  }

  showToaster(msg: string) {
    uikit.notification.closeAll();
    uikit.notification({message: msg, pos: 'bottom-center', timeout: 3000 })
  }
}
