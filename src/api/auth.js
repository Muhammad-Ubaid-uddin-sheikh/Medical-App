import ApiHandler from './apihandler';
import endpoint from './endpoints';

export const login = async body => {
  console.log(body)
  try {
    const response = await ApiHandler().post(endpoint.LOGIN, body);
    console.log('Login Response: 1', response);

    return response.data;
  } catch (error) {
    console.error('Login Error:', error.response ? error.response : error);
    throw error;
  }
};

export const signUp = async body => {
  try {
    console.log('Sign Up Request Body:', body);
    const response = await ApiHandler().post(endpoint.SIGNUP, body);
    console.log('Sign Up Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Sign Up Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};


