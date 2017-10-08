'use strict'

/**
 * module dependencies
 */
var config = require( '../config/db' )
var setupMongoose = require( 'mongoose-helpers-setup-db' )
var User = require( '../models/user' )

/**
 * @param {Function} app
 * @param {setupDb} app.setupDb
 *
 * @returns {undefined}
 */
function setupDb( app ) {
  app.setupDb = setupMongoose(
    {
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
  )

  app.setupDb()
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
}

module.exports = setupDb
