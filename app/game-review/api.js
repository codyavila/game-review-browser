
const store = require('../store.js')
const config = require('../config')

// Create Game Review
const gameCreate = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/game',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

// Index Game Review
const gameIndex = function (data) {
  console.log(store)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/game',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Show One Game Review
const gameShow = function (id) {
//  console.log(store)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/game/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Delete Game Review
const gameDelete = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/game/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Update Game Review
const gameUpdate = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/game/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}
module.exports = {
  gameCreate,
  gameIndex,
  gameShow,
  gameDelete,
  gameUpdate
}
