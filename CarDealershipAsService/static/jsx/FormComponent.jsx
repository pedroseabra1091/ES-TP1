import React from 'react';
import {Link} from 'react-router';

var FormComponent = React.createClass({
 
  getInitialState:function() {
        return {
            name:"",
            email:"",
            password: "",
        	  contact:"",
            feedback:""
        };
    },

  handleChange: function(type,evt) {
   	if(type == 'name'){
   		this.setState({
   			name: evt.target.value
   		})
   	}
    else if(type == 'email'){
    	this.setState({
    		email: evt.target.value
    	})
    }
    else if(type == 'password'){
    	this.setState({
    		password: evt.target.value
    	})

    }
    else if(type == 'contact'){
    	this.setState({
    		contact: evt.target.value
    	})
    }
  },

  handleSubmit:function(evt){
  	
  	var data = {
  		name: this.state.name,
  		email: this.state.email,
  		password: this.state.password,
  		contact:this.state.contact
  	};	

  	evt.preventDefault();
	  	$.ajax({
	  		type:"POST",
	  		url: "/api/v1/register",
	  		contentType: 'application/json',
	  		dataType: "json",
	  		data: JSON.stringify(data),
        success:function(result){
          console.log(result.result);
          <Link to='/'></Link>
        },
        error:function(){

        }
      });
 	},

  render:function(){
    return(
    	<div className="container">
    		<div className="columns">
				<div className = "column login">
    				<form onSubmit = {this.handleSubmit} >
    					<label className="label">Name</label>
	    				<p className="control">
					  		<input className="input is-medium" type="text" value = {this.state.name}  onChange = {this.handleChange.bind(null,'name')}/>
						  </p>
  						<label className="label">Email</label>
  						<p className="control">
  					  		<input className="input is-medium" type="text" value = {this.state.email}  onChange = {this.handleChange.bind(null,'email')}/>
  						</p>
  						<label className="label">Password</label>
  						<p className="control">
  					  		<input className="input is-medium" type="password" value = {this.state.password}  onChange = {this.handleChange.bind(null,'password')}/>
  						</p>
  						<label className="label">Contact</label>
  						<p className="control">
  					  		<input className="input is-medium" type="text" value = {this.state.contact}  onChange = {this.handleChange.bind(null,'contact')}/>
  						</p>
              <div className="centerize paddtop">
  						  <button type="submit" className="button is-success is-large">Register</button>
              </div>  
		    		</form>
	    		</div>	
	    	</div>
    	</div>
    );
  }
});

module.exports = FormComponent;