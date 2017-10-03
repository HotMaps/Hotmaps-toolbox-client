
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable} from '@angular/core';

@Injectable()
export class PopupService {
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
