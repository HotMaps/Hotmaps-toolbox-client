import { PopupValidationService } from './popup-validation.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PopupComponent } from './../popup.component';
import { MapService } from './../../../shared/services/map.service';

@Component({
    selector: 'htm-popup-validation',
    templateUrl: 'popup-validation.component.html',
    styleUrls: ['./popup-validation.component.css']
})

export class PopupValidationComponent extends PopupComponent implements OnInit {
    @ViewChild('popupval') el: ElementRef;
    constructor(mapService: MapService, private popupVService: PopupValidationService) {
        super(popupVService, mapService);
     }

    ngOnInit() {
        this.popupService.visible.subscribe((latlng) => {
            super.showPopup(this.el);
        });
    }
}
