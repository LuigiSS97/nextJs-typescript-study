import axios from "axios";


const BASE_API = process.env.REACT_APP_BASE_API_URL

export const api = axios.create({
    baseURL: BASE_API
})