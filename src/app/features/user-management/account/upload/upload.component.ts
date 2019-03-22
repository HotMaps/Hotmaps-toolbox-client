import { Component, OnInit } from '@angular/core';

import { UploadService, UploadedFile } from '../../../../shared/services/upload.service';
import { DataInteractionService } from 'app/features/layers-interaction/layers-interaction.service';
import { DataInteractionClass } from 'app/features/layers-interaction/layers-interaction.class';

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
  selectedLayer: string = null;

  constructor(private upService: UploadService, private layerService: DataInteractionService) { }

  ngOnInit() {
    if (this.layerService.getDataInteractionServices) // == isNUllorUndefined
      this.layerService.getDataInteractionServices().then(layers => this.layers = layers);
    this.getFiles();
    if (this.upService.getUploadedFiles)
      this.upService.getUploadedFiles().subscribe(files => this.uploadedFiles = files);
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
    if (this.upService.list)
      this.upService.list();
  }

  delete(id: number|UploadedFile) {
    this.upService.delete(id);    
  }

  download(upFile: UploadedFile) {
    this.upService.download(upFile).then(url => {
      // window.open(url); //POPUP blocker
      const a = document.createElement('a');
      a.href = url;
      a.download = upFile.name;
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
    if (!(this.isFileOk && this.selectedLayer))
      return;
    this.isUploading = true;
    this.upService.add(this.file2Up, this.selectedLayer).then((success) => {      
      if (success) {
        this.file2Up = null;
        this.isFileOk = false;
        this.selectedLayer = null;
      } else this.isFileOk = true;
      this.isUploading = false;
    });
  }
}