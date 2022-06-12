import sendRequest from "./send-request";

const BASE_URL = "/api/watchlists";

export function addToWatchlist(userId, bookId) {
  return sendRequest(`${BASE_URL}/add`, "POST", { userId, bookId });
}

export function getBooks(userId) {
  return sendRequest(`${BASE_URL}/${userId}`);
}
