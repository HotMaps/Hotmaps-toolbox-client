/*
Author: Albain Dufils
Date: 28.09.2017
Description:
This pipe is used to format number with the correct format

*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberformat'
})

export class NumberFormatPipe  implements PipeTransform {

    transform(value: string, args: any[]): any {
      const val_trans = value.split(',').join(' ').split('.').join(',')
      return val_trans;
    }
}
