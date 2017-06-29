"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by lesly on 27.05.17.
 */
var core_1 = require("@angular/core");
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
        this.mapService.addWmsLayer();
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    core_1.Component({
        selector: 'hmt-toolbar',
        templateUrl: './toolbar.component.html',
        styleUrls: [
            './toolbar.component.scss',
            '../../../styles.css'
        ],
        providers: []
    })
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;
