import { PopupHeatService } from './heat-density/popup-heat.service';
import { Injectable } from '@angular/core';
import { PopupValidationComponent } from './validation/popup-validation.component';
import { PopupValidationService } from './validation/popup-validation.service';
import { PopupWWTPService } from './wwtp/popup-wwtp.service';

@Injectable()
export class PopupFactory {
    popupValService: PopupValidationService;
    popupWWTPService: PopupWWTPService;
    popHeatService: PopupHeatService

    constructor(popupValService: PopupValidationService, popWWTPService: PopupWWTPService, popHeatService: PopupHeatService) {
        this.popupValService = popupValService;
        this.popupWWTPService = popWWTPService;
        this.popHeatService = popHeatService;
    }
}
