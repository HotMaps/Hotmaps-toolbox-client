/**
 * Created by lesly on 27.05.17.
 */
import { SpyObject } from './helper';
import { MapService } from '../map.service';
import Spy = jasmine.Spy;

export class MockMapService extends SpyObject {
  fakeResponse: any;
  getMapSpy: Spy;
  constructor() {
    super( MapService );
    this.getMapSpy = this.spy('getMap').andReturn(this);
    this.fakeResponse = null;

  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
