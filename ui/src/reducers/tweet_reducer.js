import {
    INITIAL_FETCH_TWEETS,
    SECONDARY_FETCH_TWEETS,
    SET_UNIQUE_TWEETS,
} from '../actions/index';
const initialState = {
    allTweets: [],
    uniqueTweets: [],
}
export default function(state = initialState, action) {
    //console.log('Action recieved ', action);
    switch(action.type){
        case INITIAL_FETCH_TWEETS:
            return {
                ...state,
                allTweets: [...action.payload.data]
            };
        case SECONDARY_FETCH_TWEETS:
            return {
                ...state,
                allTweets:[
                    ...state.allTweets,
                    ...action.payload.data
                ]
            }
        case SET_UNIQUE_TWEETS:
            return{
                ...state,
                uniqueTweets: [...action.payload]
            }
    }
    return state;
}