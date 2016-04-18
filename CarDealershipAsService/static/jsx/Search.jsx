import React from 'react';
import Panel from './Panel.jsx';
import Board from './Board.jsx';

var Search = React.createClass({

	render: function() {
		return (
			<div className="columns">
			  <div className="column is-one-quarter">
			    <Panel />
			  </div>
			  <Board />
			</div>
		);
	}

});

module.exports = Search;