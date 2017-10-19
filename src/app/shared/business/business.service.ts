import { Injectable } from '@angular/core';


import { BusinessInterfaceRenderClass } from './business.class';
import { BusinessInterfaceRenderArray } from './business.data';
import {Helper} from '../helper';

@Injectable()
export class BusinessInterfaceRenderService {

  constructor(private helper: Helper) {
  }
  getReadableName(name: string): string {
    const business  =  this.getBusiness().filter(x => x.api_name === name)[0];
    if (this.helper.isNullOrUndefined(business)) {return name}
    return business.business_name;

  }
  // transform Nuts Value to readable name for the API
  convertNutsToApiName(name: string): string {
    const business  =  this.getBusiness().filter(x => x.business_name === name)[0];
    if (this.helper.isNullOrUndefined(business)) {return name}
    return business.api_name;
  }
  getBusiness(): BusinessInterfaceRenderClass[] {
      return BusinessInterfaceRenderArray;
  }
}
