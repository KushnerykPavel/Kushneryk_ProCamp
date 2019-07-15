import { getTeam } from '../providers';
import { GET_TEAMS, GET_TEAM_DATA } from './types'

export const teamsData = id => {
    return {
        type: GET_TEAMS,
        payload: id
    }
}

export const teamGetDataSuccess = payload => {
    return {
        type: GET_TEAM_DATA,
        payload
    }
}

export const teamGetData = (teamId) => {

    return dispatch => {
        getTeam(teamId).then(response => dispatch(teamGetDataSuccess(response)))
    }
}