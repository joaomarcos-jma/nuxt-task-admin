export default function ({ $axios, $config: { apiSecret }, store, redirect }) {
  $axios.onError((error) => {
    if (error.response) {
      // console.error(error)
    }
  })

  $axios.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${apiSecret}`
    return config
  })

  $axios.interceptors.response.use((response) => {
    return response
  })
}
