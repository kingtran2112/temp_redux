import React from 'react';

export default class Clock extends React.Component {
	render() {
		return (
			<div> Now: {this.props.time} </div>
		);
	}
	
}
