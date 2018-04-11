// Improvement of coding style :
// leaving one empty line between third party imports and application imports
import { Pipe, PipeTransform } from '@angular/core';
import { DataInteractionService } from '../../features/data-interaction/data-interaction.service';
import {Logger} from '../services/logger.service';
@Pipe({
  name: 'layername'
})

export class LayerNamePipe  implements PipeTransform {
  constructor(private dataInteractionService: DataInteractionService, private logger: Logger) {}
  transform(value: any, args: any[]): any {
    this.logger.log('LayerNamePipe/transform value ? ' + value);
    if (value === null) {
      return 'Nothing to transform';
    }
    const valueTransformed = this.dataInteractionService.getReadableName(value);
    this.logger.log('LayerNamePipe/transform valueTransformed ? ' + valueTransformed);

    return valueTransformed;
  }
}
