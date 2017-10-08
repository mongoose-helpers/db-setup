/* eslint new-cap: off */

'use strict'

/**
 * module dependencies
 */
var express = require( 'express' )
var dbRequestHandler = require( 'http-server-request-handlers-db' )
var router = express.Router()

/**
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function addRoutes( app ) {
  router.get( '/', dbRequestHandler )
  app.use( router )
  app.use( express.static( 'public' ) )
}

module.exports = addRoutes
