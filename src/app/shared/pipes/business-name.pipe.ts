import { Pipe, PipeTransform } from '@angular/core';
import { DataInteractionService } from '../../features/data-interaction/data-interaction.service';
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

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
