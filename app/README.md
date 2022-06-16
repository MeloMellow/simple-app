# Usage

Before proceeding, it is necessary to do some small steps to make the application run.

## Install npm dependencies

Run `npm install` to install all dependencies.
If there is any conflict when installing packages use `npm install --force`

## Setting environment variables

Create a file called `.env` where you will have the HOST and the PORT where you will be running the Api.
The variables that need to be set in this file are API_HOST and API_PORT, for example:
```npm
API_HOST=http://localhost
API_PORT=3434
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
