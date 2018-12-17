import { Http } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';
import { urlLegend } from '../../shared';

@Component({
  selector: 'htm-layer-tool',
  templateUrl: './layer-tool.component.html',
  styleUrls: ['./layer-tool.component.css']
})
export class LayerToolComponent implements OnInit {
  @Input() dataInteraction;
  private imageUrl = urlLegend;
  private isLegendDisplayed = false;
  private isInfoDisplayed = false;
  private displayLegend = false;

  constructor() { }

  ngOnInit() {
    console.log(this.dataInteraction,this.isLegendDisplayed,this.isInfoDisplayed)
  }
  toggleLegend() {
    this.isLegendDisplayed = !this.isLegendDisplayed;
  }
  toggleInformations() {
    this.isInfoDisplayed = !this.isInfoDisplayed;
  }

  downloadFile() {
    window.open(this.dataInteraction.download_url)
  }
  endLoadLegend() {
    this.displayLegend = true;
  }

}
