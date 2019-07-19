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
        if (+res.data.api.results) {
            return res.data.api.standings[0]
        } else {
            throw Error;
        }
    } catch (e) {
        return e;
    }
}

export const getOdds = async () => {
    try {
        let res = [
            {
                "fixture": {
                    "league_id": 404,
                    "fixture_id": 108705,
                    "updateAt": 1557496046
                },
                "bookmakers": [
                    {
                        "bookmaker_id": 6,
                        "bookmaker_name": "bwin",
                        "bets": [
                            {
                                "label_id": 1,
                                "label_name": "Match Winner",
                                "values": [
                                    {
                                        "value": "Home",
                                        "odd": "2.20"
                                    },
                                    {
                                        "value": "Draw",
                                        "odd": "3.70"
                                    },
                                    {
                                        "value": "Away",
                                        "odd": "2.60"
                                    }
                                ]
                            },
                            {
                                "label_id": 8,
                                "label_name": "Both Teams To Score",
                                "values": [
                                    {
                                        "value": "Yes",
                                        "odd": "1.40"
                                    },
                                    {
                                        "value": "No",
                                        "odd": "2.75"
                                    }
                                ]
                            },
                            {
                                "label_id": 1,
                                "label_name": "Match Winner",
                                "values": [
                                    {
                                        "value": "Home",
                                        "odd": "2.30"
                                    },
                                    {
                                        "value": "Draw",
                                        "odd": "3.60"
                                    },
                                    {
                                        "value": "Away",
                                        "odd": "2.50"
                                    }
                                ]
                            },
                            {
                                "label_id": 2,
                                "label_name": "Home/Away",
                                "values": [
                                    {
                                        "value": "Home",
                                        "odd": "1.77"
                                    },
                                    {
                                        "value": "Away",
                                        "odd": "1.83"
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
        return res[0].bookmakers[0].bets
    } catch (error) {
        return error
    }
}