//// Begin Code Snippet ////
import axios from "axios";

const BASE_URL = "http://localhost:8000";
export default BASE_URL;

export const getImageUrl = (path) => `${BASE_URL}/${path}`;

export const API = axios.create({
  baseURL: "http://localhost:8000", //backend API URL
});

export const HomeURL = "http://localhost:5173";
