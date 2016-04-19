import React from 'react';

var Board = React.createClass({

	render: function() {
		return (
			<div className="column">
				<div className="card">
				  <div className="card-image">
				    <figure className="image is-4by3">
				      <img src="http://placehold.it/300x225" alt="" />
				    </figure>
				  </div>
				  <div className="card-content">
				    <div className="media">
				      <div className="media-content">
				        <p className="subtitle is-6">johnsmith</p>
				      </div>
				    </div>
			 	 </div>
			  </div>
			  <div className="card">
				  <div className="card-image">
				    <figure className="image is-4by3">
				      <img src="http://placehold.it/300x225" alt="" />
				    </figure>
				  </div>
				  <div className="card-content">
				    <div className="media">
				      <div className="media-content">
				        <p className="subtitle is-6">johnsmith</p>
				      </div>
				    </div>
				    <div className="content">
				      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Phasellus nec iaculis mauris.
				      <br></br>
				      <small>11:09 PM - 1 Jan 2016</small>
				    </div>
			 	 </div>
			  </div>
			  <div className="card">
				  <div className="card-image">
				    <figure className="image is-4by3">
				      <img src="http://placehold.it/300x225" alt="" />
				    </figure>
				  </div>
				  <div className="card-content">
				    <div className="media">
				      <div className="media-content">
				        <p className="subtitle is-6">johnsmith</p>
				      </div>
				    </div>
				    <div className="content">
				      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Phasellus nec iaculis mauris.
				      <br></br>
				      <small>11:09 PM - 1 Jan 2016</small>
				    </div>
			 	 </div>
			  </div>
			</div>
		);
	}

});

module.exports = Board;