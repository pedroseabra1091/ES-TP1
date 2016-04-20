import React from 'react';

var DealershipLine = React.createClass({
  render: function() {
    return (
      <h2>
        {this.props.owner}  {this.props.children}
      </h2>
    );
  }
});

module.exports = DealershipLine;