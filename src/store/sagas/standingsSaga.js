import { call, takeEvery, put } from 'redux-saga/effects';
import { getPremierLeagueStandings } from '../../providers';
import {
    GET_STANDINGS,
    GET_STANDINGS_SUCCESS,
    GET_STANDINGS_ERROR,
    LOADING_STANDINGS
} from '../types';


function* fetchPremierLeagueStandings(action) {
    yield put({ type: LOADING_STANDINGS })
    try {
        const standings = yield call(getPremierLeagueStandings)
        console.log(standings)
        yield put({ type: GET_STANDINGS_SUCCESS, payload: standings })
    } catch (error) {
        yield put({ type: GET_STANDINGS_ERROR, payload: error })
    }
}

export function* watchStandings() {
    yield takeEvery(GET_STANDINGS, fetchPremierLeagueStandings)
}