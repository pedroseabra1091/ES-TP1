import React from 'react';

var DealershipForm = React.createClass({

	getInitialState:function() {
        return {
           name:"",
           contact:"",
           location:""
        };
  },

  handleChange: function(type,evt) {
   	if(type == 'name'){
   		this.setState({
   			name: evt.target.value
   		})
   	}
    else if(type == 'location'){
    	this.setState({
    		location: evt.target.value
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
  	  name: this.state.name,
  	  contact:this.state.contact,
  	  location: this.state.location,
  	};	

  	evt.preventDefault();
	  	$.ajax({
	  		type:"POST",
	  		url: "/api/v1/createDealership",
	  		contentType: 'application/json',
	  		dataType: "json",
	  		data: JSON.stringify(data),
        success:function(result){
            console.log(result.message);
            $("div.notification").html(result.message).show().delay(2500).fadeOut();
        },
        error:function(){
          console.log('ajax error');
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
              <div className="absoluted margin-paddtop">
  				      <form className ="form-dealership" onSubmit = {this.handleSubmit} >
    					     <p className=" userParams">Dealership Name</p>
  				  	     <input className="input is-medium customInput" type="text" onChange = {this.handleChange.bind(null,'name')}/>
           			   <br></br>
          				 <p className=" userParams">Dealership Contact</p>
          				 <input className="input is-medium customInput" type="text" onChange = {this.handleChange.bind(null,'contact')}/>
          				 <br></br>
           			   <p className=" userParams">Dealership Location</p>
  		  			     <input className="input is-medium customInput" type="text" onChange = {this.handleChange.bind(null,'location')}/>
  					       <br></br>
            			 <div className="centerize paddtop">
  						        <button type="submit" style={styles} className="button is-warning is-large">Create Dealership</button>
            			 </div>  
  	    		     </form>
                </div>
              </div>
    );
  }
});

module.exports = DealershipForm;