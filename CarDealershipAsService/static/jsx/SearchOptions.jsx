import React from 'react';
import CarDetails from './CarDetails.jsx';

var SearchOptions = React.createClass({
	getInitialState : function(){
		return({
			chosenFuelType : 'all',
			chosenBrand : 'all',
			chosenModel : 'all',
			chosenPriceMin : 0,
			chosenPriceMax : 0,
			chosenKmMin : 0,
			chosenKmMax : 0,
			chosenLocation : 'all',
			listFuelTypes : [],
			listBrands : [],
			listModels : [],
			listLocations : [],
			carList : []
		});
	},

	fetch :function(someData){
		console.log("fetching");
	  	$.ajax({
	  		type:"POST",
	  		url: "/api/v1/searchSomeCars",
	  		contentType: 'application/json',
	  		dataType: "json",
	  		data: JSON.stringify(someData),
	      success:function(result){
			{this.setState({
				chosenFuelType : someData.cft,
				chosenBrand : someData.cb,
				chosenModel : someData.cm,
				chosenLocation : someData.cl,
				chosenPriceMin : someData.cpmin,
				chosenPriceMax : someData.cpmax,
				carList : result.carList,
				listFuelTypes : result.fuelList,
				listBrands : result.brandsList,
				listModels : result.modelsList,
				listLocations: result.locationsList
			})};
	      }.bind(this),
	      error:function(result){
	      	console.log('Error connecting to the server');
	      }.bind(this)
	    });
	},

	componentDidMount : function(){
		console.log("did mount");
		var someData = {
			cft : this.state.chosenFuelType,
			cb : this.state.chosenBrand,
			cm : this.state.chosenModel,
			cpmin : this.state.chosenPriceMin,
			cpmax : this.state.chosenPriceMax,
			cl : this.state.chosenLocation,
			kmmin : this.state.chosenKmMin,
			kmmax : this.state.chosenKmMax
		}


		this.fetch(someData);
	},

	handleChange : function(type, event){
		console.log("handling change");
		var someData = {
				cft : this.state.chosenFuelType,
				cb : this.state.chosenBrand,
				cm : this.state.chosenModel,
				cpmin : this.state.chosenPriceMin,
				cpmax : this.state.chosenPriceMax,
				cl : this.state.chosenLocation,
				kmmin : this.state.chosenKmMin,
				kmmax : this.state.chosenKmMax
			}
		if(type == 'fuelType'){
			someData.cft = event.target.value;
		}else if(type=='brand'){
			someData.cb = event.target.value;
			someData.cm = 'all';
		}else if(type=='model'){
			someData.cm = event.target.value;
		}else if(type=='location'){
			someData.cl = event.target.value;
		}else if(type=='pricemin'){
			someData.cpmin = event.target.value;
		}else if(type=='pricemax'){
			someData.cpmax = event.target.value;
		}else if(type=='kmmin'){
			someData.kmmin = event.target.value;
		}else if(type=='kmmax'){
			someData.kmmax = event.target.value;
		}

		this.fetch(someData);
	},

	render: function() {
		var availableFuelTypes = this.state.listFuelTypes.map(function(item){
			return (
				<option value={item.name} key={item.name}>
					{item.name}
				</option>
			);
		});

		var availableBrands = this.state.listBrands.map(function(item){
			return (
				<option value={item.name} key={item.name}>
					{item.name}
				</option>
			);
		});

		var availableModels = this.state.listModels.map(function(item){
			return (
				<option value={item.name} key={item.name}>
					{item.name}
				</option>
			);
		});		

		var availableLocations = this.state.listLocations.map(function(item){
			return (
				<option value={item.name} key={item.name}>
					{item.name}
				</option>
			);
		});

		var filteredCars = this.state.carList.map(function(item){
			return (
				<CarDetails carInfo={item} key={item.id}/>
			);
		});

		return (
			<div className="columns">
				<div className="column is-one-quarter">
					<aside className="menu menu-search">
						<p className="menu-label">
						Fuel Type
						</p>
						<select onChange={this.handleChange.bind(null,'fuelType')} value={this.state.chosenFuelType}>
							{availableFuelTypes}
						</select>
						<p className="menu-label">
							Brand
						</p>
						<select onChange={this.handleChange.bind(null,'brand')} value={this.state.chosenBrand}>
							{availableBrands}
						</select>
						<p className="menu-label">
							Model
						</p>
						<select onChange={this.handleChange.bind(null,'model')} value={this.state.chosenModel}>
							{availableModels}
						</select>
						<p className="menu-label">
							Price range
						</p>
						<p>
							Lower Limit
							<input className="input is-medium" type="number" min="0" placeholder={this.state.chosenPriceMin} onChange={this.handleChange.bind(null,'pricemin')}/>
							Higher Limit
							<input className="input is-medium" type="number" min="0" placeholder={this.state.chosenPriceMax} onChange={this.handleChange.bind(null,'pricemax')}/>
						</p>
						<p className="menu-label">
							Mileage
						</p>
						<p>
							Lower Km Limit 
							<input className="input is-medium" type="number" min="0" placeholder={this.state.chosenKmMin} onChange={this.handleChange.bind(null,'kmmin')}/>
							Higher Km Limit
							<input className="input is-medium" type="number" min="0" placeholder={this.state.chosenKmMax} onChange={this.handleChange.bind(null,'kmmax')}/>
						</p>
						<p className="menu-label">
							District
						</p>
						<select onChange={this.handleChange.bind(null,'location')} value={this.state.location}>
							{availableLocations}
						</select>
					</aside>
				</div>
				<div className="column">
					<h3>Search Result</h3>
					{filteredCars}
				</div>
			</div>
		);
	}

});

module.exports = SearchOptions;