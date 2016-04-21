import React from 'react';

var SearchOptions = React.createClass({
	getInitialState : function(){
		return({
			chosenFuelType : 'all',
			chosenBrand : 'all',
			chosenModel : 'all',
			chosenPriceMin : 'all',
			chosenPriceMax : 'all',
			chosenLocation : 'all',
			listFuelTypes : [],
			listBrands : [],
			listModels : [],
			listLocations : [],
			carList : []
		});
	},

	fetch :function(someData){
	  	$.ajax({
	  		type:"POST",
	  		url: "/api/v1/searchSomeCars",
	  		contentType: 'application/json',
	  		dataType: "json",
	  		data: JSON.stringify(someData),
	      success:function(result){
	          {this.setState({
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
		var someData = {
			cft : this.state.chosenFuelType,
			cb : this.state.chosenBrand,
			cm : this.state.chosenModel,
			cpmin : this.state.chosenPriceMin,
			cpmax : this.state.chosenPriceMax,
			cl : this.state.chosenLocation
		}


		this.fetch(someData);
	},

	handleChange : function(type, event){
		if(type == 'fuelType'){
			{this.setState({chosenFuelType : event.target.value})};
		}else if(type=='brand'){
			{this.setState({chosenBrand : event.target.value})};
			var someData = {
				cft : this.state.chosenFuelType,
				cb : this.state.chosenBrand,
				cm : this.state.chosenModel,
				cpmin : this.state.chosenPriceMin,
				cpmax : this.state.chosenPriceMax,
				cl : this.state.chosenLocation
			}


			this.fetch(someData);

		}else if(type=='model'){
			{this.setState({chosenModel : event.target.value})};
		}else if(type=='location'){
			{this.setState({chosenLocation : event.target.value})};
		}else if(type=='pricemin'){
			{this.setState({chosenPriceMin : event.target.value})};
		}else if(type=='pricemax'){
			{this.setState({chosenPriceMax : event.target.value})};
		}

		console.log(event.target.value);

	},

	handleSubmit : function(e){
		e.preventDefault();

		var someData = {
			cft : this.state.chosenFuelType,
			cb : this.state.chosenBrand,
			cm : this.state.chosenModel,
			cpmin : this.state.chosenPriceMin,
			cpmax : this.state.chosenPriceMax,
			cl : this.state.chosenLocation
		}

		this.fetch(someData);
		console.log('Did submit!');
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
				<p key={item.id}>
					{item.brand}
				</p>
			);
		});


		return (
			<div>
				<aside className="menu menu-search">
					<form onSubmit={this.handleSubmit}>
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
						{this.state.chosenBrand == 'all' ?
							null
							:
							<div>
								<p className="menu-label">
									Model
								</p>
								<select onChange={this.handleChange.bind(null,'model')} value={this.state.chosenModel}>
									{availableModels}
								</select>
							</div>
						}
						<p className="menu-label">
							Price range
						</p>
						<p>
							Lower Limit
							<input className="input is-medium" type="text" value={this.state.chosenPriceMin} onChange={this.handleChange.bind(null,'pricemin')}/>
							Higher Limit
							<input className="input is-medium" type="text" value={this.state.chosenPriceMax} onChange={this.handleChange.bind(null,'pricemax')}/>
						</p>
						<p className="menu-label">
							District
						</p>
						<select onChange={this.handleChange.bind(null,'location')} value={this.state.location}>
							{availableLocations}
						</select>
						<button type="submit" >Search</button>
					</form>
				</aside>
				<div>
					<h3>Search Result</h3>
					{filteredCars}
				</div>
			</div>
		);
	}

});

module.exports = SearchOptions;