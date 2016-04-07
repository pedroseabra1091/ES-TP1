import React from 'react';
import {Link} from 'react-router';

var LoginForm = React.createClass({
	getInitialState : function(){
		return ({
			client: '',
			email : '', 
			password : '', 
			errorState : '',
			loginState : ''
		});
	},
	
	handleChange : function(type, e){
		if(type == 'owner'){
			console.log("owner state");
			this.setState({client: "false"});
		}

		else if(type == 'client'){
			console.log('client state');
			this.setState({client: "true"});
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
				console.log(result);
				this.setState({errorState:result.erro, loginState:result.loginState});
			}.bind(this)
		});
		this.setState({email : '', password : ''});
	},

	render: function(){

		return (
			<div className = "container">
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
						  <button type="submit" className="button is-info is-large buttonmargin">Login</button>
							  <Link to="/register"><button type="submit" className="button is-success is-large">Register</button></Link>
		     			</div>  
					</form>
				</div>
			</div>	
		);
	}
});

module.exports = LoginForm;