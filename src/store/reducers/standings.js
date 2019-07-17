import {
    GET_STANDINGS_SUCCESS,
    LOADING
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
        case LOADING:
            return {
                ...state,
                standings: null
            }
        default:
            return state
    }
}