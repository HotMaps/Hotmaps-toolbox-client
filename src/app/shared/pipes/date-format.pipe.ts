import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'date-format'
})

export class DateFormatPipe implements PipeTransform {
    transform(date: any): any {

    }
}
