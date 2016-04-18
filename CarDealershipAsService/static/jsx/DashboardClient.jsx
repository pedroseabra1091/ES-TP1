import React from 'react';
import Profile from './Profile.jsx';
import Search from './Search.jsx';

var DashboardClient = React.createClass({

	getInitialState: function(){
	    return ({
	        profile : false,
	        search : false,
	        logout : false  
	    });
	},

	handleClick: function(type,e){
		if(type == 'Profile'){
			this.setState({'profile' : true})
			this.setState({'search' : false})
			this.setState({'logout' : false})

		}
		else if(type == 'Search'){ 
			this.setState({'search' : true})
			this.setState({'profile' : false})
			this.setState({'logout' : false})

		}
		else if(type == 'Logout'){
			this.setState({'logout' : true})
			this.setState({'profile' : false})
			this.setState({'search' : false})
		}
		else
			console.log('Unknown click');
	},

	render: function() {
		return (
			<div>
				<div className = "container">
					<div className="tabs is-centered">
					  	<ul>
						    <li onClick = {this.handleClick.bind(null,'Profile')}><a><h2 className = "title menu">Profile</h2></a></li>
						    <li onClick = {this.handleClick.bind(null,'Search')}><a><h2 className = "title menu">Search</h2></a></li>
						    <li onClick = {this.handleClick.bind(null,'Logout')}><a><h2 className = "title menu">Logout</h2></a></li>
						</ul>
					</div>
				 	{this.state.profile ? <Profile userType = {this.props.params.userType} id = {this.props.params.id} /> : null}
				 	{this.state.logout ? <Search /> : null}
				</div> 
			{this.state.search ? <Search /> : null}
			{this.props.children}
			</div>
		);
	}

});

module.exports = DashboardClient;