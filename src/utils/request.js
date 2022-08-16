// 基于axios封装网络请求
import axios from 'axios'
const service = axios.create({
  baseURL: '/',
  timeout: 20000 // 超时时间20秒
})

export default ({ url, method = 'GET', params = {}, data = {}, headers }) => {
  return service({
    url,
    method,
    params,
    data,
    headers
  })
}
