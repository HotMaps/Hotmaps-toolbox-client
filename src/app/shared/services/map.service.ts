/**
 * Created by lesly on 27.05.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Map} from 'leaflet';
import {Popup} from 'leaflet';
import {Logger} from './logger.service';
import {OnInit, OnDestroy} from '@angular/core';

import {basemap} from '../../pages/map/basemap';
import {Payload} from '../../features/population/payload.class';
import {Population} from '../../features/population/population.class';
import {PopulationService} from '../../features/population/services/population.service';
import {LoaderService} from './loader.service';
import {Location} from '../../features/population/location';


@Injectable()
export class MapService implements OnInit, OnDestroy {
  private map: Map;
  private currentPopup: Popup;
  private baseMaps: any;
  private vtLayer: any;

  constructor(private http: Http, private logger: Logger, private loaderService: LoaderService,
              private populationService: PopulationService) {
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
  setupMapservice(map: Map) {
    this.logger.log('MapService/setupMapservice');

    this.map = map;
    this.retriveMapEvent();
  }
  retriveMapEvent(): void {
    this.logger.log('MapService/retriveMapEvent');
    let self = this;
    this.map.on('zoomend', function() {
      self.logger.log('MapService/zoomend');
    });
    this.map.on('zoomstart', function(event)
    {

      self.logger.log('MapService/zoomstart');
      if (event.target._animateToZoom) {

        self.logger.log('MapService/zoomstart val +' + event.target);
        self.logger.log('MapService/zoomstart val -' + event.target._animateToZoom );
      }

    });
    this.map.on ('measurestart', function () {
      self.logger.log('MapComponent/measurestart');
    });
    this.map.on('measurefinish', function (evt) {

      writeResults(evt);
    });
    this.map.on('LayersControlEvent', function() {
      self.logger.log('LayersControlEvent');
    });

    this.map.on('layeradd', function() {
      self.logger.log('MapService/layeradd-----');

    });
    this.map.on('popupopen', function(e) {
      const html: HTMLDivElement =  e.target._popup.getContent();

      self.currentPopup = e.target._popup;


      self.logger.log('html id dd ' +  html.align);
      self.logger.log('firstElementChild  ' + html.firstElementChild);
      self.logger.log('lastChild  ' + html.lastChild);


      e.target._popup.setContent(html);
      self.logger.log('popupopen  ' +  e.target._popup);
    });






    this.map.on('overlayadd', onOverlayAdd);
    function onOverlayAdd(e) {
      self.logger.log('overlayadd');

    }
    function writeResults (results: any) {
      self.logger.log('MapService/ngAfterContentInit/writeResults');
      let locations =  [];
      for (let _i = 0; _i < results.points.length; _i++) {
        const lat = results.points[_i].lat;
        const lng = results.points[_i].lng;
        const loc: Location = {
          lat: lat,
          lng: lng
        };
        locations.push(loc);
      }
      self.logger.log('locations ' +  JSON.stringify(locations) );
      self.logger.log('MapComponent/ngAfterContentInit/writeResults/results.points= ' + results.points);
      if (locations.length === 0) {
        self.logger.log('locations empty' );
        return;
      }
      self.getPopulation(locations);
    }
  }
  showlayer(geometrie: any) {

    // todo track when the layer has been added and stop the loader

    this.logger.log('MapService/showlayer');
    if (this.vtLayer) {
      this.map.removeLayer(this.vtLayer);
      delete this.vtLayer;
    }
    this.logger.log('MapService/showlayer/layerWilladde');
    this.vtLayer = L.vectorGrid.slicer(geometrie);
    this.vtLayer.addTo(this.map);
    this.loaderService.display(false);
  }
  // population feature
  getPopulation(locations: Location[]) {
    this.loaderService.display(true);
    this.logger.log('MapService/getPopulation');


    const payload: Payload = {
      nuts_level: 3,
      year: 2015,
      points: locations,
    }
    this.logger.log('MapService/payload ' +  JSON.stringify(payload) );
    this.populationService.getPopulationWithPayloads(payload).then(population  => this.retriveAndAddLayer(population));
  }

  retriveAndAddLayer(population: Population) {
    this.logger.log('MapService/retriveAndAddLayer');
    this.showlayer(JSON.parse(population.geometries));
    // this.loaderService.display(false);
    // const x = document.getElementsByClassName('heading');
    const populationValue = population.sum_density;

    const html: HTMLDivElement = <HTMLDivElement> this.currentPopup.getContent();
    this.logger.log('html content ' +  html);
    this.logger.log('html content innerHTML' +  html.innerHTML);
    this.currentPopup.setContent(html);
   // document.getEleme ntsByClassName('heading').innerHTML = 'New text!';
    // this.logger.log('leaflet-measure-resultpopup= ' +  JSON.stringify(x));
     alert('population: ' + population.sum_density);
  }


}
