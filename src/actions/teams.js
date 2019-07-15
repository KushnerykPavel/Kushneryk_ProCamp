import { getTeams, getTeam } from '../providers';
import { GET_TEAMS, GET_TEAM_DATA } from './types'

export const teamsData = id => {
    return {
        type: 'GET_TEAMS',
        payload: id
    }
}

export const teamsGetDataSuccess = payload => {
    return {
        type: GET_TEAMS,
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