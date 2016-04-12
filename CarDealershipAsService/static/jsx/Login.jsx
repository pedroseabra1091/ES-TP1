import React from 'react';
import {Link} from 'react-router';

import LoginForm from './LoginForm.jsx';

var Login = React.createClass({

	render: function() {
		return (
			<div>
				<LoginForm client={this.props.client}/>
			</div>
		);
	}

});

module.exports = Login;