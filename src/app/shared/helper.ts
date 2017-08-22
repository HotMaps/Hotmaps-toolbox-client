import {Injectable} from '@angular/core';
import {Logger} from './services/logger.service';
import {Location} from './location/location';


@Injectable()
export class Helper {
  constructor(private logger: Logger) {
  }
  // check if unfined or not
  isNullOrUndefined(x: any) {
    let result = false;
    if (x == null) {
      result = true;
    }

    if (x === null) {
      result = true;
    }
    if (typeof x === 'undefined') {
      result = true;
    }
    return result;
  }
 // convert getlatLong() form path leaflet to array of location[]
  convertLatLongToLocation(latlng): Location[] {
    let n = 0;
    const locations =  [];
    do {
      this.logger.log(' boucle');
      this.logger.log(' Lat =' + latlng[n].lat);
      this.logger.log(' Lng =' + latlng[n].lng);
      this.logger.log(' before n++ latlng =' + latlng[n]);
      const loc: Location = {
        lat: latlng[n].lat,
        lng: latlng[n].lng
      };
      locations.push(loc);
      n++;
      this.logger.log(' after n++ latlng =' + latlng[n]);
    } while (!this.isNullOrUndefined(latlng[n]));

  return locations;
  }

}
