import { SpyObject } from '../../../shared/services/mock/helper';
import { LayersService } from '../services/layers.service';
import Spy = jasmine.Spy;

export class MockLayerService extends SpyObject {
  addLayerWithAction: Spy;

  fakeResponse: any;
  constructor() {
    super( LayersService );

    this.fakeResponse = null;
    this.addLayerWithAction = this.spy('addLayerWithAction').andReturn(this);


  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
