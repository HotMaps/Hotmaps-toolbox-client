import { basemap } from './../pages/map/basemap';

import 'leaflet-draw';

/**
 * Created by lesly on 07.07.17.
 */

 // Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
const prodUrl    = 'http://api.hotmaps.hevs.ch/api'; // 'http://hotmaps.hevs.ch:9006/api';
const devUrl    = 'http://api.hotmapsdev.hevs.ch/api'  // 'http://hotmapsdev.hevs.ch:9006/api';
const localApiUrl    = 'http://localhost:5000/api';



export const geoserverProdUrl_old = 'http://hotmaps.hevs.ch:9009/geoserver/hotmaps/wms';
export const geoserverProdUrl = 'http://geoserver.hotmaps.hevs.ch/geoserver/hotmaps/wms';
export const geoserverDevUrl = 'http://geoserver.hotmapsdev.hevs.ch/geoserver/hotmaps/wms';



export const geocodeUrl    = 'http://maps.googleapis.com/maps/api/geocode/json?address=';    // prefer

export const geoserverUrl = geoserverProdUrl;
export const getIpUrl    = 'http://ipv4.myexternalip.com/json';    // prefer
export const getLocationFromIp    = 'http://hotmaps.hevs.ch:9005/api/';
export const apiUrl = devUrl;
export const defaultLayer = 'heat_tot_curr_density_tif';
export const styleNameHeat = 'heat_tot_curr_density';
export const heat_type = 'heat';
export const defaultLayerType = heat_type;

export const idDefaultLayer = 1;
export const wwtpLayerName   = 'wwtp';

export const urlTaigaFeedback = 'http://hotmaps.hevs.ch:8585/feedback-taiga/send-taiga-issue.php';
export const urlLegend = geoserverUrl + '?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=50&HEIGHT=10&STRICT=false&style='
export const timeOutAjaxRequest = 10000;
export const unit_heatload_profil = 'kW';

export const formatImage = 'image/png8';
// layer_name

export const geoserverGetFeatureInfoUrl = geoserverUrl + '?' +
  'SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:'
export const nuts_level   = '3';
export const populationLayerName = 'pop_tot_curr_density_tif'
export const postStatsLayersHectares = '/stats/layers/hectares';
export const postStatsLayersNutsLau = '/stats/layers/nuts-lau';
export const postHeatLoadProfileHectares = '/heat-load-profile/hectares';
export const postHeatLoadProfileNutsLau = '/heat-load-profile/nuts-lau';
export const postDurationCurveHectares = '/heat-load-profile/duration-curve/hectares';
export const postDurationCurveNutsLau = '/heat-load-profile/duration-curve/nuts-lau';
export const getElectricityMixFromNuts0 = '/stats/energy-mix/nuts-lau';

// title
export const heatloadprofile = 'Heatload profile';
export const Durationcurve = 'Duration curve';
export const energy_mix_title = 'Electricity generation mix';
export const set404url   = 'set404url';

// Projection data string
export const proj3035 = '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs';
export const proj4326 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';

// Heat load profil
export const heat_load_api_day = 'day';
export const heat_load_api_year = 'year';
export const heat_load_api_month = 'month';
export const buttons_heat_load = [
  { name: 'Year', api_ref: heat_load_api_year, selected: true, date: 2010, min: 2010, max: 2010, options: [] },
  { name: 'Month', api_ref: heat_load_api_month, selected: false, date: 1, min: 1, max: 12, options: [] },
  { name: 'Day', api_ref: heat_load_api_day, selected: false, date: 1, min: 1, max: 31, options: [] },
];
export const default_drop_down_button = 'overall';
export const calculation_module_category = 'Calculation module'
export const raster_type_name = 'raster';
export const vector_type_name = 'vector';
export const summay_drop_down_buttons = [
  { name: 'Overall', ref: default_drop_down_button, selected: true, display: false},
  { name: 'Demand', ref: 'demand', selected: false, display: false},
  { name: 'Potentials', ref: 'potential', selected: false, display: false},
  { name: 'Climate', ref: 'climate', selected: false, display: false},
  { name: 'Heat Supply', ref: 'heat_supply', selected: false, display: false},
  { name: 'Industry', ref: 'industry', selected: false, display: false},
  { name: 'Electricity', ref: 'electricity', selected: false, display: false},
  { name: 'Calculation module', ref: calculation_module_category, selected: false, display: false}
]


