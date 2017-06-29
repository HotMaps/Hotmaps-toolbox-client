webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lesly on 09.06.17.
 */



var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* routes */])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n/* Add a black background color to the top navigation */\n.navbar {\n\n  background-color: #333;\n  overflow: hidden;\n  height: 50px;\n\n}\n\n/* Style the links inside the navigation bar */\n.navbar a {\n  float: right;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n/* Change the color of links on hover */\n.navbar a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n/* Add a color to the active/current link */\n.navbar a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n.img {\n  top: 0px;\n}\n\n\n/* handle spinner for the app */\n\n\n.tootlbar-icon {\n  padding: 0 14px;\n}\n\n.tootlbar-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n/* Absolute Center Spinner */\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n/* Transparent Overlay */\n.loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n}\n\n/* :not(:required) hides these rules from IE9 and below */\n.loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n}\n\n/* Animation */\n\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar\" id=\"navigationBar\">\n<nav>\n <!-- <a routerLink=\"/map\">Map</a>-->\n  <a routerLink=\"/register\">Register</a>\n  <a routerLink=\"/login\">Login</a>\n</nav>\n  <img style=\"max-width:80px; margin-top: -16px;\" src=\"../assets/logo.png\">\n</div>\n<router-outlet>\n  <span *ngIf=\"showLoader\" class=\"loading\"></span>\n</router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(loaderService) {
        this.loaderService = loaderService;
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_vectorgrid__ = __webpack_require__("../../../../leaflet.vectorgrid/dist/Leaflet.VectorGrid.bundled.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_vectorgrid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet_vectorgrid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs_hammer_js__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs_hammer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs_hammer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_measure_dist_leaflet_measure_js__ = __webpack_require__("../../../../leaflet-measure/dist/leaflet-measure.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_measure_dist_leaflet_measure_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_measure_dist_leaflet_measure_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navigator_navigator_component__ = __webpack_require__("../../../../../src/app/navigator/navigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__map_services_map_service__ = __webpack_require__("../../../../../src/app/map/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__map_services_geocoding_service__ = __webpack_require__("../../../../../src/app/map/services/geocoding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__map_modules_service_modules_service_service__ = __webpack_require__("../../../../../src/app/map/modules-service/modules-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__map_modules_service_modules_service_list_component__ = __webpack_require__("../../../../../src/app/map/modules-service/modules-service-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__navigator_navigator_component__["a" /* NavigatorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_23__map_modules_service_modules_service_list_component__["a" /* ModuleServiceListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__map_services_geocoding_service__["a" /* GeocodingService */],
            __WEBPACK_IMPORTED_MODULE_15__map_services_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_22__map_modules_service_modules_service_service__["a" /* ModulesServiceService */],
            __WEBPACK_IMPORTED_MODULE_20__shared_services_logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_21__shared_services_loader_service__["a" /* LoaderService */]
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_6__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/location/location.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location() {
    }
    return Location;
}());

//# sourceMappingURL=location.class.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>login</h1>\n<button (click)=\"submit()\">Submit</button>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 09.06.17.
 */



var LoginComponent = (function () {
    function LoginComponent(router, logger) {
        this.router = router;
        this.logger = logger;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.logger.log('LoginComponent/ngOnInit()');
    };
    LoginComponent.prototype.submit = function () {
        this.logger.log('LoginComponent/submit()');
        this.router.navigate(['/map']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'htm-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/basemap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basemap; });
/**
 * Created by lesly on 14.06.17.
 */
/**
 * Created by lesly on 14.06.17.
 */ var basemap = {
    OpenStreetMap: L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
            ' Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    }),
    Esri: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC,' +
            ' USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,'
    }),
    CartoDB: L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy;' +
            ' <a href="http://cartodb.com/attributions">CartoDB</a>'
    }),
};
//# sourceMappingURL=basemap.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"modules-service\">\n  <htm-modules-service-list></htm-modules-service-list>\n</div>-->\n<div id=\"map\">\n  <hmt-navigator></hmt-navigator>\n  <hmt-toolbar></hmt-toolbar>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n}\n#map {\n  position: absolute;\n  top: 50px;\n  left: 0%;\n  bottom: 0;\n  width: 100%;\n}\n#modules-service {\n  position: absolute;\n  top: 70px;\n  left: 10px;\n  bottom: 0;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigator_navigator_component__ = __webpack_require__("../../../../../src/app/navigator/navigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_geocoding_service__ = __webpack_require__("../../../../../src/app/map/services/geocoding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_map_service__ = __webpack_require__("../../../../../src/app/map/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_service_modules_service_service__ = __webpack_require__("../../../../../src/app/map/modules-service/modules-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__basemap__ = __webpack_require__("../../../../../src/app/map/basemap.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MapComponent = (function () {
    function MapComponent(mapService, geocoder, logger, modulesService, loaderService) {
        this.mapService = mapService;
        this.geocoder = geocoder;
        this.logger = logger;
        this.modulesService = modulesService;
        this.loaderService = loaderService;
    }
    MapComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.logger.log('MapComponent/AfterViewInit');
        this.logger.log('MapComponent/AfterViewInit/mapService val:: ' + this.mapService.map);
        this.map.on('measurestart', function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* isDevMode */])() === true) {
                console.log('MapComponent/measurestart');
            }
        });
        this.map.on('measurefinish', function (evt) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* isDevMode */])() === true) {
                console.log('MapComponent/measurefinish');
            }
            writeResults(evt, this.modulesService);
        });
        function writeResults(results, modulesService) {
            // let service: ModulesService = {id: 99, name: 'get Population'};
            // modulesService.getModulesServicesWithNewService(service);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* isDevMode */])() === true) {
                console.log(JSON.stringify({
                    area: results.area,
                    areaDisplay: results.areaDisplay,
                    lastCoord: results.lastCoord,
                    length: results.length,
                    lengthDisplay: results.lengthDisplay,
                    pointCount: results.pointCount,
                    points: results.points
                }, null, 2));
                alert(JSON.stringify({
                    pointCount: results.pointCount,
                    points: results.points
                }, null, 2));
            }
            ;
        }
        this.logger.log('MapComponent/AfterViewInit/this.geocoder val:: ' + this.geocoder);
        this.geocoder.getCurrentLocation()
            .subscribe(function (location) {
            _this.logger.log('MapComponent/AfterViewInit/this.geocoder.getCurrentLocation()/ location val:: ' + location);
            _this.map.panTo([location.latitude, location.longitude]);
        }, function (err) {
            console.error(err);
        });
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.logger.log('MapComponent/ngOnDestroy');
        this.map.remove();
    };
    MapComponent.prototype.ngOnInit = function () {
        this.logger.log('MapComponent/ngOnInit');
        // setup  the map from leaflet
        this.mapService.map = this.createMap(__WEBPACK_IMPORTED_MODULE_8__basemap__["a" /* basemap */].Esri);
        var districtLayer = L.tileLayer.wms('http://osgis.astun.co.uk/geoserver/gwc/service/wms?', {
            layers: 'osgb:district_borough_unitary_region',
            tiled: true,
            format: 'image/png',
            transparent: true,
            maxZoom: 14,
            minZoom: 0,
            continuousWorld: true
        }).addTo(this.map);
        this.logger.log('MapComponent/ngOnInit/mapService val: ' + this.mapService.map);
        this.initializeToolbar();
        this.initializeNavigator();
    };
    MapComponent.prototype.initializeToolbar = function () {
        this.toolbarComponent.Initialize();
    };
    MapComponent.prototype.initializeNavigator = function () {
        this.navigatorComponent.Initialize();
    };
    MapComponent.prototype.createMap = function (basemap) {
        this.logger.log('MapComponent/createMap/mapService val:: ' + this.mapService.map);
        var option = {
            zoomControl: false,
            center: L.latLng(47.1, 7.0833),
            zoom: 15,
            minZoom: 4,
            maxZoom: 17,
            layers: [basemap]
        };
        this.map = L.map('map', option);
        L.control.zoom({ position: 'topleft' }).addTo(this.map);
        var measureOption = { localization: 'en', primaryLengthUnit: 'kilometers', secondaryLengthUnit: 'miles',
            activeColor: '#ABE67E', primaryAreaUnit: 'hectares', completedColor: '#C8F2BE',
            popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] } };
        L.control.layers(this.mapService.baseMaps).addTo(this.map);
        L.control.scale().addTo(this.map);
        L.control.measure(measureOption).addTo(this.map);
        return this.map;
    };
    MapComponent.prototype.getMap = function () {
        return this.mapService.map;
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__toolbar_toolbar_component__["a" /* ToolbarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__toolbar_toolbar_component__["a" /* ToolbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__toolbar_toolbar_component__["a" /* ToolbarComponent */]) === "function" && _a || Object)
], MapComponent.prototype, "toolbarComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__navigator_navigator_component__["a" /* NavigatorComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__navigator_navigator_component__["a" /* NavigatorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__navigator_navigator_component__["a" /* NavigatorComponent */]) === "function" && _b || Object)
], MapComponent.prototype, "navigatorComponent", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'htm-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.less")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_map_service__["a" /* MapService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_geocoding_service__["a" /* GeocodingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_geocoding_service__["a" /* GeocodingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__modules_service_modules_service_service__["a" /* ModulesServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__modules_service_modules_service_service__["a" /* ModulesServiceService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _g || Object])
], MapComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/modules-service/fake-module-service-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULESERVICE; });
var MODULESERVICE = [
    { id: 11, name: 'Service module 1' },
    { id: 12, name: 'Service module 2' },
    { id: 13, name: 'Service module 3' },
    { id: 14, name: 'Service module 4' },
    { id: 15, name: 'Service module 5' },
    { id: 16, name: 'Service module 6' },
    { id: 17, name: 'Service module 7' },
    { id: 18, name: 'Service module 8' },
    { id: 19, name: 'Service module 9' },
    { id: 20, name: 'Service module 10' }
];
//# sourceMappingURL=fake-module-service-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/map/modules-service/modules-service-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.modules-service {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.modules-service li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 2em;\n  border-radius: 4px;\n}\n.modules-service li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.modules-service li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.modules-service .text {\n  position: relative;\n  top: -3px;\n}\n.modules-service .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/modules-service/modules-service-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"modules-service\">\n  <li *ngFor=\"let service of services\"\n      [class.selected]=\"service === selectedModulesService\"\n      (click)=\"onSelect(service)\">\n    <span class=\"badge\">{{service.id}}</span> {{service.name}}\n  </li>\n</ul>\n<div *ngIf=\"selectedModulesService\">\n\n  <button (click)=\"gotoDetail()\">View Details</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map/modules-service/modules-service-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_service_service__ = __webpack_require__("../../../../../src/app/map/modules-service/modules-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleServiceListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 09.06.17.
 */


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'htm-modules-service-list',
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* trigger */])('enterAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* style */])({ transform: 'translateX(100%)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* animate */])('500ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* style */])({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* style */])({ transform: 'translateX(0)', opacity: 1 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* animate */])('500ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ])
        ],
        template: __webpack_require__("../../../../../src/app/map/modules-service/modules-service-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/modules-service/modules-service-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modules_service_service__["a" /* ModulesServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modules_service_service__["a" /* ModulesServiceService */]) === "function" && _a || Object])
], ModuleServiceListComponent);

