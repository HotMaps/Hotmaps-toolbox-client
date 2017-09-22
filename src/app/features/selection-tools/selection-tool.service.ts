/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Map} from 'leaflet';
import {Popup} from 'leaflet';

import {Logger} from '../../shared/services/logger.service';
import {OnInit, OnDestroy} from '@angular/core';



import {Payload} from '../../features/population/payload.class';

import {Population} from '../../features/population/population.class';

import {LayersService} from '../../features/layers/services/layers.service';
import {PopulationService} from '../../features/population/services/population.service';
import {SidePanelService} from '../../features/side-panel/side-panel.service';
import {SelectionToolButtonStateService} from './selection-tool-button-state.service';
import {LoaderService} from '../../shared/services/loader.service';
import {MapService} from '../../shared/services/map.service';
import {Location} from '../../shared/class/location/location';
import {Helper} from '../../shared/helper'

import {NavigationBarService} from '../../pages/nav/navigation-bar.service'
import Created = L.DrawEvents.Created;

import Polygon = L.Polygon;

import Circle = L.Circle;
import Rectangle = L.Rectangle;
import Layer = L.Layer;
import Edited = L.DrawEvents.Edited;
import EditToolbar = L.EditToolbar;


@Injectable()
export class SelectionToolService {


  private baseMaps: any;
  private isActivate: boolean;
  private editableLayers = new L.FeatureGroup();
  private currentLayer;
  private options;
  private initialStateSelectionTool = false;
  private drawControl;
  private isDrawControl = false;
  private selectionTooLayer: any;
  constructor(private logger: Logger, private loaderService: LoaderService, private helper: Helper,
              private populationService: PopulationService , private sidePanelService: SidePanelService,
              private navigationBarService: NavigationBarService, private selectionToolButtonStateService: SelectionToolButtonStateService ) {

  }


  getIsActivate(): boolean {
    return this.isActivate;
  }

  notifyLoaderService(map: any) {
    this.selectionToolButtonStateService.status.subscribe((val: boolean) => {
      if (this.initialStateSelectionTool) {
        this.toggleControl(map);
      }else {
        this.initialStateSelectionTool = true;
      }
    });
  }
  setMap(map: any) {
    this.notifyLoaderService(map);
    this.retriveMapEvent(map);
    //
  }

  loadPopup(map: any, layer: any) {

    this.currentLayer.bindPopup('<h3>Area selected</h3><ul>' +
      '<br><button id="btnDelete">Clear All</button><button id="btnValidate">Validate</button></ul>').openPopup();

    document.getElementById ('btnDelete').addEventListener ('click', () => {

      this.clearAll();
    });
    document.getElementById ('btnValidate').addEventListener ('click',  () => {
      if (this.currentLayer instanceof L.Circle) {
        this.getPopulation(this.getLocationsFromCicle(this.currentLayer), this.currentLayer, map);
      } else  {
        this.getPopulation(this.getLocationsFromPolygon(this.currentLayer), this.currentLayer, map);
      }
    })
  }
  retriveMapEvent(map: any): void {
    const self = this;
    map.on(L.Draw.Event.CREATED , function (e) {
      const event: Created = <Created>e;
      // Clear the map before to show the new selection
      self.editableLayers.clearLayers();
      self.removeVtlayer(map);
      const type = event.layerType,
        layer: any = event.layer;
      self.currentLayer = layer

      self.manageEditOrCreateLayer(self.currentLayer, map);
    });

    map.on(L.Draw.Event.EDITED , function (e) {
      const event: Edited = <Edited>e;
      event.layers.eachLayer(function (layer: Layer) {
        const lay: Layer = layer;
        self.manageEditOrCreateLayer(layer, map);
      });
    });

    map.on(L.Draw.Event.DRAWSTART , function (e) {
      self.isActivate = true;

    });

    map.on(L.Draw.Event.DRAWSTOP , function (e) {
      self.isActivate = false;

    });

    map.on(L.Draw.Event.EDITSTART , function (e) {
      self.isActivate = true;

    });

    map.on(L.Draw.Event.EDITSTOP , function (e) {
      self.isActivate = false;
    });
  }


  manageEditOrCreateLayer(layer: any, map: any) {
    this.isActivate = true;
    // we finich create the layer we go in edition mode
    this.currentLayer.editing.enable();

    this.editableLayers.addLayer(this.currentLayer);
    this.loadPopup(map, this.currentLayer)
    // then we launch the validate popup
    };
  getLocationsFromPolygon(layer): Location[] {
    const rectangle: any = <any>layer;
    const latlng = rectangle.getLatLngs()[0];
    const locations: Location[] = this.helper.convertLatLongToLocation(latlng);
    return locations
  }

  getLocationsFromCicle(layer): Location[] {
    const circle: any = <any>layer;
    const origin = circle.getLatLng(); // center of drawn circle
    const radius = circle.getRadius(); // radius of drawn circle
    const polys = this.helper.createGeodesicPolygon(origin, radius, 60, 360); // these are the points that make up the circle
    const locations = [];
    for (let i = 0; i < polys.length; i++) {
      const loc: Location = {
        lat: polys[i].lat,
        lng: polys[i].lng
      };
      locations.push(loc);
    }
    return locations
  }
  retriveAndAddLayer(population: Population, layer: any, map: any) {
    this.loaderService.display(false);
    this.navigationBarService.enableButton('load_result');
    layer.editing.disable();
    this.sidePanelService.openRightPanel();
  }

  showlayer(geometrie: any, map: any) {
    this.removeVtlayer(map);
    this.selectionTooLayer = L.vectorGrid.slicer(geometrie);
    this.selectionTooLayer.addTo(map);
    this.loaderService.display(false);
  }

  clearAll() {
    this.navigationBarService.disableButton('load_result');
    this.currentLayer.editing.disable();
    this.editableLayers.clearLayers();
    this.sidePanelService.closeRightPanel();

  }
  removeVtlayer(map: any) {
    if (this.selectionTooLayer) {
      this.navigationBarService.disableButton('load_result');
      map.removeLayer(this.selectionTooLayer);
      delete this.selectionTooLayer;
    }
  }
  // population feature
  // population feature
  getPopulation(locations: Location[], layer: Layer, map: any) {
    this.loaderService.display(true);
    const payload: Payload = {
      nuts_level: 3,
      year: 2015,
      points: locations,
    }
    this.populationService.getPopulationWithPayloads(payload).then(population  => this.retriveAndAddLayer(population, layer, map));
  }

  addDrawerControl(map: Map) {
    map.addLayer(this.editableLayers);
    this.options = {
      position: 'topleft',
      draw: {
        polyline: false,
        polygon: {
          allowIntersection: false, // Restricts shapes to simple polygons
          drawError: {
            color: '#e1e100', // Color the shape will turn when intersects
            message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
          },
          shapeOptions: {
            color: '#bada55'
          }
        },
        circle: true,  // Turns off this drawing tool
        rectangle: {
          tooltip : {
            start : 'dede',
          },
          shapeOptions: {
            clickable: false
          }
        },
        marker: false,
      },
      edit: {
      featureGroup: this.editableLayers, // allow editing/deleting of features in this group
        edit: false, // disable the edit tool (since we are doing editing ourselves)
        remove: true
    },
    };
    this.drawControl = new L.Control.Draw(this.options);
    map.addControl(this.drawControl);

  }
  toggleControl(map: any) {
    if (this.isDrawControl) {
      map.removeControl(this.drawControl)
      this.isDrawControl = false;
    }else {
      this.addDrawerControl(map);
      this.isDrawControl = true;
    }
  }
}
