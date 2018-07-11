import React, { Component} from 'react';
import DatePicker from 'react-datepicker';


import 'react-datepicker/dist/react-datepicker.css';

export default class Date extends Component{
    constructor(props){
        super(props);
        this.state = {
            dateValue: props.initialValue,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            dateValue: date,
        });
        this.props.onChange(date);
        //console.log(date.format());
    }

    render() {
        return <DatePicker
            selected={this.state.dateValue}
            //onSelect={this.handleSelect} //when day is clicked}
            onChange={this.handleChange}
            showTimeSelect
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
            timeCaption="time"
        />;
    }

}
