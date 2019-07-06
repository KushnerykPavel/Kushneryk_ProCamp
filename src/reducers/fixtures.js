import { GET_FIXTURES_BY_LEAGUE } from '../actions/types'

export function fixtures(state = [], action) {
    switch (action.type) {
        case GET_FIXTURES_BY_LEAGUE:
            return action.payload
        default:
            return state
    }
}