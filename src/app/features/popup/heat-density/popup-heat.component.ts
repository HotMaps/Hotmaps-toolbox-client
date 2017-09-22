import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PopupComponent } from './../popup.component';
import { MapService } from './../../../shared/services/map.service';
import { PopupHeatService } from './popup-heat.service';

@Component({
    selector: 'htm-popup-heat',
    templateUrl: 'popup-heat.component.html',
    styleUrls: ['./popup-heat.component.css']
})

export class PopupHeatComponent extends PopupComponent implements OnInit {
    @ViewChild('popupheat') el: ElementRef;
    constructor(mapService: MapService, private popupHeatService: PopupHeatService) {
        super(popupHeatService, mapService);
    }

    ngOnInit() {
        super.subscribeData();
        this.popupService.visible.subscribe((visible) => {
            super.showPopup(this.el);
        });
    }
}
