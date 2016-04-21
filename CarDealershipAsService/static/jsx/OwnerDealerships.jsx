import React from 'react';
import DealershipDetails from './DealershipDetails.jsx'
import ProfileXSettings from './ProfileXSettings.jsx'

var OwnerDealerships = React.createClass({
  getInitialState: function(){
    return ({
        droid : [],
        asc : true,
        chosenDealership: null,
        settings:false
    });
  },

  fetchDroid : function(something = false){
    var someData = { id : this.props.id};
    console.log(someData);
    $.ajax({
      url: '/api/v1/showOwnerDealerships',
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(someData),
     success: function(data) {
        this.setState({droid: data.ret, settings:something});
        console.log("owner dealerships data received");
      }.bind(this),
      error: function() {
        console.error('nooooooo');
      }.bind(this)
    });  
  },

  componentDidMount: function() {
    this.fetchDroid();
  },

  sorter : function(array, property){
    return array.sort(function(a,b){
      if(a[property] == b[property]){
        return 0;
      }
      return (a[property]<b[property])?-1:1;
    })
  },

  handleClick: function(tipo, e) {
    if(tipo == 'deal_name'){
      var cenas = this.sorter(this.state.droid, tipo);
      if(this.state.asc != true){
        {this.setState({droid : cenas, asc : !this.state.asc})};
      }else{
        {this.setState({droid : cenas.reverse(), asc : !this.state.asc})};
      }
    }else if(tipo =='settings'){
      {this.setState({settings : !this.state.settings})};
    }else if(tipo=='close_settings'){
      var temp = !this.state.settings;
      this.fetchDroid(temp);
      //{this.setState({settings : !this.state.settings})};
    }
    else{
      {this.setState({chosenDealership : tipo})}
    }
  },

  

  //tabela
  render: function() {
    return (
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="menu menu-dealership">
                    <div className="menu-label" onClick={this.handleClick.bind(null,'deal_name')}>My Dealerships</div>
                    <ul className="menu-list">
                      {this.state.droid.map(function(deals) {
                        return (
                            <li className="card-header-title" onClick = {this.handleClick.bind(null,deals.id)} key={deals.id}>
                              <a>{deals.deal_name}</a>
                            </li>
                        );
                      },this)}
                    </ul>
                  </div>
                </td>
                <td>
                  <div>
                    {this.state.chosenDealership != null ? 
                      (this.state.settings==false ?
                        <div>
                          <DealershipDetails dealID = {this.state.chosenDealership}/> 
                          <button className = "button centerize" onClick={this.handleClick.bind(null,'settings')} className="button is-danger is-large buttonmargin">Settings</button>
                        </div>
                        : 
                        <div>
                          <ProfileXSettings id={this.state.chosenDealership} userType='owner'/>
                          <button className = "button centerize" onClick={this.handleClick.bind(null,'close_settings')} className="button is-danger is-large buttonmargin">Close Settings</button>
                        </div>
                      )
                    : <h6>Choose a Dealership</h6>}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>    
    );
  }

});


module.exports = OwnerDealerships;