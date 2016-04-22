import React from 'react';
import { Link,browserHistory } from 'react-router';
import Settings from './Settings.jsx';


var ProfileX = React.createClass({

	getInitialState: function(){
	    return ({
	        settings: false,
	        profileName : "",
	        profileEmail : "",
	        profileContact : ""
	    });
	},

	fetch : function(someData){

	 	$.ajax({
	  		type:"POST",
	  		url: "/api/v1/userInfo",
	  		contentType: 'application/json',
	  		dataType: "json",
	  		data: JSON.stringify(someData),
	        success:function(result){
	        	console.log('[ProfileX] : profile data received successfully. Name: '+result.name);
	        	{this.setState({
	        		profileName : result.name,
	        		profileEmail : result.email,
	        		profileContact : result.contact
	        	})}
	        }.bind(this),
	        error:function(){
	          console.log("error with ajax");
	        }
      	});
	},

	componentDidMount: function() {
		var data = {
	 		id : this.props.id,
	 		user : this.props.userType
	 	};
		
	 	this.fetch(data);
	},

	componentWillReceiveProps: function(nextProps){
		var data = {
	 		id : nextProps.id,
	 		user : nextProps.userType
	 	};
	 	this.fetch(data);
	},

	handleClick: function(type,e){
		if(type == 'Settings'){
			this.setState({'settings' : true})
			$("div.columns").hide();
			$("button.button").hide();

		}
		else
			console.log('Unknown click');
	},

	deleteOwnerHandler : function(){
		var someData = {
			'id' : this.props.id
		};
		console.log(someData);

		$.ajax({
			url: '/api/v1/deleteOwner',
			dataType: 'json',
			contentType: 'application/json',
			type: 'POST',
			data: JSON.stringify(someData),
			success: function(data) {
				browserHistory.push('/');	
			}.bind(this),
			error: function() {
				console.error('nooooooo');
			}.bind(this)
		});
	},

	render: function() {
		var styles = {
			color: "black"
		}

		return (
			<div className = "container">
				<div className="columns">
					<div className = "column rightrize">
						<img src ="../../static/assets/user.png" />
						<p className="userNamePerfil" >{this.state.profileName}</p>
					</div>
					<div className = "column paddtop-profile">
						<p className=" userParams inlinelocked">User type:</p>
						<p className="userProps inlinelocked">{this.props.userType}</p>
						<br/>
						<p className="userParams inlinelocked">Email:</p>
						<p className = "userData inlinelocked">{this.state.profileEmail}</p>
						<br/>
						<p className="userParams inlinelocked">Contact:</p>
						<p className = "userData inlinelocked">{this.state.profileContact}</p>
					</div>
				</div>
				<div className = "centerize">
					<button className="button is-info is-normal buttonmargin"  onClick={this.deleteOwnerHandler}>Delete Owner</button>
				</div>
			</div>
		);
	}


});

module.exports = ProfileX;

