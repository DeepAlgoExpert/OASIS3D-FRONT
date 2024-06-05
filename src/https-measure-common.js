import axios from "axios";

export default axios.create({
  baseURL: "https://34.205.72.45",
  headers: {
    "Content-type": "application/json"
  }
});