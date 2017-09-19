import { DataLayerRequest } from './../../shared/services/mock/mock-layer.data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GeojsonClass } from './../layers/class/geojson.class';
import { Injectable, Component } from '@angular/core';

import { LatLng, Popup } from 'leaflet';


@Injectable()
export class PopupService {

    public data: BehaviorSubject<GeojsonClass> = new BehaviorSubject(DataLayerRequest);
    public latlng: BehaviorSubject<LatLng> = new BehaviorSubject(null);
    public titlePopup: BehaviorSubject<string> = new BehaviorSubject(null);
    public keysData: BehaviorSubject<string[]> = new BehaviorSubject(null);
    public validation: BehaviorSubject<boolean> = new BehaviorSubject(true);

    constructor() { }

    setData(data) {
        this.data.next(data);
        console.log(data);
    }

    setLatLng(latlng) {
        this.latlng.next(latlng);
    }

    setTitle(title) {
        this.titlePopup.next(title);
    }

    setKeys(keys) {
        this.keysData.next(keys);
    }
    showPopupValidation() {
        this.validation.next(true);
    }
}
