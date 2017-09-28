/**
 * Created by lesly on 07.07.17.
 */
const prodUrl    = 'http://hotmaps.hevs.ch:9005/api';
const devUrl    = 'http://hotmaps.hevs.ch:9005/api';


export const geocodeUrl    = 'http://maps.googleapis.com/maps/api/geocode/json?address=';    // prefer
export const geoserverUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms';
export const geoserverGetFeatureInfoUrl = 'http://hotmaps.hevs.ch:9090/geoserver/hotmaps/wms';
export const getIpUrl    = 'http://ipv4.myexternalip.com/json';    // prefer
export const getLocationFromIp    = 'http://hotmaps.hevs.ch:9005/api/';
export const apiUrl = devUrl;
export const defaultLayer = 'heat_density_map';
export const postPopulationDensityInArea    = '/population/density/area/';
export const getGrid    = '/grids/1km/area/';
export const postStatsLayersArea = '/stats/layers/area/';
export const set404url   = 'set404url';

export const timeOut   = 2000;
// layers constant
export const clickAccuracy   = 100;
export const layer_wwtp   = 'wwtp';
export const unit_capacity   = 'Person Equivalent';
export const unit_heat_density   = 'GWh/km2';


