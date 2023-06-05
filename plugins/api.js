export default function (
  { $axios, $config: { baseUrl }, store, redirect },
  inject
) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  api.setBaseURL(baseUrl)
  inject('api', api)
}
