import React from 'react';
import { Link, browserHistory } from 'react-router';

var RegistComponent = React.createClass({
 
  getInitialState:function() {
        return {
            user:"",
            name:"",
            email:"",
            password: "",
        	  contact:""
        };
    },

  handleChange: function(type,evt) {
    if(type == 'owner'){
      console.log("owner state");
      this.setState({user:"owner"});
    }

    else if(type == 'client'){
      console.log('client state');
      this.setState({user:"client"});
    }

   	else if(type == 'name'){
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
      user: this.state.user,
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
          
          if(result.message == "That account already exists"){
            $("div.notification").html(result.message).show().delay(2500).fadeOut();
          }
          else if(result.message == "You didnt choose a user type"){
            $("div.notification").html(result.message).show().delay(2500).fadeOut();
          }
          else{
            console.log(result.message);
            browserHistory.push('/');
          }
        },
        error:function(){
          console.log("error with ajax");
        }
      });
 	},

  render:function(){

    var styles = {
      color: "black"
    };

    return(
        
    	  <div className="container">
          <div className = "notification is-error"><button className="delete"></button></div>
  				<div className = "column login">
      				<form onSubmit = {this.handleSubmit} >
                <div className="centerize">
                      <label className="radio">
                          <input type="radio" name="useType" onChange={this.handleChange.bind(null,'client')} />
                        <span>Client</span>
                      </label>
                      <label className="radio">
                          <input type="radio" name ="useType" onChange={this.handleChange.bind(null,'owner')} />
                        <span>Owner</span>
                      </label>
                </div>
        				<label className="label">Name</label>
  					  	<input className="input is-medium" type="text" value = {this.state.name}  onChange = {this.handleChange.bind(null,'name')}/>
    						<label className="label">Email</label>
    						<input className="input is-medium" type="text" value = {this.state.email}  onChange = {this.handleChange.bind(null,'email')}/>
    						<label className="label">Password</label>
    			  		<input className="input is-medium" type="password" value = {this.state.password}  onChange = {this.handleChange.bind(null,'password')}/>
    						<label className="label">Contact</label>
    			  		<input className="input is-medium" type="text" value = {this.state.contact}  onChange = {this.handleChange.bind(null,'contact')}/>
                <div className="centerize paddtop">
    						  <button type="submit" style={styles} className="button is-success is-large">Register</button>
                </div>  
  		    		</form>
  	    	  </div>	
	       </div>
    );
  }
});

module.exports = RegistComponent;