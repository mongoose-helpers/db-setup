'use strict'

var notFound = require( 'not-found' )
var errorLogger = require( 'error-logger' )

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
