import { combineReducers } from 'redux';
import TweetsReducer from './tweet_reducer';

const rootReducer = combineReducers({
  tweets: TweetsReducer
});

export default rootReducer;
