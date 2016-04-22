import React from 'react';
import CarDetails from './CarDetails.jsx';
import CarDetailedData from './CarDetailedData.jsx';
import CarDataSettings from './CarDataSettings.jsx';

var MyCars = React.createClass({

  getInitialState : function(){
		return({
			carList : [],
			dealershipList : [],
			showCards : true,
			activateCarSettings : false,
			car : []
		});
	},


  componentDidMount: function() {
    console.log("mounting...my cars");
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
        	 console.log('mounted');	
        	 console.log(result.all_cars);
	    	 this.setState({
	    	 	carList : result.all_cars, 
	    	 	dealershipList : result.owner_dealerships
	    	 });
        }.bind(this),
        error:function(){
          console.log("error with ajax");
        }
      });
  },

  sorter : function(array, property){
  	console.log("sorting on mycars...");
    return array.sort(function(a,b){
      if(a[property] == b[property]){
        return 0;
      }
      return (a[property]<b[property])?-1:1;
    })
  },

  handleClick: function(tipo,holder, e) {
  	console.log('[handling on mycars] tipo: '+tipo);
    var sorter_handler = this.sorter(this.state.carList, tipo);
    if(holder == 'highest'){
    	{this.setState({carList : sorter_handler.reverse()})};
    }
    else{
   		{this.setState({carList : sorter_handler})};
   	}
  },

  removeCard:function(cardObject,evt){
		this.setState({
			showCards : false,
			car : cardObject
		})
		
  },
  activateCarSettings:function(carObject,evt){
  	this.setState({
  		activateCarSettings : !this.state.activateCarSettings  
  	})
  },

  render: function() {
  	
		return (
			<div>
				{this.state.showCards ?
					<div>
						<div id = "card-container" className="column is-7 absoluted">
							{this.state.carList.map(function(item){
								return(
									<CarDetails clickHandler={this.removeCard.bind(null,item)} carInfo={item} key={item.id}/>
								);
							},this)}
						</div> 
						<div className="column is-3 is-offset-9">
							<aside className="menu menu-search left-search-menu">
							  <p className="menu-label">
							    Brand - Model - Fuel Type
							  </p>
							  <ul className="menu-list">
							    <li><a onClick = {this.handleClick.bind(null,'brand')}>Brand</a></li>
							    <li><a onClick = {this.handleClick.bind(null,'model')}>Model</a></li>
							    <li><a onClick = {this.handleClick.bind(null,'fuelType')}>Fuel Type</a></li>
							   </ul>
							  <p className="menu-label">
							    Price range
							  </p>
							  <ul className="menu-list">
							   	<li><a onClick = {this.handleClick.bind(null,'price','highest')}>Highest</a></li>
							   	<li><a onClick = {this.handleClick.bind(null,'price','lowest')}>Lowest</a></li>
							  </ul>
							   <p className="menu-label">
							    Mileage
							  </p>
							  <ul className="menu-list">
							  	<li><a onClick = {this.handleClick.bind(null,'mileage','highest')}>Highest</a></li>
							  	<li><a onClick = {this.handleClick.bind(null,'mileage','lowest')}>Lowest</a></li>
							  </ul>
							</aside>
						</div>
					</div>
					: 
					<div>
						{this.state.activateCarSettings ? 
							<CarDetailedData clickHandler={this.activateCarSettings} car={this.state.car} />
							:
							<CarDataSettings clickHandler={this.activateCarSettings} id={this.props.id} car={this.state.car} dealerships={this.state.dealershipList}  />
						}
					</div>
				}
			</div>  
		);
	}
});

module.exports = MyCars;