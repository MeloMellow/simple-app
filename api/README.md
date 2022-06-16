# Usage

Before proceeding, it is necessary to do some small steps to make the application run.
#### Heads up! all steps reported in this document must be done in this folder!

## 1. Install npm dependencies

Run `npm install` to install all dependencies.

## 2. Setting the database

You will need a running Mysql database.

## 3. Setting environment variables

Create a file called `.env` where you will have the basic settings of the Api and the Mysql database you have running. 
Below are the variables that need to be set in that file:
```npm
PORT=(Your api port)
JWT_SECRET=(A secret)
PORT_DB=(You mysql db port)
HOST_DB=(You mysql db host)
USER_DB=(You mysql db username)
PASSWORD_DB=(You mysql db password)
DB_NAME=(You mysql db name)
```

## 4. Running in dev mode

Run `npm start` to start the project in development mode. The project will be running at http://localhost:4200. If you want to change the port or see more advanced configuration, you can consult Angular's own documentation and modify the packge.json as you need.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
