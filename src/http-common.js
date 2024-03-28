import axios from "axios";

export default axios.create({
  baseURL: "http://100.26.246.56",
  headers: {
    "Content-type": "application/json"
  }
});