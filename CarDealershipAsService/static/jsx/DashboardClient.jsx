import React from 'react';

var DashboardClient = React.createClass({

	getInitialState() {
	    return {
	        email:this.props.email;
	    };
	},

	componentWillReceiveProps: function(props) {
	    this.setState({client: nextProps.email});
	},

	render: function() {
		return (
			<div className="columns">
			  <div className="column is-quarter paddleft">
			  	<aside className="menu">
			  	  <img src = "../static/assets/user_logo.png" />
				  <p className="menu-label">
				  	{this.props.email} 
				  </p>
				 
				  <p className="menu-label">
				  Profile   
				  </p>
				  <ul className="menu-list">
				    <li>View profile</li>
				    <li>
				      <a className="is-active" href="#">Edit profile</a>
				      <ul>
				        <li>Change password</li>
				        <li>Change contact</li>
				        <li>Change email</li>
				      </ul>
				    </li>
				  </ul>
				</aside>
			  </div>
			  <div className="column Auto"></div>
			</div>
		);
	}

});

module.exports = DashboardClient;