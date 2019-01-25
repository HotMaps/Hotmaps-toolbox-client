import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';

import { UserManagementStatusService } from '../../features/user-management/service/user-management-status.service';
import { ToasterService } from './toaster.service';
import { SelectionToolService } from 'app/features/selection-tools';

import { Helper } from '../helper';
import { nuts3, lau2, hectare, constant_year, apiUrl } from '../../shared/data.service';

export interface UploadedFile {
  id: number,
  name: string,
  layer: string,
  size: number
}

interface LayerInfo {
  schema: string,
  data_type: string;
}

// To integrate in DataInteractionArray?
// datatype is needed, schema (temporary) too
// Data Given
export const LayersExportInfo = {"default":{"schema":"geo","data_type":"raster"},"heat_tot_curr_density":{"schema":"geo","data_type":"raster"},"heat_res_curr_density":{"schema":"geo","data_type":"raster"},"heat_nonres_curr_density":{"schema":"geo","data_type":"raster"},"gfa_tot_curr_density":{"schema":"geo","data_type":"raster"},"gfa_res_curr_density":{"schema":"geo","data_type":"raster"},"gfa_nonres_curr_density":{"schema":"geo","data_type":"raster"},"vol_tot_curr_density":{"schema":"geo","data_type":"raster"},"vol_res_curr_density":{"schema":"geo","data_type":"raster"},"vol_nonres_curr_density":{"schema":"geo","data_type":"raster"},"industrial_database_emissions":{"schema":"public","data_type":"csv"},"industrial_database_excess_heat":{"schema":"public","data_type":"csv"},"industrial_database_companyname":{"schema":"public","data_type":"csv"},"industrial_database_subsector":{"schema":"public","data_type":"csv"},"pop_tot_curr_density":{"schema":"geo","data_type":"raster"},"wwtp_power":{"schema":"public","data_type":"csv"},"wwtp_capacity":{"schema":"public","data_type":"csv"},"agricultural_residues_view":{"schema":"geo","data_type":"csv"},"livestock_effluents_view":{"schema":"geo","data_type":"csv"},"potential_forest":{"schema":"geo","data_type":"raster"},"potential_municipal_solid_waste":{"schema":"public","data_type":"csv"},"wind_50m":{"schema":"geo","data_type":"raster"},"solar_optimal_total":{"schema":"geo","data_type":"raster"},"shallow_geothermal_potential":{"schema":"geo","data_type":"csv"},"land_surface_temperature":{"schema":"geo","data_type":"raster"},"cdd_curr":{"schema":"geo","data_type":"raster"},"hdd_curr":{"schema":"geo","data_type":"raster"},"solar_radiation":{"schema":"geo","data_type":"raster"},"output_wind_speed":{"schema":"geo","data_type":"raster"},"yearly_co2_emission":{"schema":"public","data_type":"csv"}};

@Injectable()
export class UploadService {

  private uploadUrl: string = apiUrl + '/upload/';
  private userToken: string;  

  constructor(private toasterService: ToasterService, private http: Http, private userStatus: UserManagementStatusService,
    private slcToolsService : SelectionToolService, private helper: Helper) { }

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
   * Initiate the user token for the functions that need it
   */
  private init() {
    this.userToken = this.userStatus.getUserToken().getValue();
  }

  /**
   * Add a file to the uploaded files
   * @param file file to add
   * @param layer layer of the file
   * @returns Promise with success of the procedure
   */
  add(file: File, layer?: string): Promise<boolean> {
    this.init();

    let form = new FormData();
    form.append('token', this.userToken);
    form.append('name', file.name);
    form.append('file', file, file.name);
    form.append('layer', layer);
    return this.http.post(this.uploadUrl + 'add', form).toPromise()
      .then(response => this.showMsg(response, true))
      .catch(response => this.showMsg(response, false));
  }

  /**
   * Delete an uploaded file 
   * @param filename name of the file to delete
   * @returns Promise with success of the procedure
   */
  delete(id: number): Promise<boolean> {
    this.init();
    
    return this.http.delete(this.uploadUrl + 'remove_upload', new RequestOptions({
      body: { token: this.userToken, id: id }
    })).toPromise()
      .then(response => this.showMsg(response, true))
      .catch(response => this.showMsg(response, false));
  }



  
  /**
   * Create an url to download a uploaded file
   * @param id
   * @param filename name of the file to download
   * @returns Promise with the url to download
   */
  download(id: number|UploadedFile, filename: string): Promise<string> {
    this.init();

    return this.http.post(this.uploadUrl + 'download', {
      token: this.userToken, id: id
    }).toPromise().then(data => URL.createObjectURL(
      new Blob([data.text()], {
        type: filename.split('.').reverse()[0] === 'tif' ? 'image/tif' : 'text/csv'
      })) as string
    ).catch(err => {
      console.log(err); // If file dont exist
      return "";
    });
  }

  /**
   * Get the list of the uploaded files
   * @returns Promise with the files
   */
  list(): Promise<UploadedFile[]> {
    this.init();

    return this.http.post(this.uploadUrl + 'list', { token: this.userToken })
      .toPromise().then(response => response.json()["uploads"] as UploadedFile[]);
  }

  /**
   * Export a file from selected area of the map
   * @param layer chosen layer
   * @param schema the schema to export (for later)
   * @param year the year to export
   * @returns Promise with the url to download
   */
  export(layer: string, schema?: string, year?: number): Promise<string> {    
    const scale = this.slcToolsService.getScaleValue();
    const layerExportInfo: LayerInfo = LayersExportInfo[layer] == null ? LayersExportInfo[layer] : LayersExportInfo["default"];
    const isCSV = layerExportInfo.data_type == 'csv';
    let nutsOrAreas: Array<string|any>;
    let isNuts : boolean = true;        
    
    if (year == null) year = constant_year;
    if (schema == null) schema = layerExportInfo.schema;

    if (scale === lau2 || scale === nuts3) {
      layer += '_' + scale.toLowerCase().replace(' ', ''); // To change in API ?
      nutsOrAreas = this.slcToolsService.nutsIdsSubject.getValue()      
    } else if (scale === hectare) {
      layer += '_ha';
      nutsOrAreas = this.helper.getAreasForPayload(this.slcToolsService.areasSubject.getValue());
      isNuts = false;
    }   

    return this.http.post(this.uploadUrl + `export/${layerExportInfo.data_type}/${isNuts ? 'nuts' : 'hectare'}`, {
      layers: layer,
      [isNuts ? 'nuts': 'areas' ] : nutsOrAreas,
      schema: schema,
      year : year.toString()
    }).toPromise().then(data =>
      URL.createObjectURL(
        new Blob([data.text()], {
          type: isCSV ? 'text/csv' : 'image/tif'
      })) as string
    ).catch(error => {
      this.toasterService.showToaster("Sorry, We can't export this layer yet");
      return "";
    });
  }
}
