# mongoose-helpers-setup-db
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![NSP Status][nsp-image]][nsp-url]

returns a function that will return a mongoose connection promise when called.

## table of contents
* [notes](#notes)
    * [logging](#logging)
    * [errors](#errors)
* [installation](#installation)
* [api](#api)
* [usage](#usage)
    * [basic](#basic)
* [license](#license)

## notes
### logging
* error events will be logged to the console
* additional logging - if `options.connection.debug` is set to `true` the following events will also be logged to the console
    * connected
    * connecting
    * disconnected
    * open
    * reconnected

### errors
* if an error occurs, the error will be attached to the db object as `db.error`.

## installation
```javascript
npm install mongoose-helpers-setup-db
```

## api
```javascript
/**
 * @param {Object} user_options
 * @param {Object} user_options.connection
 * @param {Array} user_options.schemas
 *
 * @returns {Function}
 */
function setupDb( user_options )
```

### event types
* connected
* connecting
* disconnected
* error
* open
* reconnected

## usage
### basic
```javascript
var express = require( 'express' )
var connection = require( 'mongoose-helpers-connection' )
var mongoose = require( 'mongoose' )
var setupDb = require( 'mongoose-helpers-setup-db' )
var app = express()

var User = new mongoose.Schema(
  {
    displayName: String,
    email: String,
    id: String,
    photo: String
  }
)

var options = {
  connection: {
    debug: config.debug,
    uri: {
      database: config.database,
      password: config.password,
      username: config.username
    }
  },
  schemas: [
    {
      'User': User
    }
  ]
}

setupDb( options )
  .then(
    function ( db ) {
      app.db = db
    }
  )
  .catch(
    function ( err ) {
      app.db = {
        error: err
      }
    }
  )

// elsewhere in your app
app.db.model( 'User' )
  .findOne(
    { 'id': id },
    function( err, existing_user ) {}
  )
```

## license
[MIT License][mit-license]

[mit-license]: https://raw.githubusercontent.com/mongoose-helpers/setup-db/master/license.txt
[npm-image]: https://img.shields.io/npm/v/mongoose-helpers-setup-db.svg
[npm-url]: https://www.npmjs.com/package/mongoose-helpers-setup-db
[nsp-image]: https://nodesecurity.io/orgs/mongoose-helpers/projects/88e95827-cda7-4f30-9805-4284fa5c4095/badge
[nsp-url]: https://nodesecurity.io/orgs/mongoose-helpers/projects/88e95827-cda7-4f30-9805-4284fa5c4095
[travis-image]: https://travis-ci.org/mongoose-helpers/setup-db.svg?branch=master
[travis-url]: https://travis-ci.org/mongoose-helpers/setup-db
