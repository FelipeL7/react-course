import httpService from "./httpService";
import config from "../config.json";

export async function getGenres() {
  return httpService.get(`${config.apiUrl}/genres`);
}
