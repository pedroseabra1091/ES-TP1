import React from 'react';
import Panel from './Panel.jsx';
import Board from './Board.jsx';
import SearchOptions from './SearchOptions.jsx'

var Search = React.createClass({

	render: function() {
		console.log('In Search component...');
		return (
			<div className="columns">
			  <div className="column is-one-quarter">
			    <SearchOptions userType = {this.props.userType} id = {this.props.id} />
			  </div>
			</div>
		);
	}

});

module.exports = Search;