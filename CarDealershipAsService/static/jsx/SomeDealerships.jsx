import React from 'react';
import DealershipDetails from './DealershipDetails.jsx'

var SomeDealerships = React.createClass({

  getInitialState: function(){
    return ({
        droid : [],
        chosenDealership : null,
        comp : 'deal_name',
        asc : true,
        cursort : ""
    });
  },

  componentDidMount: function() {
    $.ajax({
      url: '/api/v1/showAllDealerships',
      dataType: 'json',
      cache: false,
      type:'POST',
      success: function(data) {
        this.setState({droid: data.ret});
        console.log("dealerships data received");
      }.bind(this),
      error: function() {
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
    var cenas = this.sorter(this.state.droid, tipo);
    if(tipo == this.state.cursort){
      if(this.state.asc != true){
        {this.setState({droid : cenas, asc : !this.state.asc, cursort : tipo})};
      }else{
        {this.setState({droid : cenas.reverse(), asc : !this.state.asc, cursort : tipo})};
      }    
    }else{
      {this.setState({droid : cenas, asc : true, cursort : tipo})};
    }

  },

  dealsClickHandler : function(tipo, e){
    {this.setState({chosenDealership : tipo})};
  },

  

  //tabela
  render: function() {
    console.log("render");
    return (
      <div>
        <h1>All Dealerships</h1>
        <table id="DealershipTable">
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h4><a onClick={this.handleClick.bind(null,'deal_name')}>Dealership</a> | <a onClick={this.handleClick.bind(null,'owner')}>Owner</a> | <a onClick={this.handleClick.bind(null,'location')}>Location</a></h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          {this.state.droid.map(function(deals) {
                            return (
                                <li onClick={this.dealsClickHandler.bind(null,deals.id)} key={deals.id}>
                                  {deals.deal_name} | {deals.owner} | {deals.location}
                                </li>
                            );
                          },this)}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  /*
  //lista simples
  render: function() {
    var dealershipNodes = this.state.droid.map(function(deals) {
      return (
          <li>
            <DealershipLine owner={deals.owner} key={deals.id}>
              {deals.deal_name}
            </DealershipLine>
          </li>
      );
    });
    return (
      <div>
        <ul>
          {dealershipNodes} 
        </ul>
      </div>
    );
  }

});*/
/*
//select dropdown
render: function() {
    var dealershipNodes = this.state.droid.map(function(deals) {
      return (
          <option value={deals.id} key={deals.id}>
            <DealershipLine owner={deals.owner}>
              {deals.deal_name}
            </DealershipLine>
          </option>
      );
    });
    return (
      <div>
        <select>
          {dealershipNodes} 
        </select>
      </div>
    );
  }

});*/



module.exports = SomeDealerships;