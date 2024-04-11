import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'https://wger.de/api/v2',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;