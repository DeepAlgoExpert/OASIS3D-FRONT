import axios from "axios";

export default axios.create({
  //baseURL: "https://100.26.246.56",
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});