var _a;
//# sourceMappingURL=modules-service-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/modules-service/modules-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fake_module_service_data_service__ = __webpack_require__("../../../../../src/app/map/modules-service/fake-module-service-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 09.06.17.
 */





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
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_3__fake_module_service_data_service__["a" /* MODULESERVICE */]);
    };
    ModulesServiceService.prototype.getModulesServicesWithNewService = function (newService) {
        var servicesArray = __WEBPACK_IMPORTED_MODULE_3__fake_module_service_data_service__["a" /* MODULESERVICE */];
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _b || Object])
], ModulesServiceService);

var _a, _b;
//# sourceMappingURL=modules-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/map/services/geocoding.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_location_class__ = __webpack_require__("../../../../../src/app/location/location.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 27.05.17.
 */







var GeocodingService = (function () {
    function GeocodingService(http, logger, loaderService) {
        this.logger = logger;
        this.loaderService = loaderService;
        this.http = http;
        this.logger = logger;
    }
    GeocodingService.prototype.geocode = function (address) {
        var _this = this;
        this.logger.log('GeocodingService/geocode()');
        this.loaderService.display(true);
        return this.http
            .get('http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address))
            .map(function (res) { return res.json(); })
            .map(function (result) {
            _this.logger.log('GeocodingService/geocode()/result' + result);
            if (result.status !== 'OK') {
                throw new Error('unable to geocode address');
            }
            var location = new __WEBPACK_IMPORTED_MODULE_1__location_location_class__["a" /* Location */]();
            location.address = result.results[0].formatted_address;
            location.latitude = result.results[0].geometry.location.lat;
            location.longitude = result.results[0].geometry.location.lng;
            var viewPort = result.results[0].geometry.viewport;
            location.viewBounds = L.latLngBounds({
                lat: viewPort.southwest.lat,
                lng: viewPort.southwest.lng
            }, {
                lat: viewPort.northeast.lat,
                lng: viewPort.northeast.lng
            });
            _this.loaderService.display(false);
            return location;
        });
    };
    GeocodingService.prototype.getCurrentLocation = function () {
        var _this = this;
        this.logger.log('GeocodingService/getCurrentLocation()');
        // this.loaderService.display(true);
        return this.http
            .get('http://ipv4.myexternalip.com/json')
            .map(function (res) { return res.json().ip; })
            .flatMap(function (ip) { return _this.http.get('http://freegeoip.net/json/' + ip); })
            .map(function (res) { return res.json(); })
            .map(function (result) {
            var location = new __WEBPACK_IMPORTED_MODULE_1__location_location_class__["a" /* Location */]();
            location.address = result.city + ', ' + result.region_code + ' ' + result.zip_code + ', ' + result.country_code;
            location.latitude = result.latitude;
            location.longitude = result.longitude;
            //   this.loaderService.display(false);
            return location;
        });
    };
    GeocodingService.prototype.handleError = function (error) {
        this.logger.log('GeocodingService/handleError() err : ' + error);
        this.loaderService.display(false);
        return Promise.reject(error.message || error);
    };
    return GeocodingService;
}());
GeocodingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], GeocodingService);

