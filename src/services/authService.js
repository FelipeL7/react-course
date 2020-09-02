import httpService from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/auth`;

export function login(email, password) {
  return httpService.post(apiEndpoint, {
    email,
    password,
  });
}
