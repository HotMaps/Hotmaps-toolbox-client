"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by lesly on 09.06.17.
 */
var core_1 = require("@angular/core");
var ModuleServiceListComponent = (function () {
    function ModuleServiceListComponent(modulesServiceService) {
        this.modulesServiceService = modulesServiceService;
    }
    ModuleServiceListComponent.prototype.getmodulesServices = function () {
        var _this = this;
        this.modulesServiceService.getModulesServices().then(function (services) { return _this.services = services; });
    };
    ModuleServiceListComponent.prototype.ngOnInit = function () {
        this.getmodulesServices();
    };
    ModuleServiceListComponent.prototype.onSelect = function (service) {
        this.selectedModulesService = service;
    };
    ModuleServiceListComponent.prototype.gotoDetail = function () {
    };
    return ModuleServiceListComponent;
}());
ModuleServiceListComponent = __decorate([
    core_1.Component({
        selector: 'htm-modules-service-list',
        animations: [
            core_1.trigger('enterAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateX(100%)', opacity: 0 }),
                    core_1.animate('500ms', core_1.style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateX(0)', opacity: 1 }),
                    core_1.animate('500ms', core_1.style({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ])
        ],
        templateUrl: './modules-service-list.component.html',
        styleUrls: ['./modules-service-list.component.css']
    })
], ModuleServiceListComponent);
exports.ModuleServiceListComponent = ModuleServiceListComponent;
