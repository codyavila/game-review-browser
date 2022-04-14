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

module.exports = {
  onGameCreate
}
