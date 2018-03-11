'use strict'

var notFound = require( 'http-server-request-handlers-not-found' )
var errorLogger = require( 'http-server-request-handlers-error-logger' )

/**
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function middleware( app ) {
  app.use( notFound )
  app.use( errorLogger )
}

module.exports = middleware
