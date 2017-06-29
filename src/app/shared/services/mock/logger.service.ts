/**
 * Created by lesly on 19.06.17.
 */

import { SpyObject } from './helper';
import { Logger } from '../logger.service';
import Spy = jasmine.Spy;

export class MockLoggerService extends SpyObject {
  displaySpy: Spy;
  fakeResponse: any;
  constructor() {
    super( Logger );

    this.fakeResponse = null;
    this.displaySpy = this.spy('log').andReturn(this);

  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
