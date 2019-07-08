import { GET_FIXTURES_BY_LEAGUE } from '../actions/types'

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
        default:
            return state
    }
}