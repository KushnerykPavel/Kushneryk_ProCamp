import { getFixtureLive, getFixtureLiveByLeague } from '../providers';
import {
    GET_PREMIER_LEAGUE_FIXTURES,
    GET_FIXTURES_LIVE,
    LOADING
} from './types'
import { ALL_LIVE_FIXTURES, PL_LIVE_FIXTURES } from '../configs/constants'


export const premierLeagueFixtures = payload => {
    return {
        type: GET_PREMIER_LEAGUE_FIXTURES,
        payload
    }
}

export const Loading = () => {
    return {
        type: LOADING,
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