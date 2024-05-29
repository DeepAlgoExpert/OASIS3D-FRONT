import axios from "axios";

export default axios.create({
  baseURL: "https://34.238.50.101",
  headers: {
    "Content-type": "application/json"
  }
});