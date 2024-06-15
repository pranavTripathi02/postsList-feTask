import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
