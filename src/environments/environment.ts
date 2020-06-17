// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: window["env"]["apiUrl"] || "http://localhost:5000/api",
  geoserverUrl: window["env"]["geoserverUrl"] || "https://geoserver.localhost",
  wikiUrl: window["env"]["wikiUrl"] || "https://wiki.hotmaps.eu",
  debug: window["env"]["debug"] || true
};

