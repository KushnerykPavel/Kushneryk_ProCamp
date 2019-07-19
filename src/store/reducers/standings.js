import {
    GET_STANDINGS_SUCCESS,
    LOADING_STANDINGS
} from '../types';

const initialState = {
    standings: null
}

export function standings(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_STANDINGS_SUCCESS:
            return {
                ...state,
                standings: payload
            }
        case LOADING_STANDINGS:
            return {
                ...state,
                standings: []
            }
        default:
            return state
    }
}