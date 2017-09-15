webpackJsonp([1],{

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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
exports.push([module.i, "\n\n\n/* Add a black background color to the top navigation */\n.navbar {\n\n  background-color: #333;\n\n  height: 65px;\n  transition: width 0.4s ease-in-out;\n  font-family:Arial;\n  font-size:12px;\n\n\n  padding:10px;\n  background-color: #333333;\n  color:#ffffff;\n  border-radius: 0px;\n\n  border-bottom-color:#000000;\n\n\n}\n\n/* Style the links inside the navigation bar */\n.navbar a {\n  transition: width 0.4s ease-in-out;\n  float: right;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 18px;\n  font-family: Helvetica Neue;\n}\n\n/* Change the color of links on hover */\n.navbar a:hover {\n  background-color: #ddd;\n  color: black;\n}\n.navbar li\n{\n  display:inline;\n}\n/* Add a color to the active/current link */\n.navbar a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n.img {\n  top: 0px;\n}\n\n\n/* handle spinner for the app */\n\n\n.tootlbar-icon {\n  padding: 0 14px;\n}\n\n.tootlbar-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n/* Absolute Center Spinner */\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n/* Transparent Overlay */\n.loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n}\n\n/* :not(:required) hides these rules from IE9 and below */\n.loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n}\n\n/* Animation */\n\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n\n.title {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #2C3E50;\n  color: #ECF0F1;\n}\n\n.container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 0;\n  min-height: 0;\n  padding: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n\n.5\n<nav>\n  <button type=\"button\" (click)=\"toggleLeftExpandedState()\">Left panel!</button>\n\n\n\n <!-- <a routerLink=\"/map\">Map</a>\n  <a routerLink=\"/register\">Register</a>\n  <a routerLink=\"/login\">Login</a>\n</nav>-->\n  <!--  <img style=\"max-width:80px; margin-top: -16px;\" src=\"../assets/logo.png\">\n </div>\n\n-->\n    <router-outlet>\n      <span *ngIf=\"showLoader\" class=\"loading\"></span>\n    </router-outlet>\n\n\n\n\n\n"

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
        this.notifyLoaderService();
    };
    AppComponent.prototype.notifyLoaderService = function () {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_searchbar_searchbar_component__ = __webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_map_service__ = __webpack_require__("../../../../../src/app/shared/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_geocoding_service__ = __webpack_require__("../../../../../src/app/shared/services/geocoding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_map_map_component__ = __webpack_require__("../../../../../src/app/pages/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__features_layers_layers_service__ = __webpack_require__("../../../../../src/app/features/layers/layers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__features_population_services_population_service__ = __webpack_require__("../../../../../src/app/features/population/services/population.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_services_error_handler__ = __webpack_require__("../../../../../src/app/shared/services/error-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__features_side_panel_side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__features_side_panel_right_side_panel_right_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__features_side_panel_left_side_panel_left_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_nav_navigation_bar_component__ = __webpack_require__("../../../../../src/app/pages/nav/navigation-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_nav_navigation_bar_service__ = __webpack_require__("../../../../../src/app/pages/nav/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__features_data_interaction_data_interaction_cell_data_interaction_cell_component__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_15_ng_sidebar__["SidebarModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_32_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_searchbar_searchbar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_30__features_side_panel_right_side_panel_right_side_panel_component__["a" /* RightSideComponent */],
            __WEBPACK_IMPORTED_MODULE_31__features_side_panel_left_side_panel_left_side_panel_component__["a" /* LeftSideComponent */],
            __WEBPACK_IMPORTED_MODULE_33__pages_nav_navigation_bar_component__["a" /* NavigationBarComponent */],
            __WEBPACK_IMPORTED_MODULE_35__features_data_interaction_data_interaction_cell_data_interaction_cell_component__["a" /* DataInteractionCellComponent */],
            __WEBPACK_IMPORTED_MODULE_31__features_side_panel_left_side_panel_left_side_panel_component__["a" /* LeftSideComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__features_population_services_population_service__["a" /* PopulationService */],
            __WEBPACK_IMPORTED_MODULE_18__shared_services_geocoding_service__["a" /* GeocodingService */],
            __WEBPACK_IMPORTED_MODULE_17__shared_services_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_22__shared_services_logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_25__shared_services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_27__shared_services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_28__shared_services_error_handler__["a" /* GlobalErrorHandler */],
            __WEBPACK_IMPORTED_MODULE_23__shared_helper__["a" /* Helper */],
            __WEBPACK_IMPORTED_MODULE_29__features_side_panel_side_panel_service__["a" /* SidePanelService */],
            __WEBPACK_IMPORTED_MODULE_34__pages_nav_navigation_bar_service__["a" /* NavigationBarService */],
            __WEBPACK_IMPORTED_MODULE_24__features_layers_layers_service__["a" /* LayersService */]
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_6__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-height: 0;\n    min-width: 0;\n    max-height: 48px;\n    padding: 8px;\n    font-family: 'Hind', sans-serif;\n\n}\n\n.details {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-left: 8px;\n}\n.notifications {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n}\n\n.icon {\n}\n\n.message {\n\n}\n\n.date {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    font-size: 0.6em;\n    color: #444444;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"expanded\" [@visibleTrigger]=\"'visible'\" class=\"details\">\n\n    <div class=\"message\">\n      <input type=\"checkbox\" name={{dataInteraction.workspaceName}} [checked]=\"dataInteraction.isSelected\" (change)=\"showRemoveLayer($event,dataInteraction.workspaceName)\"> <span>{{dataInteraction.name}}</span>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_map_service__ = __webpack_require__("../../../../../src/app/shared/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_interaction_class__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction.class.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataInteractionCellComponent = (function () {
    function DataInteractionCellComponent(mapService) {
        this.mapService = mapService;
    }
    DataInteractionCellComponent.prototype.showRemoveLayer = function (e, action) {
        this.dataInteraction.isSelected = !this.dataInteraction.isSelected;
        if (this.dataInteraction.isSelected) {
            console.log(' dataInteraction true');
        }
        else {
            console.log(' dataInteraction false');
        }
        this.mapService.showOrRemoveLayer(action);
    };
    DataInteractionCellComponent.prototype.ngOnInit = function () {
    };
    return DataInteractionCellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_interaction_class__["a" /* DataInteractionClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_interaction_class__["a" /* DataInteractionClass */]) === "function" && _a || Object)
], DataInteractionCellComponent.prototype, "dataInteraction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DataInteractionCellComponent.prototype, "expanded", void 0);
DataInteractionCellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-interaction-cell',
        template: __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/data-interaction/data-interaction-cell/data-interaction-cell.component.css")],
        animations: [
            // Define an animation that adjusts the opactiy when a new item is created
            //  in the DOM. We use the 'visible' string as the hard-coded value in the
            //  trigger.
            //
            // When an item is added we wait for 300ms, and then increase the opacity to 1
            //  over a 200ms time interval. When the item is removed we don't delay anything
            //  and use a 200ms interval.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibleTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 300ms')]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_map_service__["a" /* MapService */]) === "function" && _b || Object])
], DataInteractionCellComponent);

var _a, _b;
//# sourceMappingURL=data-interaction-cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionClass; });
var DataInteractionClass = (function () {
    function DataInteractionClass() {
    }
    return DataInteractionClass;
}());

//# sourceMappingURL=data-interaction.class.js.map

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionArray; });
var DataInteractionArray = [
    // {id: 11, name: 'Heat map', category: 'Comsumption'},
    { id: 12, name: 'waste water treatment plants', category: 'Comsumption', isSelected: false, workspaceName: 'wwtp' },
    { id: 17, name: 'heat map', category: 'Comsumption', isSelected: true, workspaceName: 'heat-density-map' },
];
//# sourceMappingURL=data-interaction.data.js.map

/***/ }),

/***/ "../../../../../src/app/features/data-interaction/data-interaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_interaction_data__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInteractionService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DataInteractionService = (function (_super) {
    __extends(DataInteractionService, _super);
    function DataInteractionService(http, logger, loaderService, toasterService) {
        return _super.call(this, http, logger, loaderService, toasterService) || this;
    }
    /* getModulesServices(): Promise<ModulesService[]> {
      return this.http.get(this.servicesUrl)
        .toPromise()
        .then(response => response.json().data as ModulesService[])
        .catch(this.handleError);
    }*/
    DataInteractionService.prototype.getDataInteractionServices = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_3__data_interaction_data__["a" /* DataInteractionArray */]);
    };
    DataInteractionService.prototype.getModulesServicesWithNewService = function (newService) {
        var servicesArray = __WEBPACK_IMPORTED_MODULE_3__data_interaction_data__["a" /* DataInteractionArray */];
        servicesArray.push(newService);
        return Promise.resolve(servicesArray);
    };
    DataInteractionService.prototype.getModulesServicesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getDataInteractionServices()); }, 2000);
        });
    };
    return DataInteractionService;
}(__WEBPACK_IMPORTED_MODULE_6__shared_services_api_service__["a" /* APIService */]));
DataInteractionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object])
], DataInteractionService);

