'use strict'

/**
 * module dependencies
 */
var express = require( 'express' )
var errorHandlers = require( './middleware/error-handlers' )
var routes = require( './routes' )
var setupDb = require( './helpers/setup-db' )

var app = express()

setupDb( app )
routes( app )

/**
 * must come after all other middleware
 */
errorHandlers( app )

module.exports = app
