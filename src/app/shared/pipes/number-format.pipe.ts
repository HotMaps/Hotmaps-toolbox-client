import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'selector-name'
})

export class NamePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        
    }
}