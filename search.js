import React, { Component } from 'react';
import Date from './Date';
import './App.css';

class Search extends Component {

  render() {
    var date1;
    return (
      <div className="Search" >
        <header className="Inside-search" >
          <input type="text" className="hotelName" placeholder="Enter the name of hotel" />
          <Date /> 
          <button value="Search" className="searchbutton">Search
          </button>
        </header>
      </div>
    );
  }
}

export default Search;
