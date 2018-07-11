import React, { Component } from 'react';
import DateForm from '../containers/date_form';
import TweetList from "../containers/tweet_list";

export default class App extends Component {
  render() {
    return (
      <div className= "date-container">
          <DateForm/>
        <TweetList/>
      </div>
    );
  }
}
