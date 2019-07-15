import {
    GET_PREMIER_LEAGUE_FIXTURES,
    GET_FIXTURES_LIVE
} from '../types'


export const premierLeagueFixtures = payload => {
    return {
        type: GET_PREMIER_LEAGUE_FIXTURES,
        payload
    }
}

export const getFixturesLive = (type) => {
    return {
        type: GET_FIXTURES_LIVE,
        payload: type
    }

}