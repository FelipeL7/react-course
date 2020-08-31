import httpService from "./httpService";

export async function getGenres() {
  return httpService.get("http://localhost:3900/api/genres");
}
