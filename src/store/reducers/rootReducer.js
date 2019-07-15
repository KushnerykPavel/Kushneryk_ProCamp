import { combineReducers } from 'redux';
import { teams } from './teams';
import { fixtures } from './fixtures';
import { events } from './events';

const rootReducer = combineReducers({
    teams,
    fixtures,
    events
})

export default rootReducer