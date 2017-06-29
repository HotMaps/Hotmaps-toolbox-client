/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Map} from 'leaflet';
import {Logger} from '../../shared/services/logger.service';
import {  OnInit, OnDestroy } from '@angular/core';

import { basemap} from '../basemap';
import { LoaderService } from '../../shared/services/loader.service';

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
      this.map.removeLayer(this.vtLayer);
      delete this.vtLayer;
    } else {
      this.logger.log('MapService/addWmsLayer()');
      this.vtLayer = L.tileLayer.wms('http://geoserver.riddes.plateforme-meu.ch/geoserver/meu/wms?service=WMS&version=1.1.0&request=GetMap&layers=meu:test_ld_mc_2017_02_10&styles=&bbox=6.89381612200003,46.978993808,6.97521270600004,47.0414113160001&width=768&height=588&srs=EPSG:4326&format=image%2Fpng', {
        layers: 'ne:ne'
      }).addTo(this.map);
    }
  }
}
