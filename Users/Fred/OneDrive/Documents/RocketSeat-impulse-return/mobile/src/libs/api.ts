import axios from "axios";

const IP = "000.000.0.00";

export const api = axios.create({
  baseURL: `http://${IP}:3333`
})