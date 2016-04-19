import React from 'react';
import DealershipLine from './DealershipLine.jsx'

var SomeDealerships = React.createClass({
  getInitialState: function(){
    return ({
        droid : [],
        comp : 'deal_name'/*,
        data : [{'id': 1 , 'owner': 'bruno','deal_name':'abc'},{ 'id' : 2, 'owner':'gui' , 'deal_name':'zxc'}]*/
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
        console.error('nooooooo');
      }.bind(this)
    });
  },

  sortDroid :function(a,b){
    //ordenar por nome da dealership
    if(this.state.comp=='deal_name'){
      if(a.deal_name == b.deal_name){
        return 0;
      }else{
        return (a.deal_name<b.deal_name)? -1 : 1;
      }      
    }else if(this.state.comp == 'owner'){
      if(a.owner == b.owner){
        return 0;
      }else{
        return (a.owner<b.owner)? -1 : 1;
      } 
    }else if(this.state.comp == 'location'){
      if(a.location == b.location){
        return 0;
      }else{
        return (a.location<b.location)? -1 : 1;
      } 
    }

  },

  handleClick: function(tipo, e) {
    if(tipo == 'Dealership'){
      {this.setState({comp:'deal_name'})};
    }else if(tipo == 'Owner'){
      {this.setState({comp:'owner'})};
    }else if(tipo == 'Location'){
      {this.setState({comp:'location'})};
    }
    var cenas = this.state.droid.sort(this.sortDroid);
    {this.setState({droid : cenas})};
  },

  

  //tabela
  render: function() {
    /*var dealershipNodes = this.state.droid.map(function(deals) {
      return (
          <li>
            {deals.deal_name}
          </li>
      );
    });*/
    return (
      <div>
        <table id="DealershipTable">
          <tbody>
            <tr>
              <td>
                <h4 onClick={this.handleClick.bind(null,'Dealership')}>Dealership</h4>
                <ul>
                  {this.state.droid.map(function(deals) {
                    return (
                        <li key={deals.id}>
                          <a>{deals.deal_name}</a>
                        </li>
                    );
                  },this)}
                </ul>
              </td>
              <td>
                <h4 onClick={this.handleClick.bind(null,'Owner')}>Owner</h4>
                <ul>
                  {this.state.droid.map(function(deals) {
                    return (
                        <li key={deals.id}>
                          <a>{deals.owner}</a>
                        </li>
                    );
                  },this)}
                </ul>
              </td>
              <td>
                <h4 onClick={this.handleClick.bind(null,'Location')}>Location</h4>
                <ul>
                  {this.state.droid.map(function(deals) {
                    return (
                        <li key={deals.id}>
                          <a>{deals.location}</a>
                        </li>
                    );
                  },this)}
                </ul>
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