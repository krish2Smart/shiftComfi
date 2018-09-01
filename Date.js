import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Search from './search';
import 'react-datepicker/dist/react-datepicker.css';

export default class Date extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      startDate2: '',
      disabledDate: false,
      value: true,
      date1:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      value: false
    });
      var val=date._d+"";
      this.state.date1 =val.split(" ");
      console.log(this.state.date1[1]+" "+this.state.date1[2]+" "+this.state.date1[3]+" ")
 }
  handleChange2(date) {
    this.setState({
      startDate2: date, 
    });
    var val=date._d+"";
      this.state.date1 =val.split(" ");
      console.log(this.state.date1[1]+" "+this.state.date1[2]+" "+this.state.date1[3]+" ")
 }

  render() {
    return (
      <div className="dateRange">
          <DatePicker
            className="Date"
            placeholderText="FROM"
            selected={this.state.startDate}
            onChange={this.handleChange}
            disabled={this.state.disabledDate}
            minDate={moment()}
            maxDate={moment().add(1, "years")} />
          <DatePicker
            className="Date"
            placeholderText="TO"
            selected={this.state.startDate2}
            onChange={this.handleChange2}
            disabled={this.state.value}
            minDate={this.state.startDate}
            maxDate={moment().add(1, "years")} />
      </div>
    );
  }
}