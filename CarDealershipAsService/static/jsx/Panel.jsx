import React from 'react';

var Panel = React.createClass({

	render: function() {
		return (
			<aside className="menu menu-search">
			  <p className="menu-label">
			    Fuel Type
			  </p>
			  <ul className="menu-list">
			    <li><a>Gasoline</a></li>
			    <li><a>Diesel</a></li>
			    <li><a>Gas</a></li>
			  </ul>
			  <p className="menu-label">
			    Brand - Model
			  </p>
			  <ul className="menu-list">
			    <li><a>Audi</a></li>
			    <li>
			      <a>BMW</a>
			      <ul>
			        <li><a>Serie 1</a></li>
			        <li><a>Serie 3</a></li>
			        <li><a>Serie 5</a></li>
			      </ul>
			    </li>
			    <li><a>Citroen</a></li>
			    <li><a>Fiat</a></li>
			  </ul>
			  <p className="menu-label">
			    Price range
			  </p>
			  <ul className="menu-list">
			    <li><a> > 10000 </a></li>
			    <li><a> > 30000</a></li>
			    <li><a> > 50000</a></li>
			  </ul>
			  <p className="menu-label">
			    District
			  </p>
			  <ul className="menu-list">
			  	<li><a>Braga</a></li>
			    <li><a>Coimbra</a></li>
			    <li><a>Leiria</a></li>
			    <li><a>Lisbon</a></li>
			    <li><a>Porto</a></li>

			  </ul>
			</aside>
		);
	}

});

module.exports = Panel;