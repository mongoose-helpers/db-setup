'use strict'

/**
 * module dependencies
 */
var mongoose = require( 'mongoose' )

var User = new mongoose.Schema(
  {
    displayName: String,
    email: String,
    id: String,
    photo: String
  }
)

module.exports = User
