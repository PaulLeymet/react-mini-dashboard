import axios from 'axios'

export const getApi = async (endpoint: string) => {
  const { status, data } = await axios.get(endpoint)
  return { status, data }
}
