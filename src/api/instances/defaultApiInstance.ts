import axios, { AxiosInstance } from 'axios'
import { ElNotification } from 'element-plus'
import router from 'src/router/'

function defaultApiInstanceCreator (baseUrl?: string): AxiosInstance {
  const apiUrl = baseUrl || import.meta.env.VITE_APP_MAIN_API + '/api'

  const apiInstance = axios.create({
    baseURL: apiUrl
  })

  apiInstance.interceptors.request.use(async (config) => {
    return config
  }, undefined)


  apiInstance.interceptors.response.use(undefined, (err) => {
    if (err.response.status === 404) {
      router.push({ name: 'not_found' })
    }

    ElNotification({
      message: err.response.data.message || 'Непредвиденная ошибка, попробуйте позже',
      type: 'error',
      position: 'top-right'
    })
    return Promise.reject(err)
  })

  return apiInstance
}

const defaultApiInstance = defaultApiInstanceCreator()

export { defaultApiInstanceCreator, defaultApiInstance }
