import { SpyObject } from './helper';
import { SelectionScaleService } from 'app/features/selection-scale';
import Spy = jasmine.Spy;

export class MockSelectionScaleService extends SpyObject {
  displaySpy: Spy;
  fakeResponse: any;
  constructor() {
    super( SelectionScaleService );

    this.fakeResponse = null;
    this.displaySpy = this.spy('display').andReturn(this);

  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}