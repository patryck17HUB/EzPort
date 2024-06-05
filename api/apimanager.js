import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
    responseType: 'json',
    headers: {
        'X-RapidAPI-Key': 'e020056f71msh7088694a48afbd1p154515jsna30932910448',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
});

export default ApiManager;