import axios from "axios";

//ROOT API SERVICE
export const apiClient = axios.create({
  baseURL: "https://rms-ff.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
