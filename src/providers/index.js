import axios from '../configs/axios';

export const getCountries = async () => {
    try {
        let res = await axios.get('/countries');
        return res.data;
    } catch (e) {
        return e;
    }
}

export const getTeams = async leagueId => {
    try {
        let res = await axios.get(`/teams/league/${leagueId}`);
        return res.data.api.teams;
    } catch (e) {
        return e;
    }
}

export const getTeam = async teamId => {
    try {
        let res = await axios.get(`/teams/team/${teamId}`);
        if (+res.data.api.results) {
            return res.data.api.teams[0];
        } else {
            throw Error;
        }
    } catch (e) {
        return e;
    }
}

export const getPremierLeagueFixtures = async () => {
    try {
        let res = await axios.get('/fixtures/league/2');
        return res.data.api.fixtures;
    } catch (e) {
        return e;
    }
}

export const getFixtureLive = async () => {
    try {
        let res = await axios.get('/fixtures/live');
        return res.data.api.fixtures;
    } catch (e) {
        return e;
    }
}

export const getFixtureLiveByLeague = async (leagueId) => {
    try {
        let res = await axios.get(`/fixtures/live/${leagueId}-${leagueId}-${leagueId}`);
        return res.data.api.fixtures;
    } catch (e) {
        return e;
    }
}

export const getEventsByFixture = async fixtureId => {
    try {
        let res = await axios.get(`/events/${fixtureId}`);
        return res.data.api.events;
    } catch (e) {
        return e;
    }
}

export const getPremierLeagueStandings = async () => {
    try {
        let res = await axios.get(`/leagueTable/2`);
        return res.data.api.standings
    } catch (e) {
        return e;
    }
}