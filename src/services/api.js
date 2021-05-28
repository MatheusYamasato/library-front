import axios from 'axios'
const api = axios.create({
    baseURL: 'https://library-stone.herokuapp.com'
})
export default api;