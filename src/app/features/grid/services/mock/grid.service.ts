import { SpyObject } from '../../../../shared/services/mock/helper';
import { GridService } from '../grid.service';
import Spy = jasmine.Spy;

export class MockGridService extends SpyObject {
  getGridWithPayloadsSpy: Spy;

  fakeResponse: any;
  constructor() {
    super( GridService );

    this.fakeResponse = null;
    this.getGridWithPayloadsSpy = this.spy('getGrid').andReturn(this);


  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
