import { combineReducers } from 'redux';
import { teams } from './teams';
import { fixtures } from './fixtures';

const rootReducer = combineReducers({
    teams,
    fixtures
})

export default rootReducer