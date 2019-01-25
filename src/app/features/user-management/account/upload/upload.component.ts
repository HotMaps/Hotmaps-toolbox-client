import { Component, OnInit } from '@angular/core';

import { UploadService, UploadedFile } from '../../../../shared/services/upload.service';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';
import { DataInteractionClass } from 'app/features/layers-interaction/layers-interaction.class';
import { ToasterService } from 'app/shared';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    
  file2Up : File;
  isFileOk: boolean = false;
  isUploading: boolean = false; // Temporary until api do this async
  uploadedFiles: UploadedFile[] = [];
  
  layers: DataInteractionClass[] = [];
  selectedLayer: string;

  constructor(private upService: UploadService, private layerService: DataInteractionService, private toasterService: ToasterService) { }

  ngOnInit() {
    this.layerService.getDataInteractionServices().then(layers => this.layers = layers);
    this.getFiles();
  }

  /**
   * Get the layer name from the layer workspacename
   * @param layer 
   * @returns
   */
  getLayerName(layer: string): string {
    for (var i in this.layers)
      if (this.layers[i].workspaceName == layer)
        return this.layers[i].name;
    return layer;
  }

  getFiles() {
    this.upService.list()
      .then(files => this.uploadedFiles = files);
  }

  delete(id: number) {
    this.upService.delete(id).then(() => this.getFiles());    
  }

  download(id: number, filename: string) {
    this.upService.download(id, filename).then(url => {
      // window.open(url); //POPUP blocker
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  onFileChange(event) {
    if(event.target.files && event.target.files.length) {
      this.file2Up = event.target.files[0];
      this.isFileOk = true;
    } else this.isFileOk = false;
  }

  fileUpload() {
    if (!this.isFileOk)
      return;
    this.isFileOk = false;
    this.isUploading = true;
    this.upService.add(this.file2Up, this.selectedLayer).then((success) => {      
      if (success) {
        this.getFiles();
        this.file2Up = null;
        this.isFileOk = false;
      } else this.isFileOk = true;
      this.isUploading = false;
    });
  }


  /**
   * add or remove the layer imported (only for tif)
   * @param id id of import
   * @param toAdd
   */
  actionLayer(id: number, toAdd: boolean = true) {
    if (toAdd) this.addLayer(id);
  }

  addLayer (id: number) { // TODO
    this.toasterService.showToaster("Sorry, we can't add layers now");
  }

  removeLayer(id: number) { // TODO

  }

  removeAllLayers() {
    for (var i in this.layers)
      this.removeLayer(this.layers[i].id);
  }
}