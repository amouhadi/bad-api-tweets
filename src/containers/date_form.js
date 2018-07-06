import React, { Component} from 'react';
import { connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchTweets, secondaryFetchTweets} from '../actions/index';
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
        if( preProps.tweets.length !== currentTweets.length){
            if(currentTweets.length%100 ===0){
                const lastTimeStamp = currentTweets[currentTweets.length-1].stamp;
                this.props.secondaryFetchTweets(moment(lastTimeStamp).format(),this.state.endDate.format())
            }
        }
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchTweets(this.state.startDate.format(),
            this.state.endDate.format());

        console.log("end date:" + this.state.endDate.format()+"   .");
    }
    onStartDateChange(date){
        this.setState({
            startDate: date
        });
        console.log("start date in date-form: "+ date);

    }
    onEndDateChange(date){
        this.setState({
            endDate: date
        });
        console.log("end date in date-form: "+ date);

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
    return {tweets}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTweets, secondaryFetchTweets}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DateForm);