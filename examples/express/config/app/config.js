/* eslint no-process-env: off */

'use strict'

var config = {
  ip_address: process.env.NODE_IP_ADDRESS || '',
  morgan_debug: false,
  port: 3001,
  ssl: {
    crt: process.env.SSL_CRT.toString(),
    key: process.env.SSL_KEY.toString()
  }
}

module.exports = config
