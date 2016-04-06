import React from 'react'

var LoginForm = React.createClass({
	getInitialState : function(){
		return ({
			email : '', 
			password : '', 
			errorState : '',
			loginState : ''
		});
	},

	
	handleChange : function(type, e){
		if(type == 'email'){
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
			success: function(cenas){
				console.log(cenas);
				this.setState({errorState:cenas.erro, loginState:cenas.loginState});
			}.bind(this)
		});
		this.setState({email : '', password : ''});
	},

	render: function(){

		return (
			<div>
				<form className="loginForm" onSubmit={this.handleSubmit}>
					<div>
						<input type="text"  placeholder="your email here" value={this.state.email} onChange={this.handleChange.bind(null,'email')}/>
						<input type="password"  placeholder="password" value={this.state.password} onChange={this.handleChange.bind(null,'password')}/>
					</div>
					<input type="submit" value="Login" />
				</form>
				<div>
					<p>{this.state.loginState}<br/>{this.state.errorState}</p>
				</div>
			</div>
		)
	}


});

module.exports = LoginForm;