import React from 'react';

var CarForm = React.createClass({

	getInitialState:function() {
        return {
           dealership:"",
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

  componentDidMount: function() {
    
    var data = {
      id : this.props.id,
      user : this.props.userType
    };

    $.ajax({
        type:"POST",
        url: "/api/v1/checkDealerships",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(data),
        success:function(result){
          $.each(result.data, function(index,dealership) {
              $('#dealerships').append($("<option/>", {
                  value: dealership.id,
                  text: dealership.name
              }));
          });
        },
        error:function(){
          console.log("error with ajax");
        }
      });
  },

  handleChange: function(type,evt) {
    if(type == 'Dealership'){
      this.setState({
        dealership:evt.target.value
      })
    }
   	else if(type == 'Brand'){
   		this.setState({
   			brand: evt.target.value
   		})
   	}
    else if(type == 'Model'){
    	this.setState({
    		model: evt.target.value
    	})
    }
    else if(type == 'Color'){
    	this.setState({
    		color: evt.target.value
    	})
    }
    else if(type == 'Plate'){
      this.setState({
        plate: evt.target.value
      })
    }
    else if(type == 'Mileage'){
      this.setState({
        mileage: evt.target.value
      })
    }
    else if(type == 'FuelType'){
      this.setState({
        fuelType: evt.target.value
      })
    }
    else if(type == 'Year'){
      this.setState({
        year: evt.target.value
      })
    }
    else if(type == 'Price'){
      this.setState({
        price: evt.target.value
      })
    }
  },

  handleSubmit:function(evt){
  	
  	var data = {
      id: this.props.id,
      dealership: this.state.dealership,
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
	  		url: "/api/v1/createCar",
	  		contentType: 'application/json',
	  		dataType: "json",
	  		data: JSON.stringify(data),
        success:function(result){
            $("div.notification").html(result.message).show().delay(2500).fadeOut();
        }.bind(this),
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
        <div className="column is-half absoluted margin-paddtop">
          <div className = "notification is-error"><button className="delete"></button></div>
  				<form className ="form-dealership" onSubmit = {this.handleSubmit} >
    					 <span className=" userParams">Dealership</span>
              <select id="dealerships" className="input customInput" onChange = {this.handleChange.bind(null,'Dealership')}>
              <option></option>
              </select>
              <br></br>
              <span className=" userParams">Brand</span>
              <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'Brand')}/>
              <br></br>
              <span className=" userParams">Model</span>
              <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'Model')}/>
              <br></br>
              <span className=" userParams">Color</span>
              <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'Color')}/>
              <br></br>
              <span className=" userParams">Plate</span>
              <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'Plate')}/>
              <br></br>
              <span className=" userParams">Mileage</span>
              <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'Mileage')}/>
              <br></br>
              <span className=" userParams">Year</span>
              <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'Year')}/>
              <br></br>
              <span className=" userParams">Fuel Type</span>
              <select className="input customInput" onChange = {this.handleChange.bind(null,'FuelType')}>
                <option></option>
                <option>Gas</option>
                <option>Gasoline</option>
                <option>Diesel</option>
              </select>
              <br></br>
              <span className=" userParams">Price</span>
              <input className="input customInput" type="text" onChange = {this.handleChange.bind(null,'Price')}/>
              <div className="centerize paddtop">
                <button type="submit" style={styles} className="button is-warning is-large">Add Car</button>
              </div>  
  	    	</form>
      </div>
    );
  }
});

module.exports = CarForm;