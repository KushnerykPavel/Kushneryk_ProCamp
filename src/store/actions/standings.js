import {
    GET_STANDINGS,
} from '../types';


export const getPremierLeagueStandings = () => {
    return {
        type: GET_STANDINGS
    }
}