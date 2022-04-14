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

module.exports = {
  onGameCreate,
  onGameIndex,
  onGameShow,
  onGameDelete
}
