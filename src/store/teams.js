import {
    GET_TEAMS_SUCCESS,
    GET_TEAMS,
    GET_TEAM,
    GET_TEAM_SUCCESS
} from '../actions/types'

const initialState = {
    teams: []
}
export function teams(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case GET_TEAMS_SUCCESS:
            return {
                ...state,
                teams: action.payload
            }
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload
            }
        case GET_TEAM_SUCCESS:
            return {
                ...state,
                teams: action.payload
            }
        case GET_TEAM:
            return {
                ...state,
                teams: action.payload
            }
        default:
            return state
    }
}