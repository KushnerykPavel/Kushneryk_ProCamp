import { all } from 'redux-saga/effects';
import { watchTeams, watchTeam } from './teamsSaga'
import { watchPremierLeagueFixtures, watchLiveFixtures } from './fixturesSaga'
import { watchStandings } from './standingsSaga'

export default function* rootSaga() {
    yield all([
        watchTeams(),
        watchTeam(),
        watchPremierLeagueFixtures(),
        watchLiveFixtures(),
        watchStandings()
    ])
}