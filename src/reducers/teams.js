import { GET_TEAMS_DATA, GET_TEAM_DATA } from '../actions/types'


export function teams(state = [], action) {

    switch (action.type) {
        case GET_TEAMS_DATA:
            return action.payload
        case GET_TEAM_DATA:
            return action.payload
        default:
            return state
    }
}