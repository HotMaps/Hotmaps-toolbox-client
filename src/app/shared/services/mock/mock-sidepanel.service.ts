/**
 * Created by Albain on 24.10.17.
 */

import { SpyObject } from './helper';
import { SidePanelService } from './../../../features/side-panel/side-panel.service';
import Spy = jasmine.Spy;

export class MockSidePanelService extends SpyObject {
  displaySpy: Spy;
  fakeResponse: any;
  constructor() {
    super( SidePanelService );

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
