import axios, {AxiosResponse} from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use( (res: AxiosResponse) => {
  if (res.data.status >= 200 && res.data.status < 300) {
    return res.data;
  } else {
    throw new Error('message');
  }

}, (error) => {
  return Promise.reject(error); 
});

export default axiosInstance;