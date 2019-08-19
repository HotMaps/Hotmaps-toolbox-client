import { Injectable } from '@angular/core';
import { Http, ResponseContentType, Headers } from '@angular/http';

import { UserManagementStatusService } from 'app/features/user-management/service/user-management-status.service';
import { SelectionToolService } from 'app/features/selection-tools';
import { MapService } from 'app/pages/map';
import { ToasterService } from './toaster.service';

import { Helper } from '../helper';
import { isNumber } from 'util';
import { TileLayer } from 'leaflet';

import { nuts3, lau2, hectare, constant_year, apiUrl } from '../data.service';
import { BehaviorSubject } from 'rxjs';
import { APIService } from './api.service';
import { Logger } from './logger.service';
import { LoaderService } from './loader.service';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';


interface LayerInfo {
  schema: string,
  data_type: string;
}

interface BlobUrl {
  url: string,
  filename: string
}

export const uploadUrl: string = apiUrl + '/upload/';

export interface UploadedFile {
  id: number,
  name: string,
  layer: string,
  size: number
}

// To integrate in DataInteractionArray?
// datatype is needed, schema (temporary) too
// Data Given
export const LayersExportInfo = {"default":{"schema":"","data_type":"raster"},"heat_tot_curr_density":{"schema":"geo","data_type":"raster"},"heat_res_curr_density":{"schema":"geo","data_type":"raster"},"heat_nonres_curr_density":{"schema":"geo","data_type":"raster"},"gfa_tot_curr_density":{"schema":"geo","data_type":"raster"},"gfa_res_curr_density":{"schema":"geo","data_type":"raster"},"gfa_nonres_curr_density":{"schema":"geo","data_type":"raster"},"vol_tot_curr_density":{"schema":"geo","data_type":"raster"},"vol_res_curr_density":{"schema":"geo","data_type":"raster"},"vol_nonres_curr_density":{"schema":"geo","data_type":"raster"},"industrial_database_emissions":{"schema":"public","data_type":"csv"},"industrial_database_excess_heat":{"schema":"public","data_type":"csv"},"industrial_database_companyname":{"schema":"public","data_type":"csv"},"industrial_database_subsector":{"schema":"public","data_type":"csv"},"pop_tot_curr_density":{"schema":"geo","data_type":"raster"},"wwtp_power":{"schema":"public","data_type":"csv"},"wwtp_capacity":{"schema":"public","data_type":"csv"},"agricultural_residues_view":{"schema":"geo","data_type":"csv"},"livestock_effluents_view":{"schema":"geo","data_type":"csv"},"potential_forest":{"schema":"geo","data_type":"raster"},"potential_municipal_solid_waste":{"schema":"public","data_type":"csv"},"wind_50m":{"schema":"geo","data_type":"raster"},"solar_optimal_total":{"schema":"geo","data_type":"raster"},"shallow_geothermal_potential":{"schema":"geo","data_type":"csv"},"land_surface_temperature":{"schema":"geo","data_type":"raster"},"cdd_curr":{"schema":"geo","data_type":"raster"},"hdd_curr":{"schema":"geo","data_type":"raster"},"solar_radiation":{"schema":"geo","data_type":"raster"},"output_wind_speed":{"schema":"geo","data_type":"raster"},"yearly_co2_emission":{"schema":"public","data_type":"csv"}};

@Injectable()
export class UploadService extends APIService {

  private userToken: string;

  // For Show and Remove
  private activeLayers: Object = {};
  private uploadedFiles: BehaviorSubject<UploadedFile[]> = new BehaviorSubject<UploadedFile[]>([]);
  private activePersonalLayers: BehaviorSubject<Object> = new BehaviorSubject<Object>({});

  /**
   * To refresh the list automatically
   */
  getUploadedFiles(): BehaviorSubject<UploadedFile[]> {
    return this.uploadedFiles;
  }
  getActivePersonalLayers():BehaviorSubject<Object> {
    return this.activePersonalLayers;
  }
  constructor(
    private userStatus: UserManagementStatusService, private slcToolsService : SelectionToolService,
    private helper: Helper, private mapService: MapService, private dataInsteractionService: DataInteractionService,
    protected http: Http, protected logger: Logger, protected loaderService: LoaderService, protected toasterService: ToasterService) {
      super(http, logger, loaderService, toasterService);
      this.userStatus.getUserToken().subscribe(value => this.userToken = value);
    }

