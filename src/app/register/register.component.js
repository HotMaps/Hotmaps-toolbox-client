"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by lesly on 09.06.17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var logger_service_1 = require("../shared/services/logger.service");
var RegisterComponent = (function () {
    function RegisterComponent(router, logger) {
        this.router = router;
        this.logger = logger;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.logger.log('RegisterComponent/ngOnInit()');
    };
    RegisterComponent.prototype.submit = function () {
        this.logger.log('RegisterComponent/submit()');
        this.router.navigate(['/map']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'htm-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router, logger_service_1.Logger])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map
