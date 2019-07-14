import { getFixtures, getFixtureLive, getFixtureLiveByLeague } from '../providers';
import { GET_FIXTURES_BY_LEAGUE, GET_FIXTURES_LIVE, LOADING } from './types'
import { ALL_LIVE_FIXTURES, PL_LIVE_FIXTURES } from '../configs/constants'


export const getFixturesByLeagueSuccess = payload => {
    return {
        type: GET_FIXTURES_BY_LEAGUE,
        payload
    }
}

export const Loading = () => {
    return {
        type: LOADING,
    }
}

export const getFixturesByLeague = () => {

    return dispatch => {
        dispatch(Loading())
        getFixtures().then(response => dispatch(getFixturesByLeagueSuccess(response)))
    }
}

export const getFixturesLiveSuccess = payload => {
    return {
        type: GET_FIXTURES_LIVE,
        payload
    }
}

export const getFixturesLive = (type) => {
    switch (type) {
        case ALL_LIVE_FIXTURES:
            return dispatch => {
                getFixtureLive().then(response => dispatch(getFixturesLiveSuccess(response)))
            }
        case PL_LIVE_FIXTURES:
            return dispatch => {
                getFixtureLiveByLeague(2).then(response => dispatch(getFixturesLiveSuccess(response)))
            }
    }

}