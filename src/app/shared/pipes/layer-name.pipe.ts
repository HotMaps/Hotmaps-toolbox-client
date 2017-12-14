// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
import { Pipe, PipeTransform } from '@angular/core';
import { DataInteractionService } from '../../features/data-interaction/data-interaction.service';
@Pipe({
  name: 'layername'
})

export class LayerNamePipe  implements PipeTransform {
  constructor(private dataInteractionService: DataInteractionService) {}
  transform(value: any, args: any[]): any {
    if (value === null) {
      return 'Nothing to transform';
    }

    return this.dataInteractionService.getReadableName(value);
  }
}