var _a, _b, _c;
//# sourceMappingURL=geocoding.service.js.map

/***/ }),

/***/ "../../../../../src/app/map/services/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basemap__ = __webpack_require__("../../../../../src/app/map/basemap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 27.05.17.
 */





var MapService = (function () {
    function MapService(http, logger, loaderService) {
        this.http = http;
        this.logger = logger;
        this.loaderService = loaderService;
        logger.log('MapService/constructor()');
        this.baseMaps = __WEBPACK_IMPORTED_MODULE_3__basemap__["a" /* basemap */];
        logger.log('MapService/constructor()/_map ' + this.map);
        logger.log('MapService/constructor()/_baseMaps ' + this.baseMaps);
    }
    MapService.prototype.ngOnInit = function () {
        this.logger.log('MapService/ngOnInit()');
        this.logger.log('MapService/constructor()/_map ' + this.map);
    };
    MapService.prototype.getMap = function () {
        return this.map;
    };
    MapService.prototype.ngOnDestroy = function () {
        this.logger.log('MapService/ngOnDestroy()');
    };
    MapService.prototype.disableMouseEvent = function (elementId) {
        /*let element = <HTMLElement>document.getElementById(elementId);
   
        L.DomEvent.disableClickPropagation(element);
       L.DomEvent.disableScrollPropagation(element);*/
    };
    MapService.prototype.toggleAirPortLayer = function () {
        var _this = this;
        this.logger.log('MapService/toggleAirPortLayer');
        if (this.vtLayer) {
            this.logger.log('MapService/toggleAirPortLayer/remove vtLayer');
            this.map.removeLayer(this.vtLayer);
            delete this.vtLayer;
        }
        else {
            this.logger.log('MapService/toggleAirPortLayer/add vtLayer');
            this.http.get('https://rawgit.com/haoliangyu/angular2-leaflet-starter/master/public/data/airports.geojson')
                .map(function (res) { return res.json(); })
                .subscribe(function (result) {
                _this.vtLayer = L.vectorGrid.slicer(result);
                _this.vtLayer.addTo(_this.map);
            });
        }
    };
    MapService.prototype.addWmsLayer = function () {
        if (this.vtLayer) {
            this.map.removeLayer(this.vtLayer);
            delete this.vtLayer;
        }
        else {
            this.logger.log('MapService/addWmsLayer()');
            this.vtLayer = L.tileLayer.wms('http://geoserver.riddes.plateforme-meu.ch/geoserver/meu/wms?service=WMS&version=1.1.0&request=GetMap&layers=meu:test_ld_mc_2017_02_10&styles=&bbox=6.89381612200003,46.978993808,6.97521270600004,47.0414113160001&width=768&height=588&srs=EPSG:4326&format=image%2Fpng', {
                layers: 'ne:ne'
            }).addTo(this.map);
        }
    };
    return MapService;
}());
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], MapService);

