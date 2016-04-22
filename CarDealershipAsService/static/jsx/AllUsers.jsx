import React from 'react';
import Profile from './Profile.jsx';
import ProfileX from './ProfileX.jsx';

var AllUsers = React.createClass({
  getInitialState: function(){
    return ({
        droid : [],
        chosenUser : null
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

  handleClick : function(clickedID, e){
    {this.setState({chosenUser : clickedID})};
  },

  //tabela
  render: function() {
    return (
      <div>
        <table className="paddtop">
          <tbody>
            <tr>
              <td>
                <h1>All Users</h1>
              </td>
            </tr>
            <tr>
              <td>
                <ul>
                  {this.state.droid.map(function(users) {
                    return (
                        <li onClick={this.handleClick.bind(null,users.id)} key={users.id}>
                          {users.name} {users.email}
                        </li>
                    );
                  },this)}
                </ul>
              </td>
              <td>
                {(this.state.chosenUser!=null)? <ProfileX userType='client' id = {this.state.chosenUser} /> : <h1>Choose a User</h1>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

});


module.exports = AllUsers;