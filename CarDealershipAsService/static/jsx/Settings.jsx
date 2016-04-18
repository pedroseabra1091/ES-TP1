import React from 'react';
import { Link, browserHistory } from 'react-router';

var Settings = React.createClass({
 
  getInitialState:function() {
        return {
           name:"",
           email:"",
           password: "",
           contact:""
        };
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

          $("input#name").val(result.name);
          this.setState({name : result.name})
          $("input#email").val(result.email);
          this.setState({email : result.email})
          $("input#password").val(result.password);
          this.setState({password : result.password})
          $("input#contact").val(result.contact);
          this.setState({contact : result.contact})
        }.bind(this),
        error:function(){
          console.log("error with ajax");
        }
      });
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
      id: this.props.id,
      user : this.props.userType,
  		name: this.state.name,
  		email: this.state.email,
  		password: this.state.password,
  		contact:this.state.contact
  	};	
    console.log(this.state.name);
    console.log(this.state.email);

  	evt.preventDefault();
	  	$.ajax({
	  		type:"POST",
	  		url: "/api/v1/changeInfo",
	  		contentType: 'application/json',
	  		dataType: "json",
	  		data: JSON.stringify(data),
        success:function(result){
            console.log(result.message);
            $("div.notification").html(result.message).show().delay(2500).fadeOut();
        },
        error:function(){
          console.log(result.message);
        }
      });
 	},

  render:function(){

    var styles = {
      color: "black"
    };

    return(
            <div>
              <div className = "notification is-error"><button className="delete"></button></div>
              <div className="column is-half margin-nopadd">
        				<form className = "form-dealership" onSubmit = {this.handleSubmit} >
          				<p className=" userParams">Name</p>
    					  	<input id="name" className="input is-medium customInput" type="text" onChange = {this.handleChange.bind(null,'name')}/>
                  <br></br>
      						<p className=" userParams">Email</p>
      						<input id="email" className="input is-medium customInput" type="text" onChange = {this.handleChange.bind(null,'email')}/>
      						<br></br>
                  <p className=" userParams">Password</p>
      			  		<input id="password" className="input is-medium customInput" type="password" onChange = {this.handleChange.bind(null,'password')}/>
      						<br></br>
                  <p className=" userParams">Contact</p>
      			  	  <input id="contact" className="input is-medium customInput" type="text" onChange = {this.handleChange.bind(null,'contact')}/>
                  <br></br>
                  <div className="centerize paddtop">
      						  <button type="submit" style={styles} className="button is-warning is-large">Save</button>
                  </div>  
    		    		</form>
              </div>
            </div>
    );
  }
});

module.exports = Settings;