var _a, _b, _c, _d;
//# sourceMappingURL=data-interaction.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/layers/layers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_class_dictionary_class__ = __webpack_require__("../../../../../src/app/shared/class/dictionary.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayersService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LayersService = (function (_super) {
    __extends(LayersService, _super);
    function LayersService(http, logger, loaderService, toasterService) {
        var _this = _super.call(this, http, logger, loaderService, toasterService) || this;
        _this.layersArray = new __WEBPACK_IMPORTED_MODULE_4__shared_class_dictionary_class__["a" /* Dictionary */]([
            { key: __WEBPACK_IMPORTED_MODULE_5__shared_data_service__["a" /* defaultLayer */], value: L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_5__shared_data_service__["b" /* geoserverUrl */], { layers: 'hotmaps:' + __WEBPACK_IMPORTED_MODULE_5__shared_data_service__["a" /* defaultLayer */],
                    format: 'image/png', transparent: true, version: '1.3.0', }) },
        ]);
        _this.popup = L.popup();
        return _this;
    }
    LayersService.prototype.getDetailLayerPoint = function (action, latlng, map) {
        var _this = this;
        if (this.layersArray.containsKey(action)) {
            this.loaderService.display(true);
            var bbox = latlng.toBounds(__WEBPACK_IMPORTED_MODULE_5__shared_data_service__["c" /* clickAccuracy */]).toBBoxString();
            var url = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms?SERVICE=WMS&VERSION=1.1.1' +
                '&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:'
                + action + '&STYLES&LAYERS=hotmaps:' + action + '&INFO_FORMAT=application/json&FEATURE_COUNT=50' +
                '&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=' + bbox;
            console.log('url ' + url);
            return this.http.get(url).map(function (res) { return res.json(); })
                .subscribe(function (res) { return _this.addPopup(map, res, latlng); }, function (err) { return _this.erroxFix(err); });
        }
    };
    LayersService.prototype.refreshLayersOnMap = function (map) {
        var layers = this.layersArray.keys();
        for (var i = 0; i < layers.length; i++) {
            var layer = this.layersArray.value(layers[i]);
            layer.addTo(map);
        }
    };
    LayersService.prototype.showOrRemoveLayer = function (action, map) {
        this.logger.log('LayersService/this.layersArray. ' + this.layersArray.keys());
        this.logger.log('LayersService/action. ' + action);
        if (!this.layersArray.containsKey(action)) {
            this.logger.log('LayersService/addLayerWithAction');
            this.addLayerWithAction(action, map);
        }
        else {
            this.logger.log('LayersService/removelayer');
            this.removelayer(action, map);
        }
    };
    LayersService.prototype.addLayerWithAction = function (action, map) {
        var layer = L.tileLayer.wms(__WEBPACK_IMPORTED_MODULE_5__shared_data_service__["b" /* geoserverUrl */], {
            layers: 'hotmaps:' + action,
            format: 'image/png',
            transparent: true,
            version: '1.3.0',
        });
        this.layersArray.add(action, layer);
        this.refreshLayersOnMap(map);
    };
    LayersService.prototype.removelayer = function (action, map) {
        // we get the layer we want to remove
        var layer = this.layersArray.value(action);
        // we remove this layer from map
        map.removeLayer(layer);
        // we destroy the layer
        this.layersArray.remove(action);
        this.refreshLayersOnMap(map);
    };
    LayersService.prototype.erroxFix = function (error) {
        this.handleError.bind(this);
        this.loaderService.display(false);
        this.toasterService.showToaster('An error occurred: please try again later');
        this.logger.log('PopulationServices/handleError');
        console.error('An error occurred', error); // for demo purposes only
    };
    LayersService.prototype.addPopup = function (map, res, latlng) {
        this.loaderService.display(false);
        var gid = res.features[0].properties.gid;
        var capacity = res.features[0].properties.capacity;
        var power = res.features[0].properties.power;
        var date = res.features[0].properties.date;
        var unit = res.features[0].properties.unit;
        this.popup.setLatLng(latlng)
            .setContent('<h3>WWTP selected</h3><ul>' +
            '<li>gid: ' + gid + '</li><li>Date: ' + date + '</li><li>Capacity: ' + capacity + '</li>' +
            '<li>power: ' + power + ' ' + unit + '</li>' +
            '</ul>')
            .openOn(map);
        this.logger.log('LayersService/addPopup/popup/added');
    };
    return LayersService;
}(__WEBPACK_IMPORTED_MODULE_9__shared_services_api_service__["a" /* APIService */]));
LayersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object])
], LayersService);

var _a, _b, _c, _d;
//# sourceMappingURL=layers.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/population/services/population.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PopulationService = (function (_super) {
    __extends(PopulationService, _super);
    function PopulationService(http, logger, loaderService, toasterService) {
        return _super.call(this, http, logger, loaderService, toasterService) || this;
    }
    PopulationService.prototype.getPopulationWithPayloads = function (payload) {
        return _super.prototype.POST.call(this, payload, __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["g" /* apiUrl */] + __WEBPACK_IMPORTED_MODULE_4__shared_data_service__["h" /* postPopulationDensityInArea */]);
    };
    return PopulationService;
}(__WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__["a" /* APIService */]));
PopulationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_toaster_service__["a" /* ToasterService */]) === "function" && _d || Object])
], PopulationService);

