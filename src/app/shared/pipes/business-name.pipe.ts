// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { Pipe, PipeTransform } from '@angular/core';
import {BusinessInterfaceRenderService} from '../business/business.service';
@Pipe({
  name: 'businessname'
})

export class BusinessNamePipe  implements PipeTransform {
  constructor(private businessService: BusinessInterfaceRenderService) {}
  transform(value: any, args: any[]): any {
    if (value === null) {
      return 'Nothing to transform';

    }

    value = this.businessService.getReadableName(value);
    return value;
  }
}