// layers constant
export const timeOut   = 200000;
// layers constant
export const clickAccuracy   = 100;
export const zoomLevelDetectChange = 10;
export const constant_year = 2012;
export const constant_year_sp_wwtp = 2015;
export const constant_year_duration_curve = 2010;
export const business_name_wwtp = 'Waste Water treatment plants';
export const business_name_population = 'Population';
export const unit_capacity   = 'population equivalent';
export const unit_heat_density   = 'MWh/ha';
export const unit_shape_area   = 'm2';
export const unit_population   = 'person/ha';
export const round_value   = '1.2-2';
export const defaultZoomLevel = 5;
export const map_options =  {
  zoomControl: false,
  center: L.latLng(47.33249406663852, 0.6976318359375),
  zoom: defaultZoomLevel,
  minZoom: 4,
  maxZoom: 17,
  zoomAnimationThreshold: 3,
  layers: [basemap.Esri ]
}
export const lau2name = 'tbl_lau1_2';

// Scale Value
export const nuts0   = 'NUTS 0';
export const nuts1   = 'NUTS 1';
export const nuts2   = 'NUTS 2';
export const nuts3   = 'NUTS 3';
export const lau2   = 'LAU 2';
export const hectare   = 'Hectare';
export const initial_scale_value   = nuts3;

// Event variable
export const MAPDRAWEDITED = L.Draw.Event.EDITED;
export const MAPDRAWSTART = L.Draw.Event.DRAWSTART;
export const MAPDRAWDELETED = L.Draw.Event.DELETED;
export const MAPDRAWEDITSTOP = L.Draw.Event.EDITSTOP;
export const MAPDRAWEDITSTART = L.Draw.Event.EDITSTART;
export const MAPDRAWCREATED = L.Draw.Event.CREATED;
export const MAPCLICK = 'click';
export const MAPLAYERCHANCE = 'baselayerchange';
export const MAPZOOMSTART = 'zoomstart';
export const MAPZOOMEND = 'zoomend';
export const MAPLAYERSCONTROLEVENT = 'LayersControlEvent';
export const MAPLAYERADD = 'layeradd';
export const MAPDIDIUPDATELAYER = 'didUpdateLayers';
export const MAPOVERLAYADD = 'overlayadd';

export const rightPanelSize = 600;
export const leftPanelSize = 445;

// tab values
export const default_tab_datapanel = 'indicator'
export const tab1_datapanel = default_tab_datapanel
export const tab2_datapanel = 'charts'


// Duration curve graph data
export const duration_curve_graph_title = 'Duration curve';
export const duration_curve_graph_category = 'duration_curve';

export const duration_curve_graph_options = {
      legend: {
          display: false
      },
      /* elements:{
        point:{
          radius:0
        }
      }, */
      tooltips: {enabled: false},
      hover: {mode: null},
      scales:{
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Heat Power (MW)'
              }
            }],
            xAxes: [{
              ticks: {display: false},
              scaleLabel: {
                display: true,
                labelString: 'Yearly duration'
              },
              gridLines:{
                color: "#FFFFFF"
              }
            }]
      }
  }

// Heat Load graph data
export const heat_load_graph_options = {
      scales:{
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Heat Power (MW)'
              }
            }]
      }
  }
export const energy_mix_graph_category = 'duration_curve';
export const energy_mix_options = {
  position : 'right',
  responsive: true,
  legend: {
    display: true,
    position : 'right'
  }
}
export const clculation_module_graph_options = {
  scales:{
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: ''
          }
        }],
        xAxes: [{
          scaleLabel : {
            display: true,
            labelString: ''
          }
        }]
  }
}
