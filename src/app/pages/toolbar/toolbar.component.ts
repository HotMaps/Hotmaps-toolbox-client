/**
 * Created by lesly on 27.05.17.
 */
import {Component, OnInit} from '@angular/core';
import {MapService} from '../../shared/services/map.service';
import { MouseEvent} from 'leaflet';

import { Logger} from '../../shared/services/logger.service';

@Component({
  selector: 'hmt-toolbar',
  template: require<any>('./toolbar.component.html'),
  styles: [ require<any>('./toolbar.component.scss')],
  providers: []
})
export class ToolbarComponent implements OnInit{
  editing: boolean;
  removing: boolean;
  airportLayerAdded: boolean;
  markerCount: number;

  constructor(private mapService: MapService, private logger: Logger) {
    this.editing = false;
    this.logger = logger;
    this.removing = false;
    this.markerCount = 0;
  }

  ngOnInit() {
    this.logger.log('ToolbarComponent/ngOnInit');
    this.mapService.disableMouseEvent('add-marker');
    this.mapService.disableMouseEvent('remove-marker');
    this.mapService.disableMouseEvent('toggle-layer');
  }

  Initialize() {
    this.logger.log('ToolbarComponent/Initialize');


  /*  this.mapService.map.on('click', (e: MouseEvent) => {

      if (this.editing) {
        this.logger.log('ToolbarComponent/click');
        let marker = L.marker(e.latlng, {
          icon: L.icon({
            iconUrl: '../../../node_modules/leaflet/dist/images/marker-icon.png',
            shadowUrl: '../../../node_modules/leaflet/dist/images/marker-shadow.png'
          }),
          draggable: true
        })
          .bindPopup('Marker #' + (this.markerCount + 1).toString(), {
            offset: L.point(12, 6)
          })
          .addTo(this.mapService.map)
          .openPopup();

        this.markerCount += 1;

        marker.on('click', (event: MouseEvent) => {
          if (this.removing) {
            this.mapService.map.removeLayer(marker);
            this.markerCount -= 1;
          }
        });
      }
    });*/
  }

  toggleEditing() {
    this.editing = !this.editing;

    if (this.editing && this.removing) {
      this.removing = false;
    }
  }

  toggleRemoving() {
    this.removing = !this.removing;

    if (this.editing && this.removing) {
      this.editing = false;
    }
  }

}
