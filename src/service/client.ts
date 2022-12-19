import axios from "axios";
import { API } from "../constant/api";
const client = axios.create({
  baseURL: API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
export default client;
