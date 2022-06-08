import sendRequest from './send-request';

const BASE_URL = '/api/books';

export function getBooksByGenre() {
  return sendRequest(BASE_URL)
}

export function getBookById(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}