var _a, _b, _c, _d;
//# sourceMappingURL=population.service.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__left_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__left_side_panel_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    border-right: 1px solid #000000;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 0;\n    min-height: 0;\n    overflow: hidden;\n}\n\ni {\n    font-size: 1.5em;\n}\n\n.container-panel-left {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 0;\n    min-width: 0;\n}\n\n.title-panel-left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    color: #d3d3d3;\n    padding: 0 8px 0 8px;\n    height: 38px;\n}\n\n.title-panel-left span {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-family: 'Hind', sans-serif;\n    font-size: 1.5em;\n}\n\n.title-panel-left--collapsed {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.notifications {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n}\n\na {\n    text-decoration: none;\n    margin-top: 6px;\n}\n\na:hover {\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-panel-left\" [@panelWidthTrigger]=\"expandedState\">\n    <div class=\"title-panel-left\" [@titleColorTrigger]=\"expandedState\">\n        <span *ngIf=\"expanded\" [@titleTextTrigger]=\"'in'\">{{title}}</span>\n        <a class=\"link\" (click)=\"toggleExpandedState()\">\n            <i [@iconTrigger]=\"expandedState\" class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n\n  <div class=\"notifications\">\n    <span *ngIf=\"expanded\" [@titleTextTrigger]=\"'in'\">\n    <span class=\"category\" *ngFor=\"let i of category\"><b>{{i}}</b>\n      <ng-container *ngFor=\"let n of layers\" >\n        <span *ngIf=\"i === n.category\">\n      <data-interaction-cell [dataInteraction]=\"n\" [expanded]=\"expanded\"></data-interaction-cell>\n        </span>\n    </ng-container>\n  </span>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_interaction_data_interaction_service__ = __webpack_require__("../../../../../src/app/features/data-interaction/data-interaction.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSideComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftSideComponent = (function (_super) {
    __extends(LeftSideComponent, _super);
    function LeftSideComponent(dataInteractionService) {
        var _this = _super.call(this) || this;
        _this.dataInteractionService = dataInteractionService;
        _this.expanded = false;
        _this.expandedState = 'collapsed';
        return _this;
    }
    LeftSideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataInteractionService.getDataInteractionServices().then(function (layers) { return _this.getLayerAndCategory(layers); });
    };
    LeftSideComponent.prototype.getLayerAndCategory = function (layers) {
        this.layers = layers;
        this.category = layers.map(function (item) { return item.category; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; });
        console.log(this.category);
    };
    LeftSideComponent.prototype.ngOnDestroy = function () {
    };
    return LeftSideComponent;
}(__WEBPACK_IMPORTED_MODULE_1__side_panel_component__["a" /* SideComponent */]));
LeftSideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-left-side-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.css")],
        animations: [
            // Define the animation used on the containing dev where the width of the
            //  panel is determined. Here we define the expanded width to be 300px, and
            //  the collapsed width to be 38px.
            //
            // When expanding the panel we transition over a 200ms interval.
            //
            // When collapsing the panel we again use 200ms for the transition, but
            //  we add a delay of 200ms to allow some other animations to complete before
            //  shrinking the panel down.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('panelWidthTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '300px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '0px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            // Define the animation used in the title bar where the colors swap from
            //  a red foreground with white background, to the opposite. In this case
            //  we use the same timings as the width animation above so these two
            //  transitions happen at the same time
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleColorTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#FFFFFF', color: '#d3d3d3' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#d3d3d3', color: '#FFFFFF' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            // The title text trigger is a little different because it's an animation
            //  for an element being added to the DOM. Here we take advantage of the 'void'
            //  transition using a hard-coded state called 'in' (which is also hard coded in
            //  the template).
            //
            // What we do in this animation is say when the element is added to the DOM
            //  it should have an opacity of 0 (i.e., hidden), wait 300ms, and then animate
            //  it's opacity change to 1 over a 100 ms time span. This effectively delays the
            //  appearance of the text until after the panel has slid out to the full size.
            //
            // When the element is removed we take a different approach and animate the
            //  opacity change back to 0 over a short 50ms interval. This ensures it's gone before
            //  the panel starts to slide back in, creating a nice effect.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleTextTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 300ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))
                ])
            ]),
            // Define the animation used in the arrow icon where it rotates to point left
            //  or right based on the state of the panel. In this case we use the same
            //  timings as the width animation above so these two transitions happen at
            //  the same time.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('iconTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotate(180deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotate(0deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out'))
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_interaction_data_interaction_service__["a" /* DataInteractionService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_interaction_data_interaction_service__["a" /* DataInteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_interaction_data_interaction_service__["a" /* DataInteractionService */]) === "function" && _a || Object])
], LeftSideComponent);

var _a;
//# sourceMappingURL=left-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__right_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__right_side_panel_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host {\n    border-left: 1px solid #ffffff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 0;\n    min-height: 0;\n    overflow: hidden;\n}\n\ni {\n    font-size: 1.5em;\n}\n\n.container-panel-right {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-height: 0;\n    min-width: 0;\n}\n\n.title-panel-right  {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    color: #d3d3d3;;\n    padding: 0 8px 0 8px;\n    height: 38px;\n}\n\n.title-panel-right  span {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-family: 'Hind', sans-serif;\n    font-size: 1.5em;\n}\n\n.title-panel-right \\--collapsed {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.notifications {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto;\n}\n\na {\n    text-decoration: none;\n    margin-top: 6px;\n}\n\na:hover {\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-panel-right \" [@panelWidthTrigger]=\"expandedState\">\n    <div class=\"title-panel-right \" [@titleColorTrigger]=\"expandedState\">\n        <span *ngIf=\"expanded\" [@titleTextTrigger]=\"'in'\">{{title}}</span>\n        <a class=\"link\" (click)=\"toggleExpandedState()\">\n            <i [@iconTrigger]=\"expandedState\" class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSideComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RightSideComponent = (function (_super) {
    __extends(RightSideComponent, _super);
    function RightSideComponent() {
        return _super.call(this) || this;
    }
    RightSideComponent.prototype.ngOnInit = function () {
    };
    RightSideComponent.prototype.ngOnDestroy = function () {
    };
    return RightSideComponent;
}(__WEBPACK_IMPORTED_MODULE_1__side_panel_component__["a" /* SideComponent */]));
RightSideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-right-side-panel',
        template: __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.css")],
        animations: [
            // Define the animation used on the containing dev where the width of the
            //  panel is determined. Here we define the expanded width to be 300px, and
            //  the collapsed width to be 38px.
            //
            // When expanding the panel we transition over a 200ms interval.
            //
            // When collapsing the panel we again use 200ms for the transition, but
            //  we add a delay of 200ms to allow some other animations to complete before
            //  shrinking the panel down.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('panelWidthTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '380px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '0px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            // Define the animation used in the title bar where the colors swap from
            //  a red foreground with white background, to the opposite. In this case
            //  we use the same timings as the width animation above so these two
            //  transitions happen at the same time
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleColorTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#FFFFFF', color: '#E74C3C' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ backgroundColor: '#E74C3C', color: '#FFFFFF' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms 200ms ease-out'))
            ]),
            // The title text trigger is a little different because it's an animation
            //  for an element being added to the DOM. Here we take advantage of the 'void'
            //  transition using a hard-coded state called 'in' (which is also hard coded in
            //  the template).
            //
            // What we do in this animation is say when the element is added to the DOM
            //  it should have an opacity of 0 (i.e., hidden), wait 300ms, and then animate
            //  it's opacity change to 1 over a 100 ms time span. This effectively delays the
            //  appearance of the text until after the panel has slid out to the full size.
            //
            // When the element is removed we take a different approach and animate the
            //  opacity change back to 0 over a short 50ms interval. This ensures it's gone before
            //  the panel starts to slide back in, creating a nice effect.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('titleTextTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 300ms')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('50ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' }))
                ])
            ]),
            // Define the animation used in the arrow icon where it rotates to point left
            //  or right based on the state of the panel. In this case we use the same
            //  timings as the width animation above so these two transitions happen at
            //  the same time.
            //
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('iconTrigger', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotate(0deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotate(180deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('collapsed => expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('expanded => collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], RightSideComponent);

//# sourceMappingURL=right-side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideComponent = (function () {
    function SideComponent() {
        this.expanded = false;
        this.title = 'SideComponent title';
        this.expandedState = 'collapsed';
    }
    SideComponent.prototype.setTitle = function (title) {
        this.title = title;
    };
    SideComponent.prototype.getTitle = function () {
        return this.title;
    };
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent.prototype.ngOnDestroy = function () {
    };
    SideComponent.prototype.toggleExpandedState = function () {
        this.expandedState = this.expanded ? 'collapsed' : 'expanded';
        console.log('this.expandedState ' + this.expandedState);
        this.expanded = !this.expanded;
    };
    SideComponent.prototype.display = function (val) {
        if (val) {
            this.expandedState = 'expanded';
        }
        else {
            this.expandedState = 'collapsed';
        }
        this.expanded = !this.expanded;
    };
    return SideComponent;
}());
SideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({}),
    __metadata("design:paramtypes", [])
], SideComponent);

//# sourceMappingURL=side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/side-panel/side-panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SidePanelService = (function () {
    function SidePanelService() {
        // status for left panel
        this.leftPanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        // status for right panel
        this.rightPanelStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    SidePanelService.prototype.leftPanelexpandedCollapsed = function () {
        this.leftPanelStatus.next(true);
    };
    SidePanelService.prototype.rightPanelexpandedCollapsed = function () {
        this.rightPanelStatus.next(true);
    };
    return SidePanelService;
}());
SidePanelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SidePanelService);

//# sourceMappingURL=side-panel.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>login</h1>\n<button (click)=\"submit()\">Submit</button>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-login',
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/map/basemap.ts":
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
    Hybrid: L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
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

