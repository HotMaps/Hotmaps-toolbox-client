import { Component, OnInit } from '@angular/core';
import { UploadService, UploadedFile } from 'app/shared/services/upload.service';


interface UploadedLayer extends UploadedFile {
  checked?: boolean;
}

// Author CREM Albain Dufils and HESSO Daniel Hunacek
@Component({
  selector: 'htm-share-layers',
  templateUrl: './share-layers.component.html',
  styleUrls: ['./share-layers.component.css']
})
export class ShareLayersComponent implements OnInit {

  constructor(private uploadService: UploadService) { }
  layers: UploadedLayer[] = [];
 
  ngOnInit() {
    if (this.uploadService.getShareFiles) {
      this.uploadService.getShareFiles().subscribe(files => {
        this.layers = files.map(file => {
          // To keep selected layers as selected
          this.layers.forEach(layer => {
            if (layer.id === file.id) (file as UploadedLayer).checked = layer.checked;
          });
          return file;
        });
      });
    }
  }
  
  actionLayer(layer: UploadedLayer) {
    if (layer.checked) {
      this.uploadService.remove(layer);
      layer.checked = false;
    } else {
      this.uploadService.show(layer);
      layer.checked = true;
    }
  }
}