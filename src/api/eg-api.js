import axios from 'axios'

const HTTP = axios.create({
  // withCredentials: true,
  baseURL: `/api/v1/`
})

export default {
  async get (url) {
    return HTTP.get(url)
      .then(r => Promise.resolve(r))
      .catch(e => Promise.reject(e))
  },
  async post (url, request) {
    return HTTP.post(url, request)
      .then(r => Promise.resolve(r))
      .catch(e => Promise.reject(e))
  },
  async put (url, request) {
    return HTTP.put(url, request)
      .then(r => Promise.resolve(r))
      .catch(e => Promise.reject(e))
  },
  async delete (url) {
    return HTTP.delete(url)
      .then(r => Promise.resolve(r))
      .catch(e => Promise.reject(e))
  }
}
