/**
 * Created by lesly on 31.05.17.
 */

 // Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import {Component, OnInit} from '@angular/core';
import {GeocodingService} from '../../shared/services/geocoding.service';
import {MapService} from '../map/map.service';
import {Logger} from '../../shared/services/logger.service';
import {LoaderService} from '../../shared/services/loader.service';
import * as L from 'leaflet';
import {GoogleAnalyticsService} from "../../google-analytics.service";

declare let require;

@Component({
  selector: 'hmt-search-bar',
  templateUrl: './searchbar.component.html',
  styles: [ require('./searchbar.component.scss') ],
  providers: []
})
export class SearchBarComponent implements OnInit {
  address: string;

  private map: L.Map;

  constructor(private geocoder: GeocodingService, private mapService: MapService,
              private logger: Logger, private loaderService: LoaderService, private googleAnalyticsService:GoogleAnalyticsService) {
    this.address = '';
  }

  // Improvement of coding style :
  // use lower camel case to name methods
  // this method doesn't do anything, we can delete it
  Initialize() {
  }


  ngOnInit() {

    this.map = this.mapService.getMap();
  }

  goto() {
    this.logger.log('NavigatorComponent/goto()');
    if (!this.address) { return; }
    this.loaderService.display(true);
    this.logger.log('NavigatorComponent/goto()/this.address!=null' + this.address);
    this.geocoder.geocode(this.address)
      .subscribe(location => {
        this.logger.log('location' + this.address + ' ' + JSON.stringify(location));
        this.map.fitBounds(location.viewBounds, {});
        this.address = location.address;
        this.loaderService.display(false);
        this.googleAnalyticsService
          .eventEmitter("searchbar_goto", "searchbar", "goto", "enter");
      }, error => this.loaderService.display(false));
  }


  searchDestinationFrom(address: string) {
    this.logger.log('NavigatorComponent/goto()');
    if (!address) { return; }
    this.loaderService.display(true);
    this.logger.log('NavigatorComponent/goto()/this.address!=null' + this.address);
    this.geocoder.geocode(address)
      .subscribe(location => {
        this.map.fitBounds(location.viewBounds, {});
        this.address = location.address;
        this.loaderService.display(false);
      }, error => this.loaderService.display(false));
  }
}
