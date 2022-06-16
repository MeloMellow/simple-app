# Usage

Before proceeding, it is necessary to do some small steps to make the application run.
#### Heads up! all steps reported in this document must be done in this folder!

## 1. Install npm dependencies

Run `npm install` to install all dependencies.
If there is any conflict when installing packages use `npm install --force`

## 2. Setting environment variables

Create a file called `.env` where you will have the HOST and the PORT where you will be running the Api.
The variables that need to be set in this file are API_HOST and API_PORT, for example:
```npm
API_HOST=http://localhost
API_PORT=3434
```

## 3. Running in dev mode

Run `npm start` to start the project in development mode. The project will be running at http://localhost:4200. If you want to change the port or see more advanced configuration, you can consult Angular's own documentation and modify the packge.json as you need.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
