/* eslint-disable */
'use strict'
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=false')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    // window.location.reload()
  }
})
