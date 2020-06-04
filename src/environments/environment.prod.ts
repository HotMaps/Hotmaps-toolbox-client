export const environment = {
  production: false,
  apiUrl: window["env"]["apiUrl"] || "http://localhost:5000/api",
  geoserverUrl: window["env"]["geoserverUrl"] || "https://geoserver.localhost",
  wikiUrl: window["env"]["wikiUrl"] || "https://wiki.hotmaps.eu",
  debug: window["env"]["debug"] || false
};
