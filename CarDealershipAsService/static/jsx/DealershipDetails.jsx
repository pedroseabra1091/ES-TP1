import React from 'react';

var DealershipDetails = React.createClass({
	getInitialState : function(){
		return ({
			dealName : "",
			dealOwner : "",
			dealLocation : "",
			dealContact : "",
		});
	},

	fetch : function(someData){
		$.ajax({
	      url: '/api/v1/dealershipDetails',
	      dataType: 'json',
	      contentType: 'application/json',
	      type: 'POST',
	      data: JSON.stringify(someData),
	      success: function(data) {
	        this.setState({dealName: data.name, dealOwner: data.owner, dealLocation: data.location, dealContact: data.contact});
	        console.log("[Dealershipetails]owner dealership details received");
	      }.bind(this),
	      error: function() {
	        console.error('nooooooo');
	      }.bind(this)
	    });
	},

	componentWillReceiveProps : function(nextProps){
		var someData = {dealID : nextProps.dealID};
		this.fetch(someData);
	},

	componentDidMount : function(){
		var someData = {dealID : this.props.dealID};
		this.fetch(someData);
	},

	render : function(){
		return(
			<div className = "details">
				<h4>Dealership Details</h4>
				<br/>
				<h6>Dealership ID : {this.props.dealID}</h6>
				<h6>Name : {this.state.dealName}</h6>
				<h6>Location : {this.state.dealLocation}</h6>
				<h6>Owner : {this.state.dealOwner}</h6>
				<h6>Contact : {this.state.dealContact}</h6>
			</div>
		)
	}
})


module.exports = DealershipDetails;