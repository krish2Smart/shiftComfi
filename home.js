import React, { Component } from 'react';

export default class home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
		        <Header/>
		        <Search/>
		        <Display className="Display"/>
	      </div>
		);
	}
}