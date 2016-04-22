import React from 'react';

var CarDataSettings = React.createClass({

	getInitialState() {
	    return {
	       'dealership' : "",
	       'brand' : "",
	       'model' : "",
	       'color' : "",
	       'fuelType' : "",
	       'plate' : "",
	       'mileage':"",
	       'price' : "",
	       'year' : ""
	    };
	},

	handleChange:function(type,evt){
		if(type == 'Dealership')
			this.setState({dealership: evt.target.value});
		else if (type == 'brand')
			this.setState({brand : evt.target.value});
		else if (type == 'model')
			this.setState({model : evt.target.value});
		else if (type == 'color')
			this.setState({color : evt.target.value});
		else if (type == 'fuelType')
			this.setState({fuelType : evt.target.value});
		else if (type == 'plate')
			this.setState({plate : evt.target.value});
		else if (type == 'mileage')
			this.setState({mileage : evt.target.value});
		else if (type == 'price')
			this.setState({price : evt.target.value});
		else if (type == 'year')
			this.setState({year : evt.target.value});
	},

	handleSubmit:function(evt){
		var data = {
			'id':this.props.id,
			'carID':this.props.car.id,
			'dealership' : this.state.dealership,
			'brand' : this.state.brand,
			'model' : this.state.model,
			'color' : this.state.color,
			'fuelType' : this.state.fuelType,
			'plate' : this.state.plate,
			'mileage':this.state.mileage,
			'price' : this.state.price,
			'year' : this.state.year
		}
		evt.preventDefault();
		 $.ajax({
	        type:"POST",
	        url: "/api/v1/updateCarState",
	        contentType: 'application/json',
	        dataType: "json",
	        data: JSON.stringify(data),
	        success:function(result){
	        	console.log(result.message);
	        }.bind(this),
	        error:function(){
	          console.log("error with ajax");
	        }
      	});
  	},

	render: function() {
		var styles = {
			color: "black"
		};
		console.log('[Car Data Settings] dealerships: '+this.props.dealerships[0].name);
		return (
			<div>
              <div className = "notification is-error"><button className="delete"></button></div>
              <div className="column is-half margin-nopadd">
        		 	<form className = "form-dealership" onSubmit = {this.handleSubmit} >
        		 	 	<select className="input customInput" onChange = {this.handleChange.bind(null,'Dealership')}>
        		 		{this.props.dealerships.map(function(item){
        		 			return (
			              		<option key={item.id}>{item.name}</option> 
			              	);
			            },this)}
			           </select>
      					<p className=" userParams">Brand</p>
      						<input  className="input is-medium customInput" type="text" placeholder={this.props.car.brand} onChange = {this.handleChange.bind(null,'brand')}/>
      						<br></br>
                 		<p className=" userParams">Model</p>
      			  			<input className="input is-medium customInput" type="text" placeholder={this.props.car.model} onChange = {this.handleChange.bind(null,'model')}/>
      						<br></br>
                  		<p className=" userParams">Color</p>
      			  	  		<input className="input is-medium customInput" type="text" placeholder={this.props.car.color} onChange={this.handleChange.bind(null,'color')}/>
                  			<br></br>
                  		<p className=" userParams">Fuel Type</p>
      			  	  		<input className="input is-medium customInput" type="text" placeholder={this.props.car.fuelType} onChange = {this.handleChange.bind(null,'fuelType')}/>
                  			<br></br>
                  		<p className=" userParams">Plate</p>
      			  	  		<input className="input is-medium customInput" type="text" placeholder={this.props.car.plate} onChange = {this.handleChange.bind(null,'plate')}/>
                  			<br></br>
              			<p className=" userParams">Mileage</p>
  			  	  		<input className="input is-medium customInput" type="text" placeholder={this.props.car.mileage} onChange = {this.handleChange.bind(null,'mileage')}/>
              			<br></br>
                  		<p className=" userParams">Price</p>
      			  	  		<input className="input is-medium customInput" type="text" placeholder={this.props.car.price} onChange = {this.handleChange.bind(null,'price')}/>
                  			<br></br>
                  		<p className=" userParams">Year</p>
      			  	  		<input className="input is-medium customInput" type="text" placeholder={this.props.car.year} onChange = {this.handleChange.bind(null,'year')}/>
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

module.exports = CarDataSettings;