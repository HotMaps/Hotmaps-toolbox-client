import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PopupComponent } from './../popup.component';
import { MapService } from './../../../shared/services/map.service';
import { PopupWWTPService } from './popup-wwtp.service';
import {unit_capacity} from '../../../shared/data.service'

@Component({
    selector: 'htm-popup-wwtp',
    templateUrl: 'popup-wwtp.component.html',
    styleUrls: ['./popup-wwtp.component.css']
})

export class PopupWWTPComponent extends PopupComponent implements OnInit {
    @ViewChild('popupwwtp') el: ElementRef;
    private unitCapacity = unit_capacity;
    constructor(mapService: MapService, private popupWWTPService: PopupWWTPService) {
        super(popupWWTPService, mapService);
    }

    ngOnInit() {
        super.subscribeData();
        this.popupService.visible.subscribe((visible) => {
            super.showPopup(this.el);
        });
    }
}
