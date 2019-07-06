import { getFixtures } from '../providers';
import { GET_FIXTURES_BY_LEAGUE } from './types'

export const getFixturesByLeagueSuccess = payload => {
    return {
        type: GET_FIXTURES_BY_LEAGUE,
        payload
    }
}

export const getFixturesByLeague = () => {
    return dispatch => {
        getFixtures().then(response => dispatch(getFixturesByLeagueSuccess(response)))
    }
}