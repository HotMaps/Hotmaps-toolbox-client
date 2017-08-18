/**
 * Created by lesly on 09.06.17.
 */
import { Injectable } from '@angular/core';
import {isDevMode} from '@angular/core';
@Injectable()
export class Logger {
  logs: string[] = []; // capture logs for testing
  str = '';
  log(message: string) {
    if (isDevMode() === true) {
      this.logs.push(message);
      console.log(message);
    }
  }
  logObj(obj: any) {
    let output = '';
    console.log(output);
    for (let property in obj) {
      console.log(output);
      output += property + ': ' + obj[property] + '; ';
    }
    this.logs.push(output);
    console.log(output);
  }
  logJson(obj: any) {
    if (isDevMode() === true) {
      this.logs.push('JSON representation: ' + JSON.stringify(obj));
      console.log('JSON representation: ' + JSON.stringify(obj));
    }
  }

}
