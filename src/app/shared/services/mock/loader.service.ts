/**
 * Created by lesly on 19.06.17.
 */

import { SpyObject } from './helper';
import { LoaderService } from '../loader.service';
import Spy = jasmine.Spy;

export class MockLoaderService extends SpyObject {
  displaySpy: Spy;
  fakeResponse: any;
  constructor() {
    super( LoaderService );

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