  /**
   * Use toaster to show message of success and error
   * @param res Response of the api
   * @param success true from then, false from catch
   */
  private showMsg(res: any, success: boolean) {
    this.list();
    this.toasterService.showToaster(res["message"]);
    return success;
  }

  /**
   * Add a file to the uploaded files
   * @param file file to add
   * @param layer layer of the file
   * @returns Promise with success of the procedure
   */
  add(file: File, layer?): Promise<boolean> {
    let form = new FormData();
    form.append('token', this.userToken);
    form.append('name', file.name);
    form.append('file', file, file.name);
    form.append('layer', layer.workspaceName);
    form.append('layer_type', layer.layer_type);
    return super.POSTunStringify(form, uploadUrl + 'add', {headers: new Headers() })
      .then(response => this.showMsg(response, true))
      .catch(response => this.showMsg(response, false));
  }

  /**
   * Delete an uploaded file
   * @param id id of the file to delete
   * @returns Promise with success of the procedure
   */
  delete(id: number|UploadedFile): Promise<boolean> {
    this.remove(id); // remove first
    this.dataInsteractionService.removeLayer(id)
    if (!isNumber(id)) id = (id as UploadedFile).id;

    return super.DELETE(uploadUrl + 'delete', {
      body: { token: this.userToken, id: id }
    }).toPromise()
      .then(response => this.showMsg(response.json(), true))
      .catch(response => this.showMsg(response.json(), false));
  }

  /**
   * Create an url to download a uploaded file
   * @param id
   * @param filename name of the file to download
   * @returns Promise with the url to download
   */
  download(id: number|UploadedFile): Promise<string> {
    if (!isNumber(id)) id = (id as UploadedFile).id;

    return super.POSTunStringify({
      token: this.userToken, id: id
    }, uploadUrl + 'download', { responseType : ResponseContentType.Blob, headers: new Headers() }).then(data => URL.createObjectURL(data) as string
    ).catch(err => {
      return ""; // If file dont exist
    });
  }

  /**
   * Get the list of the uploaded files
   * @returns Promise with the files
   */
  list(): Promise<UploadedFile[]> {
    return super.POSTunStringify({ token: this.userToken }, uploadUrl + 'list')
      .then(response => {
        this.addLayersToDatainteraction(response["uploads"]);
        this.uploadedFiles.next(response["uploads"]);
        return this.getUploadedFiles().getValue();
      });
  }

  addLayersToDatainteraction(uploads) {
    uploads.map(upload => {
      if(!this.dataInsteractionService.layerExists(upload)){
        this.dataInsteractionService.addNewLayer(upload.name,upload.id, upload.layer_type)
      }
    })
  }
  

  /**
   * Show the layer on the map
   * @param id
   */
  show(id: number|UploadedFile): void {
    const upFile: UploadedFile = isNumber(id)
      ? this.getUploadedFiles().getValue().filter(upload => upload.id == id)[0] : id as UploadedFile;

    if (upFile.id in this.activeLayers) {
      this.toasterService.showToaster('Layer already active');
      return;
    }

    const payload = {
      id: upFile.id,
      user_token: this.userToken,
      layer_id: upFile.layer,
      layer_name:upFile.name
    };
    this.activePersonalLayers.value[upFile.id as number] = payload;
    this.activePersonalLayers.next(this.activePersonalLayers.value);
    if (upFile.name.endsWith('.tif')) {
      this.activeLayers[upFile.id] = L.tileLayer(uploadUrl + 'tiles/{token}/{upload_id}/{z}/{x}/{y}', {
        token: this.userToken,
        upload_id: upFile.id,
        tms: true,
        maxNativeZoom: 11
      }).addTo(this.mapService.getMap());
    } else if (upFile.name.endsWith('.csv')) {
      this.http.get(uploadUrl + 'csv/' + this.userToken + '/' + upFile.id).subscribe(geoData => {

        this.activeLayers[upFile.id] = L.geoJson(geoData.json(), {
          pointToLayer: (feature: any, latlng: L.LatLng) => {
            if (feature.geometry.type == "Point") return new L.CircleMarker(latlng, {
              fillColor: feature.style.fill,
              color: feature.style.stroke,
              fillOpacity: 1,
              weight: 1,
              // https://github.com/Leaflet/Leaflet/issues/2824
              radius: +feature.style.size
            });
          }
        }).addTo(this.mapService.getMap());
      });
    }
  }