/***/ "../../../../../src/app/pages/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title-map\">\n  <hmt-search-bar></hmt-search-bar>\n  <nav-bar [leftPanel]=\"leftPanelComponent\" [rightPanel]=\"rightPanelComponent\"></nav-bar>\n  <!-- <i  (click)=\"toggleLeftExpandedState('Layers')\"></i>\n  <i class=\"icon-nav flaticon-vector\"></i>\n  <i class=\"icon-nav flaticon-folder-2\"></i>\n  <i class=\"icon-nav flaticon-pie-chart-1\" (click)=\"toggleRightExpandedState('Load result')\"></i>\n  <i class=\"icon-nav flaticon-cloud-computing\"></i>\n  <i class=\"icon-nav flaticon-interface-1\" (click)=\"toggleLeftExpandedState('Calculation modules')\"></i>\n  <i class=\"icon-nav flaticon-technology-2\"></i>\n  <i class=\"icon-nav flaticon-comparison-1\"></i>\n  <i class=\"icon-nav flaticon-database-7\"></i> -->\n</div>\n<div class=\"container-map\">\n  <htm-left-side-panel></htm-left-side-panel>\n  <div id=\"map\">\n    <!--<hmt-toolbar></hmt-toolbar> -->\n  </div>\n  <htm-right-side-panel></htm-right-side-panel>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/map/map.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n.button-navbar {\n  height: 30px;\n  width: 30px;\n  margin: 10px;\n  border-bottom-color: #000000;\n}\n.title-map {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 6vh;\n  height: 6vh;\n  transition: width 0.4s ease-in-out;\n  font-family: Arial;\n  font-size: 12px;\n  padding: 10px;\n  background-color: #333333;\n  color: #ffffff;\n  border-radius: 0px;\n  border-bottom-color: #000000;\n}\n#map {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 0;\n  min-height: 0;\n  top: 0px;\n  left: 0%;\n  bottom: 0;\n  width: 100%;\n}\n.container-map {\n  min-height: 94vh;\n  height: 94vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_draw__ = __webpack_require__("../../../../leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet_draw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basemap__ = __webpack_require__("../../../../../src/app/pages/map/basemap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_side_panel_left_side_panel_index__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_map_service__ = __webpack_require__("../../../../../src/app/shared/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__searchbar_searchbar_component__ = __webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_side_panel_side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__features_side_panel_right_side_panel_index__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/index.ts");
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
    function MapComponent(mapService, logger, panelService) {
        this.mapService = mapService;
        this.logger = logger;
        this.panelService = panelService;
        // management of initial status of sidebar
        this.openRightSidebar = false;
        this.openLeftSidebar = false;
    }
    MapComponent.prototype.ngAfterContentInit = function () {
        this.logger.log('MapComponent/AfterViewInit');
        this.logger.log('MapComponent/AfterViewInit/mapService val:: ' + this.mapService.getMap());
        this.notifySidePanelComponent();
        this.leftPanelComponent.setTitle('Layers');
        // this.mapService.getGridTest();
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.logger.log('MapComponent/ngOnDestroy');
        this.map.remove();
    };
    // manage the click or sidebar
    MapComponent.prototype.toggleRightExpandedState = function () {
        this.panelService.rightPanelexpandedCollapsed();
    };
    MapComponent.prototype.toggleLeftExpandedState = function () {
        this.panelService.leftPanelexpandedCollapsed();
    };
    MapComponent.prototype.notifySidePanelComponent = function () {
        var _this = this;
        this.panelService.rightPanelStatus.subscribe(function (val) {
            if (_this.openRightSidebar === false) {
                _this.openRightSidebar = true;
            }
            else {
                _this.rightPanelComponent.toggleExpandedState();
                _this.openRightSidebar = val;
            }
        });
        this.panelService.leftPanelStatus.subscribe(function (val) {
            if (_this.openLeftSidebar === false) {
                _this.openLeftSidebar = true;
            }
            else {
                _this.leftPanelComponent.toggleExpandedState();
                _this.openLeftSidebar = val;
            }
        });
    };
    MapComponent.prototype.ngOnInit = function () {
        this.logger.log('MapComponent/ngOnInit');
        // mapService get an instance of the maps and ca work on it
        this.mapService.setupMapservice(this.createMap(__WEBPACK_IMPORTED_MODULE_2__basemap__["a" /* basemap */]));
        this.logger.log('MapComponent/ngOnInit/map service intance must be initialize: ' + this.mapService.getMap());
        this.initializeNavigator();
        this.map.invalidateSize();
    };
    MapComponent.prototype.initializeNavigator = function () {
        this.searchBarComponent.Initialize();
    };
    // main method create and display map (main purpose of this component)
    MapComponent.prototype.createMap = function (basemap) {
        // setup  the map from leaflet
        var self = this;
        this.logger.log('MapComponent/createMap/mapService val:: ' + this.mapService.getMap());
        var option = {
            zoomControl: false,
            center: L.latLng(47.1, 7.0833),
            zoom: 5,
            minZoom: 4,
            maxZoom: 17,
            layers: [basemap.Esri, basemap.Hybrid]
        };
        this.map = L.map('map', option);
        L.control.zoom({ position: 'topright' }).addTo(this.map);
        var measureOption = { localization: 'en', position: 'topleft', primaryLengthUnit: 'kilometers', secondaryLengthUnit: 'miles',
            activeColor: '#ABE67E', primaryAreaUnit: 'hectares', completedColor: '#C8F2BE',
            popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] } };
        // L.control.layers(this.mapService.baseMaps).addTo(this.map);
        L.Map = L.Map.extend({
            openPopup: function (popup) {
                this.closePopup();
                this._popup = popup;
                self.logger.log('MapComponent/popup ' + popup);
                return this.addLayer(popup).fire('popupopen', {
                    popup: this._popup
                });
            }
        });
        L.Control = L.Control.extend({
            delete: function (popup) {
                this._popup = popup;
                return this.addLayer(popup).fire('popupDelete', {
                    popup: this._popup
                });
            }
        });
        L.control.scale().addTo(this.map);
        // L.control.measure(measureOption).addTo(this.map);
        //this.mapService.addDrawerControl(this.map);
        return this.map;
    };
    MapComponent.prototype.showControls = function () {
        this.mapService.addDrawerControl(this.map);
    };
    MapComponent.prototype.getMap = function () {
        return this.map;
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__searchbar_searchbar_component__["a" /* SearchBarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__searchbar_searchbar_component__["a" /* SearchBarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__searchbar_searchbar_component__["a" /* SearchBarComponent */]) === "function" && _a || Object)
], MapComponent.prototype, "searchBarComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__features_side_panel_right_side_panel_index__["a" /* RightSideComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__features_side_panel_right_side_panel_index__["a" /* RightSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__features_side_panel_right_side_panel_index__["a" /* RightSideComponent */]) === "function" && _b || Object)
], MapComponent.prototype, "rightPanelComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__features_side_panel_left_side_panel_index__["a" /* LeftSideComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__features_side_panel_left_side_panel_index__["a" /* LeftSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__features_side_panel_left_side_panel_index__["a" /* LeftSideComponent */]) === "function" && _c || Object)
], MapComponent.prototype, "leftPanelComponent", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-map',
        template: __webpack_require__("../../../../../src/app/pages/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/map/map.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_map_service__["a" /* MapService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_logger_service__["a" /* Logger */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__features_side_panel_side_panel_service__["a" /* SidePanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__features_side_panel_side_panel_service__["a" /* SidePanelService */]) === "function" && _f || Object])
], MapComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/navigation-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disabledButton{\ncolor:grey;\ncursor: initial;\n}\n\n.icon-nav>i:before {\nfont-size: 30px;\nmargin: 10px;\n}\n\n.icon-nav>i:hover{\ncolor:#2889DF;\ncursor: pointer;\n}\n\n.disabledButton:hover{\ncolor:grey !important;\ncursor: initial !important;\n}\n\n.clickedButton{\ncolor:#2889DF !important;\n}\n\n.icon-nav{\n    float: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/nav/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let button of navButtons\" class=\"icon-nav\">\n        <i *ngIf=\"button.buttonFunction=='left'\" class=\"{{button.iconClass}}\"\n        [class.disabledButton]=\"!button.enable\"\n        [class.clickedButton]=\"leftPanel.expanded && button.enable\"\n        (click)=\"button.enable ? toggleExpandedState(button) : null\"></i>\n\n        <i *ngIf=\"button.buttonFunction == 'right'\" class=\"icon-nav {{button.iconClass}}\"\n        [class.disabledButton]=\"!button.enable\"\n        [class.clickedButton]=\"rightPanel.expanded && button.enable\"\n        (click)=\"button.enable ? toggleExpandedState(button) : null\"></i>\n\n        <i *ngIf=\"button.buttonFunction != 'right' && button.buttonFunction != 'left'\" class=\"{{button.iconClass}}\"\n        [class.disabledButton]=\"!button.enable\"\n        [class.clickedButton]=\"button.stateOpen && button.enable\"\n        (click)=\"button.enable ? toggleExpandedState(button) : null\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/nav/navigation-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_bar_service__ = __webpack_require__("../../../../../src/app/pages/nav/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_side_panel_left_side_panel_left_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/left-side-panel/left-side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_side_panel_right_side_panel_right_side_panel_component__ = __webpack_require__("../../../../../src/app/features/side-panel/right-side-panel/right-side-panel.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationBarComponent = (function () {
    function NavigationBarComponent(navService) {
        this.navService = navService;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        this.navButtons = this.navService.getButtons();
    };
    NavigationBarComponent.prototype.toggleExpandedState = function (button) {
        this.navService.toggleBar(button);
    };
    return NavigationBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__features_side_panel_left_side_panel_left_side_panel_component__["a" /* LeftSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__features_side_panel_left_side_panel_left_side_panel_component__["a" /* LeftSideComponent */]) === "function" && _a || Object)
], NavigationBarComponent.prototype, "leftPanel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__features_side_panel_right_side_panel_right_side_panel_component__["a" /* RightSideComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__features_side_panel_right_side_panel_right_side_panel_component__["a" /* RightSideComponent */]) === "function" && _b || Object)
], NavigationBarComponent.prototype, "rightPanel", void 0);
NavigationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'nav-bar',
        template: __webpack_require__("../../../../../src/app/pages/nav/navigation-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/nav/navigation-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _c || Object])
], NavigationBarComponent);

