import { getEventsByFixture } from '../../providers';
import { GET_EVENTS_BY_FIXTURE_SUCCESS, LOADING } from '../types';

export const getEventsByFixtureSuccess = (payload) => {
    return {
        type: GET_EVENTS_BY_FIXTURE_SUCCESS,
        payload
    }
}

export const Loading = () => {
    return {
        type: LOADING,
    }
}

export const getEventsByFixtureId = fixtureId => {
    return dispatch => {
        dispatch(Loading());
        getEventsByFixture(fixtureId).then(response => dispatch(getEventsByFixtureSuccess(response)));
    }
}