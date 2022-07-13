/**
 * 此模块用于封装请求模块
 */
import axios from 'axios'
export default axios.create({
  baseURL: 'http://liufusong.top:8080/',
  timeout: 10000
})
