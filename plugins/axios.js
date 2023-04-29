export default function ({ $axios }, inject) {
  $axios.onRequest((config) => {
    config.headers.common['Access-Control-Allow-Origin'] = '*'
    config.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    config.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
  });

  // $axios.onResponse(res => {
  //   return res.data
  // })

  // instance.interceptors.request.use(config => {
  //   config.headers.common['Access-Control-Allow-Origin'] = '*'
  //   config.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
  //   config.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
  //   return config
  // })
}
