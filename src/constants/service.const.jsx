export const url =
	process.env.NODE_ENV !== 'production'
		// ? 'https://note-me-app.herokuapp.com'
		? 'http://localhost:5000'
		: 'someurl'
		// : 'https://note-me-app.herokuapp.com/'

//LocalStorage
export const LOCALSTORAGE_TOKEN_NAME = 'authentication'