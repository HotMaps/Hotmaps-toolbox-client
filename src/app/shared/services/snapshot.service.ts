import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { UserManagementStatusService } from 'app/features/user-management';
import { MapService } from 'app/pages/map';
import { SelectionToolService } from 'app/features/selection-tools';
import { ToasterService } from './toaster.service';

import { Helper } from '../helper';

import { apiUrl, hectare } from '../data.service';
import { LatLng } from 'leaflet';
import { isNumber } from 'util';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';
import { SelectionScaleService } from 'app/features/selection-scale';
import { LayersService } from 'app/features/layers';




export const snapshotUrl: string = apiUrl + '/snapshot/';

export interface SnapshotConfig {
  id?: number,
  name: string,
  description: string,
  date: Date,

  scale: string,
  zones: Array<string|any>, // nuts or areas
  layers: string[],

  center: LatLng,
  zoom: number
}

@Injectable()
export class SnapshotService {


  private userToken: string;

  constructor(private http: Http, private userStatus: UserManagementStatusService,
    private mapService: MapService, private slcToolsService : SelectionToolService,
    private helper: Helper, private toasterService: ToasterService,
    private dataInteractionService: DataInteractionService, private slcScaleService: SelectionScaleService,
    private layersService: LayersService) {
    this.userStatus.getUserToken().subscribe(value => {
      this.userToken = value
      console.log(value);
    });
  }


  /**
   * Use toaster to show message of success and error
   * @param res Response of the api
   * @param success true from then, false from catch
   */
  private showMsg(res: Response, success: boolean) {
    this.toasterService.showToaster(res.json()["message"]);
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
        : this.helper.getAreasForPayload(this.slcToolsService.areasSubject.getValue()),
      layers : this.mapService.getLayerArray().getValue(),

      center: this.mapService.getMap().getCenter(),
      zoom: this.mapService.getZoomLevel().getValue()
    }

    return this.http.post(snapshotUrl + 'add', {
      token: this.userToken, config: JSON.stringify(config)
    }).toPromise()
      .then(response => this.showMsg(response, true))
      .catch(response => this.showMsg(response, false));
  }


  apply(snapshot: SnapshotConfig) {

    const layers2Toggle: Array<string> = [];
    {
      const lay: Array<string> = snapshot.layers.concat(this.mapService.getLayerArray().getValue());
      
      for (var i = 0; i < lay.length; i++) {
        var add = true;      
        for (var j = 0;j < lay.length; j++) {
          if (j == i) continue;
          if (lay[i] == lay[j]) {
            add = false;
            break;
          }
        }
        if (add)
          layers2Toggle.push(lay[i]);
      }
    }
    layers2Toggle.forEach(layer => this.mapService.showOrRemoveLayer(layer, 0));

    this.dataInteractionService.getDataArrayServices().forEach(val => {
      val.isSelected = snapshot.layers.includes(val.workspaceName);
    }); 
    
    /*
    this.mapService.clearAll(this.mapService.getMap())

    this.slcToolsService.clearAll(this.mapService.getMap());
  
    this.slcToolsService.setScaleValue(snapshot.scale);
    this.slcScaleService.setScaleValue(snapshot.scale);
    this.layersService.setCurrentNutsLevel(snapshot.scale);
    this.slcScaleService.changeScale();

    console.log(this.mapService.getMap)

    this.mapService.getMap().eachLayer(layer => {
      console.log(layer)
    })    
    
    if (snapshot.scale === hectare) {
      this.mapService.selectAreaWithHectare(snapshot.zones)
      this.slcToolsService.areasSubject.next(snapshot.zones)
    } else {
      this.mapService.selectAreaWithNuts(snapshot.zones)
      this.slcToolsService.nutsIdsSubject.next(snapshot.zones)
      console.log(this.slcToolsService.getDrawer())
    }*/
    
    
    this.mapService.getMap().flyTo(snapshot.center, snapshot.zoom);
  }

  /**
   * Get the list of the snapshots
   * @returns Promise with the snapshots
   */
  list(): Promise<SnapshotConfig[]> {
    return this.http.post(snapshotUrl + 'list', { token: this.userToken })
      .toPromise().then(response => {
        const snaps: Array<any> = response.json()["snapshots"];
        const snapshots: SnapshotConfig[] = [];
        for (var i in snaps) {
          const snap: SnapshotConfig = JSON.parse(snaps[i]["config"]);
          snap.id = snaps[i]['id'];
          snapshots.push(snap);
        }
        return snapshots;
      });
  }

  update() {

  }

  /**
   * Delete a snapshot 
   * @param id id of the snapshot to delete
   * @returns Promise with success of the procedure
   */
  delete(id: number|SnapshotConfig): Promise<boolean> {
    if (!isNumber(id)) id = (id as SnapshotConfig).id;
    
    return this.http.delete(snapshotUrl + 'delete', {
      body : { token: this.userToken, id: id }
    }).toPromise()
      .then(response => this.showMsg(response, true))
      .catch(response => this.showMsg(response, false));
  }

}
