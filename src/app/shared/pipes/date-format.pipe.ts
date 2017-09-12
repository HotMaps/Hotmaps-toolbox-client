import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'date-format'
})

export class DatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        
    }
}