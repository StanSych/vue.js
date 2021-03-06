import axios from 'axios'
//import NPgrogress from 'nprogress'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// apiClient.interceptors.request.use(config => {
//   NPgrogress.start()
//   return config
// })

// apiClient.interceptors.response.use(config => {
//   NPgrogress.done()
//   return config
// })

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
