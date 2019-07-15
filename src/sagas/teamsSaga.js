import { call, takeEvery, put } from 'redux-saga/effects';
import { getTeams } from '../providers';
import {
    GET_TEAMS,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_ERROR,
    GET_TEAM_DATA
} from '../actions/types'

function* fetchTeams() {
    try {
        const teams = yield call(getTeams, 2)
        yield put({ type: GET_TEAMS_SUCCESS, payload: teams })
    } catch (err) {
        yield put({ type: GET_TEAMS_ERROR, payload: err })
    }
}

export function* watchGetTeams() {
    yield takeEvery(GET_TEAMS, fetchTeams)
}