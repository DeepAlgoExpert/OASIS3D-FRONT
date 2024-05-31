import axios from "axios";

export default axios.create({
  baseURL: "https://54.152.174.128",
  headers: {
    "Content-type": "application/json"
  }
});