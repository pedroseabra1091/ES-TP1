import React from 'react';


var Profile = React.createClass({

	componentDidMount: function() {
		
		console.log('posta de porca');
		console.log(this.props.id);
	 	var data = {
	 		id : this.props.id,
	 		user : this.props.userType
	 	};

	 	$.ajax({
	  		type:"POST",
	  		url: "/api/v1/userInfo",
	  		contentType: 'application/json',
	  		dataType: "json",
	  		data: JSON.stringify(data),
        success:function(result){

        	$("p.userName").html(result.name).show();
        	$("p.contact").html(result.contact).show();
        },
        error:function(){
          console.log("error with ajax");
        }
      });
	},

	render: function() {
		return (
			<div className = "container">
				<div className = "column">
					<img src ="../../static/assets/user.png" />
					<p>{this.props.userType}</p>
					<p className = 'userName'></p>
					<p className = 'contact'></p>
				</div>
			</div>
			
		);
	}


});

module.exports = Profile;

