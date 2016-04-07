import React from 'react';
import {Link} from 'react-router';

import LoginForm from './LoginForm.jsx';

var Login = React.createClass({

	render: function() {
		return (
			<div>
				<LoginForm/>
			</div>
		);
	}

});

module.exports = Login;