import React from 'react';
import {Link} from 'react-router';

import Footer from './Footer.jsx';

var Layout = React.createClass ({
  render: function(){
    return(
    	<div>
	    	<div className = "leftrize">
		    	<div className="inlinelocked">
		    		<Link to="/"><img src ="../static/assets/car_logo.png" /></Link>
		    	</div>
		    	<h1 className="title inlinelocked">Car dealership as a service</h1>
		    </div>
	    	<div> 
	    		{this.props.children}
	    	</div>
	    	<Footer/>
		</div>
    );
  }
});

module.exports = Layout;
