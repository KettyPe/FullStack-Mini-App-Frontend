import axios from "axios";

const instance = axios.create({
     baseURL: 'http://localhost:444'
})

instance.interceptors.request.use((config) => {
     config.headers.Autorization = window.localStorage.getItem('token')

     return config;
})

export default instance