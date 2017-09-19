import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Popup } from 'leaflet';
import { MapService } from './../../shared/services/map.service';
import { PopupService } from './popup.service';

@Component({
  selector: 'htm-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})


export class PopupComponent extends L.Popup implements OnInit  {
  private popup: any;
  private title: string;
  private data: any;
  private keysData: string[];
  private validation = false;

  @ViewChild('popup') el: ElementRef;

  constructor(private mapService: MapService, private popupService: PopupService) {
    super({minWidth: 200});
  }
  ngOnInit() {
    this.popupService.validation.subscribe((validation) => {
      this.validation = validation;
    });

    this.popupService.data.subscribe((data) => {
        this.data = data;
    });

    this.popupService.latlng.subscribe((latlng) => {
        this.showPopup(latlng);
    });

    this.popupService.titlePopup.subscribe((title) => {
        this.title = title;
    });

    this.popupService.keysData.subscribe((keysData) => {
        this.keysData = keysData;
    });
}

  setTitle(title: string) {
    this.title = title;
  }

  showPopup(latlng: any) {
    if (latlng) {
      this.setContent(this.el.nativeElement).setLatLng(latlng).openOn(this.mapService.getMap());
    }
  }

  removePopup() {
    console.log(this.popup.isPopupOpen());
  }
}
