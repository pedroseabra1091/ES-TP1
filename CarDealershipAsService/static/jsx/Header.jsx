import React from 'react';

var Header = React.createClass ({
  render: function(){
    return(
    	<div className = "leftrize">
	    	<div className="inlinelocked">
	    		<img src ="../static/assets/car_dealer.png" />
	    	</div>
	    	<h1 className="title inlinelocked">Car dealership as a service</h1>
	    </div>
    );
  }
});

module.exports = Header;
