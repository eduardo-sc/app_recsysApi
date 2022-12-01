import axios from "axios";

const api = axios.create({
  baseURL: "http://dev-servidor:8080/",
});
export { api };
