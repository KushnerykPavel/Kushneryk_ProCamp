import axios from '../configs/axios';

export const getCountries = async () => {
    try {
        let res = await axios.get('/countries');
        let { data } = res;
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const getTeams = async leagueId => {
    try {
        let res = await axios.get(`/teams/league/${leagueId}`);
        let { data } = res;
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const getTeam = async teamId => {
    try {
        let res = await axios.get(`/teams/team/${teamId}`);
        let { data } = res;
        return data.api.teams[0];
    } catch (e) {
        console.log(e);
    }
}