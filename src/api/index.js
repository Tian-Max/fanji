import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9090/';
axios.defaults.withCredentials = true;//=>允许跨域(并且允许携带COOKIE)
axios.interceptors.response.use(result => result.data);//=>响应拦截器:把服务返回的信息中响应主体内容拦截返回，以后在THEN中获取的结果就是主体内容
export default axios;

