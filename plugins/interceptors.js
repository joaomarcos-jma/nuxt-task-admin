export default function ({ $api, $config: { apiSecret }, store, redirect }) {
  $api.onError((error) => {
    if (error.response) {
      // console.error(error)
    }
  })

  $api.interceptors.request.use((config) => {
    store.dispatch('config/changeLoading', true)
    config.headers.authorization = `Bearer ${apiSecret}`
    return config
  })

  $api.interceptors.response.use((response) => {
    store.dispatch('config/changeLoading', false)
    return response
  })
}
