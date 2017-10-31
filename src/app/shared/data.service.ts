import { basemap } from './../pages/map/basemap';
/**
 * Created by lesly on 07.07.17.
 */
const prodUrl    = 'http://hotmaps.hevs.ch:9005/api';
const devUrl    = 'http://hotmaps.hevs.ch:9005/api';


export const geocodeUrl    = 'http://maps.googleapis.com/maps/api/geocode/json?address=';    // prefer
export const geoserverUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms';
export const getIpUrl    = 'http://ipv4.myexternalip.com/json';    // prefer
export const getLocationFromIp    = 'http://hotmaps.hevs.ch:9005/api/';
export const apiUrl = devUrl;
export const defaultLayer = 'heat_density_ha';
export const idDefaultLayer = 17;
export const idWwtpLayer = 12;
export const wwtpLayerName   = 'wwtp';
// layer_name

export const geoserverGetFeatureInfoUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms?' +
  'SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:'
export const nuts_level   = '3';
export const populationLayerName = 'population_density_ha'
export const postPopulationDensityInArea    = '/population/density/area/';
export const getGrid    = '/grids/1km/area/';
export const postStatsLayersArea = '/stats/layers/area/';
export const set404url   = 'set404url';




//layers constant
export const timeOut   = 200000;
// layers constant
export const clickAccuracy   = 100;
export const zoomLevelDetectChange = 9;
export const constant_year = 2012;
export const constant_year_sp_wwtp = 2015;
export const business_name_wwtp = 'Waste Water treatment plants';
export const business_name_population = 'Population';
export const unit_capacity   = 'population equivalent';
export const unit_heat_density   = 'MWh/ha';
export const unit_shape_area   = 'm2';
export const unit_population   = 'person/ha';
export const round_value   = '1.2-2';
export const map_options =  {
  zoomControl: false,
  center: L.latLng(47.1, 7.0833),
  zoom: 5,
  minZoom: 4,
  maxZoom: 17,
  layers: [basemap.Esri, basemap.Hybrid]
}