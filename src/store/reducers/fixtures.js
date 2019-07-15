import {
    GET_FIXTURES_SUCCESS,
    GET_FIXTURES_LIVE,
    GET_ALL_FIXTURES_LIVE,
    GET_PREMIER_LEAGUE_FIXTURES_LIVE,
    LOADING
} from '../types'

const initialState = {
    fixtures: []
}

export function fixtures(state = initialState, action) {
    switch (action.type) {
        case GET_FIXTURES_SUCCESS:
        case GET_ALL_FIXTURES_LIVE:
        case GET_PREMIER_LEAGUE_FIXTURES_LIVE:
            return {
                ...state,
                fixtures: action.payload
            }
        case LOADING:
            return {
                ...state,
                fixtures: null
            }
        case GET_FIXTURES_LIVE:
            return {
                ...state,
                fixtures: action.payload
            }
        default:
            return state
    }
}