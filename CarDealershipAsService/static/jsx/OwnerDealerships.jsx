import React from 'react';

var OwnerDealerships = React.createClass({
  getInitialState: function(){
    return ({
        droid : [],
        comp : 'deal_name'
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

  sortDroid :function(a,b){
    //ordenar por nome da dealership
    if(this.state.comp=='deal_name'){
      if(a.deal_name == b.deal_name){
        return 0;
      }else{
        return (a.deal_name<b.deal_name)? -1 : 1;
      }      
    }/*else if(this.state.comp == 'owner'){
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
    }*/

  },

  handleClick: function(tipo, e) {
    if(tipo == 'Dealership'){
      {this.setState({comp:'deal_name'})};
    }/*else if(tipo == 'Owner'){
      {this.setState({comp:'owner'})};
    }else if(tipo == 'Location'){
      {this.setState({comp:'location'})};
    }*/
    var cenas = this.state.droid.sort(this.sortDroid);
    {this.setState({droid : cenas})};
  },

  

  //tabela
  render: function() {
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
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

});


module.exports = OwnerDealerships;