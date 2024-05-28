import axios from "axios";

export default axios.create({
  baseURL: "https://54.145.161.150",
  headers: {
    "Content-type": "application/json"
  }
});