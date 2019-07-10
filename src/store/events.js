import { GET_EVENTS_BY_FIXTURE_SUCCESS, LOADING } from '../actions/types';

const initialState = {
    events: []
}

export function events(state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS_BY_FIXTURE_SUCCESS:
            return {
                ...state,
                events: action.payload
            }
        case LOADING:
            return {
                ...state,
                events: null
            }
        default:
            return state;
    }
}