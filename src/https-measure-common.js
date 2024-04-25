import axios from "axios";

export default axios.create({
  baseURL: "https://52.23.228.190",
  headers: {
    "Content-type": "application/json"
  }
});