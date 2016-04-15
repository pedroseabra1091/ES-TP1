import React from 'react';
import Profile from './Profile.jsx';
import Search from './Search.jsx';

var DashboardClient = React.createClass({

	getInitialState: function(){
		console.log(this.props.params.userType);
		console.log(this.props.params.id);
	    return ({
	        profile : false,
	        search : false  
	    });
	},

	handleClick: function(type,e){
		if(type == 'Profile'){
			this.setState({'profile' : true})
			this.setState({'search' : false})
		}
		else if(type == 'Search'){ 
			this.setState({'search' : true})
			this.setState({'profile' : false})
		}
		else
			console.log('Unknown click');
	},

	render: function() {
		return (
			<div className = "container">
				<div className="tabs is-centered">
				  <ul>
				    <li onClick = {this.handleClick.bind(null,'Profile')}><a><h2 className = "title menu">Profile</h2></a></li>
				    <li onClick = {this.handleClick.bind(null,'Search')}><a><h2 className = "title menu">Search</h2></a></li>
				    <li onClick = {this.handleClick.bind(null,'Search')}><a><h2 className = "title menu">Logout</h2></a></li>
				  </ul>
				</div>
				 {this.state.profile ? <Profile userType = {this.props.params.userType} id = {this.props.params.id} /> : null}
				 {this.state.search ? <Search /> : null}
				 {this.props.children}
			</div> 
		);
	}

});

module.exports = DashboardClient;