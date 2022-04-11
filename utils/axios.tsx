import axios, { AxiosRequestConfig } from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 10000000,
});

request.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // @ts-ignore
    config.headers?.["Authorization"] = `Bearer ${localStorage.getItem(
      "_TuVbwpW"
    )}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
