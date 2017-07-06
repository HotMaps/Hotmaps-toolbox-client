"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var toolbar_component_1 = require("../toolbar/toolbar.component");
var navigator_component_1 = require("../searchbar/searchbar.component");
var core_2 = require("@angular/core");
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
        this.mapService.map.on('measurestart', function () {
            if (core_2.isDevMode() === true) {
                console.log('MapComponent/measurestart');
            }
        });
        this.mapService.map.on('measurefinish', function (evt) {
            if (core_2.isDevMode() === true) {
                console.log('MapComponent/measurefinish');
            }
            writeResults(evt, this.modulesService);
        });
        function writeResults(results, modulesService) {
            // let service: ModulesService = {id: 99, name: 'get Population'};
            // modulesService.getModulesServicesWithNewService(service);
            if (core_2.isDevMode() === true) {
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
        this.geocoder.getCurrentLocation()
            .subscribe(function (location) {
            _this.mapService.map.panTo([location.latitude, location.longitude]);
        }, function (err) {
            console.error(err);
        });
    };
    MapComponent.prototype.ngOnInit = function () {
        this.logger.log('MapComponent/ngOnInit');
        // setup  the map from leaflet
        var option = {
            zoomControl: false,
            center: L.latLng(47.1, 7.0833),
            zoom: 15,
            minZoom: 4,
            maxZoom: 17,
            layers: [this.mapService.baseMaps.Esri]
        };
        var map = L.map('map', option);
        L.control.zoom({ position: 'topright' }).addTo(map);
        var measureOption = { localization: 'en', primaryLengthUnit: 'kilometers', secondaryLengthUnit: 'miles',
            activeColor: '#ABE67E', primaryAreaUnit: 'hectares', completedColor: '#C8F2BE',
            popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] } };
        L.control.measure(measureOption).addTo(map);
        L.control.layers(this.mapService.baseMaps).addTo(map);
        L.control.scale().addTo(map);
        this.mapService.map = map;
        this.toolbarComponent.Initialize();
        this.navigatorComponent.Initialize();
    };
    return MapComponent;
}());
__decorate([
    core_1.ViewChild(toolbar_component_1.ToolbarComponent)
], MapComponent.prototype, "toolbarComponent", void 0);
__decorate([
    core_1.ViewChild(navigator_component_1.NavigatorComponent)
], MapComponent.prototype, "navigatorComponent", void 0);
MapComponent = __decorate([
    core_1.Component({
        selector: 'htm-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.less'],
        providers: []
    })
], MapComponent);
exports.MapComponent = MapComponent;
