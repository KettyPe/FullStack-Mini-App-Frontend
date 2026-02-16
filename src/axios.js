import axios from "axios";

const instance = axios.create({
     baseUrl: 'http://localhost:444/'
})

// axios.get('http://localhost:444/posts') => axios.get('/posts')

export default instance