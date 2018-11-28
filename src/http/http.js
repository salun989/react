import axios from 'axios'
//import { Indicator, MessageBox, Toast } from 'mint-ui'
let instance = axios.create({
 baseURL: process.env.DOMAIN,
   timeout: 10000
 })

instance.defaults.transformRequest = [function (data) {
  // 数据序列化  请求前的处理
   return JSON.stringify(data)
}]
instance.defaults.validateStatus = function (status) {
  return true
}
instance.interceptors.request.use(config => {
  console.log(config)
  
  config.headers.Accept = 'application/json'
  config.headers['Content-Type'] = 'application/json'

  return config
}, err => {
//   Message.error({ message: '请求超时!' });


  return Promise.reject(err)
})
// 添加响应拦截器
instance.interceptors.response.use(response => {

  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    //Indicator.close()
    return Promise.reject(response)
  }
},error1=>{


 return Promise.reject(error1)
})

let requestMethod = ['get', 'post', 'delete', 'put', 'patch', 'update']
let requester = {}
requestMethod.forEach((method) => {
  requester[method] = function (url = '', data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      instance[method](url, data, config).then((response) => {
       
          resolve(response.data)
        
      }).catch((response) => {
        // Toast.error({ message: '请求服务器出现错误' })
        reject(response)
      })
    })
  }
})

export default requester
