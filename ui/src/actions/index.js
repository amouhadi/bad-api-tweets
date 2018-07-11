import axios from 'axios';
const ROOT_URL = `https://badapi.iqvia.io/api/v1/Tweets`;

export const INITIAL_FETCH_TWEETS = 'INITIAL_FETCH_TWEETS';
export const SECONDARY_FETCH_TWEETS = 'SECONDARY_FETCH_TWEETS';

export function fetchTweets(startDate, endDate) {
    //console.log("end date in action "+endDate);
    const url = `${ROOT_URL}?startDate=${startDate}&endDate=${endDate}`;
    const request = axios.get(url)
    console.log(url);
    console.log('Request:', request);
    return{
        type: INITIAL_FETCH_TWEETS,
        payload: request
    };
}

export function secondaryFetchTweets(startDate, endDate) {
    //console.log("end date in action "+endDate);
    const url = `${ROOT_URL}?startDate=${startDate}&endDate=${endDate}`;
    const request = axios.get(url)
    console.log(url);
    console.log('Request:', request);
    return{
        type: SECONDARY_FETCH_TWEETS,
        payload: request
    };
}