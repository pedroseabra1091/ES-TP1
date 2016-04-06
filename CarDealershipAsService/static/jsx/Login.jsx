import React from 'react';

var Login = React.createClass({

	render: function() {
		return (
			<div className = "container">
				<div className = "column login">
					<form>
						<label className="label">Email</label>
						<input className="input is-medium" type="text"/>
						<label className="label">Password</label>
						<input className="input is-medium" type="password"/>
						<div className="centerize paddtop">
  						  <button type="submit" className="button is-info is-large">Register</button>
             			</div>  
					</form>
				</div>
			</div>
		);
	}

});

module.exports = Login;