import axios from 'axios'

export const getApi = async (endpoint: string) => {
  const { status, data } = await axios.get(endpoint)
  return { status, data }
}

const axiosRetry = (axiosInstance: any, options: { retries: number; retryDelay: number }) => {
  const { retries, retryDelay } = options
  return axiosInstance
    .then((response: any) => {
      if (response.status >= 200 && response.status < 300) {
        return response
      }
      throw response
    })
    .catch((error: any) => {
      if (retries <= 0) {
        throw error
      }

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(axiosRetry(axiosInstance, { ...options, retries: retries - 1 }))
        }, retryDelay)
      })
    })
}

export const axiosGet = async (url: string) => await axiosRetry(axios.get(url), { retries: 5, retryDelay: 1000 })

export const isError = (endpoint: string, status: number) => {
  switch (status) {
    case 200:
      return false

    default:
      console.log(`Error fetching ${endpoint} - status ${status}`)
      return true
  }
}

export default axiosGet
