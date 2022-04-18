'use strict'
// const { gameIndex } = require('./api')

// const store = require('../store.js')

const onGameCreateSuccess = function () {
  $('#game-display').html('<p>User Created Game Review Successfully</p>')

  $('form').trigger('reset')
}

const onGameCreateFailure = function () {
  $('#game-display').html('<p>Error while Creating Game Review</p>')
}

const onIndexSuccess = function (response) {
  const games = response.game

  let gameHtml = ''

  games.forEach(game => {
    gameHtml += `
        <h4>Title: ${game.title}</h4>
        <p>Description: ${game.description}</p>
        <p>ID: ${game._id}</p>
        <p>Rating: ${game.rating}</p>
        <form class="game-update-dynamic" data-id=${game._id}>
        <input type="text" name="game[title]" placeholder="Game Title Here" required>
        <input type="text" name="game[description]" placeholder="Game Description Here" required>
        <input type="text" name="game[rating]" placeholder="Number Rating Here">
        <button type="submit">Update Review</button>
        </form>
      <button class='game-destroy-dynamic' data-id=${game._id}>Delete Review</button>
      <br>
    `
  })
  $('#game-reviews').html(gameHtml)

  $('#game-display').html('<p>Success</p>')
  $('form').trigger('reset')

  console.log(response)
}

const onIndexFailure = function () {
  $('#game-display').html('<p>Failure</p>')
}

const onGameShowSuccess = function (response) {

  $('#game-reviews').html(`
        <h4>Title: ${response.game.title}</h4>
        <p>Description: ${response.game.description}</p>
        <p>ID: ${response.game._id}</p>
        <p>Rating: ${response.game.rating}</p>
        <form class="game-update-dynamic" data-id=${response.game._id}>
        <input type="text" name="game[title]" placeholder="Game Title Here" required>
        <input type="text" name="game[description]" placeholder="Game Description Here" required>
        <input type="text" name="game[rating]" placeholder="Number Rating Here">
        <button type="submit">Update Review</button>
        </form>
      <button class='game-destroy-dynamic' data-id=${response.game._id}>Delete Review</button>
      <br>`)

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
