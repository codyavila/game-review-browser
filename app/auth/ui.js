'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('.sign-out').show()
  $('#auth-display').html('<p>User signed in successfully</p>')

  // reset all forms
  $('form').trigger('reset')
  $('.all-game-review').show()
  $('#change-password-form').show()

  store.user = response.user

  // console.log(response)
  // store data from the response in my store object
  // store.user = response.user

  // reset single form
  $('#sign-in-form').trigger('reset')
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')
  $('.all-game-review').hide()
  $('.sign-out').hide()
  $('#change-password-form').hide()
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpFailure,
  onSignUpSuccess,
  onSignOutSuccess,
  onSignOutFailure
}
