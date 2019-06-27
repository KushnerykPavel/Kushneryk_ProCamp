import axios from 'axios';
import config from '../configs/config'

const instance = axios.create({
    baseURL = 'https://api-football-v1.p.rapidapi.com/v2'
});

instance.defaults.headers.common['X-RapidAPI-Proxy-Secret'] = config.token

export default instance;