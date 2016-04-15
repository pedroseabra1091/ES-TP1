import React from 'react';
import { Link,browserHistory } from 'react-router';

var LoginForm = React.createClass({
	getInitialState : function(){
		return ({
			user: "",
			email : "", 
			password : ""
		});
	},
	
	handleChange : function(type, e){
		if(type == 'owner'){
			console.log("owner state");
			this.setState({user: "owner"});
		}

		else if(type == 'client'){
			console.log('client state');
			this.setState({user: "client"});
		}

		else if(type == 'email'){
			this.setState({email : e.target.value});
		}
		else if(type == 'password'){
			this.setState({password : e.target.value});
		}
	},

	handleSubmit : function(e){
		e.preventDefault(); 
		var email = this.state.email.trim();
		var pw = this.state.password.trim();
		if(!email || !pw){
			return;
		}

		//info a enviar para o servidor processar
		var data = { 
			user : this.state.user,
			email : this.state.email,
			password : this.state.password
		};

		//enviar request ao servidor
		$.ajax({
			url : "api/v1/login",
			dataType: 'json',
			contentType: 'application/json',
			type: 'POST',
			data: JSON.stringify(data),
			success: function(result){
				if(result.message == "Email not found"){
					console.log('email not found')
		            $("div.notification").html(result.message).show().delay(2500).fadeOut();
		        }
		        else if(result.message == "Invalid password"){
		        	console.log('pw not found')
		            $("div.notification").html(result.message).show().delay(2500).fadeOut();
		        }
		        else if(result.message == "You didnt choose a user type"){
		        	console.log('user not found')
		            $("div.notification").html(result.message).show().delay(2500).fadeOut();
		        }
		        else{
            		console.log('success');
            		if(this.state.user == "client"){
            			console.log(result.id)
		        		browserHistory.push('/dashboardClient/' + result.userType + '/' + result.id);

            		}
		        	else if(this.state.user == "owner"){
		        		browserHistory.push('/dashboardOwner/' + result.id + result.userType + '/' + result.id);
		        	}
		        	else
		        		browserHistory.push('/');
		        }
			}.bind(this),
			error:function(){
          		console.log("error with ajax");
        	}
		});
		this.setState({email : '', password : ''});
	},

	render: function(){

		var styles = {
			color: "black"
		}

		return (
			<div className = "container">
				<div className = "notification is-error"><button className="delete"></button></div>
				<div className = "column login">
					<form onSubmit={this.handleSubmit}>
					  	<div className="centerize">
							  <label className="radio">
							    <input type="radio" name="useType" onChange={this.handleChange.bind(null,'client')} />
							    Client
							  </label>
							  <label className="radio">
							    <input type="radio" name ="useType" onChange={this.handleChange.bind(null,'owner')} />
							    Owner
							  </label>
						</div>
						<label className="label">Email</label>
						<input className="input is-medium" type="text" value={this.state.email} onChange={this.handleChange.bind(null,'email')}/>
						<label className="label">Password</label>
						<input className="input is-medium" type="password" value={this.state.password} onChange={this.handleChange.bind(null,'password')}/>
						<div className="centerize paddtop">
						  <button type="submit" style={styles} className="button is-info is-large buttonmargin">Login</button>
						  <Link to="/register"><button type="submit" style={styles} className="button is-success is-large">Register</button></Link>
		     			</div>  
					</form>
				</div>
			</div>	
		);
	}
});

module.exports = LoginForm;