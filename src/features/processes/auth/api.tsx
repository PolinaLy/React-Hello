import axios from "axios";

export function sendLoginData(userData) {
  return axios.post(`${process.env.REACT_APP_BFF_URL}/logindata`, userData);
};