var _a, _b, _c;
//# sourceMappingURL=navigation-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/navigation-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_buttons_data__ = __webpack_require__("../../../../../src/app/pages/nav/navigation-buttons.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_map_service__ = __webpack_require__("../../../../../src/app/shared/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_side_panel_side_panel_service__ = __webpack_require__("../../../../../src/app/features/side-panel/side-panel.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationBarService = (function () {
    function NavigationBarService(panelService, mapService) {
        this.panelService = panelService;
        this.mapService = mapService;
    }
    NavigationBarService.prototype.toggleBar = function (button) {
        button.stateOpen = !button.stateOpen;
        if (button.enable) {
            if (button.buttonFunction === 'left') {
                this.panelService.leftPanelexpandedCollapsed();
            }
            else if (button.buttonFunction === 'right') {
                this.panelService.rightPanelexpandedCollapsed();
            }
            else if (button.buttonFunction === 'selection') {
                this.mapService.toggleControl();
            }
        }
    };
    NavigationBarService.prototype.getButtons = function () {
        return __WEBPACK_IMPORTED_MODULE_1__navigation_buttons_data__["a" /* navigationButtons */];
    };
    return NavigationBarService;
}());
NavigationBarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__features_side_panel_side_panel_service__["a" /* SidePanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__features_side_panel_side_panel_service__["a" /* SidePanelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_map_service__["a" /* MapService */]) === "function" && _b || Object])
], NavigationBarService);

