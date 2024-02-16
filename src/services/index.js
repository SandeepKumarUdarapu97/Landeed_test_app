import axios from 'axios';

const ip = '192.168.1.6'
export const getConfig = async () => {
  try {
    const response = await axios.get(`http://${ip}:3001/config`);
    console.log('config',response);
    const config = response.data;
    return config;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

export const getSubmissions = async () => {
  try {
    const response = await axios.get(`http://${ip}:3001/submissions`);
    const config = response.data;
    console.log('Submissions :-',config);
    return config;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

export const submitFormData = async (formData) => {
  try {
    const response = await axios.post(`http://${ip}:3001/submit`, formData);
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};
