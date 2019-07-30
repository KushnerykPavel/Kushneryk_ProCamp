import axios from 'axios';
import config from './config';

const instance = axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v2'
});

instance.defaults.headers.common['X-RapidAPI-Key'] = '3bc3316c2dmsh8e41b1e957eb5b0p1ba874jsn673415bd6a58'
instance.defaults.headers.common['Accept'] = 'application/json'

export default instance;