'use strict'

// const store = require('../store.js')

const onGameCreateSuccess = function () {
  $('#game-display').html('<p>User Created Game Review Successfully</p>')

  $('form').trigger('reset')
}

const onGameCreateFailure = function () {
  $('#game-display').html('<p>Error while Creating Game Review</p>')

  $('form').trigger('reset')
}

module.exports = {
  onGameCreateSuccess,
  onGameCreateFailure
}
