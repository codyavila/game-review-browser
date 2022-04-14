'use strict'

// const store = require('../store.js')

const onGameCreateSuccess = function () {
  $('#game-display').html('<p>User Created Game Review Successfully</p>')

  $('form').trigger('reset')
}

const onGameCreateFailure = function () {
  $('#game-display').html('<p>Error while Creating Game Review</p>')
}

const onIndexSuccess = function (response) {
  $('#game-display').html('<p>Success</p>')
  $('form').trigger('reset')

  console.log(response)
}

const onIndexFailure = function () {
  $('#game-display').html('<p>Failure</p>')
}

const onGameShowSuccess = function (response) {
  $('#game-display').html('<p>Success</p>')
  $('form').trigger('reset')

  console.log(response)
}

const onGameShowFailure = function () {
  $('#game-display').html('<p>Failure</p>')
}

const onGameDeleteSuccess = function () {
  $('#game-display').html('<p>Success</p>')
  $('form').trigger('reset')
}

const onGameDeleteFailure = function () {
  $('#game-display').html('<p>Failure</p>')
}

module.exports = {
  onGameCreateSuccess,
  onGameCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onGameShowSuccess,
  onGameShowFailure,
  onGameDeleteSuccess,
  onGameDeleteFailure
}
