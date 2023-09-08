import axios from "axios";

export const BACKEND_API = 'http://localhost:5000/'
const api = axios.create({
    withCredentials: true,
    baseURL: BACKEND_API
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = 'Bearer ' + token
    return config
})

export default api