var _a, _b;
//# sourceMappingURL=navigation-bar.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/nav/navigation-buttons.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigationButtons; });
var navigationButtons = [
    { title: 'Layers', buttonFunction: 'left', iconClass: 'flaticon-layers-1', enable: true, stateOpen: false },
    { title: 'Selection', buttonFunction: 'selection', iconClass: 'flaticon-vector', enable: true, stateOpen: false },
    { title: 'Folder', buttonFunction: '', iconClass: 'flaticon-folder-2', enable: false, stateOpen: false },
    { title: 'Load result', buttonFunction: 'right', iconClass: 'flaticon-pie-chart-1', enable: false, stateOpen: false },
    { title: 'Import data', buttonFunction: '', iconClass: 'flaticon-cloud-computing', enable: false, stateOpen: false },
    { title: 'Calculation modules', buttonFunction: 'left', iconClass: 'flaticon-interface-1', enable: false, stateOpen: false },
    { title: 'Save as', buttonFunction: '', iconClass: 'flaticon-technology-2', enable: false, stateOpen: false },
    { title: 'Comparison', buttonFunction: '', iconClass: 'flaticon-comparison-1', enable: false, stateOpen: false },
    { title: 'Dataset informations', buttonFunction: '', iconClass: 'flaticon-database-7', enable: false, stateOpen: false }
];
//# sourceMappingURL=navigation-buttons.data.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>register</h1>\n<button (click)=\"submit()\">Submit</button>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'htm-register',
        template: __webpack_require__("../../../../../src/app/pages/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/searchbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"search-bar\">\n    <i class=\"icon-search fa fa-search\"></i>\n    <input id=\"place-input\" class=\"on-map\" type=\"text\" placeholder=\"Go to place...\"\n        [(ngModel)]=\"address\" (keyup.enter)=\"goto()\" />\n</div>\n\n<!--<button id=\"goto\" class=\"btn btn-primary on-map\" href=\"#\" title=\"Goto Place\" (click)=\"goto()\"></button>-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/searchbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  width: 130px;\n  height: 30px;\n  z-index: 1;\n  font-size: 16px;\n  vertical-align: middle;\n  padding: 5px 16px;\n  color: white;\n  margin: 10px;\n  background: none;\n  border: none;\n  border-bottom: white 1px solid;\n  transition: 1s; }\n\ninput:focus {\n  width: 245px;\n  transition: 1s; }\n\n#goto {\n  margin: 0px 0 0 7px;\n  width: 30px;\n  height: 30px;\n  outline: none;\n  opacity: 1;\n  background: white; }\n\n.icon-search {\n  position: absolute;\n  top: 33%;\n  left: 12px; }\n\n.search-bar {\n  position: relative; }\n\n.fa-search::before {\n  font-size: x-small; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/searchbar/searchbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_geocoding_service__ = __webpack_require__("../../../../../src/app/shared/services/geocoding.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_map_service__ = __webpack_require__("../../../../../src/app/shared/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
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





var SearchBarComponent = (function () {
    function SearchBarComponent(geocoder, mapService, logger, loaderService) {
        this.geocoder = geocoder;
        this.mapService = mapService;
        this.logger = logger;
        this.loaderService = loaderService;
        this.address = '';
    }
    SearchBarComponent.prototype.Initialize = function () {
    };
    SearchBarComponent.prototype.ngOnInit = function () {
        this.mapService.disableMouseEvent('goto');
        this.mapService.disableMouseEvent('place-input');
        this.map = this.mapService.getMap();
    };
    SearchBarComponent.prototype.goto = function () {
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
    SearchBarComponent.prototype.searchDestinationFrom = function (address) {
        var _this = this;
        this.logger.log('NavigatorComponent/goto()');
        if (!address) {
            return;
        }
        this.loaderService.display(true);
        this.logger.log('NavigatorComponent/goto()/this.address!=null' + this.address);
        this.geocoder.geocode(address)
            .subscribe(function (location) {
            _this.map.fitBounds(location.viewBounds, {});
            _this.address = location.address;
            _this.loaderService.display(false);
        }, function (error) { return _this.loaderService.display(false); });
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hmt-search-bar',
        template: __webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/searchbar/searchbar.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_geocoding_service__["a" /* GeocodingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_geocoding_service__["a" /* GeocodingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_map_service__["a" /* MapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_logger_service__["a" /* Logger */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_loader_service__["a" /* LoaderService */]) === "function" && _d || Object])
], SearchBarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=searchbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<button id=\"add-marker\" class=\"btn btn-default on-map\" [class.btn-primary]=\"editing\"\n        title=\"Add markers by clicking on the map\" (click)=\"toggleEditing()\" btnCheckbox>\n  <i class=\"fa fa-map-marker\"></i>\n</button>\n\n<button id=\"remove-marker\" class=\"btn btn-default on-map\" [class.btn-primary]=\"removing\"\n        title=\"Remove markers by clicking on them\" (click)=\"toggleRemoving()\" btnCheckbox>\n  <i class=\"fa fa-trash\"></i>\n</button>\n\n<button id=\"toggle-layer\" class=\"btn btn-default on-map\" [class.btn-primary]=\"airportLayerAdded\"\n        title=\"Toggle the airport layer\" (click)=\"toggleAirPortLayer()\" btnCheckbox>\n  <i class=\"fa fa-plane\"></i>\n</button>\n\n-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.scss":
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

/***/ "../../../../../src/app/pages/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_map_service__ = __webpack_require__("../../../../../src/app/shared/services/map.service.ts");
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
        this.logger.log('ToolbarComponent/ngOnInit');
        this.mapService.disableMouseEvent('add-marker');
        this.mapService.disableMouseEvent('remove-marker');
        this.mapService.disableMouseEvent('toggle-layer');
    };
    ToolbarComponent.prototype.Initialize = function () {
        this.logger.log('ToolbarComponent/Initialize');
        /*  this.mapService.map.on('click', (e: MouseEvent) => {
      
            if (this.editing) {
              this.logger.log('ToolbarComponent/click');
              let marker = L.marker(e.latlng, {
                icon: L.icon({
                  iconUrl: '../../../node_modules/leaflet/dist/images/marker-icon.png',
                  shadowUrl: '../../../node_modules/leaflet/dist/images/marker-shadow.png'
                }),
                draggable: true
              })
                .bindPopup('Marker #' + (this.markerCount + 1).toString(), {
                  offset: L.point(12, 6)
                })
                .addTo(this.mapService.map)
                .openPopup();
      
              this.markerCount += 1;
      
              marker.on('click', (event: MouseEvent) => {
                if (this.removing) {
                  this.mapService.map.removeLayer(marker);
                  this.markerCount -= 1;
                }
              });
            }
          });*/
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
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hmt-toolbar',
        template: __webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/toolbar/toolbar.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_map_service__["a" /* MapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_logger_service__["a" /* Logger */]) === "function" && _b || Object])
], ToolbarComponent);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_map_map_component__ = __webpack_require__("../../../../../src/app/pages/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/**
 * Created by lesly on 14.06.17.
 */



var routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_1__pages_map_map_component__["a" /* MapComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__pages_register_register_component__["a" /* RegisterComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/class/dictionary.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dictionary; });
var Dictionary = (function () {
    function Dictionary(init) {
        this._keys = [];
        this._values = [];
        for (var x = 0; x < init.length; x++) {
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }
    Dictionary.prototype.add = function (key, value) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    };
    Dictionary.prototype.value = function (key) {
        var index = this._keys.indexOf(key, 0);
        return this._values[index];
    };
    Dictionary.prototype.remove = function (key) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this[key];
    };
    Dictionary.prototype.keys = function () {
        return this._keys;
    };
    Dictionary.prototype.containsKey = function (key) {
        if (typeof this[key] === 'undefined') {
            return false;
        }
        return true;
    };
    return Dictionary;
}());

//# sourceMappingURL=dictionary.class.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return geocodeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return geoserverUrl; });
/* unused harmony export geoserverGetFeatureInfoUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getIpUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getLocationFromIp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return postPopulationDensityInArea; });
/* unused harmony export getGrid */
/* unused harmony export set404url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clickAccuracy; });
/**
 * Created by lesly on 07.07.17.
 */
var prodUrl = 'http://hotmaps.hevs.ch:9005/api';
var devUrl = 'http://hotmaps.hevs.ch:9005/api';
var geocodeUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address='; // prefer
// prefer
var geoserverUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms';
var geoserverGetFeatureInfoUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms';
var getIpUrl = 'http://ipv4.myexternalip.com/json'; // prefer
// prefer
var getLocationFromIp = 'http://hotmaps.hevs.ch:9005/api/';
var apiUrl = devUrl;
var defaultLayer = 'heat-density-map';
var postPopulationDensityInArea = '/population/density/area/';
var getGrid = '/grids/1km/area/';
var set404url = 'set404url';
var clickAccuracy = 100000;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Helper = (function () {
    function Helper(logger) {
        this.logger = logger;
    }
    // check if unfined or not
    Helper.prototype.isNullOrUndefined = function (x) {
        var result = false;
        if (x == null) {
            result = true;
        }
        if (x === null) {
            result = true;
        }
        if (typeof x === 'undefined') {
            result = true;
        }
        return result;
    };
    // convert getlatLong() form path leaflet to array of location[]
    Helper.prototype.convertLatLongToLocation = function (latlng) {
        var n = 0;
        var locations = [];
        do {
            this.logger.log(' boucle');
            this.logger.log(' Lat =' + latlng[n].lat);
            this.logger.log(' Lng =' + latlng[n].lng);
            this.logger.log(' before n++ latlng =' + latlng[n]);
            var loc = {
                lat: latlng[n].lat,
                lng: latlng[n].lng
            };
            locations.push(loc);
            n++;
            this.logger.log(' after n++ latlng =' + latlng[n]);
        } while (!this.isNullOrUndefined(latlng[n]));
        return locations;
    };
    Helper.prototype.createGeodesicPolygon = function (origin, radius, sides, rotation) {
        var latlon = origin; //leaflet equivalent
        var angle;
        var new_lonlat, geom_point;
        var points = [];
        for (var i = 0; i < sides; i++) {
            angle = (i * 360 / sides) + rotation;
            new_lonlat = this.destinationVincenty(latlon, angle, radius);
            geom_point = L.latLng(new_lonlat.lng, new_lonlat.lat);
            points.push(geom_point);
        }
        return points;
    };
    Helper.prototype.destinationVincenty = function (lonlat, brng, dist) {
        var VincentyConstants = {
            a: 6378137,
            b: 6356752.3142,
            f: 1 / 298.257223563
        };
        var u = L.Util;
        var ct = VincentyConstants;
        var a = ct.a, b = ct.b, f = ct.f;
        var lon1 = lonlat.lng;
        var lat1 = lonlat.lat;
        var s = dist;
        var pi = Math.PI;
        var alpha1 = brng * pi / 180; //converts brng degrees to radius
        var sinAlpha1 = Math.sin(alpha1);
        var cosAlpha1 = Math.cos(alpha1);
        var tanU1 = (1 - f) * Math.tan(lat1 * pi / 180 /* converts lat1 degrees to radius */);
        var cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1)), sinU1 = tanU1 * cosU1;
        var sigma1 = Math.atan2(tanU1, cosAlpha1);
        var sinAlpha = cosU1 * sinAlpha1;
        var cosSqAlpha = 1 - sinAlpha * sinAlpha;
        var uSq = cosSqAlpha * (a * a - b * b) / (b * b);
        var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
        var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
        var sigma = s / (b * A), sigmaP = 2 * Math.PI;
        while (Math.abs(sigma - sigmaP) > 1e-12) {
            var cos2SigmaM = Math.cos(2 * sigma1 + sigma);
            var sinSigma = Math.sin(sigma);
            var cosSigma = Math.cos(sigma);
            var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
                B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
            sigmaP = sigma;
            sigma = s / (b * A) + deltaSigma;
        }
        var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
        var lat2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1, (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp));
        var lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1);
        var C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
        var lam = lambda - (1 - C) * f * sinAlpha *
            (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
        var revAz = Math.atan2(sinAlpha, -tmp); // final bearing
        var lamFunc = lon1 + (lam * 180 / pi); //converts lam radius to degrees
        var lat2a = lat2 * 180 / pi; //converts lat2a radius to degrees
        return L.latLng(lamFunc, lat2a);
    };
    Helper.prototype.latLngsToCoords = function (arrLatlng) {
        var self = this;
        var coords = [];
        arrLatlng.forEach(function (latlng) {
            self.logger.log(' Lat =' + latlng.lat);
            self.logger.log(' Lngs =' + latlng.lng);
            coords.push([latlng.lng, latlng.lat]);
        }, this);
        return coords;
    };
    return Helper;
}());
Helper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_logger_service__["a" /* Logger */]) === "function" && _a || Object])
], Helper);

var _a;
//# sourceMappingURL=helper.js.map

/***/ }),

/***/ "../../../../../src/app/shared/location/location.class.ts":
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

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by lesly on 19.07.17.
 */





var APIService = (function () {
    function APIService(http, logger, loaderService, toasterService) {
        this.http = http;
        this.logger = logger;
        this.loaderService = loaderService;
        this.toasterService = toasterService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.http = http;
        this.logger = logger;
        this.loaderService = loaderService;
        this.toasterService = toasterService;
    }
    APIService.prototype.handleError = function (error) {
        this.loaderService.display(false);
        this.toasterService.showToaster('An error occurred: please try again later');
        this.logger.log('PopulationServices/handleError');
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    APIService.prototype.POST = function (payload, url) {
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError.bind(this));
    };
    APIService.prototype.GET = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (res) { return console.log(JSON.stringify(res)); });
    };
    APIService.prototype.getJSONFromFille = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(url)
                        .toPromise()
                        .then(function (response) { return response.json(); })];
            });
        });
    };
    return APIService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toaster_service__ = __webpack_require__("../../../../../src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/**
 * Created by lesly on 13.07.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalErrorHandler = (function () {
    function GlobalErrorHandler(injector) {
        this.injector = injector;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        var loaderService = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__loader_service__["a" /* LoaderService */]);
        loaderService.display(false);
        var message = error.message ? error.message : error.toString();
        var toasterService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__toaster_service__["a" /* ToasterService */]);
        toasterService.showToaster(message);
        console.log('flerwajgoerjgpergperwjgpoerjgerpogjerpgjererierjeworqj2pr');
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    };
    return GlobalErrorHandler;
}());
GlobalErrorHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], GlobalErrorHandler);

