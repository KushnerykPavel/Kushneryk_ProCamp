import { getPremierLeagueFixtures, getFixtureLive, getFixtureLiveByLeague } from '../../providers';
import {
    GET_FIXTURES_SUCCESS,
    GET_PREMIER_LEAGUE_FIXTURES,
    GET_FIXTURES_LIVE,
    GET_ALL_FIXTURES_LIVE,
    GET_PREMIER_LEAGUE_FIXTURES_LIVE,
    LOADING
} from '../types'
import { PL_LIVE_FIXTURES } from '../../configs/constants'
import { call, takeEvery, put } from 'redux-saga/effects';

function* fetchPremierLeagueFixtures() {
    try {
        yield put({ type: LOADING })
        const fixtures = yield call(getPremierLeagueFixtures)

        yield put({ type: GET_FIXTURES_SUCCESS, payload: fixtures })
    } catch (error) {
        yield put({ type: 'GET_FIXTURES_ERROR', payload: error })
    }
}

function* fetchLiveFixtures(action) {
    let fixtures
    try {
        yield put({ type: LOADING })
        switch (action.payload) {
            case PL_LIVE_FIXTURES:
                fixtures = yield call(getFixtureLiveByLeague, 2)
                yield put({ type: GET_PREMIER_LEAGUE_FIXTURES_LIVE, payload: fixtures })
                break
            default:
                fixtures = yield call(getFixtureLive)
                yield put({ type: GET_ALL_FIXTURES_LIVE, payload: fixtures })
        }
    } catch (error) {
        yield put({ type: 'GET_FIXTURES_ERROR', payload: error })
    }
}

export function* watchPremierLeagueFixtures() {
    yield takeEvery(GET_PREMIER_LEAGUE_FIXTURES, fetchPremierLeagueFixtures)
}

export function* watchLiveFixtures() {
    yield takeEvery(GET_FIXTURES_LIVE, fetchLiveFixtures)
}