  /**
   * Remove the layer from the map
   * @param id
   */
  remove(id: number|UploadedFile): void {
    if (!isNumber(id)) id = (id as UploadedFile).id;
    if (!((id as number) in this.activeLayers)) return; // if the layer wasn't active

    (this.activeLayers[id as number] as TileLayer).removeFrom(this.mapService.getMap());
    delete this.activeLayers[id as number];
    delete this.activePersonalLayers.value[id as number];
    this.activePersonalLayers.next(this.activePersonalLayers.value)
  }

  /**
   * Remove all active layers
   */
  removeAll(): void {
    for (let up in this.uploadedFiles.value) {
     this.dataInsteractionService.removeLayer(this.uploadedFiles.value[up].id)
    }

    this.activePersonalLayers.next({})
    this.uploadedFiles.next([])
  }

  /**
   * Export a file from selected area of the map
   * @param layer chosen layer
   * @param schema the schema to export (for later)
   * @param year the year to export
   * @returns Promise with the url to download and a filename
   */
  export(layer: string, uuid?: string, schema?: string, year?: number): Promise<BlobUrl> {
    const scale = this.slcToolsService.getScaleValue();
    const layerExportInfo: LayerInfo = LayersExportInfo[layer] != null ? LayersExportInfo[layer] : LayersExportInfo["default"];
    let nutsOrAreas: Array<string|any>;
    let isNuts : boolean = true;

    if (scale === lau2 || scale === nuts3) {
      layer += '_' + scale.toLowerCase().replace(' ', ''); // To change in API ?
      nutsOrAreas = this.slcToolsService.nutsIdsSubject.getValue()
    } else if (scale === hectare) {
      layer += '_ha';
      nutsOrAreas = this.helper.getAreasForPayload(this.slcToolsService.areasSubject.getValue());
      isNuts = false;
    }

    if (uuid == null) {
      if (year == null) year = constant_year;
      if (schema == null) schema = layerExportInfo.schema;
      return super.POSTunStringify({
        layers: layer, [isNuts ? 'nuts': 'areas' ] : nutsOrAreas,
        schema: schema, year : year.toString()
      }, uploadUrl + `export/${layerExportInfo.data_type}/${isNuts ? 'nuts' : 'hectare'}`,
      { responseType : ResponseContentType.Blob }, false).then(data => {
          return { url: URL.createObjectURL(data.blob()) as string, filename: layer + `.${layerExportInfo.data_type != 'csv' ? 'tif' : 'csv'}` } as BlobUrl
      }).catch(() => {
        this.toasterService.showToaster("Sorry, We can't export this layer");
        return {url: '', filename: ''} as BlobUrl;
      });
    }
    else { // if the layer is a cm layer
      let type : string = 'raster';
      if (layer.includes('shapefile')) type = 'vector'
      return super.POSTunStringify({
        uuid: uuid, type: type
      }, uploadUrl + 'export/cmLayer',
      { responseType : ResponseContentType.Blob }, false).then(data => {
          return { url: URL.createObjectURL(data.blob()) as string, filename: layer + `${type == 'raster'? '.tif' : '.zip'}` } as BlobUrl //TODO: correct
      }).catch(() => {
        this.toasterService.showToaster("Sorry, We can't export this layer");
        return {url: '', filename: ''} as BlobUrl;
      });
    }
  }
}
