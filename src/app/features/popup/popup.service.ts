import { RegisterComponent } from './../../pages/register/register.component';
import { PopupComponent } from './popup.component';
import { MapService } from './../../shared/services/map.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef, NgZone } from '@angular/core';

@Injectable()
export class PopupService {
    private btnValidation = true;
    private btnCancel: boolean;
    private currentLayer: any;
    showPopupStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {
    }

    closePopup() {
        this.showPopupStatus.next(false);
    }
    getLayer(): any {
        return this.currentLayer;
    }

    openPopup(currentLayer) {
        console.log(currentLayer.getLatLng());
        this.currentLayer = currentLayer;
        this.showPopupStatus.next(true);
    }

    showPopup(el) {
        if (el) {
            this.currentLayer.bindPopup(el.nativeElement).openPopup();
        }
    }
}
