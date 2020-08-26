if (!window["env"]) {
  window["env"] = window["env"] || {};

  // Default environment variables (for tests)
  window["env"]["apiUrl"] = "http://localhost:5000/api";
  window["env"]["geoserverUrl"] = "https://geoserver.hotmapsdev.hevs.ch/geoserver/hotmaps/wms";
  window["env"]["wikiUrl"] = "https://wiki.hotmaps.eu";
  window["env"]["debug"] = false;
}


export const environment = {
  production: false,
  apiUrl: window["env"]["apiUrl"] || "http://localhost:5000/api",
  geoserverUrl: window["env"]["geoserverUrl"] || "https://geoserver.localhost",
  wikiUrl: window["env"]["wikiUrl"] || "https://wiki.hotmaps.eu",
  debug: window["env"]["debug"] || false
};
