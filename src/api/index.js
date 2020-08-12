import axiosConfig from './config'
import { createAPI } from './create-api'
import { JUHE_APP_KEY, API_BASE_URL } from '../util/secrets'

/**
 * @type {import("axios").AxiosRequestConfig}
 */
const replaceConfig = {
  baseURL: API_BASE_URL
}

/**
 * @type {import('axios').AxiosInstance}
 */
const api = createAPI(Object.assign({}, axiosConfig, replaceConfig))

function fetch (child, params = {}) {
  console.log(`请求数据路径： ${child}`)
  return new Promise(function onFetchPromise (resolve, reject) {
    api.get(child, {
      params
    }).then(function onFetchResult (result) {
      console.log(`获取数据成功，路径： ${child}, 数据: `, result)
      resolve(result)
    }).catch(reject)
  })
}

function fetchByPost (child, data = {}) {
  console.log(`fetching ${child} by post method`)
  return new Promise(function onFetchPromise (resolve, reject) {
    api.post(child, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function onFetchResult (result) {
      console.log(`fetched ${child} by post method, result: `, result)
      resolve(result)
    }).catch(reject)
  })
}

/**
 * @param {{ consName: String, type: String }} data
 */
export function fetchConstellationData (data = {}) {
  data = Object.assign({}, data, { key: JUHE_APP_KEY })
  return fetch(`/constellations`, data)
}
