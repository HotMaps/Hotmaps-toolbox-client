import { SelectionScaleClass  } from './class/selection-scale.class';
import {business_name_wwtp, defaultLayer, geoserverUrl, populationLayerName, nuts1, nuts2, nuts3, hectare} from '../../shared/data.service';
export const SelectionScaleClassArray: SelectionScaleClass[] = [
  {id: 1, name: 'nonuts'},
  {id: 2, name: 'nuts1', },
  {id: 3, name: 'nuts2'},
  {id: 4, name: 'nuts3'},
  {id: 5, name: 'lau1'},
  {id: 6, name: 'lau2'},
  {id: 6, name: 'hectare'},
];

const action = 'population';


export const hectareLayer = L.tileLayer.wms(geoserverUrl, {
  layers: 'hotmaps:' + action + 0 ,
  format: 'image/png',
  transparent: true,
  version: '1.3.0',
  cql_filter : 'stat_levl_ = ' + 1 + '',
  srs: 'EPSG:4326',
})

const nuts0Layer = L.tileLayer.wms(geoserverUrl, {
  layers: 'hotmaps:' + action,
  format: 'image/png',
  transparent: true,
  version: '1.3.0',
  cql_filter : 'stat_levl_ = ' + 0 + '',
  srs: 'EPSG:4326',
})
const nuts1Layer = L.tileLayer.wms(geoserverUrl, {
  layers: 'hotmaps:' + action,
  format: 'image/png',
  transparent: true,
  version: '1.3.0',
  cql_filter : 'stat_levl_ = ' + 1 + '',
  srs: 'EPSG:4326',
})
const nuts2Layer = L.tileLayer.wms(geoserverUrl, {
  layers: 'hotmaps:' + action,
  format: 'image/png',
  transparent: true,
  version: '1.3.0',
  cql_filter : 'stat_levl_ = ' + 2 + '',
  srs: 'EPSG:4326',
})
const nuts3Layer = L.tileLayer.wms(geoserverUrl, {
  layers: 'hotmaps:' + action,
  format: 'image/png',
  transparent: true,
  version: '1.3.0',
  cql_filter : 'stat_levl_ = ' + 3 + '',
  srs: 'EPSG:4326',
})

const lau1Layer = L.tileLayer.wms(geoserverUrl, {
  layers: 'hotmaps:' + action + 1 ,
  format: 'image/png',
  transparent: true,
  version: '1.3.0',
  cql_filter : 'stat_levl_ = ' + 1 + '',
  srs: 'EPSG:4326',
})
//var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution}),
//  streets   = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution});




export const SelectionScale = {
  'NUTS 0': nuts0Layer,
  'NUTS 1': nuts1Layer,
  'NUTS 2': nuts2Layer,
  'NUTS 3': nuts3Layer,
  'Hectare': hectareLayer,
}

