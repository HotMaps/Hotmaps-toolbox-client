/**
 * Created by lesly on 09.06.17.
 */
import { Injectable } from '@angular/core';
import {isDevMode} from '@angular/core';
@Injectable()
export class Logger {
  logs: string[] = []; // capture logs for testing
  str: string= '';
  log(message: string) {
    if (isDevMode() === true) {
      this.logs.push(message);
      console.log(message);
    }
  }
  logObj(obj: any , message: string) {
    if (isDevMode() === true) {
      // this.log(message + ' ' + obj.values());
    }
  }

}
