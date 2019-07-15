import { getTeam } from '../providers';
import { GET_TEAMS, GET_TEAM } from './types'

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

export const teamGetDataSuccess = payload => {
    return {
        type: GET_TEAM,
        payload
    }
}

export const teamGetData = (teamId) => {

    return dispatch => {
        getTeam(teamId).then(response => dispatch(teamGetDataSuccess(response)))
    }
}