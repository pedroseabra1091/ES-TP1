import React from 'react';
import DealershipDetails from './DealershipDetails.jsx'

var OwnerDealerships = React.createClass({
  getInitialState: function(){
    return ({
        droid : [],
        asc : true,
        chosenDealership: null
    });
  },

  componentDidMount: function() {
    var someData = { id : this.props.id};
    console.log(someData);

    $.ajax({
      url: '/api/v1/showOwnerDealerships',
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(someData),
      success: function(data) {
        this.setState({droid: data.ret});
        console.log("owner dealerships data received");
      }.bind(this),
      error: function() {
        console.error('nooooooo');
      }.bind(this)
    });
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
    }else{
      {this.setState({chosenDealership : tipo})}
    }
  },

  

  //tabela
  render: function() {
    return (
      <div>
        <table id="DealershipTable">
          <tbody>
            <tr>
              <td>
                <h4 onClick={this.handleClick.bind(null,'deal_name')}>My Dealerships</h4>
                <ul>
                  {this.state.droid.map(function(deals) {
                    return (
                        <li onClick = {this.handleClick.bind(null,deals.id)} key={deals.id}>
                          {deals.deal_name}
                        </li>
                    );
                  },this)}
                </ul>
              </td>
              <td>
                {this.state.chosenDealership != null ? <DealershipDetails dealID = {this.state.chosenDealership}/> : <h6>Choose a Dealership</h6>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

});


module.exports = OwnerDealerships;