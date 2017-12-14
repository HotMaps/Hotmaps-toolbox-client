/**
 * Created by lesly on 13.07.17.
 */

// Improvement of coding style : 
// leaving one empty line between third party imports and application imports
import { ErrorHandler, Injectable, Injector} from '@angular/core';
import {ToasterService} from './toaster.service';
import {LoaderService} from './loader.service';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor( private injector: Injector) { }
  handleError(error) {
    const loaderService = this.injector.get(LoaderService);
    loaderService.display(false);
    const message = error.message ? error.message : error.toString();
    const toasterService = this.injector.get(ToasterService);
    toasterService.showToaster(message);


    console.log('flerwajgoerjgpergperwjgpoerjgerpogjerpgjererierjeworqj2pr');
    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    throw error;
  }

}
