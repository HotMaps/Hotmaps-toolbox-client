import { Injectable } from '@angular/core';


import { BusinessInterfaceRenderClass } from './business.class';
import { BusinessInterfaceRenderArray } from './business.data';
import { NutsRenderArray } from './nuts.data';
import { Helper } from '../helper';
import { NutsRenderClass } from './NutsRenderClass';

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
    const business  =  this.getNuts().filter(x => x.business_name === name)[0];
    if (this.helper.isNullOrUndefined(business)) {return name}
    return business.api_name;
  }

  getNutsTosuffix(name: string): string {
    const business  =  this.getNuts().filter(x => x.business_name === name)[0];
    if (this.helper.isNullOrUndefined(business)) {return name}
    return business.suffix;
  }
  getBusiness(): BusinessInterfaceRenderClass[] {
      return BusinessInterfaceRenderArray;
  }
  getNuts(): NutsRenderClass[] {
    return NutsRenderArray;
  }
}
