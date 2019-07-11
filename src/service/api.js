import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:9090' });

api.interceptors.response.use(data => data, (error) => {
    if (!error.response) { return Promise.reject(error); } return Promise.reject(error.response); 
});

export default api;
