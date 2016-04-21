import React from 'react';
import Dealership from './Dealership.jsx';
import Profile from './Profile.jsx';
import Search from './Search.jsx';
import AllUsers from './AllUsers.jsx';
import SearchOptions from './SearchOptions.jsx';

var DashboardOwner = React.createClass({

	getInitialState: function(){
		console.log(this.props.params.userType);
		console.log(this.props.params.id);
	    return ({
	        profile : false,
	        search : false,
	        dealership : false,
	        logout : false,
	        users : false 
	    });
	},

	handleClick: function(type,e){
		if(type == 'Profile'){
			this.setState({'profile' : true})
			this.setState({'search' : false})
			this.setState({'dealership' : false})
			this.setState({'logout' : false})
			this.setState({'users' : false})
		}
		else if(type == 'Search'){ 
			this.setState({'search' : true})
			this.setState({'profile' : false})
			this.setState({'dealership' : false})
			this.setState({'logout' : false})
			this.setState({'users' : false})
		}
		else if(type == 'Dealership'){
			this.setState({'dealership' : true})
			this.setState({'profile' : false})
			this.setState({'search' : false})
			this.setState({'logout' : false})
			this.setState({'users' : false})
		}
		else if(type == 'Logout'){
			this.setState({'logout' : true})
			this.setState({'profile' : false})
			this.setState({'search' : false})
			this.setState({'dealership' : false})
			this.setState({'users' : false})
		}
		else if(type == 'Users'){
			this.setState({'users' : true})
			this.setState({'profile' : false})
			this.setState({'search' : false})
			this.setState({'dealership' : false})
			this.setState({'logout' : false})
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
					    <li onClick = {this.handleClick.bind(null,'Dealership')}><a><h2 className = "title menu">Dealerships</h2></a></li>
					    <li onClick = {this.handleClick.bind(null,'Logout')}><a><h2 className = "title menu">Logout</h2></a></li>
					    <li onClick = {this.handleClick.bind(null,'Users')}><a><h2 className = "title menu">Users</h2></a></li>
					  </ul>
					</div>
					 {this.state.profile ? <Profile userType = {this.props.params.userType} id = {this.props.params.id} /> : null}
					 {this.state.logout ? <Search userType = {this.props.params.userType} id = {this.props.params.id} /> : null}
				</div>
				{this.state.dealership ? <Dealership userType = {this.props.params.userType} id = {this.props.params.id} /> : null}
				{this.state.search ? <SearchOptions userType = {this.props.params.userType} id = {this.props.params.id} /> : null}
				{this.state.users ? <AllUsers userType={this.props.params.userType} id={this.props.params.id}/> : null}
				{this.props.children}
			</div> 
		);
	}

});

module.exports = DashboardOwner;