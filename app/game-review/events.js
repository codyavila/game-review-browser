'use strict'
const gameUi = require('./ui.js')
const gameApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onGameCreate = function (event) {
  event.preventDefault()
  // console.log('Im in event!')
  // getting data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  gameApi.gameCreate(data)
    .then(() => gameUi.onGameCreateSuccess())
    .catch(() => gameUi.onGameCreateFailure())
}

const onGameIndex = function (event) {
  event.preventDefault()
  gameApi
    .gameIndex()
    .then(gameUi.onIndexSuccess)
    .catch(gameUi.onIndexFailure)
}

const onGameShow = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  gameApi.gameShow(data.game.id)
    .then(gameUi.onGameShowSuccess)
    .catch(gameUi.onGameShowFailure)
}

const onGameDelete = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  gameApi.gameDelete(data.game.id)
    .then(gameUi.onGameDeleteSuccess)
    .catch(gameUi.onGameDeleteFailure)
}

const onGameUpdate = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  const id = formData.game.id

  gameApi.gameUpdate(id, formData)
    .then(gameUi.onGameUpdateSuccess)
    .catch(gameUi.onGameUpdateFailure)
}

// Handle clicking the dynamic destroy buttons
const onDynamicDestroyGame = function (event) {
  // event.target is the delete button that was clicked on
  const deleteButton = event.target

  // Extract the id from the delete button that was clicked on's data-id attribute
  const gameId = $(deleteButton).data('id')

  // make API call for deleting one book with the data we grabbed from the form
  gameApi.gameDelete(gameId)

    // if the API call is successful then invoke the onDetroySuccess function
    .then(gameUi.onDestroySuccess)

    // if the API call fails then run our onError function
    .catch(gameUi.onError)
}

// Handle submitting the dynamic update forms
const onDynamicUpdateGame = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // event.target is the update form that was submitted
  const updateForm = event.target

  // Extract the id from the update form that was submitted's data-id attribute
  const gameId = $(updateForm).data('id')

  // create a javascript object from the form where the user entered the book
  // information
  const formData = getFormFields(event.target)

  // make API call to update one book with the data we grabbed from the form
  gameApi.gameUpdate(gameId, formData)

    // if the API call is successful then invoke the onUpdateSuccess function
    .then(gameUi.onUpdateSuccess)

    // if the API call fails then run our onError function
    .catch(gameUi.onError)
}

module.exports = {
  onGameCreate,
  onGameIndex,
  onGameShow,
  onGameDelete,
  onGameUpdate,
  onDynamicDestroyGame,
  onDynamicUpdateGame
}
