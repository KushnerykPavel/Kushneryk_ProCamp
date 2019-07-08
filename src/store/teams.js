import { GET_TEAMS_DATA, GET_TEAM_DATA } from '../actions/types'

const initialState = {
    teams: []
}
export function teams(state = initialState, action) {

    switch (action.type) {
        case GET_TEAMS_DATA:
            return {
                ...state,
                teams: action.payload
            }
        case GET_TEAM_DATA:
            return {
                ...state,
                teams: action.payload
            }
        default:
            return state
    }
}