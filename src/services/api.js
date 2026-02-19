import axios from 'axios'

const api = axios.create({
  baseURL: 'https://conceito-node-backend.onrender.com'
})



export default api