var _a, _b, _c;
//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ "../../../../../src/app/navigator/navigator.component.html":
/***/ (function(module, exports) {

module.exports = "<input id=\"place-input\" class=\"on-map\" type=\"text\" placeholder=\"Enter a place to go...\"\n       [(ngModel)]=\"address\" (keyup.enter)=\"goto()\">\n\n<button id=\"goto\" class=\"btn btn-primary on-map\" href=\"#\" title=\"Goto Place\" (click)=\"goto()\">\n  <i class=\"fa fa-arrow-right fa\">\n  </i></button>\n"

/***/ }),

/***/ "../../../../../src/app/navigator/navigator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css"), "");

// module
exports.push([module.i, "input {\n  margin: 20px 0 0 55px;\n  width: 300px;\n  height: 35px;\n  border: 2px solid rgba(77, 156, 237, 0.7);\n  font-size: 16px;\n  font: #8e8e8e; }\n\n#goto {\n  margin: 20px 0 0 367px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigator/navigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_services_geocoding_service__ = __webpack_require__("../../../../../src/app/map/services/geocoding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_services_map_service__ = __webpack_require__("../../../../../src/app/map/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 31.05.17.
 */





var NavigatorComponent = (function () {
    function NavigatorComponent(geocoder, mapService, logger, loaderService) {
        this.geocoder = geocoder;
        this.mapService = mapService;
        this.logger = logger;
        this.loaderService = loaderService;
        this.address = '';
    }
    NavigatorComponent.prototype.Initialize = function () {
    };
    NavigatorComponent.prototype.ngOnInit = function () {
        this.mapService.disableMouseEvent('goto');
        this.mapService.disableMouseEvent('place-input');
        this.map = this.mapService.map;
    };
    NavigatorComponent.prototype.goto = function () {
        var _this = this;
        this.logger.log('NavigatorComponent/goto()');
        if (!this.address) {
            return;
        }
        this.loaderService.display(true);
        this.logger.log('NavigatorComponent/goto()/this.address!=null' + this.address);
        this.geocoder.geocode(this.address)
            .subscribe(function (location) {
            _this.map.fitBounds(location.viewBounds, {});
            _this.address = location.address;
            _this.loaderService.display(false);
        }, function (error) { return _this.loaderService.display(false); });
    };
    return NavigatorComponent;
}());
NavigatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'hmt-navigator',
        template: __webpack_require__("../../../../../src/app/navigator/navigator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigator/navigator.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__map_services_geocoding_service__["a" /* GeocodingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_services_geocoding_service__["a" /* GeocodingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__map_services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__map_services_map_service__["a" /* MapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _d || Object])
], NavigatorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navigator.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>register</h1>\n<button (click)=\"submit()\">Submit</button>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 09.06.17.
 */



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'htm-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_modules_service_modules_service_list_component__ = __webpack_require__("../../../../../src/app/map/modules-service/modules-service-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/**
 * Created by lesly on 14.06.17.
 */




var routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_1__map_map_component__["a" /* MapComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'modules', component: __WEBPACK_IMPORTED_MODULE_2__map_modules_service_modules_service_list_component__["a" /* ModuleServiceListComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lesly on 19.06.17.
 */


var LoaderService = (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    return LoaderService;
}());
LoaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], LoaderService);

//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lesly on 09.06.17.
 */


var Logger = (function () {
    function Logger() {
        this.logs = []; // capture logs for testing
        this.str = '';
    }
    Logger.prototype.log = function (message) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* isDevMode */])() === true) {
            this.logs.push(message);
            console.log(message);
        }
    };
    Logger.prototype.logObj = function (obj, message) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* isDevMode */])() === true) {
            // this.log(message + ' ' + obj.values());
        }
    };
    return Logger;
}());
Logger = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], Logger);

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"add-marker\" class=\"btn btn-default on-map\" [class.btn-primary]=\"editing\"\n        title=\"Add markers by clicking on the map\" (click)=\"toggleEditing()\" btnCheckbox>\n  <i class=\"fa fa-map-marker\"></i>\n</button>\n\n<button id=\"remove-marker\" class=\"btn btn-default on-map\" [class.btn-primary]=\"removing\"\n        title=\"Remove markers by clicking on them\" (click)=\"toggleRemoving()\" btnCheckbox>\n  <i class=\"fa fa-trash\"></i>\n</button>\n\n<button id=\"toggle-layer\" class=\"btn btn-default on-map\" [class.btn-primary]=\"airportLayerAdded\"\n        title=\"Toggle the airport layer\" (click)=\"toggleAirPortLayer()\" btnCheckbox>\n  <i class=\"fa fa-plane\"></i>\n</button>\n\n"

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css"), "");

