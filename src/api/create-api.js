import qs from 'qs'
import axios from 'axios'

/**
 * 
 * @param {import('axios').AxiosRequestConfig} options 
 */
export function createAPI (config = {}) {
  let api = axios.create(config)

  api.interceptors.request.use(requestHandler)

  api.interceptors.response.use(responseHandler, errorHandler)

  return api
}

/**
 * @param {import('axios').AxiosRequestConfig} config 
 */
function requestHandler (config) {
  const { method, headers, data } = config
  if (method.toUpperCase() === 'GET') {
    config.params = Object.assign(
      {},
      config.params,
      { timestamp: Date.now() }
    )
  }
  if (method.toUpperCase() === 'POST' && ('Content-Type' in headers)) {
    const contentType = headers['Content-Type']
    if (contentType === 'application/x-www-form-urlencoded' && (typeof data === 'object')) {
      config.data = qs.stringify(data)
    }
  }
  console.log(`发送请求，配置数据：`, config)
  return config
}

/**
 * @param {import('axios').AxiosResponse} response 
 */
function responseHandler (response) {
  console.log(`请求数据成功，响应数据：`, response)
  return response.data
}

/**
 * @param {import('axios').AxiosError} error 
 */
function errorHandler (error) {
  console.log(`请求数据失败，错误提示：`, error)
  return Promise.reject(error)
}
