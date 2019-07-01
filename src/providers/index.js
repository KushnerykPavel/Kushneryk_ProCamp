import axios from '../axios';

export const getCountries = async () => {
    try {
        let res = await axios.get('/countries');
        let { data } = res;
        return data;
    } catch (e) {
        console.log(e);
    }

}