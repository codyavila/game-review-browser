// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game-review/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth events
  $('.logged-in').hide()
  $('.sign-out').hide()
  $('#change-password-form').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  // game review events
  $('.all-game-review').hide()
  $('#create-game-review-form').on('submit', gameEvents.onGameCreate)
  $('#game-index').on('click', gameEvents.onGameIndex)
  $('#show-game-review-form').on('submit', gameEvents.onGameShow)
  $('#delete-game-review-form').on('submit', gameEvents.onGameDelete)
  $('#update-game-review-form').on('submit', gameEvents.onGameUpdate)
  $('#game-reviews').on(
    'click',
    '.game-destroy-dynamic',
    gameEvents.onDynamicDestroyGame
  )
  $('#game-reviews').on(
    'submit',
    '.game-update-dynamic',
    gameEvents.onDynamicUpdateGame
  )
})
