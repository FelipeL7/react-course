import httpService from "./httpService";
const apiEndpoint = "http://localhost:3900/api/movies";

export function getMovies() {
  return httpService.get(apiEndpoint);
}

export function deleteMovie(movieId) {
  return httpService.delete(`${apiEndpoint}/${movieId}`);
}
