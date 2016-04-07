import React from 'react';

import Footer from './Footer.jsx';

var Layout = React.createClass ({
  render: function(){
    return(
    	<div className = "leftrize">
	    	<div className="inlinelocked">
	    		<img src ="../static/assets/car_dealer.png" />
	    	</div>
	    	<h1 className="title inlinelocked">Car dealership as a service</h1>
	    	<div> 
	    		{this.props.children}
	    	</div>
	    	<Footer/>
	    </div>
    );
  }
});

module.exports = Layout;
