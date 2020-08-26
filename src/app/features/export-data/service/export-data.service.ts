import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Injectable } from '@angular/core';
import {Helper} from '../../../shared/helper';
import {Logger} from '../../../shared/services/logger.service';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';


@Injectable()
export class ExportDataService {

  constructor(private helper: Helper, private logger: Logger, private dataInteractionService: DataInteractionService) {}
  exportData(data, tabSelectedName: string, cmSessionName, refSelected){
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      useBom: true
    };
    this.logger.log('ExportDataService/exportData');
    this.logger.log('data' + JSON.stringify(data));
    // append cm session name to file name of exported CSV if CM is in the indicator results
    // otherwise keep random name
    let file_name;
    // check if no CM in results
    // second condition checks if the dropdown (refSelected), in results summary, is NOT overall or calculation module
    if (cmSessionName == undefined || !['overall', 'calculation module'].includes(refSelected.toLowerCase())) { // if no CM
      file_name = 'report_' + tabSelectedName + '_' + this.helper.generateRandomName();
    } else { // CM in results
      file_name = 'report_' + tabSelectedName + '_' + cmSessionName;
    }
    // TODO take into account the dropdown!
    data.map((d) => {
      try {
        d["indicator"] = this.dataInteractionService.getReadableName(d["indicator"])
      } catch(e) {
        d = d
      }
      
    })
    new Angular2Csv(data, file_name, options);
  }
}
