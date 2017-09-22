import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Popup } from 'leaflet';
import { MapService } from './../../shared/services/map.service';
import { PopupService } from './popup.service';

@Component({
 moduleId: module.id
})


export class PopupComponent extends L.Popup implements OnInit  {
  protected title: string;
  protected data: any;
  protected latlng: any;
  protected visible = false;
  constructor(protected popupService: PopupService, protected mapService: MapService) {
    super({minWidth: 200});
  }

  ngOnInit() {}
  subscribeData() {
    this.popupService.visible.subscribe((visible) => {
        this.visible = visible;
    });

    this.popupService.data.subscribe((data) => {
        this.data = data;
    });

    this.popupService.latlng.subscribe((latlng) => {
        this.latlng = latlng
    });

    this.popupService.title.subscribe((title) => {
        this.title = title;
    });
  }
  showPopup(el) {
      if (this.latlng) {
        this.setContent(el.nativeElement).setLatLng(this.latlng).openOn(this.mapService.getMap());
      }
  }
}
