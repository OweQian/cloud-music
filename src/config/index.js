import axios from 'axios';

export const baseURL = 'http://localhost:4000'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.response.use(
  res => res.data,
  error => console.log('网络错误')
)

export default axiosInstance;