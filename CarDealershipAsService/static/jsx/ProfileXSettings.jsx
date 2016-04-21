import React from 'react';
import { Link, browserHistory } from 'react-router';

var ProfileXSettings = React.createClass({
 
  getInitialState:function() {
        return {
           name:null,
           location:null,
           owner:null,
           contact:null
        };
  },

  componentDidMount: function() {
    
    var data = {
      dealID : this.props.id
    };

    $.ajax({
        type:"POST",
        url: "/api/v1/dealershipDetails",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(data),
        success:function(result){
          this.setState({
            name : result.name, 
            location : result.location, 
            owner : result.owner, 
            contact : result.contact
          });
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
   		});
   	}else if(type == 'location'){
    	this.setState({
    		location: evt.target.value
    	});
    }else if(type == 'contact'){
    	this.setState({
    		contact: evt.target.value
    	});
    }
  },

  handleSubmit:function(evt){
  	evt.preventDefault();

  	var data = {
      dealID : this.props.id,
  		name: this.state.name,
  		location: this.state.location,
  		contact:this.state.contact
  	};	

  	
  	$.ajax({
  		type:"POST",
  		url: "/api/v1/changeDealershipInfo",
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
    					  	<input id="name" className="input is-medium customInput" type="text" onChange={this.handleChange.bind(null,'name')} placeholder={this.state.name}/>
                  <br></br>
      						<p className=" userParams">Location</p>
      						<input id="email" className="input is-medium customInput" type="text" onChange={this.handleChange.bind(null,'location')} placeholder={this.state.location}/>
      						<br></br>
                  <p className=" userParams">Contact</p>
      			  		<input id="password" className="input is-medium customInput" type="password" onChange={this.handleChange.bind(null,'contact')} placeholder={this.state.contact}/>
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

module.exports = ProfileXSettings;