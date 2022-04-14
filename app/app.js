// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game-review/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('.sign-out').on('click', authEvents.onSignOut)
  // game review events
  $('#create-game-review-form').on('submit', gameEvents.onGameCreate)
})
