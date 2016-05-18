import React from 'react';
import ReactDOM from 'react-dom';
import CarDetailedData from './CarDetailedData.jsx';


var CarDetails = React.createClass({

  	render: function() {
	    return (
	      <div id = "unmount" onClick = {this.props.clickHandler} className="card">
			  <div className="card-image">
			    <figure className="image is-4by3">
			      <img className="car-img" src="https://s3-eu-west-1.amazonaws.com/carimagesbucket/car-example.jpg" />
			    </figure>
			  </div>
			  <div className="card-content">
			    <div className="media">
			      <div className="media-content"> 
			      	<p className="inlinelocked carInfo">Brand</p>
			        <p className="subtitle is-4"> {this.props.carInfo.brand} </p>
			        <p className="inlinelocked carInfo">Model</p>
			        <p className="subtitle is-4"> {this.props.carInfo.model} </p>
			        <p className="inlinelocked carInfo">Fuel</p>
			        <p className="subtitle is-4"> {this.props.carInfo.fuelType} </p>
			        <p className="inlinelocked carInfo">Mileage</p>
			        <p className="subtitle is-4"> {this.props.carInfo.mileage} km</p>
			        <p className="inlinelocked carInfo">Price</p>
			        <p className="subtitle is-4"> {this.props.carInfo.price} €</p>
			      </div>
			    </div>
		 	  </div>
	 	 	</div>
    	);
  	}
});


module.exports = CarDetails;