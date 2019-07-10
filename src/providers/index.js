import axios from '../configs/axios';

export const getCountries = async () => {
    try {
        let res = await axios.get('/countries');
        let { data } = res;
        return data;
    } catch (e) {
        return e;
    }
}

export const getTeams = async leagueId => {
    try {
        let res = await axios.get(`/teams/league/${leagueId}`);
        let { data } = res;
        return data.api.teams;
    } catch (e) {
        return e;
    }
}

export const getTeam = async teamId => {
    try {
        let res = await axios.get(`/teams/team/${teamId}`);
        let { data } = res;

        if (+data.api.results) {
            return data.api.teams[0];
        } else {
            throw Error;
        }
    } catch (e) {
        return e;
    }
}

export const getFixtures = async () => {
    try {
        let res = await axios.get('/fixtures/league/2');
        let { data } = res;
        return data.api.fixtures;
    } catch (e) {
        return e;
    }
}

export const getFixtureLive = async () => {
    try {
        let res = await axios.get('/fixtures/live');
        let { data } = res;
        return data.api.fixtures;
    } catch (e) {
        return e;
    }
}

export const getEventsByFixture = async fixtureId => {
    try {
        let res = axios.get(`/events/${fixtureId}`);
        let { data } = res;
        return data.api.events;
    } catch (e) {
        return e;
    }
}