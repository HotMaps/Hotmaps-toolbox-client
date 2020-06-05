(function(window) {
    window["env"] = window["env"] || {};

    // Environment variables
    window["env"]["apiUrl"] = "http://localhost:5000/api";
    window["env"]["geoserverUrl"] = "https://geoserver.hotmapsdev.hevs.ch/geoserver/hotmaps/wms";
    window["env"]["wikiUrl"] = "https://wiki.hotmaps.eu";
    window["env"]["debug"] = false;
})(this);
