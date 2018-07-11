import {
    INITIAL_FETCH_TWEETS,
    SECONDARY_FETCH_TWEETS,
} from '../actions/index';

export default function(state = [], action) {
    //console.log('Action recieved ', action);
    switch(action.type){
        case INITIAL_FETCH_TWEETS:
            return [...action.payload.data];
        case SECONDARY_FETCH_TWEETS:
            return ([...state, ...action.payload.data])
    }
    return state;
}