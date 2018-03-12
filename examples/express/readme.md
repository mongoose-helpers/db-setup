# mongoose-helpers-setup-db-express-example

## installation
```javascript
npm install
```

## usage
### config
alter the following config files as appropriate:

* `config/app/config.js`
* `config/db/config.json`

### start the application
```javascript
npm start
```

## browse
1. with the mongodb server referenced in the db config _down_:
    * `NODE_EVN` set to `development`
    * start the application
    * browse to https://localhost:3001/
        * you should see an error message describing the connection error and an error stack trace
    * `NODE_EVN` set to `test`
    * start the application
    * browse to https://localhost:3001/
        * you should see a “user friendly’ error message and _no_ error stack trace
1. leave the application started in step 2
    * start up the mongodb server referenced in the db config
    * browse to https://localhost:3001/
        * you should see a the `public/index.html` page

## summary
1. `app.js` calls `helpers/setup-db`, which makes use of this module, `mongoose-helpers-setup-db`, to do the following:
    1. adds the `setupDb` function to `app` using the db config and model provided.
    1. calls the `app.setupDb` to initialize the db connection.
1. the index route `/` makes use of the `http-server-request-handlers-db` module in order to check for an `app.db.error`.
    1. if an `app.db.error` exists, it uses the `app.setupDb`, once, to try and re-initialize the db connection.