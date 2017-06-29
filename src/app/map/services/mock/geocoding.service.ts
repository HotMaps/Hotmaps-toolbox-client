/**
 * Created by lesly on 19.06.17.
 */

import { SpyObject } from './helper';
import { GeocodingService } from '../geocoding.service';
import Spy = jasmine.Spy;

export class MockGeocodeService extends SpyObject {
  geocodeSpy: Spy;
  getCurrentLocationSpy: Spy;
  fakeResponse: any;
  constructor() {
    super( GeocodingService );

    this.fakeResponse = null;
    this.geocodeSpy = this.spy('geocode').andReturn(this);
    this.getCurrentLocationSpy = this.spy('geocode').andReturn(this);

  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
