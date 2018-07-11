import React, { Component} from 'react';
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchTweets, secondaryFetchTweets,setUniqueTweets} from '../actions/index';
import moment from 'moment';
import Date from './date';

class DateForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment(),
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
    }

    componentDidUpdate(preProps){
        const currentTweets = this.props.tweets;
        if( preProps.tweets.length !== currentTweets.length &&
            currentTweets.length%100 ===0){
                const lastTimeStamp = currentTweets[currentTweets.length-1].stamp;
                this.props.secondaryFetchTweets(moment(lastTimeStamp).format(),this.state.endDate.format())
        }
        else if(currentTweets.length){
            const uniqueTweets = currentTweets.filter((obj, pos, arr) => {
                return arr.map(mapObj => mapObj.id).indexOf(obj.id) === pos;
            });
            this.props.setUniqueTweets(uniqueTweets)
        }
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchTweets(this.state.startDate.format(),
            this.state.endDate.format());

    }
    onStartDateChange(date){
        this.setState({
            startDate: date
        });

    }
    onEndDateChange(date){
        this.setState({
            endDate: date
        });

    }
    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group form-inline date-form">
                <label>Start Date:</label>
                <Date
                    onChange={this.onStartDateChange}
                    initialValue={this.state.startDate}
                />
                <label>End Date:</label>
                <Date
                    onChange={this.onEndDateChange}
                    initialValue={this.state.endDate}

                />
                <span className= "input-group-btn">
                <button type= "submit" className= "btn btn-secondary">Execute</button>
                </span>
            </form>
        );
    }
}

function mapStateToProps({tweets}) {
    return {tweets: tweets.allTweets}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTweets, secondaryFetchTweets,setUniqueTweets}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DateForm);