import { GET_FIXTURES_BY_LEAGUE, GET_FIXTURES_LIVE, LOADING } from '../actions/types'

const initialState = {
    fixtures: []
}

export function fixtures(state = initialState, action) {
    switch (action.type) {
        case GET_FIXTURES_BY_LEAGUE:
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