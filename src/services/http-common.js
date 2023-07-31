import axios from "axios";
import { baseURL } from "../const/const";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
