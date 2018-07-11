import axios from 'axios';
const ROOT_URL = `http://localhost:3000`;

export const INITIAL_FETCH_TWEETS = 'INITIAL_FETCH_TWEETS';
export const SECONDARY_FETCH_TWEETS = 'SECONDARY_FETCH_TWEETS';
export const SET_UNIQUE_TWEETS = 'SET_UNIQUE_TWEETS';

export function fetchTweets(startDate, endDate) {
    const url = `${ROOT_URL}/${startDate}/${endDate}`;
    const request = axios.get(url)
    return{
        type: INITIAL_FETCH_TWEETS,
        payload: request
    };
}

export function secondaryFetchTweets(startDate, endDate) {
    const url = `${ROOT_URL}/${startDate}/${endDate}`;
    const request = axios.get(url)
    return{
        type: SECONDARY_FETCH_TWEETS,
        payload: request
    };
}

export function setUniqueTweets(tweets) {
    return{
        type: SET_UNIQUE_TWEETS,
        payload: tweets
    };
}