/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Map} from 'leaflet';
import {Logger} from '../../../shared/services/logger.service';
import {  OnInit, OnDestroy } from '@angular/core';

import { basemap} from '../basemap';
import { LoaderService } from '../../../shared/services/loader.service';

@Injectable()
export class MapService implements OnInit, OnDestroy {
  public map: Map;
  public baseMaps: any;
  private vtLayer: any;

  constructor(private http: Http, private logger: Logger, private loaderService: LoaderService) {
    logger.log('MapService/constructor()');
    this.baseMaps = basemap;

    logger.log('MapService/constructor()/_map ' + this.map);
    logger.log('MapService/constructor()/_baseMaps ' + this.baseMaps);
  }

  ngOnInit(): void {
    this.logger.log('MapService/ngOnInit()');
    this.logger.log('MapService/constructor()/_map ' + this.map);


  }
  getMap(): Map {
    return this.map;
  }

  ngOnDestroy(): void {
    this.logger.log('MapService/ngOnDestroy()');

  }


  disableMouseEvent(elementId: string) {
     /*let element = <HTMLElement>document.getElementById(elementId);

     L.DomEvent.disableClickPropagation(element);
    L.DomEvent.disableScrollPropagation(element);*/
  }

  toggleAirPortLayer() {
    this.logger.log('MapService/toggleAirPortLayer');
   if (this.vtLayer) {
     this.logger.log('MapService/toggleAirPortLayer/remove vtLayer');
      this.map.removeLayer(this.vtLayer);
      delete this.vtLayer;
    } else {
     this.logger.log('MapService/toggleAirPortLayer/add vtLayer');
      this.http.get('https://rawgit.com/haoliangyu/angular2-leaflet-starter/master/public/data/airports.geojson')
        .map(res => res.json())
        .subscribe(result => {
          this.vtLayer = L.vectorGrid.slicer(result);
          this.vtLayer.addTo(this.map);
        });
    }
  }

  addWmsLayer() {
    if (this.vtLayer) {
      this.logger.log('MapService/removeLayer()');
      this.map.removeLayer(this.vtLayer);
      delete this.vtLayer;
    } else {
      this.logger.log('MapService/addWmsLayer()');
      this.vtLayer = this.createWMSLayer().addTo(this.map);
    }
  }
  createWMSLayer() {
  const url =  'https://geoserver.crem-dev.plateforme-meu.ch/geoserver/meu/wms';
  const layerName = 'meu:Cadastre_Neuchatel';
  const style = '';

  // See http://leafletjs.com/reference.html#tilelayer-wms
  const wms = L.tileLayer.wms(url, {
    layers: layerName,
    styles: style,
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
  });

  // Update the legend control
  // See http://docs.geoserver.org/latest/en/user/services/wms/get_legend_graphic/legendgraphic.html
  const legendGraphicOptions = {
    request: 'GetLegendGraphic',
    version: '1.3.0',
    format: 'image/png',
    layer: layerName,
    style: style,
    legend_options: 'forceLabels:on'
  };
  return wms;
}


}
