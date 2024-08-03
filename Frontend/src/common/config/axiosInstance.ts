import axios, {AxiosResponse} from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use((res: AxiosResponse) => {
  console.log('pass in interception', res.data.data);
  if (res.data.status >= 200 && res.data.status < 300) {
    return Promise.reject(new Error(res.data.message));
  }

  return res.data;
}, (error) => {
  return Promise.reject(error); 
});

export default axiosInstance;