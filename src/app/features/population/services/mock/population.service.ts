import { SpyObject } from '../../../../shared/services/mock/helper';
import { PopulationService } from '../population.service';
import Spy = jasmine.Spy;

export class MockPopulationService extends SpyObject {
  getPopulationWithPayloadsSpy: Spy;

  fakeResponse: any;
  constructor() {
    super( PopulationService );

    this.fakeResponse = null;
    this.getPopulationWithPayloadsSpy = this.spy('getPopulationWithPayloads').andReturn(this);


  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
