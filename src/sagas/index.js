import { all } from 'redux-saga/effects';
import { watchGetTeams } from './teamsSaga'

export default function* rootSaga() {
    yield all([
        watchGetTeams()
    ])
}