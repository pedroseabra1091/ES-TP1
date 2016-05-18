import React from 'react';

var CarDetailedData = React.createClass({

	render: function() {
		var styles = {
			color: "black"
		};

		return (
			<div className = "container">
				<div className="columns">
					<div className = "column rightrize">
						<img src ="../../static/assets/user.png" />
						<p className = 'userName'></p>
					</div>
					<div className = "column paddtop-profile">
						<p className=" userParams inlinelocked">Dealership Name</p>
						<p className="userProps inlinelocked">{this.props.car.dealership_name}</p>
						<br></br>
						<p className=" userParams inlinelocked">Brand</p>
						<p className="userProps inlinelocked">{this.props.car.brand}</p>
						<br></br>
						<p className="userParams inlinelocked">Model</p>
						<p className = "email userData inlinelocked">{this.props.car.model}</p>
						<br></br>
						<p className="userParams inlinelocked">Color</p>
						<p className = "email userData inlinelocked">{this.props.car.color}</p>
						<br></br>
							<p className="userParams inlinelocked">Fuel Type</p>
						<p className = "email userData inlinelocked">{this.props.car.fuelType}</p>
						<br></br>
							<p className="userParams inlinelocked">Plate</p>
						<p className = "email userData inlinelocked">{this.props.car.plate}</p>
						<br></br>
							<p className="userParams inlinelocked">Price</p>
						<p className = "email userData inlinelocked">{this.props.car.price}</p>
						<br></br>
							<p className="userParams inlinelocked">year</p>
						<p className = "email userData inlinelocked">{this.props.car.year}</p>
						<br></br>
					</div>
				</div>
				<div className = "centerize">
					<button onClick={this.props.clickHandler} className="button" style={styles} className="button is-danger is-large buttonmargin">Settings</button>
				</div>
			</div>
		);
	}

});

module.exports = CarDetailedData;