import axios from "axios";

export default axios.create({
  baseURL: "https://54.175.70.202",
  headers: {
    "Content-type": "application/json"
  }
});