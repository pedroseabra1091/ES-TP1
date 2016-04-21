import React from 'react';

var MyCars = React.createClass({

  componentDidMount: function() {
    
    var data = {
      id : this.props.id
    };

    $.ajax({
        type:"POST",
        url: "/api/v1/viewMyCars",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(data),
        success:function(result){	
        	 console.log(result.data)
	    	 $.each(result.data, function(index,car) {
	    	 	this.
	           	$('#card-container').append(
	           		'<div class="card">' +
					  '<div class="card-image">' +
					    '<figure class="image is-4by3">' +
					      '<img class="car-img" src="../../static/assets/car-example.jpg" />' +
					    '</figure>' +
					  '</div>' +
					  '<div class="card-content">' +
					    '<div class="media">' +
					      '<div class="media-content">' + 
					      	'<p class="inlinelocked carInfo">Brand</p>' +
					        '<p class="subtitle is-4">' + car.brand + '</p>' +
					        '<p class="inlinelocked carInfo">Model</p>' +
					        '<p class="subtitle is-4">' + car.model + '</p>' +
					        '<p class="inlinelocked carInfo">Fuel</p>' + 
					        '<p class="subtitle is-4">' + car.fuelType + '</p>' +
					        '<p class="inlinelocked carInfo">Mileage</p>' + 
					        '<p class="subtitle is-4">' + car.mileage + ' km' + '</p>' +  
					       '</div>' +
					    '</div>' +
				 	 '</div>' +
				  '</div>')
	         });
        },
        error:function(){
          console.log("error with ajax");
        }
      });
  },
  render: function() {
		return (
			<div id = "card-container" className="column is-two-thirds absoluted">
				
			</div>
		);
	}
});

module.exports = MyCars;