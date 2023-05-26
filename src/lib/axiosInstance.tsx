import axios from "axios";
const token = localStorage.getItem("tokenStr");
//ROOT API SERVICE
//Authentication routes
export const apiClient = axios.create({
  baseURL: "https://rms-ff.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});

//Other Routes
export const apiClientT = axios.create({
  baseURL: "https://pos-ff.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
