// axios setting for all the request in the app

import axios from "axios";
import { baseURL } from "../const/apiKey";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
