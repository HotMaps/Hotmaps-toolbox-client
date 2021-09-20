/**
 * Created by lesly on 14.06.17.
 */
import * as L from 'leaflet';

export const basemap: any = {
  OSM: L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
    ' Tiles courtesy of <a href="https://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
  }),
  Esri: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC,' +
    ' USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,'
  }),
  // Improvement of coding style : (with codelyzer)
  // Exceeds maximum line length of 140
  Hybrid: L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC,' +
    ' USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan,'
  }),
  CartoDB: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy;' +
    ' <a href="https://cartodb.com/attributions">CartoDB</a>'
  }),

};


