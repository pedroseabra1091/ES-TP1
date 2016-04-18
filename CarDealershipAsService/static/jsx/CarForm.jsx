import React from 'react';

var CarForm = React.createClass({

	getInitialState:function() {
		console.log(this.props.id);
        return {
           brand:"",
           model:"",
           color:"",
           plate:"",
           mileage:"",
           fuelType:"",
           year:"",
           price:""
        };
  },

  handleChange: function(type,evt) {
   	if(type == 'brand'){
   		this.setState({
   			brand: evt.target.value
   		})
   	}
    else if(type == 'model'){
    	this.setState({
    		location: evt.target.value
    	})
    }
    else if(type == 'color'){
    	this.setState({
    		contact: evt.target.value
    	})
    }
    else if(type == 'plate'){
      this.setState({
        contact: evt.target.value
      })
    }
    else if(type == 'mileage'){
      this.setState({
        contact: evt.target.value
      })
    }
    else if(type == 'fuelType'){
      this.setState({
        contact: evt.target.value
      })
    }
    else if(type == 'year'){
      this.setState({
        contact: evt.target.value
      })
    }
    else if(type == 'price'){
      this.setState({
        contact: evt.target.value
      })
    }
  },

  handleSubmit:function(evt){
  	
  	var data = {
      id: this.props.id,
  	  brand:this.state.brand,
      model:this.state.model,
      color:this.state.color,
      plate:this.state.plate,
      mileage:this.state.mileage,
      fuelType:this.state.fuelType,
      year:this.state.year,
      price:this.state.price
  	};	

  	evt.preventDefault();
	  	$.ajax({
	  		type:"POST",
	  		url: "/api/v1/addCar",
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
              <div className="column is-half absoluted margin-paddtop">
        				<form className ="form-dealership" onSubmit = {this.handleSubmit} >
          					 <span className=" userParams">Dealership</span>
                    <select className="input customInput">
                      <option>Autotrader</option>
                    </select>
                    <span className=" userParams">Brand</span>
                    <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'name')}/>
                    <br></br>
                    <span className=" userParams">Model</span>
                    <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'contact')}/>
                    <br></br>
                    <span className=" userParams">Color</span>
                    <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'location')}/>
                    <br></br>
                    <span className=" userParams">Plate</span>
                    <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'location')}/>
                    <br></br>
                    <span className=" userParams">Mileage</span>
                    <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'location')}/>
                    <br></br>
                    <span className=" userParams">Fuel type</span>
                    <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'location')}/>
                    <br></br>
                    <span className=" userParams">Year</span>
                    <select className="input customInput">
                      <option>Gas</option>
                      <option>Gasoline</option>
                      <option>Diesel</option>
                    </select>
                    <br></br>
                    <span className=" userParams">Price</span>
                    <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'location')}/>
                    <div className="centerize paddtop">
                      <button type="submit" style={styles} className="button is-warning is-large">Add Car</button>
                    </div>  
        	    	</form>
              </div>
            </div>
    );
  }
});

module.exports = CarForm;