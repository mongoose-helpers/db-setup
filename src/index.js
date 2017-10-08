'use strict';

/**
 * module dependencies
 */
var connection = require( 'mongoose-helpers-connection' )

/**
 * @param {Object} user_options
 * @param {Object} user_options.connection
 * @param {Array} user_options.schemas
 *
 * @returns {setupDb}
 */
function setupDbHelper( user_options ) {
  var options = user_options || {}

  /**
   * @returns {Promise<MongooseThenable>}
   */
  function setupDb() {
    return connection( options.connection )
      .then(
        /**
         * @param {Object} db
         * @param {Function} db.model
         *
         * @throws {Error}
         * @returns {*}
         */
        function ( db ) {
          try {
            if ( Array.isArray( options.schemas ) ) {
              options.schemas.forEach(
                function ( schema ) {
                  var keys = Object.keys( schema );

                  db.model( keys[ 0 ], schema[ keys[ 0 ] ] );
                }
              );
            }

            return db;
          } catch ( err ) {
            throw err;
          }
        }
      )
      .catch(
        function ( err ) {
          throw err
        }
      )
  }

  return setupDb
}

module.exports = setupDbHelper
