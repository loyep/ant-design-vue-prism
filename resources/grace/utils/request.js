import axios from 'axios'
import store from '@/store'
import { getToken, removeToken } from './auth'
import { message } from 'ant-design-vue'

// 创建axios实例
const service = axios.create({
  baseURL: 'api', // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  request => {
    const token = 'Bearer ' + getToken()
    if (token) {
      request.headers.common['Authorization'] = token
    }
    return request
  },
  error => {
    return Promise.reject(error)
  })

service.interceptors.response.use(
  response => {
    const token = response.headers.authorization
    if (token) {
      store.dispatch('auth/RefreshToken', token)
    }
    return response
  },
  error => {
    switch (error.response.status) {
      case 401: {
        if (store.getters['auth/check'] === true) {
          removeToken()
        }
        break
      }
      case 400:
        return message.error(error.response.data.error)
      default: {
        error.showMessages = (form) => {
          const errors = error.response.data.errors
          const values = form.getFieldsValue()
          const fields = {}
          for (var e in errors) {
            fields[e] = {
              value: values[e],
              errors: errors[e].map((msg) => {
                return new Error(msg)
              })
            }
          }
          form.setFields(fields)
        }
        break
      }
    }
    return Promise.reject(error)
  })

export default service
