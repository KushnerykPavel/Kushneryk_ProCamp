import axios from '../axios';

export const getCountries = async () => {
    let res = await axios.get('/countries');
    let { data } = res.data;

    return data;
}