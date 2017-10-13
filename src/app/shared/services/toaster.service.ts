/**
 * Created by lesly on 14.07.17.
 */
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
    uikit.notification({message: msg, pos: 'bottom-center', timeout: 2000 })
  }
}
