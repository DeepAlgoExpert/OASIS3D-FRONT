import axios from "axios";

export default axios.create({
  baseURL: "https://3.89.143.205",
  headers: {
    "Content-type": "application/json"
  }
});