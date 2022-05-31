import { Injectable } from '@angular/core';

import * as L from 'leaflet';

import { UserManagementStatusService } from 'app/features/user-management';
import { MapService } from 'app/pages/map';
import { SelectionToolService } from 'app/features/selection-tools';
import { ToasterService } from './toaster.service';

import { Helper } from '../helper';
import { apiUrl, geoserverUrl, hectare, lau2name, lau2 } from '../data.service';
import { GeojsonClass } from 'app/features/layers';
import { NutsRenderArray } from "../business";
import { DataInteractionArray } from "../../features/layers-interaction/layers-interaction.data";
import { DataInteractionClass } from "../../features/layers-interaction/layers-interaction.class";
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

export const snapshotUrl: string = apiUrl + '/snapshot/';

export interface SnapshotConfig {
  id?: number,
  name: string,
  description: string,
  date: Date,

  scale: string,
  zones: Array<string|any>, // nuts or areas
  layers: string[],

  center: L.LatLng,
  zoom: number
}

@Injectable()
export class SnapshotService {

  private userToken: string;

  constructor(private http: HttpClient, private userStatus: UserManagementStatusService,
    private mapService: MapService, private slcToolsService : SelectionToolService,
    private helper: Helper, private toasterService: ToasterService) {
    this.userStatus.getUserToken().subscribe(value => {
      this.userToken = value
    });
  }


  /**
   * Use toaster to show message of success and error
   * @param res Response of the api
   * @param success true from then, false from catch
   */
  private showMsg(res, success: boolean) {
    this.toasterService.showToaster(res["message"]);
    return success;
  }


  /**
   * Add a new snapshot
   * @param name
   * @param description
   * @returns Promise with success of the procedure
   */
  add(name: string, description: string = ""): Promise<boolean> {
    const scale = this.slcToolsService.getScaleValue();

    let config: SnapshotConfig = {
      name: name,
      description: description,
      date: new Date(),
      scale: scale,
      zones: scale !== hectare ? this.slcToolsService.nutsIdsSubject.getValue()
        : this.slcToolsService.areasSubject.getValue().map(area => {
          if (area instanceof L.Circle) {
            let circle: any = (area as L.Circle);
            let radius = circle.getRadius();
            circle = circle.toGeoJSON();
            circle.properties.radius = radius;
            return circle;
          } else {
            const geoJson: any = (area as L.Polygon).toGeoJSON();
            let features = [];
            if ("features" in geoJson) {
              features = geoJson.features[0];
            } else {
              features = geoJson;
            }
            return features;
          }
        }),
      layers : this.mapService.getLayerArray().getValue(),

      center: this.mapService.getMap().getCenter(),
      zoom: this.mapService.getZoomLevel().getValue()
    };

    return this.http.post(snapshotUrl + 'add', {
      token: this.userToken, config: JSON.stringify(config)
    }).toPromise()
      .then(response => this.showMsg(response, true))
      .catch(response => this.showMsg(response, false));
  }

  apply(snapshot: SnapshotConfig, callback?: () => void) {
    const mapService = this.mapService;
    const myMap = mapService.getMap();

    // remove all
    mapService.clearAll(myMap);

    // de/enable layers
    const layers2Toggle: Array<DataInteractionClass> = [];
    {
      const lay: Array<string> = snapshot.layers.concat(mapService.getLayerArray().getValue());

      for (var i = 0; i < lay.length; i++) {
        var add = true;
        for (var j = 0;j < lay.length; j++) {
          if (j == i) continue;
          if (lay[i] == lay[j]) {
            add = false;
            break;
          }
        }
        if (add) {
          DataInteractionArray.forEach(dataInteraction => {
            if (dataInteraction.workspaceName === lay[i])
              layers2Toggle.push(dataInteraction);
          });
        }
      }
    }
    layers2Toggle.forEach(layer => mapService.showOrRemoveLayer(layer.workspaceName, layer.order));

    DataInteractionArray.forEach(dataInteraction => {
      dataInteraction.isSelected = false;
      snapshot.layers.forEach(layer => {
        if (dataInteraction.workspaceName === layer)
          dataInteraction.isSelected = true;
      });
    });

    const nutLvl = NutsRenderArray.find(nut => nut.business_name == snapshot.scale);
    // To change scale
    const control = (myMap as any).scaleControl as L.Control;
    control.getContainer().getElementsByTagName('input')[nutLvl.id].click();

    myMap.flyTo(snapshot.center, snapshot.zoom);

    if (nutLvl) {
      if (nutLvl.business_name != hectare) {
        // Working but a little slow
        const isLau2: boolean = nutLvl.business_name == lau2;
        const nameId = isLau2 ? 'comm_id' : 'nuts_id';
        const layer = isLau2 ? lau2name : 'population';
        const date_filter = isLau2 ? '' : 'date=\'2013-01-01\' AND ';
        const stat_level_filter = isLau2 ? '' : ' AND stat_levl_=' + nutLvl.api_name;

        let nuts_ids = `${nameId}='${snapshot.zones.join(`' OR ${nameId}='`)}'`;

        let url = geoserverUrl + '?service=WFS&version=2.0.0&request=GetFeature' +
          `&typeNames=hotmaps:${layer}&outputFormat=application/json` +
          `&cql_filter=${date_filter}(${nuts_ids})${stat_level_filter}`;

        this.http.get(url).pipe(map((res) => res as GeojsonClass))
          .subscribe(res => {
            res.features.forEach(geo => mapService.selectAreaWithNuts(geo));
            if (callback) callback();
          }, err => {
            console.error(err);
            if (callback) callback();
          });

      } else {
        snapshot.zones.forEach(zone => {
          let shape: any;
          if (zone.properties && zone.properties.radius) {
            shape = L.geoJSON(zone as any, {
              pointToLayer: (feature: any, latlng: L.LatLng) => {
                return new L.Circle(latlng, feature.properties.radius);
              }
            });
            shape.radius = zone.properties.radius;
            shape.latLng = L.GeoJSON.coordsToLatLng(zone.geometry.coordinates);
          } else {
            shape = L.polygon(L.GeoJSON.coordsToLatLngs(zone.geometry.coordinates[0]));
          }
          this.slcToolsService.drawHectaresLoadingResult(myMap, shape);
        });
        if (callback) callback();
      }
    }
  }

  /**
   * Get the list of the snapshots
   * @returns Promise with the snapshots
   */
  list(): Promise<SnapshotConfig[]> {
    return this.http.post(snapshotUrl + 'list', { token: this.userToken })
      .toPromise().then(response => {
        const snaps: Array<any> = response["snapshots"];
        const snapshots: SnapshotConfig[] = [];
        for (var i in snaps) {
          const snap: SnapshotConfig = JSON.parse(snaps[i]["config"]);
          snap.id = snaps[i]['id'];
          snapshots.push(snap);
        }
        return snapshots;
      });
  }

  /* TODO
  update() {

  }*/

  /**
   * Delete a snapshot
   * @param id id of the snapshot to delete
   * @returns Promise with success of the procedure
   */
  delete(id: number|SnapshotConfig): Promise<boolean> {
    if (typeof(id) !== 'number') id = (id as SnapshotConfig).id;

    let jsonparams = {
      token: this.userToken,
      id: id.toString()
    }

    return this.http.delete(snapshotUrl + 'delete', {body: jsonparams}).toPromise()
      .then(response => this.showMsg(response, true))
      .catch(response => this.showMsg(response, false));
  }
}
