(function(window) {
    window["env"] = window["env"] || {};

    // Environment variables
    window["env"]["apiUrl"] = "${API_URL}";
    window["env"]["geoserverUrl"] = "${GEOSERVER_URL}";
    window["env"]["wikiUrl"] = "${WIKI_URL}";
    window["env"]["debug"] = false;
})(this);