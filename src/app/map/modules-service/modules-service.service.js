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
require("rxjs/add/operator/toPromise");
var fake_module_service_data_service_1 = require("./fake-module-service-data.service");
var ModulesServiceService = (function () {
    function ModulesServiceService(http, loaderService) {
        this.http = http;
        this.loaderService = loaderService;
    }
    /* getModulesServices(): Promise<ModulesService[]> {
      return this.http.get(this.servicesUrl)
        .toPromise()
        .then(response => response.json().data as ModulesService[])
        .catch(this.handleError);
    }*/
    ModulesServiceService.prototype.getModulesServices = function () {
        return Promise.resolve(fake_module_service_data_service_1.MODULESERVICE);
    };
    ModulesServiceService.prototype.getModulesServicesWithNewService = function (newService) {
        var servicesArray = fake_module_service_data_service_1.MODULESERVICE;
        servicesArray.push(newService);
        return Promise.resolve(servicesArray);
    };
    ModulesServiceService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ModulesServiceService.prototype.getModulesServicesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getModulesServices()); }, 2000);
        });
    };
    return ModulesServiceService;
}());
ModulesServiceService = __decorate([
    core_1.Injectable()
], ModulesServiceService);
exports.ModulesServiceService = ModulesServiceService;