// module
exports.push([module.i, "#add-marker {\n  margin: 20px 0 0 370px; }\n\n#remove-marker {\n  margin: 20px 0 0 410px; }\n\n#toggle-layer {\n  margin: 20px 0 0 450px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_services_map_service__ = __webpack_require__("../../../../../src/app/map/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lesly on 27.05.17.
 */



var ToolbarComponent = (function () {
    function ToolbarComponent(mapService, logger) {
        this.mapService = mapService;
        this.logger = logger;
        this.editing = false;
        this.logger = logger;
        this.removing = false;
        this.markerCount = 0;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.mapService.disableMouseEvent('add-marker');
        this.mapService.disableMouseEvent('remove-marker');
        this.mapService.disableMouseEvent('toggle-layer');
    };
    ToolbarComponent.prototype.Initialize = function () {
        var _this = this;
        this.mapService.map.on('click', function (e) {
            if (_this.editing) {
                var marker_1 = L.marker(e.latlng, {
                    icon: L.icon({
                        iconUrl: '../../../node_modules/leaflet/dist/images/marker-icon.png',
                        shadowUrl: '../../../node_modules/leaflet/dist/images/marker-shadow.png'
                    }),
                    draggable: true
                })
                    .bindPopup('Marker #' + (_this.markerCount + 1).toString(), {
                    offset: L.point(12, 6)
                })
                    .addTo(_this.mapService.map)
                    .openPopup();
                _this.markerCount += 1;
                marker_1.on('click', function (event) {
                    if (_this.removing) {
                        _this.mapService.map.removeLayer(marker_1);
                        _this.markerCount -= 1;
                    }
                });
            }
        });
    };
    ToolbarComponent.prototype.toggleEditing = function () {
        this.editing = !this.editing;
        if (this.editing && this.removing) {
            this.removing = false;
        }
    };
    ToolbarComponent.prototype.toggleRemoving = function () {
        this.removing = !this.removing;
        if (this.editing && this.removing) {
            this.editing = false;
        }
    };
    ToolbarComponent.prototype.toggleAirPortLayer = function () {
        this.logger.log('ToolBarComponent/toggleAirPortLayer');
        this.airportLayerAdded = !this.airportLayerAdded;
        this.mapService.toggleAirPortLayer();
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'hmt-toolbar',
        template: __webpack_require__("../../../../../src/app/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/toolbar/toolbar.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__map_services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_services_map_service__["a" /* MapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], ToolbarComponent);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
///<reference path="app/typings/leaflet-measure.d.ts"/>
/// <reference path="app/typings/leaflet.vectorgrid.d.ts"/>
/// <reference path="typings.d.ts"/>




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/deeppurple-amber.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n.on-map {\n  position: absolute;\n  z-index: 1000;\n}\n\n.map-button {\n  width: 35px;\n  height: 35px;\n  text-align: center;\n}\n\n\n.leaflet-clickable {\n  cursor: crosshair !important;\n}\n\n.leaflet-container {\n  cursor: help !important;\n}\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n\nbody, input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n/* . . . */\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n\n/* preloader*/\n\n\n\n.spinner {\n  width: 100px;\n  height: 100px;\n  background-color: #333;\n\n  margin: 100px auto;\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotateplane {\n  0% { -webkit-transform: perspective(120px) }\n  50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n  } 50% {\n      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n    } 100% {\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n      }\n}\n.loading{\n  background-color: #d35400;\n}\n\n/* preloader 2*/\n\n/* ==========================================================================\n   Chrome Frame prompt\n   ========================================================================== */\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\np {\n  line-height: 1.33em;\n  color: #7E7E7E;\n}\nh1 {\n  color: #EEEEEE;\n}\n\n#loader-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n#loader {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n\n  -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n\n  z-index: 1001;\n}\n\n#loader:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #e74c3c;\n\n  -webkit-animation: spin 1s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n#loader:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #f9c922;\n\n  -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n@-webkit-keyframes spin {\n  0%   {\n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n}\n@keyframes spin {\n  0%   {\n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n}\n\n#loader-wrapper .loader-section {\n  position: fixed;\n  top: 0;\n  width: 51%;\n  height: 100%;\n  background: #222222;\n  z-index: 1000;\n  -webkit-transform: translateX(0);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(0);  /* Firefox 16+, IE 10+, Opera */\n}\n\n#loader-wrapper .loader-section.section-left {\n  left: 0;\n}\n\n#loader-wrapper .loader-section.section-right {\n  right: 0;\n}\n\n/* Loaded */\n.loaded #loader-wrapper .loader-section.section-left {\n  -webkit-transform: translateX(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(-100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n.loaded #loader-wrapper .loader-section.section-right {\n  -webkit-transform: translateX(100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n.loaded #loader {\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n.loaded #loader-wrapper {\n  visibility: hidden;\n\n  -webkit-transform: translateY(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateY(-100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.3s 1s ease-out;\n}\n\n/* JavaScript Turned Off */\n.no-js #loader-wrapper {\n  display: none;\n}\n.no-js h1 {\n  color: #222222;\n}\n\n#content {\n  margin: 0 auto;\n  padding-bottom: 50px;\n  width: 80%;\n  max-width: 978px;\n}\n\n\n\n\n\n\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n\n/*\n * Image replacement\n */\n\n.ir {\n  background-color: transparent;\n  border: 0;\n  overflow: hidden;\n  /* IE 6/7 fallback */\n  *text-indent: -9999px;\n}\n\n.ir:before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 150%;\n}\n\n/*\n * Hide from both screenreaders and browsers: h5bp.com/u\n */\n\n.hidden {\n  display: none !important;\n  visibility: hidden;\n}\n\n/*\n * Hide only visually, but have it available for screenreaders: h5bp.com/v\n */\n\n.visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n/*\n * Extends the .visuallyhidden class to allow the element to be focusable\n * when navigated to via the keyboard: h5bp.com/p\n */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n/*\n * Hide visually and from screenreaders, but maintain layout\n */\n\n.invisible {\n  visibility: hidden;\n}\n\n/*\n * Clearfix: contain floats\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    `contenteditable` attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that receive the `clearfix` class.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n */\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \"; /* 1 */\n  display: table; /* 2 */\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n/*\n * For IE 6/7 only\n * Include this rule to trigger hasLayout and contain floats.\n */\n\n.clearfix {\n  *zoom: 1;\n}\n\n/* ==========================================================================\n   EXAMPLE Media Queries for Responsive Design.\n   These examples override the primary ('mobile first') styles.\n   Modify as content requires.\n   ========================================================================== */\n\n@media only screen and (min-width: 35em) {\n  /* Style adjustments for viewports that meet the condition */\n}\n\n@media print,\n(-webkit-min-device-pixel-ratio: 1.25),\n(min-resolution: 120dpi) {\n  /* Style adjustments for high resolution devices */\n}\n\n/* ==========================================================================\n   Print styles.\n   Inlined to avoid required HTTP connection: h5bp.com/r\n   ========================================================================== */\n\n@media print {\n  * {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: h5bp.com/s */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links for images, or javascript/internal links\n   */\n\n  .ir a:after,\n  a[href^=\"javascript:\"]:after,\n  a[href^=\"#\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group; /* h5bp.com/t */\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  @page {\n    margin: 0.5cm;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n/*\n\tOk so you have made it this far, that means you are very keen to on my code.\n\tAnyway I don't really mind it. This is a great way to learn so you actually doing the right thing:)\n\tFollow me @ihatetomatoes\n*/\n", ""]);

// exports


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map