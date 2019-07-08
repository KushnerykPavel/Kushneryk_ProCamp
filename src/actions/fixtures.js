import { getFixtures, getFixtureLive } from '../providers';
import { GET_FIXTURES_BY_LEAGUE, GET_FIXTURES_LIVE, LOADING } from './types'

export const getFixturesByLeagueSuccess = payload => {
    return {
        type: GET_FIXTURES_BY_LEAGUE,
        payload
    }
}

export const getFixturesByLeagueLoading = () => {
    return {
        type: LOADING,
    }
}

export const getFixturesByLeague = () => {

    return dispatch => {
        dispatch(getFixturesByLeagueLoading())
        getFixtures().then(response => dispatch(getFixturesByLeagueSuccess(response)))
    }
}

export const getFixturesLiveSuccess = payload => {
    return {
        type: GET_FIXTURES_LIVE,
        payload
    }
}

export const getFixturesLive = () => {
    return dispatch => {
        getFixtureLive().then(response => dispatch(getFixturesLiveSuccess(response)))
    }
}