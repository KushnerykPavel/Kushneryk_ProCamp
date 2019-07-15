import { GET_TEAMS, GET_TEAM } from '../types'

export const teamsData = id => {
    return {
        type: GET_TEAMS,
        payload: id
    }
}

export const teamData = id => {
    return {
        type: GET_TEAM,
        payload: id
    }
}