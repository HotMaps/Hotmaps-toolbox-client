# HotmapsToolboxClient

![Build Status](https://vlheasilab.hevs.ch/buildStatus/icon?job=Hotmaps-toolbox-client%2Fdevelop)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

#### Download the git repository
First, you need to clone the repository on your machine

```bash
git clone https://github.com/HotMaps/Hotmaps-toolbox-client.git
```

#### Install all the necessary packages
Go inside your folder and run the following command:

```bash
npm install
```

*If any, solve all your installation problems before going any further*

As you will run the server locally, you will need to change some constants in *src/app/shared/data.service.ts*:

```bash
export const apiUrl = localApiUrl;
```

#### Run the server
```bash
ng serve --poll 1000
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Add Documentation

1. Run `npm install --save-dev @compodoc/compodoc@1.0.3` to install the version 1.0.3 of [Compodoc](https://compodoc.github.io/website/).
2. Define a script task for it in your package.json :
	"scripts": {
  		"compodoc": "./node_modules/.bin/compodoc -p tsconfig.json"
	}
3. Run `npm run compodoc` to generate the documentation files.
4. Run `./node_modules/.bin/compodoc -s` to serve the generated documentation (default http://localhost:8080/)
