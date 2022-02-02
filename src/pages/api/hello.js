import axios from "axios";
import { parseCookies } from "nookies";
export const api = axios.create({
  baseURL: `http://localhost:3333/`,
});

api.interceptors.request.use(async (config) => {
  const { ["quizz.user"]: user } = parseCookies();
  try {
    config.headers.Authorization = `Bearer ${user}`;
    return config;
  } catch (error) {
    console.error(error);
  }
});
