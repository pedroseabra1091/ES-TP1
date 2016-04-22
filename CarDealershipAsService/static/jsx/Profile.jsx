import React from 'react';
import { Link } from 'react-router';
import Settings from './Settings.jsx';


var Profile = React.createClass({

	getInitialState: function(){
	    return ({
	        settings: false  
	    });
	},

	componentDidMount: function() {
		
	 	var data = {
	 		id : this.props.id,
	 		user : this.props.userType
	 	};

	 	$.ajax({
	  		type:"POST",
	  		url: "/api/v1/userInfo",
	  		contentType: 'application/json',
	  		dataType: "json",
	  		data: JSON.stringify(data),
        success:function(result){

        	$("p.userName").html(result.name).show();
        	$("p.email").html(result.email).show();
        	$("p.contact").html(result.contact).show();
        },
        error:function(){
          console.log("error with ajax");
        }
      });
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

	render: function() {
		var styles = {
			color: "black"
		};

		return (
			<div className = "container">
				<div className="columns">
					<div className = "column rightrize">
						<img src ="../../static/assets/user.png" />
						<p className = 'userName'></p>
					</div>
					<div className = "column paddtop-profile">
						<p className=" userParams inlinelocked">User type:</p>
						<p className="userProps inlinelocked">{this.props.userType}</p>
						<br></br>
						<p className="userParams inlinelocked">Email:</p>
						<p className = "email userData inlinelocked"></p>
						<br></br>
						<p className="userParams inlinelocked">Contact:</p>
						<p className = "contact userData inlinelocked"></p>
					</div>
				</div>
				<div className = "centerize">
					<button className = "button" onClick={this.handleClick.bind(null,'Settings')} style={styles} className="button is-danger is-large buttonmargin">Settings</button>
					{this.state.settings ? <Settings userType = {this.props.userType} id = {this.props.id} /> : null}
					{this.props.children}
				</div>
			</div>
		);
	}


});

module.exports = Profile;

