import { all } from 'redux-saga/effects';
import { watchTeams, watchTeam } from './teamsSaga'
import { watchPremierLeagueFixtures } from './fixturesSaga'

export default function* rootSaga() {
    yield all([
        watchTeams(),
        watchTeam(),
        watchPremierLeagueFixtures()
    ])
}