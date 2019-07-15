import { all } from 'redux-saga/effects';
import { watchGetTeams, watchGetTeam } from './teamsSaga'

export default function* rootSaga() {
    yield all([
        watchGetTeams(),
        watchGetTeam()
    ])
}