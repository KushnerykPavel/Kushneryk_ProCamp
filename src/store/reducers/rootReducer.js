import { combineReducers } from 'redux';
import { teams } from './teams';
import { fixtures } from './fixtures';
import { standings } from './standings';

const rootReducer = combineReducers({
    teams,
    fixtures,
    standings
})

export default rootReducer