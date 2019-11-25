/*
Author: Albain Dufils
Date: 28.09.2017
Description:
This pipe is used to format number with the correct format

*/

import { Pipe, PipeTransform } from '@angular/core';
import { Helper } from '../helper';

@Pipe({
    name: 'numberformat'
})

export class NumberFormatPipe  implements PipeTransform {

  constructor(private helper:Helper) {}
  transform(value: string, args: any[]): any {
    var val_trans=''
    if(!this.helper.isNullOrUndefined(value)){
      val_trans = value.split(',').join(' ').split('.').join('.');
    }
    return val_trans;
  }
}