var _a;
//# sourceMappingURL=error-handler.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/geocoding.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_location_class__ = __webpack_require__("../../../../../src/app/shared/location/location.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/shared/data.service.ts");
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
            .get(__WEBPACK_IMPORTED_MODULE_7__data_service__["d" /* geocodeUrl */] + encodeURIComponent(address))
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
            .get(__WEBPACK_IMPORTED_MODULE_7__data_service__["e" /* getIpUrl */])
            .map(function (res) { return res.json().ip; })
            .flatMap(function (ip) { return _this.http.get(__WEBPACK_IMPORTED_MODULE_7__data_service__["f" /* getLocationFromIp */] + ip); })
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__logger_service__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */]) === "function" && _c || Object])
], GeocodingService);

var _a, _b, _c;
//# sourceMappingURL=geocoding.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
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
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() === true) {
            this.logs.push(message);
            console.log(message);
        }
    };
    Logger.prototype.logObj = function (obj) {
        var output = '';
        console.log(output);
        for (var property in obj) {
            console.log(output);
            output += property + ': ' + obj[property] + '; ';
        }
        this.logs.push(output);
        console.log(output);
    };
    Logger.prototype.logJson = function (obj) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])() === true) {
            this.logs.push('JSON representation: ' + JSON.stringify(obj));
            console.log('JSON representation: ' + JSON.stringify(obj));
        }
    };
    return Logger;
}());
Logger = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Logger);

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_proj4leaflet__ = __webpack_require__("../../../../proj4leaflet/src/proj4leaflet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_proj4leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_proj4leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_proj4__ = __webpack_require__("../../../../proj4/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_service__ = __webpack_require__("../../../../../src/app/shared/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_basemap__ = __webpack_require__("../../../../../src/app/pages/map/basemap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_layers_layers_service__ = __webpack_require__("../../../../../src/app/features/layers/layers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__features_population_services_population_service__ = __webpack_require__("../../../../../src/app/features/population/services/population.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loader_service__ = __webpack_require__("../../../../../src/app/shared/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helper__ = __webpack_require__("../../../../../src/app/shared/helper.ts");
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
    function MapService(logger, loaderService, populationService, layersService, helper) {
        this.logger = logger;
        this.loaderService = loaderService;
        this.populationService = populationService;
        this.layersService = layersService;
        this.helper = helper;
        this.layers = [];
        this.editableLayers = new L.FeatureGroup();
        this.isDrawControl = false;
        logger.log('MapService/constructor()');
        this.baseMaps = __WEBPACK_IMPORTED_MODULE_4__pages_map_basemap__["a" /* basemap */];
    }
    MapService.prototype.ngOnInit = function () {
        this.logger.log('MapService/ngOnInit()');
    };
    MapService.prototype.getMap = function () {
        return this.map;
    };
    MapService.prototype.ngOnDestroy = function () {
        this.logger.log('MapService/ngOnDestroy()');
    };
    MapService.prototype.disableMouseEvent = function (elementId) {
    };
    MapService.prototype.setupMapservice = function (map) {
        this.logger.log('MapService/setupMapservice');
        this.map = map;
        this.retriveMapEvent();
        this.layersService.refreshLayersOnMap(map);
    };
    MapService.prototype.retriveMapEvent = function () {
        this.logger.log('MapService/retriveMapEvent');
        var self = this;
        this.map.on('click', function (e) {
            var lat = e.latlng.lat;
            var lng = e.latlng.lng;
            self.layersService.getDetailLayerPoint('wwtp', e.latlng, self.map);
        });
        this.map.on('zoomend', function () {
            self.logger.log('MapService/zoomend');
        });
        this.map.on('zoomstart', function (event) {
        });
        this.map.on('measurestart', function () {
        });
        this.map.on('measurefinish', function (evt) {
        });
        this.map.on('LayersControlEvent', function () {
            self.logger.log('LayersControlEvent');
        });
        this.map.on('layeradd', function (e) {
            // self.logger.log('MapService/layeradd-----' + e);
        });
        this.map.on('popupclose', function (e) {
        });
        this.map.on('popupopen', function (e) {
            self.logger.log('popupopen  ' + e.target._popup);
        });
        this.map.on('popupDelete', function (e) {
            self.logger.log('popupDelete  ');
        });
        this.map.on('overlayadd', onOverlayAdd);
        this.map.on(L.Draw.Event.CREATED, function (e) {
            var event = e;
            self.editableLayers.clearLayers();
            self.removeVtlayer();
            var type = event.layerType, layer = event.layer;
            if (type === 'rectangle') {
                self.logger.log('rectangle');
                var rectangle = event.layer;
                var latlng = rectangle.getLatLngs()[0];
                var locations = self.helper.convertLatLongToLocation(latlng);
                self.logger.logJson(locations);
                self.getPopulation(locations, layer);
            }
            else if (type === 'polygon') {
                var polygon = event.layer;
                var latlng = polygon.getLatLngs()[0];
                var locations = self.helper.convertLatLongToLocation(latlng);
                self.logger.logJson(locations);
                self.getPopulation(locations, layer);
            }
            else if (type === 'circle') {
                self.logger.log('circle');
                var circle = event.layer;
                var origin = circle.getLatLng(); // center of drawn circle
                var radius = circle.getRadius(); // radius of drawn circle
                var polys = self.helper.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
                var locations = [];
                for (var i = 0; i < polys.length; i++) {
                    var loc = {
                        lat: polys[i].lat,
                        lng: polys[i].lng
                    };
                    locations.push(loc);
                }
                self.logger.logJson(locations);
                self.getPopulation(locations, layer);
            }
            self.editableLayers.addLayer(layer);
            console.log(layer.openPopup());
        });
        this.map.on(L.Draw.Event.EDITED, function (e) {
            var event = e;
            event.layers.eachLayer(function (layer) {
                var lay = layer;
                self.logger.log('layer ' + layer);
                if (layer instanceof L.Marker) {
                    self.logger.log('Marker ');
                }
                else if (layer instanceof L.Polygon) {
                    self.logger.log('Polygon ');
                    var polygon = layer;
                    var latlng = polygon.getLatLngs()[0];
                    var locations = self.helper.convertLatLongToLocation(latlng);
                    self.logger.logJson(locations);
                    self.getPopulation(locations, layer);
                }
                else if (layer instanceof L.Circle) {
                    self.logger.log('Circle ');
                    var circle = layer;
                    self.logger.log('circle getLatLng' + circle.getLatLng());
                    // self.logger.log('circle getBounds' + circle.getBounds());
                    self.logger.log('circle getBounds' + circle.getRadius());
                    var origin = circle.getLatLng(); // center of drawn circle
                    var radius = circle.getRadius(); // radius of drawn circle
                    var polys = self.helper.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
                    var locations = [];
                    for (var i = 0; i < polys.length; i++) {
                        var loc = {
                            lat: polys[i].lat,
                            lng: polys[i].lng
                        };
                        locations.push(loc);
                    }
                    self.logger.logJson(locations);
                    self.getPopulation(locations, layer);
                }
                ;
                self.editableLayers.addLayer(layer);
                console.log(layer.openPopup());
            });
        });
        function onOverlayAdd(e) {
            self.logger.log('overlayadd');
        }
    };
    // population feature
    MapService.prototype.getPopulation = function (locations, layer) {
        var _this = this;
        this.loaderService.display(true);
        this.logger.log('MapService/getPopulation');
        var payload = {
            nuts_level: 3,
            year: 2015,
            points: locations,
        };
        this.logger.log('MapService/payload ' + JSON.stringify(payload));
        this.populationService.getPopulationWithPayloads(payload).then(function (population) { return _this.retriveAndAddLayer(population, layer); });
    };
    MapService.prototype.showOrRemoveLayer = function (action) {
        this.layersService.showOrRemoveLayer(action, this.map);
    };
    MapService.prototype.retriveAndAddLayer = function (population, layer) {
        this.logger.log('MapService/retriveAndAddLayer');
        this.showlayer(JSON.parse(population.geometries));
        var populationValue = population.sum_density;
        function foo() {
            alert('foo');
        }
        layer.bindPopup('<h3>Area selected</h3><ul>' +
            '<li>Population: ' + populationValue + '</li><li>Nuts: ' + population.nuts_level + '</li><li>Year: ' + population.year + '</li>' +
            '<br><button id="btnDelete">Clear All</button></ul>').openPopup();
        document.getElementById('btnDelete').addEventListener('click', deleteSelectedArea, false);
        var self = this;
        function deleteSelectedArea(zEvent) {
            self.removeVtlayer();
            self.editableLayers.clearLayers();
        }
    };
    MapService.prototype.showlayer = function (geometrie) {
        this.logger.log('MapService/showlayer');
        this.removeVtlayer();
        this.logger.log('MapService/showlayer/layerWilladde');
        this.vtLayer = L.vectorGrid.slicer(geometrie);
        this.vtLayer.addTo(this.map);
        this.loaderService.display(false);
    };
    MapService.prototype.removeVtlayer = function () {
        if (this.vtLayer) {
            this.logger.log('MapService/removelayer');
            this.map.removeLayer(this.vtLayer);
            delete this.vtLayer;
        }
    };
    MapService.prototype.addDrawerControl = function (map) {
        map.addLayer(this.editableLayers);
        this.options = {
            position: 'topleft',
            draw: {
                polyline: false,
                polygon: {
                    allowIntersection: false,
                    drawError: {
                        color: '#e1e100',
                        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                    },
                    shapeOptions: {
                        color: '#bada55'
                    }
                },
                circle: true,
                rectangle: {
                    tooltip: {
                        start: 'dede',
                    },
                    shapeOptions: {
                        clickable: false
                    }
                },
                marker: false,
            },
            edit: {
                toolbar: {
                    actions: {
                        save: {
                            title: 'Validate__',
                            text: 'Validate__'
                        },
                    },
                },
                featureGroup: this.editableLayers,
                remove: true
            }
        };
        this.drawControl = new L.Control.Draw(this.options);
        map.addControl(this.drawControl);
    };
    MapService.prototype.toggleControl = function () {
        if (this.isDrawControl) {
            this.map.removeControl(this.drawControl);
            this.isDrawControl = false;
        }
        else {
            this.addDrawerControl(this.map);
            this.isDrawControl = true;
        }
    };
    return MapService;
}());
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__loader_service__["a" /* LoaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__features_population_services_population_service__["a" /* PopulationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__features_population_services_population_service__["a" /* PopulationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__features_layers_layers_service__["a" /* LayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__features_layers_layers_service__["a" /* LayersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__helper__["a" /* Helper */]) === "function" && _e || Object])
], MapService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/toaster.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
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
 * Created by lesly on 14.07.17.
 */


