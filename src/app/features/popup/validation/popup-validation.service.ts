import { PopupValidationComponent } from './popup-validation.component';
import { MapService } from './../../../shared/services/map.service';
import { GeojsonClass } from './../../layers/class/geojson.class';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PopupService } from './../popup.service';
import { Injectable } from '@angular/core';
import { LatLng } from 'leaflet';

@Injectable()
export class PopupValidationService implements PopupService {
    data: BehaviorSubject<GeojsonClass> = new BehaviorSubject<GeojsonClass>(null);
    latlng: BehaviorSubject<LatLng> = new BehaviorSubject<LatLng>(null);
    title: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // TODO: Replicate is not permited ;)
    constructor() { }

    setVisibleStatus(visible) {
        this.visible.next(visible);
    }
    setData(data: GeojsonClass) {
        this.data.next(data);
    }
    setLatLng(latlng: any) {
        this.latlng.next(latlng);
    }
    setTitle(title: string) {
        this.title.next(title);
    }
    showPopup(visible, data, latlng, title) {
        this.setVisibleStatus(visible);
        this.setData(data);
        this.setTitle(title);
        this.setLatLng(latlng);
    }

}
