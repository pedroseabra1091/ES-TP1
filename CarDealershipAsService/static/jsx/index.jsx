import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Body from './Body.jsx';


var MainClass = React.createClass ({ 
  render: function(){
    return(
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
});

const app = document.getElementById('app');
ReactDOM.render(<MainClass/>,app);
