import axios from "axios";

export default axios.create({
  baseURL: "https://100.26.160.4",
  //baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});