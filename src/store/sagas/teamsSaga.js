import { call, takeEvery, put } from 'redux-saga/effects';
import { getTeams, getTeam } from '../../providers';
import {
    GET_TEAMS,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_ERROR,
    GET_TEAM,
    GET_TEAM_SUCCESS,
    GET_TEAM_ERROR
} from '../types'

function* fetchTeams(action) {
    try {
        const teams = yield call(getTeams, action.payload)
        yield put({ type: GET_TEAMS_SUCCESS, payload: teams })
    } catch (err) {
        yield put({ type: GET_TEAMS_ERROR, payload: err })
    }
}

function* fetchTeam(action) {
    try {
        const team = yield call(getTeam, action.payload)
        yield put({ type: GET_TEAM_SUCCESS, payload: team })
    } catch (err) {
        yield put({ type: GET_TEAM_ERROR, payload: err })
    }
}

export function* watchTeams() {
    yield takeEvery(GET_TEAMS, fetchTeams)
}

export function* watchTeam() {
    yield takeEvery(GET_TEAM, fetchTeam)
}