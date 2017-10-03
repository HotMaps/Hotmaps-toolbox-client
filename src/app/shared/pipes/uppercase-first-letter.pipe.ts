/*
        Author: Albain Dufils
        Date: 28.09.2017
        Description:
            This pipe is used to format string to:
                the first letter in uppercase
                the rest in lowercase

*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'uppercaseFirstLetter'
})

export class UppercaseFirstLetterPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        if (value === null) {
            return 'Nothing to transform';
        }
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
}
