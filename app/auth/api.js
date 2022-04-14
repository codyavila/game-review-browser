
const store = require('../store.js')
const config = require('../config')

const signUp = function (data) {
	// console.log(store)
	return $.ajax({
		method: 'POST',
		url: config.apiUrl + '/sign-up',
		data
	})
}

const signIn = function (data) {
	return $.ajax({
		method: 'POST',
		url: config.apiUrl + '/sign-in',
		data
	})
}

const signOut = function () {
	return $.ajax({
		method: 'DELETE',
		url: config.apiUrl + '/sign-out',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

module.exports = {
	signUp,
	signIn,
	signOut,
}