var ToasterService = (function () {
    function ToasterService(snackBar) {
        this.snackBar = snackBar;
    }
    ToasterService.prototype.showToaster = function (msg) {
        this.snackBar.open(msg, null, {
            duration: 3000,
        });
    };
    return ToasterService;
}());
ToasterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object])
], ToasterService);

var _a;
//# sourceMappingURL=toaster.service.js.map

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
    production: true
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
/// <reference path="typings.d.ts"/>




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n.on-map {\n\n\n}\n\n.leaflet-clickable {\n  cursor: crosshair !important;\n}\n\n.leaflet-container {\n  cursor: help !important;\n}\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n\nbody, input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n/* . . . */\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n\n/* preloader*/\n\n\n\n@-webkit-keyframes sk-rotateplane {\n  0% { -webkit-transform: perspective(120px) }\n  50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n  } 50% {\n      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n    } 100% {\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n      }\n}\n.loading{\n  background-color: #d35400;\n}\n\n/* preloader 2*/\n\n/* ==========================================================================\n   Chrome Frame prompt\n   ========================================================================== */\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\np {\n  line-height: 1.33em;\n  color: #7E7E7E;\n}\nh1 {\n  color: #EEEEEE;\n}\n\n#loader-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n}\n#loader {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n\n  -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n\n  z-index: 1001;\n}\n\n#loader:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #e74c3c;\n\n  -webkit-animation: spin 1s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n#loader:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #f9c922;\n\n  -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n@-webkit-keyframes spin {\n  0%   {\n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n}\n@keyframes spin {\n  0%   {\n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n}\n\n#loader-wrapper .loader-section {\n  position: fixed;\n  top: 0;\n  width: 51%;\n  height: 100%;\n  background: #222222;\n  z-index: 1000;\n  -webkit-transform: translateX(0);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(0);  /* Firefox 16+, IE 10+, Opera */\n}\n\n#loader-wrapper .loader-section.section-left {\n  left: 0;\n}\n\n#loader-wrapper .loader-section.section-right {\n  right: 0;\n}\n\n/* Loaded */\n.loaded #loader-wrapper .loader-section.section-left {\n  -webkit-transform: translateX(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(-100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n.loaded #loader-wrapper .loader-section.section-right {\n  -webkit-transform: translateX(100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateX(100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);\n}\n\n.loaded #loader {\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n.loaded #loader-wrapper {\n  visibility: hidden;\n\n  -webkit-transform: translateY(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n  transform: translateY(-100%);  /* Firefox 16+, IE 10+, Opera */\n  transition: all 0.3s 1s ease-out;\n}\n\n/* JavaScript Turned Off */\n.no-js #loader-wrapper {\n  display: none;\n}\n.no-js h1 {\n  color: #222222;\n}\n\n#content {\n  margin: 0 auto;\n  padding-bottom: 50px;\n  width: 80%;\n  max-width: 978px;\n}\n\n\n\n\n\n\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n\n/*\n * Image replacement\n */\n\n.ir {\n  background-color: transparent;\n  border: 0;\n  overflow: hidden;\n  /* IE 6/7 fallback */\n  *text-indent: -9999px;\n}\n\n.ir:before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 150%;\n}\n\n/*\n * Hide from both screenreaders and browsers: h5bp.com/u\n */\n\n.hidden {\n  display: none !important;\n  visibility: hidden;\n}\n\n/*\n * Hide only visually, but have it available for screenreaders: h5bp.com/v\n */\n\n.visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n/*\n * Extends the .visuallyhidden class to allow the element to be focusable\n * when navigated to via the keyboard: h5bp.com/p\n */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n/*\n * Hide visually and from screenreaders, but maintain layout\n */\n\n.invisible {\n  visibility: hidden;\n}\n\n/*\n * Clearfix: contain floats\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    `contenteditable` attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that receive the `clearfix` class.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n */\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \"; /* 1 */\n  display: table; /* 2 */\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n/*\n * For IE 6/7 only\n * Include this rule to trigger hasLayout and contain floats.\n */\n\n.clearfix {\n  *zoom: 1;\n}\n\n/* ==========================================================================\n   EXAMPLE Media Queries for Responsive Design.\n   These examples override the primary ('mobile first') styles.\n   Modify as content requires.\n   ========================================================================== */\n\n@media only screen and (min-width: 35em) {\n  /* Style adjustments for viewports that meet the condition */\n}\n\n@media print,\n(-webkit-min-device-pixel-ratio: 1.25),\n(min-resolution: 120dpi) {\n  /* Style adjustments for high resolution devices */\n}\n\n/* ==========================================================================\n   Print styles.\n   Inlined to avoid required HTTP connection: h5bp.com/r\n   ========================================================================== */\n\n@media print {\n  * {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: h5bp.com/s */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links for images, or javascript/internal links\n   */\n\n  .ir a:after,\n  a[href^=\"javascript:\"]:after,\n  a[href^=\"#\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group; /* h5bp.com/t */\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  @page {\n    margin: 0.5cm;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n/*\n\tOk so you have made it this far, that means you are very keen to on my code.\n\tAnyway I don't really mind it. This is a great way to learn so you actually doing the right thing:)\n\tFollow me @ihatetomatoes\n*/\n", ""]);

// exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map