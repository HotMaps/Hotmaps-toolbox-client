import { SelectionToolService } from './../selection-tools/selection-tool.service';
import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, ApplicationRef } from '@angular/core';
import { Popup } from 'leaflet';
import { MapService } from './../../shared/services/map.service';
import { PopupService } from './popup.service';

@Component({
    selector: 'htm-popup',
    templateUrl: 'popup.component.html',
    styleUrls: ['./popup.component.css'],
    providers: []
})

export class PopupComponent extends L.Popup implements AfterContentInit, OnInit {
    @ViewChild('popupval') el: ElementRef;
    title = 'Area selected';
    private visible: boolean;
    constructor(private mapService: MapService, private popupService: PopupService) {
        super({ minWidth: 250 });
    }
    removePopup() {
        this.popupService.closePopup();
    }
    ngOnInit() { }
    ngAfterContentInit(): void {
        this.popupService.showPopupStatus.subscribe(visibleStatus => {
            console.log()
            this.visible = visibleStatus;
            this.popupService.showPopup(this.el);
        });
    }
    setTitle(title) {
        this.title = title;
    }
}
