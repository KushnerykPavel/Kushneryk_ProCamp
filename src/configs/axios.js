import axios from 'axios';
import config from './config';

const instance = axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v2'
});

instance.defaults.headers.common['X-RapidAPI-Key'] = config.token
instance.defaults.headers.common['Accept'] = 'application/json'

export default instance;