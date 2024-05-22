import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'https://alanmd-6dc75340d386.herokuapp.com/';

const ApiHandler = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  instance.interceptors.request.use(
    async config => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
          
        }
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    error => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const uploadFile =async (formData) =>{
  try {
    const response =  await  axios({
      method: "post",
      url: BASE_URL+ "doctor/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  
    return response.data
    
  } catch (error) {
    console.log(error)
    throw error

  }

}

export default ApiHandler;
