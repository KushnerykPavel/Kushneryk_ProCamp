import { getTeams, getTeam } from '../providers';
import { GET_TEAMS_DATA, GET_TEAM_DATA } from './types'

export const teamsGetDataSuccess = payload => {
    return {
        type: GET_TEAMS_DATA,
        payload
    }
}

export const teamGetDataSuccess = payload => {
    return {
        type: GET_TEAM_DATA,
        payload
    }
}

export const teamsGetData = (leagueId) => {

    return dispatch => {
        getTeams(leagueId).then(response => dispatch(teamsGetDataSuccess(response)))
    }
}

export const teamGetData = (teamId) => {

    return dispatch => {
        getTeam(teamId).then(response => dispatch(teamGetDataSuccess(response)))
    }
}