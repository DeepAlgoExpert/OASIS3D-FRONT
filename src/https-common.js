import axios from "axios";

export default axios.create({
  baseURL: "https://54.152.174.128",
  //baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});