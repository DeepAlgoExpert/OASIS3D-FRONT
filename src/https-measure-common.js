import axios from "axios";

export default axios.create({
  baseURL: "https://54.175.225.240",
  headers: {
    "Content-type": "application/json"
  }
});