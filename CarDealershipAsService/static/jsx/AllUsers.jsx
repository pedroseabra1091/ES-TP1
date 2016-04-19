import React from 'react';

var AllUsers = React.createClass({
  getInitialState: function(){
    return ({
        droid : []
    });
  },

  componentDidMount: function() {
    $.ajax({
      url: '/api/v1/allUsers',
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      success: function(data) {
        this.setState({droid: data.ret});
        console.log("all users data received");
      }.bind(this),
      error: function() {
        console.error('nooooooo');
      }.bind(this)
    });
  },

  //tabela
  render: function() {
    return (
      <div>
        <h1>All Users</h1>
          <ul>
            {this.state.droid.map(function(users) {
              return (
                  <li key={users.id}>
                    {users.name} {users.email}
                  </li>
              );
            },this)}
          </ul>
      </div>
    );
  }

});


module.exports = AllUsers;