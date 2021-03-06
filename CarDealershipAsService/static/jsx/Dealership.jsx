import React from 'react';

import CarForm from './CarForm.jsx';
import DealershipForm from './DealershipForm.jsx';
import Search from './Search.jsx';
import MyCars from './MyCars.jsx';
import SomeDealerships from './SomeDealerships.jsx';
import OwnerDealerships from './OwnerDealerships.jsx';

var Dealership = React.createClass({

	getInitialState: function(){
	    return ({
	        create : false,
	        myDealership : false,
	        otherDealerships : false,
	        viewCars: false, 
	        addCar: false
	    });
	},

	handleClick: function(type,e){
		console.log("handling...type: " + type);
		if(type == 'Create'){
			this.setState({create : true}),
	        this.setState({myDealership : false}),
	        this.setState({otherDealerships : false}),
	        this.setState({viewCars: false}), 
	        this.setState({addCar: false})
		}
		else if(type == 'MyDealership'){ 
			this.setState({create : false}),
	        this.setState({myDealership : true}),
	        this.setState({otherDealerships : false}),
	        this.setState({viewCars: false}), 
	        this.setState({addCar: false})
		}
		else if(type == 'OtherDealership'){
			this.setState({create : false}),
	        this.setState({myDealership : false}),
	        this.setState({otherDealerships : true}),
	        this.setState({viewCars: false}), 
	        this.setState({addCar: false})
		}
		else if(type == 'ViewCars'){
			console.log('entrei view cars');
			this.setState({create : false}),
	        this.setState({myDealership : false}),
	        this.setState({otherDealerships : false}),
	        this.setState({viewCars: true}), 
	        this.setState({addCar: false})
		}
		else if(type == 'AddCar'){
			this.setState({create : false}),
	        this.setState({myDealership : false}),
	        this.setState({otherDealerships : false}),
	        this.setState({viewCars: false}), 
	        this.setState({addCar: true})
		}
		else
			console.log('unknown click');
	},

	render: function() {
		console.log("rendering....");
		return (
			<div className="columns">
			  <div className="column is-3">
			    <aside className="menu menu-dealership">
				  <p className="menu-label">
				    Dealership actions
				  </p>
				  <ul className="menu-list">
				    <li  onClick = {this.handleClick.bind(null,'Create')}><a>Create dealership</a></li>
				    <li  onClick = {this.handleClick.bind(null,'MyDealership')}><a>View my dealerships</a></li>
				    <li  onClick = {this.handleClick.bind(null,'OtherDealership')}><a>Other dealerships</a></li>
				    <li  onClick = {this.handleClick.bind(null,'ViewCars')}><a>View my cars</a></li>
				    <li  onClick = {this.handleClick.bind(null,'AddCar')}><a>Add a new car</a></li>
				  </ul>
				</aside>
			  </div>
			  <div className = "column">
		  		{this.state.create ? <DealershipForm id = {this.props.id}  /> : null}
			 	{this.state.myDealership ? <OwnerDealerships id={this.props.id} /> : null}
				{this.state.otherDealerships ? <SomeDealerships /> : null}
				{this.state.viewCars ? <MyCars id = {this.props.id} /> : null}
				{this.state.addCar ? <CarForm  id = {this.props.id} /> : null}
				{this.props.children}
			  </div>
			</div>
		);
	}

});

module.exports = Dealership;