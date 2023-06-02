export default function ({ $axios, $config: { apiSecret }, store, redirect }) {
  $axios.onError((error) => {
    if (error.response) {
      // console.error(error)
    }
  })

  $axios.interceptors.request.use((config) => {
    store.dispatch('config/changeLoading', true)
    config.headers.authorization = `Bearer ${apiSecret}`
    return config
  })

  $axios.interceptors.response.use((response) => {
    store.dispatch('config/changeLoading', false)
    return response
  })
}
