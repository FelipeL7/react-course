import httpService from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/users`;

export function register(user) {
  return httpService.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
