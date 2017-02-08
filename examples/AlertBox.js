import React from 'react';


var AlertBox = React.createClass({
	render: function() {
		return (
			<div className={"alert alert-"+this.props.type}>{this.props.children}</div>
		);
	}
});

module.exports = AlertBox;