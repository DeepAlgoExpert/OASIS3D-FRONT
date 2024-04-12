import axios from "axios";

export default axios.create({
  baseURL: "https://3.83.96.213",
  headers: {
    "Content-type": "application/json"
  }
});