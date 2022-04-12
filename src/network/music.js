import axios from 'axios'

export function getMusic (url, params) {
  const instance = axios.create({
    baseURL: '/wagnyiAPI',
    timeout: 5000,
    withCredentials: true
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  if (params) {
    params = {
      params: params
    }
    return instance.get(url, params)
  } else {
    return instance.get(url)
  }
}
