import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
    responseType: 'json',
    headers: {
        'X-RapidAPI-Key': '2d9b7adb33mshc96f8d43938499cp1ac2dbjsnce3fffed9643',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
});

export default ApiManager;