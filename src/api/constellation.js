import axios from 'axios'
const client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:8848'
})

export const constellationApi = {
  fetchConstellationData({consName, type}) {
    return client.get('/constellations', {
      params: {
        consName,
        type
      }
    }).then(response => response.data)
  },
};